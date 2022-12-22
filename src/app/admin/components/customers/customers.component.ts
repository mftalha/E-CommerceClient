import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService){
    super(spinner); // c# miras alınan sınıf üst sınıftaki constracter değerlerini : base diyerek veriyorken javada super() = ile verilir == bizde angular'da super()'i kullanacaz. == bu üst class constractrını çağrılan class dan verme mantığı obje oreanted mantığıdır. proğramdan bağımsız.
  }
  ngOnInit(): void {
    //this.showSpinner(SpinnerType.LineSpinClockwiseFade);
  }
}
