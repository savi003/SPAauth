import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule,Routes } from '@angular/router';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
const appRoute:Routes=[
  {path:'',component:SigninComponent},
  {path:'Register',component:SigninComponent},
  {path:'Create',component:RegisterComponent},
  {path:'SignIn',component:SigninComponent},
  // {path:'login',component:}

]
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
