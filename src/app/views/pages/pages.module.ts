// import { NgbootstrapModule } from './ngbootstrap/ngbootstrap.module';
// import { NgbootstrapComponent } from './ngbootstrap/ngbootstrap.component';
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Partials
import { PartialsModule } from '../partials/partials.module';
// Pages
import { CoreModule } from '../../core/core.module';
import { MailModule } from './apps/mail/mail.module';
import { ECommerceModule } from './apps/e-commerce/e-commerce.module';
import { UserManagementModule } from './user-management/user-management.module';
import { AddNewHostComponent } from './add-new-host/add-new-host.component';

import {MatDialogModule} from '@angular/material/dialog';
// import { ContentManagerComponent } from './content-manager/content-manager.component';
// import { CompetitionsComponent } from './competitions/competitions.component';
//import { MyPageComponent } from './my-page/my-page.component';
// import { NgBootStrap}
// NgbootstrapComponent
// NgbootstrapModule

@NgModule({
//	declarations: [MyPageComponent],
	exports: [],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		CoreModule,
		PartialsModule,
		MailModule,
		ECommerceModule,
		UserManagementModule,
		MatDialogModule
		// NgbootstrapModule
	],
	providers: [],
	declarations: [AddNewHostComponent]
})
export class PagesModule {
}
