import { Component } from '@angular/core';
import { Career } from '../../../models/career';
import { TrapezoidComponent } from '../../components/trapezoid/trapezoid.component';
import { CommonModule } from '@angular/common';
import * as appConstants from '../../../app.constants';
import { ProjectModalComponent } from '../../modals/project-modal/project-modal.component';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
  imports: [CommonModule, TrapezoidComponent, ProjectModalComponent],
  standalone: true,
})
export class CareerComponent {
  sectionName = 'Trayectoria';
  careerList: Career[] = appConstants.careerList;
  selectedCareer: Career;

  constructor() {
    this.selectedCareer = this.careerList[this.careerList.length - 1];
  }

  public selectCareer(pCareer: Career) {
    this.selectedCareer = pCareer;
  }

  public isSelectedCareer(pCareer: Career) {
    return this.selectedCareer?.name === pCareer.name;
  }

  public isMobile(): boolean {
    return window.innerWidth <= 900;
  }
}
