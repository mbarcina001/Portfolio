import { Component } from '@angular/core';
import * as appConstants from './app.constants';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'app';

	public EXPOSE_APP_CONSTANTS = appConstants;
}
