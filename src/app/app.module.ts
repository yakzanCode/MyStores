import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { SaleComponent } from './sale/sale.component';
import { KidsComponent } from './kids/kids.component';
import { SideComponent } from './side/side.component';
import { FooterComponent } from './footer/footer.component';
import { HContainerComponent } from './h-container/h-container.component';
import { ItemsOsComponent } from './items-os/items-os.component';
import { ItemsNewComponent } from './items-new/items-new.component';
import { ItemsBestsellerComponent } from './items-bestseller/items-bestseller.component';
import { ItemBestsellerComponent } from './item-bestseller/item-bestseller.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TitleComponent } from './title/title.component';
import { NewComponent } from './new/new.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ShoesComponent } from './shoes/shoes.component';
import { ClothesComponent } from './clothes/clothes.component';
import { Home2Component } from './home2/home2.component';
import { H2ContainerComponent } from './h2-container/h2-container.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    ItemsComponent,
    ItemComponent,
    MenComponent,
    WomenComponent,
    SaleComponent,
    KidsComponent,
    SideComponent,
    FooterComponent,
    HContainerComponent,
    ItemsOsComponent,
    ItemsNewComponent,
    ItemsBestsellerComponent,
    ItemBestsellerComponent,
    TitleComponent,
    NewComponent,
    Navbar2Component,
    AccessoriesComponent,
    ShoesComponent,
    ClothesComponent,
    Home2Component,
    H2ContainerComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
