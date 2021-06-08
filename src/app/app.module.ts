import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './views/layout/landing/landing.component';
import { CareerComponent } from './views/layout/career/career.component';
import { ProjectsComponent } from './views/layout/projects/projects.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { KnowledgeComponent } from './views/layout/knowledge/knowledge.component';
import { ContactComponent } from './views/layout/contact/contact.component';
import { ProjectModalComponent } from './views/modals/project-modal/project-modal.component';
import { TrapezoidComponent } from './views/components/trapezoid/trapezoid.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ErrorCampoComponent } from './views/components/errorcampo/error-campo.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectModalLinkComponent } from './views/modals/project-modal/project-modal-link/project-modal-link.component';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent,
		CareerComponent,
		ProjectsComponent,
		FooterComponent,
		KnowledgeComponent,
		ContactComponent,
		ProjectModalComponent,
		TrapezoidComponent,
		ErrorCampoComponent,
		ProjectModalLinkComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatDialogModule,
		ToastrModule.forRoot({
			preventDuplicates: true,
		})
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
