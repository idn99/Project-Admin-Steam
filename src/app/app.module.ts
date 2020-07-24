import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './users/auth/auth.component';
import { BookingComponent } from './users/booking/booking.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './admin/auth/login/login.component';
import { ProfileComponent } from './admin/akun/profile/profile.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { TambahLayananComponent } from './admin/menu-admin/layanan/tambah-layanan/tambah-layanan.component';
import { UbahLayananComponent } from './admin/menu-admin/layanan/ubah-layanan/ubah-layanan.component';
import { RegistUserComponent } from './users/auth/regist-user/regist-user.component';
import { LoginUserComponent } from './users/auth/login-user/login-user.component';
import { MenuComponent } from './users/menu/menu.component';
import { PesananComponent } from './users/menu/pesanan/pesanan.component';
import { ProfileUserComponent } from './users/menu/profile-user/profile-user.component';
import { ListLayananComponent } from './admin/menu-admin/layanan/list-layanan/list-layanan.component';
import { ListPesananComponent } from './admin/menu-admin/layanan/list-pesanan/list-pesanan.component';
import { EditProfileComponent } from './users/menu/edit-profile/edit-profile.component';
import { PesananDoneComponent } from './admin/menu-admin/layanan/list-pesanan/pesanan-done/pesanan-done.component';
import { PesananOnprogressComponent } from './admin/menu-admin/layanan/list-pesanan/pesanan-onprogress/pesanan-onprogress.component';
import { UserService } from './service/ServiceUser/user.service';
import { BookService } from './service/ServiceBook/book.service';
import { AdminService } from './service/ServiceAdmin/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    BookingComponent,
    LoginComponent,
    TambahLayananComponent,
    UbahLayananComponent,
    ProfileComponent,
    MenuAdminComponent,
    LoginUserComponent,
    RegistUserComponent,
    MenuComponent,
    PesananComponent,
    ProfileUserComponent,
    ListLayananComponent,
    ListPesananComponent,
    EditProfileComponent,
    PesananDoneComponent,
    PesananOnprogressComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    BookService,
    AdminService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
