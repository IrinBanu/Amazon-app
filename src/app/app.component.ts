import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CustomercareComponent } from './customercare/customercare.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductImageComponent } from './product-image/product-image.component';
import { TelevisionComponent } from './television/television.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkWithHref, RouterLinkActive, HeaderComponent, FooterComponent, HomeComponent, LoginComponent, CustomercareComponent, PageNotFoundComponent, ProductDetailsComponent, ProductImageComponent, TelevisionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'amazonapp';
}
