import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from '../../product_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Stationary';

  products!: Product[];

  constructor(private productService: ProductService) {
    // this.products = productService.getProducts();
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
