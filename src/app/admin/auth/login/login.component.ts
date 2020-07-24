import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/service/ServiceAdmin/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submitted= false;
  dataAdmin: any;
  idAdmin: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service : AdminService
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem("id-admin");
    if(id != null){
      this.router.navigate(['menu'])
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
    
    this.service.loginAdmin(this.flogin.email.value, this.flogin.password.value).subscribe((data => {
      console.log(data);
      this.dataAdmin = data;
      for(let datas of this.dataAdmin){
        this.idAdmin = datas.id;
      }

      if(this.idAdmin == undefined){
        alert("Username & Password Tidak Sesuai")
      }else{
        
        console.log(this.idAdmin)
        localStorage.setItem('id-admin', this.idAdmin);
        this.router.navigate(['menu'])
      }

    })
    );
  }

}
