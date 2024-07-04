// TODO: enable ts in this file again
// @ts-nocheck

import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	ViewChild,
	ElementRef,
	ChangeDetectorRef,
} from '@angular/core';
import {NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

export enum EcsactWasmImportValidationCode {
	Ok = 'Ok',
	NonFunction = 'NonFunction',
	UnknownImportName = 'UnknownImportName',
}

export interface EcsactWasmImportPreview {
	descriptor: WebAssembly.ModuleImportDescriptor;
	validationCode: EcsactWasmImportValidationCode;
}

export enum EcsactWasmExportValidationCode {
	Ok = 'Ok',
	NonFunction = 'NonFunction',
	InvalidSignature = 'InvalidSignature',
}

export interface EcsactWasmExportPreview {
	descriptor: WebAssembly.ModuleExportDescriptor;
	validationCode: EcsactWasmExportValidationCode;
}

export interface EcsactWasmModulePreviewItem {
	name: string;
	imports: EcsactWasmImportPreview[];
	exports: EcsactWasmExportPreview[];
}

function toExportPreview(descriptor: WebAssembly.ModuleExportDescriptor) {
	let validationCode = EcsactWasmExportValidationCode.Ok;
	if (descriptor.kind !== 'function') {
		validationCode = EcsactWasmExportValidationCode.NonFunction;
	}
	return {descriptor, validationCode};
}

function toImportPreview(descriptor: WebAssembly.ModuleImportDescriptor) {
	const prefix = 'ecsact_system_execution_context_';
	let validationCode = EcsactWasmImportValidationCode.Ok;

	if (descriptor.name.indexOf(prefix) != 0) {
		validationCode = EcsactWasmImportValidationCode.UnknownImportName;
	} else if (descriptor.kind !== 'function') {
		validationCode = EcsactWasmImportValidationCode.NonFunction;
	}

	return {descriptor, validationCode};
}

@Component({
	selector: 'ecsact-wasm-system-impl-validator',
	templateUrl: './ecsact-wasm-system-impl-validator.component.html',
	styleUrls: ['./ecsact-wasm-system-impl-validator.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
})
export class EcsactWasmSystemImplValidatorComponent implements OnInit {
	@ViewChild('fileInput', {static: true})
	fileInput?: ElementRef<HTMLInputElement>;

	previewModules: EcsactWasmModulePreviewItem[] = [];

	constructor(private cdr: ChangeDetectorRef) {}

	ngOnInit(): void {}

	onFileInput(ev: any) {
		this.previewModules = [];

		const files = this.fileInput!.nativeElement.files;
		const promises: Promise<void>[] = [];

		for (const file of Array.from(files)) {
			this.previewModules.push({
				name: file.name,
				exports: [],
				imports: [],
			});

			const item = this.previewModules[this.previewModules.length - 1];

			promises.push(
				file.arrayBuffer().then(buffer => {
					return WebAssembly.compile(buffer).then(wasmModule => {
						item.imports =
							WebAssembly.Module.imports(wasmModule).map(toImportPreview);
						item.exports =
							WebAssembly.Module.exports(wasmModule).map(toExportPreview);

						const fauxImportFns: any = {};

						for (const imp of item.imports) {
							if (imp.descriptor.kind === 'function') {
								fauxImportFns[imp.descriptor.name] = function () {};
							}
						}

						WebAssembly.instantiate(wasmModule, {
							env: {
								...fauxImportFns,
							},
						}).then(inst => {
							for (const wasmExportName in inst.exports) {
								for (const preview of item.exports) {
									if (preview.descriptor.name === wasmExportName) {
										const wasmExport = inst.exports[wasmExportName];
										if (typeof wasmExport === 'function') {
											if (wasmExport.length !== 1) {
												preview.validationCode =
													EcsactWasmExportValidationCode.InvalidSignature;
												this.cdr.detectChanges();
											} else {
												try {
													let result = wasmExport(0);
													if (typeof result !== 'undefined') {
														preview.validationCode =
															EcsactWasmExportValidationCode.InvalidSignature;
														this.cdr.detectChanges();
													}
												} catch (err) {
													console.error('Invocation error:', err);
													console.error('Invocation error name:', err.name);
												}
											}
										}
										break;
									}
								}
							}
						});
					});
				}),
			);

			Promise.all(promises)
				.then(() => {
					this.cdr.detectChanges();
				})
				.catch(err => {
					console.error(err);
					this.cdr.detectChanges();
				});
		}
	}
}
