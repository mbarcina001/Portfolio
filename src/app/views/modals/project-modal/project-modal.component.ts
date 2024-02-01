import { Component, Inject, OnInit } from '@angular/core';
import { Project } from '../../../models/project';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectModalLinkComponent } from './project-modal-link/project-modal-link.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
  standalone: true,
  imports: [ProjectModalLinkComponent, CommonModule],
})
export class ProjectModalComponent implements OnInit {
  projectIndex: number = 0;

  constructor(
    private dialogRef: MatDialogRef<ProjectModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      project: Project;
    }
  ) {}

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

  prevImg(): void {
    if (this.projectIndex === 0) {
      this.projectIndex = this.data.project.imgs.length - 1;
    } else {
      this.projectIndex = this.projectIndex - 1;
    }
  }

  hideModal(): void {
    this.dialogRef.close();
  }

  arrowClick(clickedArrow: string): void {
    const paginationWrapper = document.querySelector('.pagination-wrapper');

    if (!paginationWrapper) {
      return;
    }

    if (clickedArrow === 'leftArrow') {
      this.prevImg();
      paginationWrapper.classList.add('transition-prev');
    } else {
      this.nextImg();
      paginationWrapper.classList.add('transition-next');
    }

    setTimeout(this.cleanClasses, 500);
  }

  cleanClasses(): void {
    const paginationWrapper = document.querySelector('.pagination-wrapper');

    if (!paginationWrapper) {
      return;
    }

    if (paginationWrapper.classList.contains('transition-next')) {
      paginationWrapper.classList.remove('transition-next');
    } else if (paginationWrapper.classList.contains('transition-prev')) {
      paginationWrapper.classList.remove('transition-prev');
    }
  }
}
