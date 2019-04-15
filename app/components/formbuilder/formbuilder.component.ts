import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
	selector:'form-builder',
	templateUrl:'./app/components/formbuilder/formbuilder.component.html'
})

export class formbuilderComponent implements OnInit{

	userForm : FormGroup;
	constructor(private _formbuilder:FormBuilder){}

	ngOnInit(){

		this.userForm = this._formbuilder.group({
			name:['brandon',[Validators.required,Validators.minLength(4),Validators.maxLength(10)]],
			email:[null,Validators.minLength(5)],
			address: this._formbuilder.group({
				city:[],
				postalCode:[null,Validators.pattern('^[1-9][0-9]{5}$')]
			})
		})
	}
}