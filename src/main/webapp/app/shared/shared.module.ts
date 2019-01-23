import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { CrmSharedLibsModule, CrmSharedCommonModule, NgxLoginModalComponent, HasAnyAuthorityDirective } from './';
import { CrmMaterialModule } from './material.module';

@NgModule({
    imports: [CrmSharedLibsModule, CrmSharedCommonModule, CrmMaterialModule],
    declarations: [NgxLoginModalComponent, HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [NgxLoginModalComponent],
    exports: [CrmSharedCommonModule, NgxLoginModalComponent, HasAnyAuthorityDirective, CrmMaterialModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CrmSharedModule {
    static forRoot() {
        return {
            ngModule: CrmSharedModule
        };
    }
}
