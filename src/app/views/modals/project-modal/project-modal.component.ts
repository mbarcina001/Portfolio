import { Component, Inject, OnInit } from '@angular/core';
import { Project } from '../../../models/project';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})

export class ProjectModalComponent implements OnInit {

	projectIndex: number;

	constructor(
		private dialogRef: MatDialogRef<ProjectModalComponent>,
		@Inject(MAT_DIALOG_DATA)
		public data: {
			project: Project
		},
	) { }

	ngOnInit() {
		this.projectIndex = 0;
	}

	nextImg(): void {
		if (this.projectIndex + 1 === this.data.project.imgs.length) {
			this.projectIndex = 0;
		} else {
			this.projectIndex = this.projectIndex + 1;
		}
	}

	lastImg(): void {
		if (this.projectIndex === 0) {
			this.projectIndex = this.data.project.imgs.length - 1;
		} else {
			this.projectIndex = this.projectIndex - 1;
		}
	}

	hideModal(): void {
		this.dialogRef.close();
	}

	arrowClick(elem): void {
		const paginationWrapper = document.querySelector('.pagination-wrapper');

		if (elem === 'leftArrow') {
			paginationWrapper.classList.add('transition-prev');
		} else {
			paginationWrapper.classList.add('transition-next');
		}

		setTimeout(this.cleanClasses, 500);
	}

	cleanClasses(): void {
		const paginationWrapper = document.querySelector('.pagination-wrapper');

		if (paginationWrapper.classList.contains('transition-next')) {
			paginationWrapper.classList.remove('transition-next');
		} else if (paginationWrapper.classList.contains('transition-prev')) {
			paginationWrapper.classList.remove('transition-prev');
		}
	}
}
