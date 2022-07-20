import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

const DEFINE_COMPONENT_SAMPLE_01 = `
package example;

component Position {
	int32 x;
	int32 y;
}
`.trim();

const SYNTAX_SAMPLE_01 = `
statement;
statement {
	statement;
	statement {
		statement;
	}
}
`.trim();

const SYNTAX_SAMPLE_02 = `
statement;
statement {}
`.trim();

const SYNTAX_COMMENT_SAMPLE = `
// This line is a comment
/*
This entire block across multiple
lines is a comment.
*/
`.trim();

const TOP_LEVEL_STATEMENTS_EXAMPLE = `
// 1. Package
main package my.example;

// 2. Imports
import other.example;
import fancy;

// 3. Everything else
component MyExampleComponent { /* ... */ }
system MyExampleSystem { /* ... */ }
action MyExampleAction { /* ... */ }
`.trim();

@Component({
	templateUrl: './lang.component.html',
	styleUrls: ['./lang.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	preserveWhitespaces: false,
})
export class LangComponent implements OnInit {
	readonly DEFINE_COMPONENT_SAMPLE_01 = DEFINE_COMPONENT_SAMPLE_01;
	readonly SYNTAX_SAMPLE_01 = SYNTAX_SAMPLE_01;
	readonly SYNTAX_SAMPLE_02 = SYNTAX_SAMPLE_02;
	readonly SYNTAX_COMMENT_SAMPLE = SYNTAX_COMMENT_SAMPLE;
	readonly TOP_LEVEL_STATEMENTS_EXAMPLE = TOP_LEVEL_STATEMENTS_EXAMPLE;

	ngOnInit(): void {}
}
