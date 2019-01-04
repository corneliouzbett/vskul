import { NgModule } from '@angular/core';

import { VskulSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [VskulSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [VskulSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class VskulSharedCommonModule {}
