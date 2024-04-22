import { Component, OnInit, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import { ProductService } from '../../../components/products/product.service';
import { Router } from '@angular/router';
import { Product } from '../produt.model';

import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'


@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent implements OnInit {

  
  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
  }
  
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado!')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products']) 
  }
}
