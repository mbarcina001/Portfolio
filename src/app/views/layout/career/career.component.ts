import { Component, Input, OnInit } from '@angular/core';
import { Career } from '../../../models/career';

@Component({
	selector: 'app-career',
	templateUrl: './career.component.html',
	styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

	sectionName = 'Trayectoria';
	@Input() careerList: Career[];
	selectedCareer: Career;

	constructor() { }

	ngOnInit() {
		this.selectedCareer = this.careerList[this.careerList.length - 1];
	}

	public selectCareer(pCareer: Career) {
		this.selectedCareer = pCareer;
	}

	public isMobile(): boolean {
		return window.innerWidth <= 900;
	}

}
