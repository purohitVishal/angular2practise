import { Component, OnInit } from '@angular/core';
import {firstComponent} from '../first/first.component';
import {EmployeeService} from '../../employee.service'

@Component({
	selector:'my-dasboard',
	template:`<div>this is new div from custom component</div>
				<div [ngSwitch] = "color">
					<p *ngSwitchCase="'red'" [style.color]="'red'" >red in switc case</p>
					<p *ngSwitchCase="'blue'" [style.color]="'blue'">blue is in the switch case</p>
					<p *ngSwitchDefault> this is default case</p>
				</div>
				<select (change)="onselect($event)">
					<option value='red'>red</option>
					<option value='blue'>blue</option>
				</select>
				<br/>
				<label>enter text</label>
				<input type='text' #ptext (keyup)="0">
				<br/>
				<label>value from child component is -> {{childData}}</label>

				<br/><br/>
				<label>Employees List is as follows</label>
				<ul >
					<li *ngFor="let employee of employees" > {{employee.name}} </li>
				</ul>


				<first-comp [parentData]="ptext.value" (childEvent)="childData=$event" ></first-comp>
				

				`
})

export class dashboardComponent implements OnInit {
	public color='blue';
	public selectOption='';
	public childData:string;

		onselect(value:any){
		console.log(value);
		console.log(value.target.value);
		this.color=value.target.value;

	}

	employees = [] as any;

	constructor(private _employeeService: EmployeeService){}

	ngOnInit(){
		this._employeeService.getEmployees().subscribe(res=>this.employees=res);
	}

		
	
	

}

