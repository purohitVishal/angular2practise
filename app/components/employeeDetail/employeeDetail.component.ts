import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component ({

	selector : 'employee-detail',
	template : `
				<h2> this is employee detail component</h2>

				<p> you have selected an employee with id == {{empId}}</p> 

				<button (click)="previousFnc()">previous</button>
				<button (click)="nextFnc()">next</button>
				<br/>
				<button (click)="backFnc()">Back</button>

				`

})

export class employeeDetailComponent implements OnInit{
	public empId : number;

	constructor(private route:ActivatedRoute, private router: Router){}

	ngOnInit(){

		this.route.params.subscribe((params:Params)=>this.empId = parseInt(params['id']));

	}

	previousFnc(){
		let empNewId = Number(this.empId)-1;
		this.router.navigate(['/employee',empNewId]);
	}

	nextFnc(){

		let empNewId1 = Number(this.empId)+1;
		console.log(empNewId1);
		this.router.navigate(['/employee',empNewId1]);
	}

	backFnc(){
		let selectedId = this.empId?this.empId:null;
		this.router.navigate(['/employee',{id:selectedId}]);
	}
}
