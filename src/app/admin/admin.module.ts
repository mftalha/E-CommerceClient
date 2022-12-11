import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule //eğerki bir modül başka bir modülü kendi içinde benimsiyecekse onu import etmesi gerekiyor.
  ],
  exports: [ //layout modulden = layoutcomponenti dışarı aktardım ama bu modülün içinden o componente erişmek için yeterli değil 
    LayoutModule, //layoutmodule içinden export ettiğim comnponentlere erişim için layoutmodulu export ediyorum burda
    ComponentsModule // nerdeki component modül olduğu önemli = biz admindeki component modülü ekliyoruz buraya.
  ]
})
export class AdminModule { }

