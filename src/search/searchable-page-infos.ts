import {PageCategory, PageInfo} from './page-info-types';

/**
 * All pages that are searchable.
 *
 * TODO(zaucy): Automatically fill in a build step
 */
export const searchablePageInfos: {[key: string]: PageInfo | undefined} = {
	'/': {
		category: PageCategory.Page,
		description: 'Home page',
		metaDescription:
			'Language and runtime standard dedicated to the Entity Component System (ECS) architecture',
		metaImageUrl: 'https://ecsact.dev/assets/ecsact-example-image.png',
		keywords: ['home'],
		title: 'Ecsact',
	},
	'/start': {
		category: PageCategory.Page,
		description: 'Install the Ecsact SDK and get started using Ecsact',
		keywords: [],
		title: 'Getting Started',
	},
	'/docs': {
		category: PageCategory.Page,
		description: 'Brief summary of available documentation',
		keywords: [],
		title: 'Documentation Overview',
	},
	'/docs/lang': {
		category: PageCategory.Documentation,
		description: 'Everything you need to know about the Ecsact language',
		keywords: [],
		title: 'Ecsact Language Reference Guide',
	},
	'/docs/lang#define-components': {
		category: PageCategory.Documentation,
		description: 'Ecsact Language Reference Guide',
		keywords: ['define', 'component'],
		title: 'Defining Components',
	},
	'/docs/lang#field-types': {
		category: PageCategory.Documentation,
		description: 'Ecsact Language Reference Guide',
		keywords: ['field', 'types', 'component', 'action'],
		title: 'Field Types',
	},
	'/docs/runtime': {
		category: PageCategory.Documentation,
		description: '',
		keywords: [],
		title: 'Ecsact Runtime',
	},
	'/docs/runtime-implementations': {
		category: PageCategory.Documentation,
		description: '',
		keywords: [],
		title: 'Ecsact Runtime Implementations',
	},
	'/docs/unity/defaults': {
		category: PageCategory.Documentation,
		description: 'Information about the Ecsact Defaults class in Unity',
		keywords: ['defaults', 'pool', 'registry', 'runner'],
		title: 'Unity Defaults Class',
	},
	'/docs/unity/entities': {
		category: PageCategory.Documentation,
		description: 'How to create entities in Ecsact Unity',
		keywords: ['entities', 'entity', 'generates', 'dynamic', 'createentity'],
		title: 'Creating Entities',
	},
	'/docs/unity/unity-sync': {
		category: PageCategory.Documentation,
		description: 'Documentation for how Unity Sync works with Ecasct Unity',
		keywords: ['unity-sync', 'irequired', 'ioninit', 'inonupdate', 'ionremove'],
		title: 'Unity Sync',
	},
	'./docs/unity/system-impl': {
		category: PageCategory.Documentation,
		description: 'How to implement systems in Ecsact Unity',
		keywords: ['system implementation', 'defaultsystemimpl'],
		title: 'Implementing Systems',
	},
	'/start/tutorials/unity/basic-example': {
		category: PageCategory.Tutorial,
		description:
			'Learn about how Ecsact works with Unity with this basic example',
		keywords: ['tutorial', 'basic example', 'learn Unity'],
		title: 'Basic Unity Example',
	},
	'/start/tutorials/unity/moving-block': {
		category: PageCategory.Tutorial,
		description:
			'Learn more about Unity Sync and nested systems in this Unity tutorial',
		keywords: ['tutorial', 'unity sync', 'learn unity', 'moving block'],
		title: 'Unity Moving Block Example',
	},
	'/docs/extend/build-recipe': {
		category: PageCategory.Documentation,
		keywords: [
			'build',
			'recipe',
			'yaml',
			'yml',
			'build-recipe-bundle',
			'bundle',
			'programming',
			'code',
			'plugin',
		],
		title: 'Build Recipe',
		description: 'Learn about Ecsact build recipes',
	},
	'/docs/extend/codegen': {
		category: PageCategory.Documentation,
		keywords: ['codegen', 'programming', 'code', 'plugin', 'C'],
		title: 'Codegen',
		description: 'Learn about Ecsact codegen',
	},
	'/start/unreal': {
		category: PageCategory.Page,
		description: 'Unreal plugin installation and overview',
		keywords: ['unreal', 'plugin', 'engine', 'install'],
		title: 'Unreal Integration',
	},
	'/start/unreal/codegen': {
		category: PageCategory.Page,
		description: 'Setting up codegen in your Unreal project',
		keywords: [
			'unreal',
			'codegen',
			'fragment',
			'mass',
			'component',
			'ustruct',
			'reflection',
			'uclass',
		],
		title: 'Unreal Codegen',
	},
	'/start/unreal/runner': {
		category: PageCategory.Page,
		description: 'Details about using the Unreal Ecsact Runner',
		keywords: [
			'unreal',
			'runner',
			'executing',
			'systems',
			'automatic',
			'tick',
			'start',
			'subsystem',
		],
		title: 'Unreal Ecsact Runner',
	},
	'/start/unreal/runtime': {
		category: PageCategory.Page,
		description: 'Accessing the Ecsact Runtime in an unreal project',
		keywords: [
			'unreal',
			'runtime',
			'c',
			'headers',
			'cpp',
			'c++',
			'build',
			'module',
		],
		title: 'Ecsact Runtime in Unreal',
	},
	'/start/unreal/subsystems': {
		category: PageCategory.Page,
		description: 'Utilizing Ecsact subsystems to get component events',
		keywords: [
			'unreal',
			'subsystem',
			'component',
			'event',
			'cpp',
			'blueprint',
			'runner',
			'init',
			'remove',
			'update',
		],
		title: 'Ecsact Unreal Subsystems',
	},
};
