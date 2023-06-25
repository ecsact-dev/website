import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {searchablePageInfos} from './searchable-page-infos';

@Injectable({providedIn: 'root'})
export class SearchMeta {
	constructor(
		private meta: Meta,
		private title: Title,
	) {}

	useSearchablePageInfo(path: string) {
		const pageInfo = searchablePageInfos[path];
		this.meta.removeTag('name=description');

		if (pageInfo) {
			this.title.setTitle(pageInfo.title);
			if (pageInfo.metaDescription) {
				this.meta.addTag({name: 'description', content: pageInfo.metaDescription});
			} else if (pageInfo.description) {
				this.meta.addTag({name: 'description', content: pageInfo.description});
			}
		} else {
			this.title.setTitle('Ecsact');
		}
	}
}
