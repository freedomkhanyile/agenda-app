import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule, declarations } from './app-routing.module';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
 
@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [declarations[0]]  ,
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
