import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tambah-layanan',
  templateUrl: './tambah-layanan.component.html',
  styleUrls: ['./tambah-layanan.component.css']
})
export class TambahLayananComponent implements OnInit {

  idAdmin: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id-admin');
    this.idAdmin = id;

    if(this.idAdmin == null){
      this.router.navigate(['admin'])
    }
  }

  pesananClick(){
    this.router.navigate['admin/list-pesanan'];
  }

}
