import { Injectable } from '@angular/core';
import { Create_Product } from '../../../contracts/create_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  //create(product: Create_Product, successCallBack?: any) { //spinner için == beklerken dönen şey
  create(product: Create_Product, successCallBack?: any) { // successCallBack == burda callBack fonksiyon mantığını kullandık : yani gönderilen sayfada import edilen kütüphane leri burada import etmeden orada verildiği şekilde kullandık.
    this.httpClientService.post({
      controller: "products" //action vermiyoruz : çünkü apide 1 tane post methodu var başka birine girmez zaten.
    }, product).subscribe(result => {
      successCallBack(); //CallBack fonskyionunu çağırıyorum //spinner için == beklerken dönen şey'i de çağıracam ilgili kütüphanenin angular 15 versiyonu çıkınca'
    });
  }
}

// bizim bu servisi oluşturma sebebimiz : product ile ilgili : veri çekme , yükleme , güncelleme gibi işlemleri product.componnet.ts sayfasında yapmanın doğru olmadığı için : burada yapacaz : oradan bu servisleri çağıracaz sadece.
