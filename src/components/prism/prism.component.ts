import {
	Component,
	ElementRef,
	Input,
	AfterViewInit,
	ChangeDetectionStrategy,
} from '@angular/core';
import {highlight, languages} from 'prismjs';

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
	@Input() code: string;
	@Input() language = 'javascript';
	constructor(private el: ElementRef) {}
	ngAfterViewInit() {
		const code = this.code || this.el.nativeElement.innerText;
		const grammar = languages[this.language];
		let lines = this.el.nativeElement.innerText.split('\n');
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
		const html = highlight(lines.join('\n'), grammar, this.language);
		this.el.nativeElement.innerHTML = html;
	}
}
