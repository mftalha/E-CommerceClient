import { Component } from '@angular/core';
import { Create_Product } from '../../../../contracts/create_product';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { ProductService } from '../../../../services/common/models/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  /*constructor(spiner: NgxSpinnerService, private productService: ProductService) {
   super(spiner)   //spinner için == beklerken dönen şey == 1 saniyeden fazla sürdüğünde gösterme gibi bir mantığı var galiba ondan eğer 1 saniyeden kısa sürerse spining görünmez.
  }
*/
  constructor(private productService: ProductService, private alertfy: AlertifyService) { }

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {

    // this.showSpinner(SpinnerType.BallAtom); //spinner için == beklerken dönen şey

    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    /*this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.BallAtom);
      this.alertify.message("Ürün başarıyla eklenmiştir.", {
        dis
      });
    }); //spinner için == beklerken dönen şey
    */
    this.productService.create(create_product, () => { // burda () == yapısı ile callback fonksiyonunu kullanıyoruz. : açıklaması gittiği sayfada var.
      this.alertfy.message("Ürün başarıyla eklenmiştir.", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
    });
  }
}
