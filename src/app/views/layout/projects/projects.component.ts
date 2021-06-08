import { Component, OnInit, Input } from '@angular/core';
import { ProjectModalComponent } from '../../modals/project-modal/project-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Project } from '../../../models/project';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
  	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	@Input() projectSectionName: string;
	@Input() projectList: Project[];

	constructor(public dialog: MatDialog) { }

	ngOnInit() {
		this.resizeTexts(window.innerWidth);
	}

	onSelect(pProject: Project) {
		this.dialog.open(ProjectModalComponent, {
			autoFocus: false,
			height: '100vh',
			width: '100vw',
			data: {
				project: pProject
			},
		});
	}

	onResize(event) {
		this.resizeTexts(event.target.innerWidth);
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
}
