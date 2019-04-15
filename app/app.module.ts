import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { dashboardComponent} from './components/dashboard/dashboard.componenet';
import { firstComponent} from './components/first/first.component';
import { secondComponent} from './components/second/second.component';
import { tdfVlidationComponent} from './components/TDFValidation/TDFValidation.component';
import { MDFVlidationComponent} from './components/MDFValidation/MDFValidation.component';
import { formbuilderComponent} from './components/formBuilder/formbuilder.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-router.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [  BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,
  			  AppRoutingModule
  				 ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}