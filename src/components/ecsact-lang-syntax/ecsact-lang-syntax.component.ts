import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	AfterViewInit,
	ElementRef,
	HostBinding,
} from '@angular/core';
import {languages, highlight} from 'prismjs';

languages.ecsact = {
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],;]/,
	comment: {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true,
	},
	keyword: {
		pattern: /package|main|import/,
	},
	function: {
		pattern:
			/required|readonly|readwrite|readonly|optional|adds|removes|include|exclude|with/,
	},
	variable: {
		pattern: /(i8|u8|i16|u16|i32|u32|bool|f32|entity)\s+[A-Za-z_]+/,
		lookbehind: true,
	},
	'ecsact-type-name': {
		pattern: /((component|system|action|enum|transient)\s+)[A-Za-z0-9]*\s*{?/,
		inside: {
			keyword: {
				pattern: /component|system|action|enum|transient/,
			},
			'class-name': {
				pattern: /[A-Za-z0-9]+/,
			},
		},
	},
	'ecsact-with-field-name': {
		pattern: /(((with)\s+)+)[A-Za-z_]+/,
		lookbehind: true,
		greedy: true,
		alias: ['variable'],
	},
	'ecsact-system-component-name': {
		pattern: /((readwrite|readonly|exclude|include|adds|removes)\s+)[A-Za-z]+/,
		lookbehind: true,
		greedy: true,
		alias: ['class-name'],
	},
	builtin: {
		pattern: /i8|u8|i16|u16|i32|u32|bool|f32|entity/,
	},
	italic: {
		pattern: /statement/,
	},
};

function getPrefixWhitespace(str: string): string {
	const firstNonWhitespaceIndex = str.search(/\S/);
	if (firstNonWhitespaceIndex === -1) return '';
	return str.substring(0, firstNonWhitespaceIndex);
}

@Component({
	selector: 'code[ecsactLangSyntax]',
	templateUrl: './ecsact-lang-syntax.component.html',
	styleUrls: ['./ecsact-lang-syntax.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
})
export class EcsactLangSyntaxComponent implements AfterViewInit {
	@HostBinding('attr.language')
	readonly language = 'ecsact';

	constructor(private hostEl: ElementRef<HTMLElement>) {
		this.hostEl.nativeElement.classList.add('language-ecsact');
	}

	ngAfterViewInit(): void {
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
			languages.ecsact,
			'ecsact',
		);
	}
}
