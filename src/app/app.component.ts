import { Component } from '@angular/core'; 
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any //jquery kütüphansini ilgili componente bağlı sayfalarda kullanabilmek için dolar işaretini burada build ediyiyorum. 
//jquery'in başarılı bir şekilde projeye dahil edildiğini anlayabiliyorum jqueryin doları ile.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';

  constructor(private toastrService: CustomToastrService) {
    /* == toastrService kullanımı.
    toastrService.message("Merhaba","Talha",{
      messageType : ToastrMessageType.Info,
      position : ToastrPosition.BottomCenter
    }); 
    toastrService.message("Merhaba","Talha",{
      messageType : ToastrMessageType.Error,
      position : ToastrPosition.TopLeft
    });
    toastrService.message("Merhaba","Talha",{
      messageType : ToastrMessageType.Success,
      position : ToastrPosition.TopCenter
    });
    toastrService.message("Merhaba","Talha",{
      messageType : ToastrMessageType.Warning,
      position : ToastrPosition.BottomLeft
    });
    */
  }
}


//$.get("https://localhost:7071/api/products",data =>{console.log(data)}) //api uygulammızdan istekde bulunuyoruz = cross politikalarını test etmek için == apide program.cs de cross politikalarını herkeze veya bu uygulamaya izin vermediğimde hata aldım. izin verdikten sonra apiden veri çekebildim buraya.

/* jquery testini yaptık.
$(document).ready(()=>{ //sayfa açıldığında jquery ile alert basıyoruz.
  alert("asd")
})
*/
