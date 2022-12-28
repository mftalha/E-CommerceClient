import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Create_Product } from '../../../contracts/create_product';
import { List_Product } from '../../../contracts/list_product';
import { HttpClientService } from '../http-client.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService: HttpClientService) { }

  //create(product: Create_Product, successCallBack?: any) { //spinner için == beklerken dönen şey
  create(product: Create_Product, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) { // successCallBack == burda callBack fonksiyon mantığını kullandık : yani gönderilen sayfada import edilen kütüphane leri burada import etmeden orada verildiği şekilde kullandık.
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

  //biz veriyi buraya çekecez gerekli kontrolleri yapacaz sonra gerekli kullanılcak componente yollıyacaz
  async read(page: number = 0, size: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void): Promise<{ totalCount: number; products: List_Product[] }>  { // asyncron method olduğundan geri döndürmeyi Promise ile yapıyoruz : x# daki task
   // await this.httpClientService.get<List_Product[]>({ // : await tüm verinin çekilmesini bekliyeceğinden await ile kullanmıyoruz : çünkü biz araya girip kontroller yapacaz : validation kontrolleri mesela
    const promiseData: Promise<{ totalCount: number; products: List_Product[] }> = this.httpClientService.get<{ totalCount: number; products: List_Product[] }>({
      controller: "products",
      queryString: `page=${page}&size=${size}`
    }).toPromise(); //promise :: c# daki = task'a benzer == veri dönene kadar bekler.

    promiseData.then(d => successCallBack()) //burda biz veri tamamen gelmeden geldiği kadarı doğru geldiyse buraya girecek
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message)) // burda gelen verinin tamamı gelmeden geldiği kadarı kısmında hata varsa buraya girecek

    return await promiseData; //verinin tamamı geldiğinde geri döndür : gelen veriyi
  }

  //silme işlemi için.
  async delete(id: string) {
    const deleteObserve: Observable<any> = this.httpClientService.delete<any>({
      controller: "products"
    }, id);

    await firstValueFrom(deleteObserve); // deleteObserve içindeki işlemi bekliyecek burda. = asenkron olarak
  }
}

// bizim bu servisi oluşturma sebebimiz : product ile ilgili : veri çekme , yükleme , güncelleme gibi işlemleri product.componnet.ts sayfasında yapmanın doğru olmadığı için : burada yapacaz : oradan bu servisleri çağıracaz sadece.
