import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ubah-layanan',
  templateUrl: './ubah-layanan.component.html',
  styleUrls: ['./ubah-layanan.component.css']
})
export class UbahLayananComponent implements OnInit {
  idAdmin: any;
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id-admin');
    this.idAdmin = id;

    if(this.idAdmin == null){
      this.router.navigate(['admin'])
    }
  }

}
