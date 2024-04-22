import { ProductService } from '../../products/product.service';
import { Product } from '../../../views/product/produt.model';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatTableModule } from '@angular/material/table'

@Component({
  selector: 'app-product-read',
  standalone: true,
  imports: [RouterLink, MatTableModule],
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  // @ts-ignore
  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products
    })
  }

}
