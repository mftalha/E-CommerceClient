import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../../base/base.component';
import { List_Product } from '../../../../contracts/list_product';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { ProductService } from '../../../../services/common/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseComponent implements OnInit  { //OnInit component ilk açıldığında çalışan method : galiba
  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertifyService: AlertifyService) {
    super(spinner)
  }


  displayedColumns: string[] = ['name', 'stock', 'price', 'createdDate', 'updatedDate'];
  dataSource: MatTableDataSource<List_Product> = null;
  @ViewChild(MatPaginator) paginator: MatPaginator;



  async getProducts() {
    this.showSpinner(SpinnerType.LineSpinClockwiseFade);
    const allProducts: { totalCount: number; products: List_Product[] } = await this.productService.read(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize: 5, () => this.hideSpinner(SpinnerType.LineSpinClockwiseFade), errorMessage => this.alertifyService.message(errorMessage, {
      dismissOthers: true,
      messageType: MessageType.Error,
      position: Position.TopRight
    }))
    this.dataSource = new MatTableDataSource<List_Product>(allProducts.products); // tabloya verdiğim veriler
    this.paginator.length = allProducts.totalCount; // tabloya verileri alttan sayfaya tıkladıkça getirdiğimizden : alttaki sayfa butonları aktif olsun diye : totalde bu kadar veri var diye belirtiyoruz. : yoksa mesela başta 5 veri geldiğinden aşşagıda 2. sayfa aktif olmuyor : yada 2. sayfaya geçiş butonu.
    //this.dataSource.paginator = this.paginator;
  }

  async pageChanged() {
   await this.getProducts();
  }

  async ngOnInit() {
    await this.getProducts()
  }

}


/*

                p.Id,
                p.Name,
                p.Stock,
                p.Price,
                p.CreatedDate,
                p.UpdatedDate

*/
