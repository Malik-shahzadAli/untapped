// import { ThemeModule } from './../../theme/theme.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule } from '@angular/router';
import { LandingpageHeaderComponent } from './landingpage-header/landingpage-header.component';
import { LayoutModule } from '@angular/cdk/layout' 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FooterComponent } from './footer/footer.component';
// ThemeModule

@NgModule({
  declarations: [LandingPageComponent, LandingpageHeaderComponent, FooterComponent],
  imports: [
    CommonModule,
  
    RouterModule.forChild([
			{
				path: '',
				component: LandingPageComponent
			},
		]),
     LayoutModule,
     MatToolbarModule,
     MatButtonModule,
     MatSidenavModule,
     MatIconModule,
     MatListModule,
  ]
})
export class LandingPageModule2 { }
