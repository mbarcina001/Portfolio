import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingComponent } from './views/layout/landing/landing.component';
import { CareerComponent } from './views/layout/career/career.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { KnowledgeComponent } from './views/layout/knowledge/knowledge.component';
import { ProjectsComponent } from './views/layout/projects/projects.component';
import * as appConstants from './app.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    LandingComponent,
    CareerComponent,
    KnowledgeComponent,
    ProjectsComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';

	public EXPOSE_APP_CONSTANTS = appConstants;
}
