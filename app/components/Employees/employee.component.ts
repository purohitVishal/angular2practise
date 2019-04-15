import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employee.service'
import { Router, ActivatedRoute,Params } from '@angular/router';

@Component({
	selector:'employee-list',
	template:`<h2>
				This is employee list
			 </h2>
			 <label>{{errorMsg}}</label>
			 <ul class="item">
			 	<li *ngFor="let employee of employees" (click)="onSelect(employee)" [class.selectedd]='selectedClass(employee)'>
			 		<span class="badge">{{employee.id}}</span>
			 		{{employee.name}}
			 	</li>
			 </ul>
			 `,
	styles:[`.selectedd{
					color:red;
					border:1px solid blue;
			}`]
})

export class employeeComponent implements OnInit {

	constructor(private _employeeService : EmployeeService, private router:Router,private route:ActivatedRoute){};

	employees = [] as any;
	errorMsg = [] as any;
	selectedId : number ;

	ngOnInit(){
		this._employeeService.getEmployees().subscribe(res=>this.employees=res,resError=>this.errorMsg=resError);
		this.route.params.subscribe((params:Params)=>this.selectedId=parseInt(params['id']));
	}

	onSelect(employeeData:any){
		this.router.navigate(['/employee',employeeData.id])
	}

	selectedClass(employeeData:any){
		console.log(this.selectedId);
		console.log(employeeData.id);
		return employeeData.id===this.selectedId;
	}

 }