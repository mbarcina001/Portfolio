import { Component } from '@angular/core';
import { Knowledge } from '../../../models/knowledge';
import { CommonModule } from '@angular/common';
import * as appConstants from '../../../app.constants';
import { TrapezoidComponent } from '../../components/trapezoid/trapezoid.component';

@Component({
	selector: 'app-knowledge',
	templateUrl: './knowledge.component.html',
	styleUrls: ['./knowledge.component.scss'],
	standalone: true,
	imports: [
		CommonModule,
		TrapezoidComponent
	]
})

export class KnowledgeComponent {

	sectionName = 'Aptitudes';
	knowledgeList: Knowledge[] = appConstants.knowledgeList;


	constructor() { }

}
