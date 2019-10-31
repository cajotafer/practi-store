import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomValidators } from '../../../utils/validators';
import { ProductsService } from '../../../core/services/products/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productsService.createProduct(product)
        .subscribe(newProduct => {
          console.log(newProduct);
          this.router.navigate(['./admin/products']);
        });
    }
    console.log(this.form.value);
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required, CustomValidators.isValidPrice]],
      image: '',
      description: ['', [Validators.required]]
    });
    // this.form.valueChanges.subscribe(value => console.log(value));
  }

  get priceField() {
    return this.form.get('price');
  }
}
