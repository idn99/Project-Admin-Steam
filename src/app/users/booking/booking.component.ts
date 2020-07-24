import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/ServiceBook/book.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm: FormGroup;
  submitted= false;
  readonly SERVER_URL = "http://localhost:3000"
  idUser: any;


  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private service : BookService
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    this.idUser = id;

    if(this.idUser == null){
      this.router.navigate(['login'])
    }

    this.bookingForm = this.formBuilder.group({
      namaUser: ['',Validators.required],
      alamatLengkap: ['',Validators.required],
      nomorTelepon: ['',Validators.required],
      waktu: ['',Validators.required],
      jenisMobil: ['',Validators.required],
      jenisSteam: ['',Validators.required],
      pesan: ['',Validators.required],
    });
  }

  get fbooking(){ return this.bookingForm.controls }

  onSubmit(){
    this.submitted = true;
  
    if (this.bookingForm.invalid) {
      return;
    }

    const createBook = {
      "id": 0,
      "idUser": this.idUser,
      "namaPelanggan": this.fbooking.namaUser.value,
      "alamatLengkap": this.fbooking.alamatLengkap.value,
      "nomorTelepon": this.fbooking.nomorTelepon.value,
      "waktuSteam": this.fbooking.waktu.value,
      "jenisMobil": this.fbooking.jenisMobil.value,
      "jenisSteam": this.fbooking.jenisSteam.value,
      "pesan": this.fbooking.pesan.value,
      "status": "On Progress"
    }

    this.service.addBoking(createBook).subscribe((data) => {
      console.log(data)
      alert("Berhasil Booking")
      this.router.navigate([''])
    });
  }

}
