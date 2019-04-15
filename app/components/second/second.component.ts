import { Component } from '@angular/core';


@Component({
	selector:'second-template',
	templateUrl:'./app/components/second/second.component.html'
})

export class secondComponent{
	public myName='vishal';
	submitFnc(value:string){
		console.log(value);
	}
}