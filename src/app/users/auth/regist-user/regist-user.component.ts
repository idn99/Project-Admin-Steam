import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/service/ServiceUser/user.service';

@Component({
  selector: 'app-regist-user',
  templateUrl: './regist-user.component.html',
  styleUrls: ['./regist-user.component.css']
})
export class RegistUserComponent implements OnInit {

  registForm: FormGroup;
  submitted= false;
  readonly SERVER_URL_USERS = "http://localhost:3000/users";
  regist : any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private services : UserService
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem("id");
    if(id != null){
      this.router.navigate(['/beranda-user']);
    }

    this.registForm = this.formBuilder.group({
      namaLengkap: ['',Validators.required],
      username : ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      jenisKelamin : ['',Validators.required],
      tanggalLahir : ['',Validators.required],
      kotaSekarang : ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  get fregist(){ return this.registForm.controls } 

  onSubmit(){
    this.submitted = true;
  
    if (this.registForm.invalid) {
      return;
    }

    const createRegist = {
      id : 0,
      fullName: this.fregist.namaLengkap.value,
      username:  this.fregist.username.value,
      email: this.fregist.email.value,
      password: this.fregist.password.value,
      jenisKelamin: this.fregist.jenisKelamin.value,
      kotaSekarang: this.fregist.kotaSekarang.value,
      tanggalLahir: this.fregist.tanggalLahir.value
    }

    this.services.addDataUser(createRegist).subscribe((data) => {
      console.log(data)
      alert("Berhasil Daftar , silahkan login")
      this.router.navigate(['login'])
    });

  }

}
