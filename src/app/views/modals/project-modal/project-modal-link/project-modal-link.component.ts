import { Component, Input } from '@angular/core';
import { Project } from '../../../../models/project';

@Component({
  selector: 'app-project-modal-link',
  templateUrl: './project-modal-link.component.html',
  styleUrls: ['./project-modal-link.component.scss']
})
export class ProjectModalLinkComponent {
  @Input() project: Project;

  constructor() { }

}
