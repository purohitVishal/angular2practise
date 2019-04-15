import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component ({
	selector:'MDFValidator',
	templateUrl:'./app/components/MDFValidation/MDFValidation.component.html',
	styles:[`input.ng-invalid{border:1px solid red} ` ]
})

export class MDFVlidationComponent {

	userForm = new FormGroup({									// property which represents Model
		name : new FormControl("vishal",[Validators.required,Validators.minLength(5)]),
		email : new FormControl(null,Validators.minLength(5)),
		address : new FormGroup({
			city: new FormControl(),
			postalCode : new FormControl(null,Validators.pattern('^[1-9][0-9]{5}$'))
		})
	});

	submitFnc(){
		console.log(this.userForm.value);
	}

}