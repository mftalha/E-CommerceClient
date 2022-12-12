import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav'; //matarial angularda beğendiğim componenti projeme dahil etmek için 
// beğendiğim componentin bulunduğu sayfadayken Apı ye tıklıyorum ve üstteki linki alıp buraya yapıştırıyorum
// altta imports içinede MatSidenavModule = süslü parentez içindeki yazıyı import ediyorum.
//önemli nokta : from .. = diye eriştiği dizine meterial anguları terminalden projemize kurduğumudan erişebiliyoruz. == yani terminalden bütün kütüphaneleri yüklüyorum == yükledikten sonra ilgili sayfalarda kullanabiliyorum.


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule, //bir module bağlı html sayfasında router'ı kullanabilmek için = bağlı olduğu modülde RouterModule ekli olmalı
    MatSidenavModule
  ],
  exports:[ //dışarıdan erişilebilir bir componentsin diyoruz : üst modüllerine bağlı componentlerden erişim diye biliyroum
    LayoutComponent //LayoutCompenenti app.compenent.html de kullanacağımdan yani arada birden fala modül olduğundan bu geçişleri yapmam lazım
    // nasıl yapacam = ilk modülde componenti export edecem = sonraki alan modüllerde ise son alıp kullanan modüle kadar = modülü bir sonrakine export edecem.
  ]
})
export class LayoutModule { }
