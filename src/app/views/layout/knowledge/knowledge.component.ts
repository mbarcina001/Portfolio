import { Component, OnInit, Input } from '@angular/core';
import { Knowledge } from '../../../models/knowledge';

@Component({
	selector: 'app-knowledge',
	templateUrl: './knowledge.component.html',
	styleUrls: ['./knowledge.component.scss']
})

export class KnowledgeComponent implements OnInit {

	sectionName = 'Aptitudes';
	@Input() knowledgeList: Knowledge[];


	constructor() { }

	ngOnInit() { }

}
