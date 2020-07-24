import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/service/ServiceUser/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  registForm: FormGroup;
  submitted= false;
  dataUser : any;
  regist : any;

  nama: any;
  username: any;
  email: any;
  password: any;
  jenisKelamin: any;
  kotaSekarang: any;
  tglLahir: any;
  idUser: any;
  sendData: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private service : UserService
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    this.idUser = id;
    if(id == null){
      this.router.navigate(['login'])
    }

    this.registForm = new FormGroup({
      namaLengkap: new FormControl('',[Validators.required]),
      username : new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      jenisKelamin : new FormControl('',[Validators.required]),
      tanggalLahir : new FormControl('',[Validators.required]),
      kotaSekarang : new FormControl('',[Validators.required])
    });

    this.service.getUserFromId(id)
    .subscribe((data => {
      console.log(data);
      this.dataUser = data;
      for(let user of this.dataUser){
        this.nama = user.fullName;
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
        this.jenisKelamin = user.jenisKelamin;
        this.kotaSekarang = user.kotaSekarang;
        this.tglLahir = user.tanggalLahir
      }
    })
    );
  }

  get feditprof(){ return this.registForm.controls } 

  onSubmit(){
    this.submitted = true;
  
    if (this.registForm.invalid) {
      return;
    }

    this.sendData = {
      "id" : 0,
      "fullName": this.feditprof.namaLengkap.value,
      "username": this.feditprof.username.value,
      "email": this.feditprof.email.value,
      "password": this.password,
      "jenisKelamin": this.feditprof.jenisKelamin.value,
      "kotaSekarang": this.feditprof.kotaSekarang.value,
      "tanggalLahir": this.feditprof.tanggalLahir.value
    }

    this.service.editDataUser(this.idUser, this.sendData).subscribe((data => {
      console.log(data)
      alert("Data Berhasil Diubah")
      this.router.navigate(['/beranda-user/profile'])
    })
    ); 

  }

}
