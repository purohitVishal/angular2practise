import { Component } from '@angular/core';
import { dashboardComponent } from './components/dashboard/dashboard.componenet';
import { EmployeeService } from './employee.service'

@Component({
  selector: 'my-app',
  template: `<h2>hello world</h2>
  			<nav>
  			<a routerLink='/dashboard' routerLinkActive="active">Dashboard</a>
  			<a routerLink='/first' routerLinkActive="active">First</a>
  			<a routerLink='/second' routerLinkActive="active">Second</a>
  			<a routerLink='/MDFValidation' routerLinkActive="active">MDF Validation</a>
  			<a routerLink='/TDFValidation' routerLinkActive="active">TDF Validation</a>
  			<a routerLink='/formbuilder' routerLinkActive="active">Form Builder</a>
        <a routerLink='/employee' routerLinkActive="active">Employee list</a>
  		  <a routerLink='/animation' routerLinkActive="active">Animation</a>
      	</nav> 
  			<router-outlet></router-outlet>`,
  providers:[EmployeeService]                                  //registering service to injectables
})
export class AppComponent {
  
}