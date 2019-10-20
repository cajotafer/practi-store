import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
      .subscribe(products => this.products = products);
  }

  deleteProduct(id: string) {
    this.productsService.deteleProduct(id)
      .subscribe(response => {
        this.products = this.products.filter(product => product.id !== id);

        // const idx = this.products.findIndex(product => product.id === id);
        // this.products = this.deleteArrayItem(this.products, idx);
      });
  }

  // https://stackoverflow.com/questions/30304719/javascript-fastest-way-to-remove-object-from-array

  /* // Optimized way
  deleteArrayItem(array: any[], index: number) {
    const stop = array.length - 1;
    while (index < stop) {
      array[index] = array[++index];
    }
    array.pop();
    return array;
  } */
}
