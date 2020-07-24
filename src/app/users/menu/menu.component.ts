import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders }    from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() pesan : any;

  idUser : any;
  readonly SERVER_URL_USERS = "http://localhost:3000/users";

  constructor(
    private http : HttpClient,
    private router : Router
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');

    if(id == null){
      this.router.navigate(['login'])
    }
    console.log(id)
  }

  onLogout(){
    localStorage.removeItem('id');
    this.router.navigate(['login'])
  }

}
