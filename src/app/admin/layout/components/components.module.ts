import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule, // yönlendirme ve sayfaya yükleme komutlarını kullanacaksak html sayfalarından == bunu .ts ye eklememiz gerekiyor
    MatListModule
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }

//bu module = layout da kullanacağım componentler için.
// bu module = footer , header ,sedebar componentleri otomatik eklenmeliydi diye biliyorum.
