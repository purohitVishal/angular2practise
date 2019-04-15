import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { dashboardComponent } from './components/dashboard/dashboard.componenet';
import { firstComponent } from './components/first/first.component';
import { secondComponent } from './components/second/second.component';
import { tdfVlidationComponent} from './components/TDFValidation/TDFValidation.component';
import { MDFVlidationComponent} from './components/MDFValidation/MDFValidation.component';
import { formbuilderComponent} from './components/formbuilder/formbuilder.component';
import { employeeComponent} from './components/Employees/employee.component';
import { employeeDetailComponent} from './components/employeeDetail/employeeDetail.component';
import { pageNotFoundComponent} from './components/pageNotFound/pageNotFound.component';
import { animationComponent} from './components/animation/animation.component';


const routes: Routes = [
						{path:'',component:dashboardComponent},
						{path:'dashboard', component:dashboardComponent},
		  			  	{path:'first', component:firstComponent},
		  			  	{path:'second',component:secondComponent},
		  			  	{path:'TDFValidation',component:tdfVlidationComponent},
		  			  	{path:'MDFValidation',component:MDFVlidationComponent},
		  			  	{path:'formbuilder',component:formbuilderComponent},
		  			  	{path:'employee',component:employeeComponent},
		  			  	{path:'employee/:id',component:employeeDetailComponent},
		  			  	{path:'animation',component:animationComponent},
		  			  	{path:'**',component:pageNotFoundComponent}
		  			  ]
@NgModule({

	imports  : [
				RouterModule.forRoot(routes)
				],

	exports:[
				RouterModule
				]
	
})

export class AppRoutingModule {}
export const routingComponents = [dashboardComponent,firstComponent,
								secondComponent,tdfVlidationComponent,
								MDFVlidationComponent,formbuilderComponent,
								employeeComponent,employeeDetailComponent,
								pageNotFoundComponent,animationComponent]