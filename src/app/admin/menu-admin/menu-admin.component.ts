import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.component.html',
  styleUrls: ['./menu-admin.component.css']
})
export class MenuAdminComponent implements OnInit {

  list : any;
  idAdmin : any;

  constructor(
    private router: Router
  ) { }

  pesan = "Hello Cuk"

  ngOnInit(): void {
    const id = localStorage.getItem('id-admin');
    this.idAdmin = id;

    if(this.idAdmin == null){
      this.router.navigate(['admin'])
    }
  }

  onList(){
    this.list = "app-tambah-layanan"
  }

  clikLogout(){
    localStorage.removeItem('id-admin');
    this.router.navigate(['admin'])
  }

}
