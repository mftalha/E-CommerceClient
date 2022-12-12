import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path : "", component: DashboardComponent} // burada path'i boş bıraktım çünkü zaten bu modülde tek component olduğu için dashport Modülüne istek geldiğinde olan componente yönlendir direk diye belirtiyorum.
    ])
  ]
})
export class DashboardModule { }
