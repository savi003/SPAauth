import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm!:FormGroup
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) {

   }
  
  ngOnInit(): void {
    this.RegisterForm=this.formbuilder.group({
      name:[''],
      email:[''],
      password:['']
    })
  }

  register(){
    this.http.post<any>('http://localhost:3000/user',this.RegisterForm.value).subscribe(
      res=>{alert("done")}
      );

  }
  

}
