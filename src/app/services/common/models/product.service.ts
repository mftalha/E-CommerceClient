import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Create_Product } from '../../../contracts/create_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  //create(product: Create_Product, successCallBack?: any) { //spinner için == beklerken dönen şey
  create(product: Create_Product, successCallBack?: any, errorCallBack?: (errorMessage: string) => void) { // successCallBack == burda callBack fonksiyon mantığını kullandık : yani gönderilen sayfada import edilen kütüphane leri burada import etmeden orada verildiği şekilde kullandık.
    this.httpClientService.post({
      controller: "products" //action vermiyoruz : çünkü apide 1 tane post methodu var başka birine girmez zaten.
    }, product).subscribe(result => {
      successCallBack(); //CallBack fonskyionunu çağırıyorum //spinner için == beklerken dönen şey'i de çağıracam ilgili kütüphanenin angular 15 versiyonu çıkınca'
    }, //errorResponse => { // burda errorResponse diye kullanmadık çünkü gelen hatalar HttpErrorResponse türün de : alttaki gibi yazınca errorResponse. diyince bize error la ilgili herşeyi verecektir.
      (errorResponse: HttpErrorResponse) => { 
        const _error: Array<{ key: string, value: Array<string> }> = errorResponse.error; // _error'un türünü belirtirken debugger ile durdurup baktığımız hata dönüşündeki tiplere göre yazdık error diziydi : dizi aldık key : string di string aldık , value : array<string> di bizde öyle aldık.
        let message = "";
        _error.forEach((v, index) => {
          v.value.forEach((_v, _index) => {
            message += `${_v}<br>`;
          });
        });
        errorCallBack(message);
    });
  }
}

// bizim bu servisi oluşturma sebebimiz : product ile ilgili : veri çekme , yükleme , güncelleme gibi işlemleri product.componnet.ts sayfasında yapmanın doğru olmadığı için : burada yapacaz : oradan bu servisleri çağıracaz sadece.
