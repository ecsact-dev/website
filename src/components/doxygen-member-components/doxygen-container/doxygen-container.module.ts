import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DoxygenContainerComponent} from './doxygen-container.component';

@NgModule({
    imports: [CommonModule, DoxygenContainerComponent],
    exports: [DoxygenContainerComponent],
})
export class DoxygenContainerModule {}
