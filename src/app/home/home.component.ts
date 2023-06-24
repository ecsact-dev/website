import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	HostListener,
	OnDestroy,
	OnInit,
	ViewChild,
} from '@angular/core';

import {MediaMatcher} from '@angular/cdk/layout';

function makeRadialGradient(...args: string[]): string {
	return `radial-gradient(${args.join(', ')})`;
}

@Component({
	templateUrl: 'home.component.html',
	styleUrls: ['home.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
	readonly scrollDuration = 90000;

	/// NOTE: This list of functions is not supposed to be exhaustive. Just to
	/// demonstrate a variety of functions available.
	readonly runtimeMethods = [
		'ecsact_execute_systems',
		'ecsact_create_registry',
		'ecsact_create_entity',
		'ecsact_has_component',
		'ecsact_get_component',
		'ecsact_destroy_registry',
		'ecsact_clear_registry',
		'ecsact_ensure_entity',
		'ecsact_entity_exists',
		'ecsact_destroy_entity',
		'ecsact_count_entities',
		'ecsact_get_entities',
		'ecsact_add_component',
		'ecsact_count_components',
		'ecsact_get_components',
		'ecsact_each_componens',
		'ecsact_update_component',
		'ecsact_remove_component',
		'ecsact_async_enqueue_execution_options',
		'ecsact_async_flush_events',
		'ecsact_async_connect',
		'ecsact_async_disconnect',
		'ecsact_system_execution_context_action',
		'ecsact_system_execution_context_add',
		'ecsact_system_execution_context_remove',
		'ecsact_system_execution_context_get',
		'ecsact_system_execution_context_update',
		'ecsact_system_execution_context_has',
		'ecsact_system_execution_context_generate',
		'ecsact_system_execution_context_parent',
		'ecsact_system_execution_context_same',
		'ecsact_system_execution_context_other',
		'ecsact_system_execution_context_entity',
		'ecsact_system_execution_context_id',
		'ecsact_create_package',
		'ecsact_set_package_source_file_path',
		'ecsact_add_dependency',
		'ecsact_remove_dependency',
		'ecsact_destroy_package',
		'ecsact_create_system',
		'ecsact_set_system_lazy_iteration_rate',
		'ecsact_add_child_system',
		'ecsact_remove_child_system',
		'ecsact_reorder_system',
		'ecsact_set_system_execution_impl',
		'ecsact_create_action',
		'ecsact_create_component',
		'ecsact_create_transient',
		'ecsact_add_field',
		'ecsact_remove_field',
		'ecsact_destroy_component',
		'ecsact_destroy_transient',
		'ecsact_create_enum',
		'ecsact_destroy_enum',
		'ecsact_add_enum_value',
		'ecsact_remove_enum_value',
		'ecsact_set_system_capability',
		'ecsact_unset_system_capability',
		'ecsact_set_system_association_capability',
		'ecsact_unset_system_association_capability',
		'ecsact_add_system_generates',
		'ecsact_remove_system_generates',
		'ecsact_system_generates_set_component',
		'ecsact_system_generates_unset_component',
		'ecsact_meta_count_packages',
		'ecsact_meta_get_package_ids',
		'ecsact_meta_package_name',
		'ecsact_meta_main_package',
		'ecsact_meta_package_file_path',
		'ecsact_meta_count_dependencies',
		'ecsact_meta_get_dependencies',
		'ecsact_meta_count_components',
		'ecsact_meta_get_component_ids',
		'ecsact_meta_count_transients',
		'ecsact_meta_get_transient_ids',
		'ecsact_meta_count_fields',
		'ecsact_meta_get_field_ids',
		'ecsact_meta_field_name',
		'ecsact_meta_field_type',
		'ecsact_meta_field_offset',
		'ecsact_meta_count_systems',
		'ecsact_meta_get_system_ids',
		'ecsact_meta_count_actions',
		'ecsact_meta_get_action_ids',
		'ecsact_meta_count_enums',
		'ecsact_meta_get_enum_ids',
		'ecsact_meta_enum_storage_type',
		'ecsact_meta_count_enum_values',
		'ecsact_meta_get_enum_value_ids',
		'ecsact_meta_enum_name',
		'ecsact_meta_enum_value_name',
		'ecsact_meta_enum_value',
		'ecsact_meta_registry_name',
		'ecsact_meta_component_name',
		'ecsact_meta_transient_name',
		'ecsact_meta_action_name',
		'ecsact_meta_system_name',
		'ecsact_meta_system_capabilities_count',
		'ecsact_meta_system_capabilities',
		'ecsact_meta_system_association_fields_count',
		'ecsact_meta_system_association_fields',
		'ecsact_meta_system_association_capabilities_count',
		'ecsact_meta_system_association_capabilities',
		'ecsact_meta_count_system_generates_ids',
		'ecsact_meta_system_generates_ids',
		'ecsact_meta_count_system_generates_components',
		'ecsact_meta_system_generates_components',
		'ecsact_meta_decl_full_name',
		'ecsact_meta_count_child_systems',
		'ecsact_meta_get_child_system_ids',
		'ecsact_meta_get_parent_system_id',
		'ecsact_meta_count_top_level_systems',
		'ecsact_meta_get_top_level_systems',
	] as const;

	@ViewChild('logoMask')
	logoMask: ElementRef<HTMLDivElement>;

	@ViewChild('logoOutlineMask')
	logoOutlineMask: ElementRef<HTMLDivElement>;

	private readonly _noHoverQueryList: MediaQueryList;

	constructor(mediaMatch: MediaMatcher) {
		this._noHoverQueryList = mediaMatch.matchMedia('(hover: none)');
	}

	@HostListener('window:mousemove', ['$event'])
	onMouseMove(ev: MouseEvent) {
		if (this._noHoverQueryList.matches) return;

		const logoMaskEl = this.logoMask.nativeElement;
		const logoOutlineMaskEl = this.logoOutlineMask.nativeElement;

		const windowWidth = window.innerWidth;
		const windowHeight = window.innerHeight;
		const mouseXpercentage = Math.round((ev.pageX / windowWidth) * 100);
		const mouseYpercentage = Math.round((ev.pageY / windowHeight) * 100);

		logoMaskEl.style.background = makeRadialGradient(
			`at ${mouseXpercentage}% ${mouseYpercentage}%`,
			`var(--color-secondary)`,
			`var(--color-primary-bright)`,
		);

		logoOutlineMaskEl.style.background = makeRadialGradient(
			`at ${mouseXpercentage}% ${mouseYpercentage}%`,
			`#000000`,
			`var(--color-secondary)`,
		);
	}
}
