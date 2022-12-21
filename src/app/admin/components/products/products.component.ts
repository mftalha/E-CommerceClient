import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';
import { BasketsComponent } from 'src/app/ui/components/baskets/baskets.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  constructor(private httpClientService: HttpClientService){

  }

  ngOnInit(): void {
    
    /*
    // apı tarafındaki tablo verilerinin buradaki karşılıgını =contract'ını oluşturmadan önce bu şekilde çalıştırdık. 
    this.httpClientService.get({
      controller: "products"
    }).subscribe(data => console.log(data)); //bu şekilde prodoct get methodunu çağırıyoruz.
    */

    // gelen json datayı artık contract karşılğında düzenliyecez.
    this.httpClientService.get<Product[]>({
      controller: "products"
    }).subscribe(data => 
      console.log(data)
      //data[0].name;
    ); //bu şekilde prodoct get methodunu çağırıyoruz.
    
    
    /*
    this.httpClientService.post({
      controller: "products"
     },{
       name:"Kalem",
       stock: 100,
       price: 15
     }).subscribe();
     */

     /*
     // update işlemi gerçekleşiyor ama bir hata alıyor : api tarafında galiba ilgilenecem. [MTS]
     this.httpClientService.put({
      controller: "products",
     },{
      id: "16000e21-61b5-4365-927c-e84ce86e495d",
      name: "Renkli kağıt",
      stock: 1500,
      price: 5.5
     }).subscribe();
     */

     /*
     //silme işlemimi gerçekleşiyor ama bir hata alıyor : api tarafında galiba ilgilenecem. [MTS]
     this.httpClientService.delete({
      controller: "products",
     },"e7677764-1a99-4d74-bd57-a8865a1ab11a").subscribe();
     */

     /*
     // burada'da dışarıdan farklı bir url li adrese request yollayıp : veri çekmeyi yaptık.
     this.httpClientService.get({
      @*
       bu şekildede çağırabilirim.
      baseUrl : "https://jsonplaceholder.typicode.com",
      controller: "posts"
      *@
     fullEndpoint: "https://jsonplaceholder.typicode.com/posts"
     }).subscribe(data => console.log(data));
     */
     
  }
  

}
