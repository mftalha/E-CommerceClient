import { Component } from '@angular/core';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private alertify: AlertifyService) { } //bu şekilde oluşturduğumuz alertfy servisini çağırıyoruz
  //constructor() { }
  ngOnInit(): void {
    //alertify.success('Ok');
    
  }

  
  m(){
    //this.alertify.message("merhaba", MessageType.Error, Position.BottomLeft,15); //sayfaya eklediğim servise erişmek için. == propertyler için nesne classı oluşturmadan önceki hali
    this.alertify.message("merhaba",{
       messageType: MessageType.Success,
       delay: 5,
       position: Position.TopRight

    });
    //this.alertify.message("merhaba", MessageType.Error, Position.BottomLeft,15,true); //sayfaya eklediğim servise erişmek için. // true = dismisother özelliğini aktif etmek için = bu alertfy açıldığında önceki bütün alertfyleri kapat demek.
  }
  d(){
    this.alertify.dismiss();
  }
  
}
