export enum PageCategory {
	Page = 'Page',
	Documentation = 'Documentation',
	Tutorial = 'Tutorial',
}

export interface PageInfo {
	title: string;
	description: string;
	metaDescription?: string;
	metaImageUrl?: string;
	category: PageCategory;
	keywords: string[];
}
