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
	'/docs/runtime-builder': {
		category: PageCategory.Documentation,
		description: '',
		keywords: [],
		title: 'Ecsact Runtime Builder',
	},
	'/docs/runtime-implementations': {
		category: PageCategory.Documentation,
		description: '',
		keywords: [],
		title: 'Ecsact Runtime Implementations',
	},
};
