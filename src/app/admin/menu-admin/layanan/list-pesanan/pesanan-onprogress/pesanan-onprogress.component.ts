import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/service/ServiceAdmin/admin.service';

@Component({
  selector: 'app-pesanan-onprogress',
  templateUrl: './pesanan-onprogress.component.html',
  styleUrls: ['./pesanan-onprogress.component.css']
})
export class PesananOnprogressComponent implements OnInit {

  readonly SERVER_URL = "http://localhost:3000/booking"
  dataBook : any
  getData : any
  idAdmin : any;

  constructor(
    private router: Router,
    private service : AdminService
  ) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id-admin');
    this.idAdmin = id;

    if(this.idAdmin == null){
      this.router.navigate(['admin'])
    }

    this.service.getProgressService().subscribe((data => {
      console.log(data);
      this.dataBook = data
    })
    );
  }

  doneClick(id){
    // alert("Klik Done");
    console.log(id)

    // get data
    this.service.getDataBook(id).subscribe((data => {
      this.getData = data
      for(let data of this.getData){
        const doneData = {
          "id": data.id,
          "namaPelanggan": data.namaPelanggan,
          "alamatLengkap": data.alamatLengkap,
          "nomorTelepon": data.nomorTelepon,
          "waktuSteam": data.waktuSteam,
          "jenisMobil": data.jenisMobil,
          "jenisSteam": data.jenisSteam,
          "pesan": data.pesan,
          "status": "Done"
        }
        this.service.editData(id, doneData).subscribe((data => {
          console.log(data)
          alert("Data Telah Selesai")
          this.router.navigate(['/menu/list-pesanan/selesai'])
        })
        );       
      }
    })
    );

  }

}
