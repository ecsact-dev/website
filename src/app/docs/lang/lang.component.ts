import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink} from '@angular/router';
import {EcsactLangSyntaxComponent} from '../../../components/ecsact-lang-syntax/ecsact-lang-syntax.component';

@Component({
	templateUrl: './lang.component.html',
	styleUrls: ['./lang.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [EcsactLangSyntaxComponent, RouterLink],
})
export class LangComponent implements OnInit {
	ngOnInit(): void {}
}
