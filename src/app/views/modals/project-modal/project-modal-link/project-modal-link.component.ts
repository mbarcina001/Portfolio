import { Component, Input } from '@angular/core';
import { Project } from '../../../../models/project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-modal-link',
  templateUrl: './project-modal-link.component.html',
  styleUrls: ['./project-modal-link.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ProjectModalLinkComponent {
  @Input() project!: Project;

  constructor() {}
}
