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
};
