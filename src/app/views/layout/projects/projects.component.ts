import { Component, OnInit, Input } from '@angular/core';
import { ProjectModalComponent } from '../../modals/project-modal/project-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../../../models/project';
import { CommonModule } from '@angular/common';
import { TrapezoidComponent } from '../../components/trapezoid/trapezoid.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [CommonModule, TrapezoidComponent, ProjectModalComponent],
})
export class ProjectsComponent implements OnInit {
  @Input() projectSectionName!: string;
  @Input() projectList!: Project[];

  public maxShown = 6;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.resizeTexts(window.innerWidth);
  }

  onSelect(pProject: Project) {
    this.dialog.open(ProjectModalComponent, {
      autoFocus: false,
      height: '100vh',
      width: '100vw',
      data: {
        project: pProject,
      },
    });
  }

  onResize(event: UIEvent) {
    const eventTarget = event.target as Window;
    if (!eventTarget) {
      return;
    }

    this.resizeTexts(eventTarget.innerWidth);
  }

  resizeTexts(pWidth: number): void {
    if (pWidth < 580) {
      if (this.projectSectionName === 'Proyectos Carrera') {
        this.projectSectionName = 'Proy. Carrera';
      } else if (this.projectSectionName === 'Otros Proyectos') {
        this.projectSectionName = 'Otros Proy.';
      }
    } else {
      if (this.projectSectionName === 'Proy. Carrera') {
        this.projectSectionName = 'Proyectos Carrera';
      } else if (this.projectSectionName === 'Otros Proy.') {
        this.projectSectionName = 'Otros Proyectos';
      }
    }
  }

  showMore() {
    this.maxShown = this.maxShown + 6;
  }
}
