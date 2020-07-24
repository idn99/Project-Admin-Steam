import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pesanan',
  templateUrl: './list-pesanan.component.html',
  styleUrls: ['./list-pesanan.component.css']
})
export class ListPesananComponent implements OnInit {

  idAdmin : any;

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


  onDoneClick(){
    this.router.navigate(['/menu/list-pesanan/selesai'])
  }

  onpClick(){
    this.router.navigate(['/menu/list-pesanan/onprogress'])
  }

}
