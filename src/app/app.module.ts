import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BrowserModule } from '@angular/platform-browser';
import { InformationDialogComponent } from './common/information-dialog/information-dialog.component';
import { MainComponent } from './pages/main.component';
import { FooterComponent } from './partial/footer/footer.component';
import { HeaderComponent } from './partial/header/header.component';
import { MaterialModule } from './common/material/material.module';
import { MainModule } from './pages/main.module';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import{SwiperModule} from 'swiper/angular'
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    InformationDialogComponent,
    ProductlistComponent
  ],
  imports: [
    SwiperModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MainModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot({   // ToastrModule added
      timeOut: 3000,         // Duration in milliseconds
      positionClass: 'toast-top-right', // Position of the toast
      preventDuplicates: true, // Prevent duplicate toasts
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
