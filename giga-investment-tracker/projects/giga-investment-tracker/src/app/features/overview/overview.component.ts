import { HttpClient } from '@angular/common/http';
import { RequestService } from './../../data/request.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-overview',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './overview.component.html',
	styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent {
	constructor(private requestService: RequestService) {}

	public getTestData = () => {
		this.requestService
			.getTestData('SYMBOL_SEARCH', 'CDP')
			.subscribe((res) => console.log(res));
	};
}
