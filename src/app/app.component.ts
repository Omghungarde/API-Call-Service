import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductserviceService } from './service/productservice.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productalllist:any;
  constructor(private productlist:ProductserviceService){}

  ngOnInit(){
    this.productlist.getProductList().subscribe((data:any)=>{
      console.log(data.products);
      this.productalllist=data.products;
    })
  }
}
