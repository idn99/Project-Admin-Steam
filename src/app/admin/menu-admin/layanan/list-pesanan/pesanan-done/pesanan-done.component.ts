import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/ServiceAdmin/admin.service';

@Component({
  selector: 'app-pesanan-done',
  templateUrl: './pesanan-done.component.html',
  styleUrls: ['./pesanan-done.component.css']
})
export class PesananDoneComponent implements OnInit {

  readonly SERVER_URL = "http://localhost:3000/booking"
  dataBook : any
  getData : any
  idAdmin : any;

  constructor(
    private router : Router,
    private service : AdminService
  ) { }

  ngOnInit(): void {

    const id = localStorage.getItem('id-admin');
    this.idAdmin = id;

    if(this.idAdmin == null){
      this.router.navigate(['admin'])
    }

    this.service.getDoneService().subscribe((data => {
      console.log(data);
      this.dataBook = data
    })
    );
  }

}
