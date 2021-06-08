import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-trapezoid',
	templateUrl: './non-trapezoid.html',
	styleUrls: ['./non-trapezoid.scss']
})
export class TrapezoidComponent  {

	@Input() sectionName: string;

	constructor() { }

}
