import { Component } from '@angular/core';
declare var $:any //jquery'in başarılı bir şekilde projeye dahil edildiğini anlayabiliyorum jqueryin doları ile.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';
}
$(document).ready(()=>{ //sayfa açıldığında jquery ile alert basıyoruz.
  alert("asd")
})
