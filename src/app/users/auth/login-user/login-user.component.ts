import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/ServiceUser/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})

export class LoginUserComponent implements OnInit {

  loginForm: FormGroup;
  submitted= false;
  newPost: Observable<any>;

  posts : any;
  getData : any;
  userData : any;
  dDatas : any;
  pesan : any;
  

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService : UserService
  ) { 
  }

  ngOnInit(): void {
    const id = localStorage.getItem("id");
    if(id != null){
      this.router.navigate(['/beranda-user']);
    }
    
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password: ['',Validators.required]
    });
  }

  get flogin(){ return this.loginForm.controls } 

  onSubmit(){
    this.submitted = true;
  
    if (this.loginForm.invalid) {
      return;
    }

    this.userService.getDataFromEmail(this.flogin.email.value, this.flogin.password.value)
    .subscribe((data =>{
      console.log(data)
      this.dDatas = data
      for(let datas of this.dDatas){
        this.pesan = datas.id
      }
      if(this.pesan != null){
        localStorage.setItem('id', this.pesan);
        this.router.navigate(['/beranda-user']);
      }else{
        alert("Username & Password Tidak Sesuai")
      }
    }))
  }
  
}
