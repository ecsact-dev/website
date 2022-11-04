import {
	Component,
	ElementRef,
	Input,
	AfterViewInit,
	ChangeDetectionStrategy,
} from '@angular/core';
import {highlight, languages} from 'prismjs';

import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-wasm';
import 'prismjs/components/prism-powershell';
import 'prismjs/components/prism-uri';

function getPrefixWhitespace(str: string): string {
	const firstNonWhitespaceIndex = str.search(/\S/);
	if (firstNonWhitespaceIndex === -1) return '';
	return str.substring(0, firstNonWhitespaceIndex);
}

@Component({
	selector: '[prism]',
	preserveWhitespaces: true,
	templateUrl: './prism.component.html',
	styleUrls: ['./prism.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrismComponent implements AfterViewInit {
	private _language: string;
	get language(): string {
		return this._language;
	}
	@Input()
	set language(value: string) {
		this.hostEl.nativeElement.classList.remove(`language-${this._language}`);
		this._language = value;
		this.hostEl.nativeElement.classList.add(`language-${this._language}`);
	}

	constructor(private hostEl: ElementRef<HTMLElement>) {}

	ngAfterViewInit() {
		const grammar = languages[this.language];
		let lines = this.hostEl.nativeElement.innerText.split('\n');
		while (!lines[0].trim()) {
			lines.shift();
		}
		while (!lines[lines.length - 1].trim()) {
			lines.pop();
		}
		const linesCount = lines.length;

		let smallestPrefixWhitespace = getPrefixWhitespace(lines[0] || '');
		for (let i = 1; linesCount > i; ++i) {
			if (!lines[i].trim()) continue;
			const wsPrefix = getPrefixWhitespace(lines[i]);
			if (wsPrefix.length < smallestPrefixWhitespace.length) {
				smallestPrefixWhitespace = wsPrefix;
			}
		}

		if (smallestPrefixWhitespace.length > 0) {
			lines = lines.map(line =>
				line.substring(smallestPrefixWhitespace.length),
			);
		}

		this.hostEl.nativeElement.innerHTML = highlight(
			lines.join('\n'),
			grammar,
			this.language,
		);
	}
}
