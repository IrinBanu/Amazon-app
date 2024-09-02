import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styles: ``
})
export class ProductDetailsComponent {
  CategoryName="Home Appliances"

  Category=["TV","Refrigerator","Washing Machine","Home Theater"]
}
