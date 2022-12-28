import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BaseComponent } from './base/base.component';
import { DeleteDirective } from './directives/admin/delete.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule, //== bunuda import ediyor angular 13 kullanıyor ben 15 kullanıyorum : gerek yok anladığım kadarıyla artık = yaptığı şey linklere bastığımda side barda = sayfalar arası geçişde animasyon görüntüsü
    AppRoutingModule,
    AdminModule,
    UiModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule add == tootster modülü kullanabilmek için ios'i depending enjectiona enjecte ediyoruz. == artık .ts den çağırabiliriz.
    NgxSpinnerModule, //bu modülün özelliği sadece bulundugu modülde kullanılabiliyor üstünde altında kullanılamıyor : import edildiği ve modül kısmına verildiğği modülde kullanılabiliyor : o yüzden biz temel modülde tanımlıyoruz : ve ardından js ile diğer modüllerden çağırılabilecek hale getirecez.
    HttpClientModule //http client servis ile oluşturduğumuz servisi kullanmamız için bunu import etmemiz gerekiyor ana modülümüze : yani buraya
  ],
  providers: [
    { provide: "baseUrl", useValue: "https://localhost:7071/api", multi: true} // appConfig mantıgını burada gerçekleştirdik.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


