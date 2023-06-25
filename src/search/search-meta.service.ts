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
		this.meta.removeTag(`name='og:image'`);
		this.meta.removeTag(`name='twitter:image'`);

		if (pageInfo) {
			this.title.setTitle(pageInfo.title);

			if (pageInfo.metaDescription) {
				this.meta.addTag({name: 'description', content: pageInfo.metaDescription});
			} else if (pageInfo.description) {
				this.meta.addTag({name: 'description', content: pageInfo.description});
			}

			if(pageInfo.metaImageUrl) {
				this.meta.addTag({name: 'og:image', content: pageInfo.metaImageUrl});
				this.meta.addTag({name: 'twitter:image', content: pageInfo.metaImageUrl});
			}
		} else {
			this.title.setTitle('Ecsact');
		}
	}
}
