import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule == bunuda import ediyor angular 13 kullanıyor ben 15 kullanıyorum : gerek yok anladığım kadarıyla artık = yaptığı şey linklere bastığımda side barda = sayfalar arası geçişde animasyon görüntüsü
    AppRoutingModule,
    AdminModule,
    UiModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot() // ToastrModule add == tootster modülü kullanabilmek için ios'i depending enjectiona enjecte ediyoruz. == artık .ts den çağırabiliriz.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


