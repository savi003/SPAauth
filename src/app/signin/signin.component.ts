import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  SigninForm!:FormGroup
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.SigninForm=this.formbuilder.group({
      email:[''],
      password:['']
    })
  }
  signin(){
    this.http.get<any>('http://localhost:3000/user').subscribe(
      res=>{
        const user=res.find((a:any)=>{
          return a.email===this.SigninForm.value.email&&a.password===this.SigninForm.value.password
        })
        if(user){
          
          // alert("Login Succes")
          this.SigninForm.reset;
        }
        else{
          alert("user not found")
        }
      }
      );
  }

}
