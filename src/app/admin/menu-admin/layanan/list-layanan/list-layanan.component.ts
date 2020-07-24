import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-layanan',
  templateUrl: './list-layanan.component.html',
  styleUrls: ['./list-layanan.component.css']
})
export class ListLayananComponent implements OnInit {

  @Input() pesan : string;
  idAdmin : any;

  constructor(
    private router: Router
  ) { }

  datas = ['hans','bego']

  ngOnInit(): void {
    const id = localStorage.getItem('id-admin');
    this.idAdmin = id;

    if(this.idAdmin == null){
      this.router.navigate(['admin'])
    }
  }

}
