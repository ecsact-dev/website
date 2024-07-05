import {CommonModule, NgTemplateOutlet} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RouterLink, RouterModule} from '@angular/router';

@Component({
	selector: '[moduleBlock]',
	templateUrl: 'runtime-module-block.component.html',
	standalone: true,
	imports: [RouterModule, CommonModule],
})
export class RuntimeModuleBlock {
	@Input('moduleBlock')
	moduleName: string = '';
}

@Component({
	templateUrl: 'runtime.component.html',
	styleUrls: ['runtime.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	standalone: true,
	imports: [RouterLink, NgTemplateOutlet, RuntimeModuleBlock],
})
export class RuntimeComponent {}
