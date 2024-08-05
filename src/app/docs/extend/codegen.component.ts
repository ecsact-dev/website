import {Component} from '@angular/core';
import {PrismComponent} from '../../../components/prism/prism.component';
import {RouterLink} from '@angular/router';

@Component({
	templateUrl: './codegen.component.html',
	standalone: true,
	imports: [PrismComponent, RouterLink],
})
export class ExtendCodegenComponent {
	readonly known_sdk_plugins = [
		{
			href: 'https://github.com/ecsact-dev/ecsact_lang_cpp/tree/main/cpp_header_codegen',
			title: 'General C++ header',
			description: 'Generates structs for components and systems.',
		},
		{
			href: 'https://github.com/ecsact-dev/ecsact_lang_cpp/tree/main/systems_header_codegen',
			title: 'C Systems Header',
			description:
				'Generates a header with Ecsact system function declarations.',
		},
		{
			href: 'https://github.com/ecsact-dev/ecsact_lang_cpp/tree/main/cpp_systems_header',
			title: 'C++ systems header',
			description:
				'Generates convenient C++ wrappers around the C system implementations.',
		},
		{
			href: 'https://github.com/ecsact-dev/ecsact_lang_cpp/tree/main/cpp_systems_header',
			title: 'C++ systems source',
			description:
				'The implementation the C system implementations for the C++ systems header plugin.',
		},
		{
			href: 'https://github.com/ecsact-dev/ecsact_lang_csharp/tree/main/csharp_codegen',
			title: 'General C#',
			description: 'Generates C# structs for components and systems.',
		},
		{
			href: 'https://github.com/ecsact-dev/ecsact_lang_json/tree/main/json_codegen',
			title: 'Json',
			description:
				'Generates a JSON file that lists the various components and systems. Useful for tooling.',
		},
	] as const;
}
