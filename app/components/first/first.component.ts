import { Component, OnInit } from '@angular/core';
import { EventEmitter} from '@angular/core';
import { secondComponent } from '../second/second.component';
import { EmployeeService } from '../../employee.service'

@Component({
	selector:'first-comp',
	template:`<hr/><h4>Attribute directive</h4>
					<ul><li><h5> ngClass</h5></li></ul>
			<p [ngClass]="{classOne:cone,classTwo:ctwo}">first component text with ngClass attribute directive</p>
			<button (click)="toggleFnc()"> Toggle style </button>
			
			<br/>
			<label>Enter data to view on parent component</label>
			<input #childtext (keyup)="onkeyupfnc(childtext.value)">
			<br/>
			<label>Value from parent -> {{parentData}}</label>
	
			<br/>
			<br/>
			<h3>{{errorMsg}}</h3> 
			<label> List of employees here also http get</label>
			<ul>
				<li *ngFor="let employee of employees">{{employee.name}}</li>
			</ul>			

			
			`,
	styles:['.classOne{color:white} .classTwo{background-color:black}'],
	inputs:['parentData'],
	outputs:['childEvent']
})

export class firstComponent implements OnInit{
	public cone= true;
	public ctwo = true;
	public parentData:string;
	employees = [] as any;	
	errorMsg:string;
	childEvent = new EventEmitter<string>();

	toggleFnc(){
		this.cone = !this.cone;
		this.ctwo = !this.ctwo;
	}

	onkeyupfnc(value:string){
		this.childEvent.emit(value);
	}

	constructor(private _employeeService : EmployeeService){}

	

	ngOnInit(){
		// this.employees = this._employeeService.getEmployees();

		this._employeeService.getEmployees().subscribe(resEmployessData => {this.employees = resEmployessData
										console.log(resEmployessData)},resError=>this.errorMsg = resError);
	}
}