import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/service/ServiceBook/book.service';

@Component({
  selector: 'app-pesanan',
  templateUrl: './pesanan.component.html',
  styleUrls: ['./pesanan.component.css']
})
export class PesananComponent implements OnInit {

  dataBook : any;
  
  constructor(
    private router : Router,
    private service : BookService
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');

    if(id == null){
      this.router.navigate(['login'])
    }

    this.service.getData(id).subscribe((data => {
      console.log(data);
      this.dataBook = data;
    })
    );
  }

}
