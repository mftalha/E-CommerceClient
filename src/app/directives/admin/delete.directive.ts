import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../base/base.component';
import { ProductService } from '../../services/common/models/product.service';

declare var $ : any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  // ElementRef == direktif'i kullandığım html nesnesi ne ise otomatik gelmesini sağlar.
  // Renderer2 = gelen nesneye müdahale edebilmek , manupule etmek için kullandığımız yapı
  // HttpClientService = silme işlemini veritabanına yansıtmak için.
  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private productService: ProductService,
    private spinner: NgxSpinnerService
  ) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/delete.png");
    img.setAttribute("style", "cursor: pointer;"); // iconun üstüne geldiğinde el çıksın.
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img); // _renderer ile ilgili html'e ouşturduğumuz html'i yerleştiriyruz.
  }

  @Input() id: string; //list component.html de input olarak verilen id yi yakalayabilmek için burda id yi input olarak belirtiyoruz.
  @Output() callback: EventEmitter<any> = new EventEmitter() //EventEmitter = from '@angular/core' dan gelecek : !dikkat. //html sayfasından gelip burda yakaladığım output fonksiyonu : ismini html sayfasında ne verdiysem burada o isimle yakalamam gerekiyor = callback vermiştik ismini o yüzden burada bu isimle yakaladım.

  @HostListener("click") //oluşturulan nesneye tıklandığında alttaki methoda gir : bu method ismi ahmette olabilir. önemli olan bu dinleme.
  async onclick() {
    this.spinner.show(SpinnerType.LineSpinClockwiseFade); // delete.directive : yi base componentten türetmek solit prensiplerine aykırı olacağından : burada tekrar base componenette ayarladığımız düzeni ayarladık basitçe ordan çağırmak yerine.
    const td: HTMLTableCellElement = this.element.nativeElement; // HTMLTableCellElement == tablo td ye karşılık geliyor.
    await this.productService.delete(this.id); //ilgili veriyi veritabanında silmek için veritabanı işlemlerini yaptığım servisimi çağırıyorum.
    $(td.parentElement).fadeOut(2000, () => {
      this.callback.emit();
    }); // silme işlemini tr ile yapmam lazım o yüzden : td nin ebeveyni olan tr ye erişiyorum :: td.parentElement diyerek.
    
  }

  /*
    const img: HTMLImageElement = event.srcElement; //burdan img yi elde ediyorum
    // img.parentElement.parentElement :: burda img nin ebevyninden td yi : td nin ebeveyinden : tr yi elde ediyorum tr yi silerekde ilgili satırı kaldırabiliyorum : tablodan == silme için jquery'i' aşşağıda kullandım.
    $(img.parentElement.parentElement).fadeOut(2000); // jquery fadeOut ile 2 saniyede sil. == animasyon ile fadeOut = soldurmak
    */


}

// -- direktifi kullanabilmek için
// oluşturulan directif'i kullanılacağı modulde declare edilmesi gerkiyor.
// hangi html nesnesi içine konacaksa : ==  selector: '[appDelete]' == de belirtilen appDelete'nin ilgi html sayfasında ilgili html nesnesi içinde belirtilmesi gerekir: <td mat-cell *matCellDef="let element" appDelete> gibi.
// ilgili işlemler yapıldığında direktif sayfaya uygulanacaktır.
