import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { ProductCrudComponent } from '../../../views/product-crud/product-crud.component';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, ProductCrudComponent, RouterOutlet, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
