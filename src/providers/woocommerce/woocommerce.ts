import { Injectable } from '@angular/core';
import * as WC from 'woocommerce-api';


@Injectable()
export class WoocommerceProvider {

  Woocommerce: any;
  Woocommercev3: any;

  constructor() {
    this.Woocommerce = WC({
      url: "http://amitkolloldey.com/devmax",
      consumerKey: "ck_ccdee6dbe5d6ec8a644a450f2d3aaeec16b2c15f",
      consumerSecret: "cs_ed137554cdb8787a6b26eb5e4f222718b68e4341"
    });

    this.Woocommercev3 = WC({
      url: "http://amitkolloldey.com/devmax",
      consumerKey: "ck_ccdee6dbe5d6ec8a644a450f2d3aaeec16b2c15f",
      consumerSecret: "cs_ed137554cdb8787a6b26eb5e4f222718b68e4341",
      wpAPI: true,
      version: "wc/v3"
    });
  }

  init(v3?: boolean){
    if(v3 == true){
      return this.Woocommercev3;
    } else {
      return this.Woocommerce;
    }
  }

}
