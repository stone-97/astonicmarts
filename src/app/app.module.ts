import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

// import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SharedComponent } from './shared/shared.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SliderComponent } from './pages/slider/slider.component';
import { SealantadhesiveComponent } from './pages/sealantadhesive/sealantadhesive.component';
import { WorkshopgarageComponent } from './pages/workshopgarage/workshopgarage.component';
import { LoginComponent } from './pages/pages/login/login.component';
import { TrackorderComponent } from './pages/pages/trackorder/trackorder.component';
import { DeliverypolicyComponent } from './pages/pages/deliverypolicy/deliverypolicy.component';
import { WarrantyandreturnsComponent } from './pages/pages/warrantyandreturns/warrantyandreturns.component';
import { FormsModule } from '@angular/forms';
import { TermsandconditionsComponent } from './pages/pages/termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './pages/pages/privacypolicy/privacypolicy.component';
import { FaqComponent } from './pages/pages/faq/faq.component';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { SearchResultsComponent } from './pages/search/search-results/search-results.component';
import { ChemicalwearsComponent } from './pages/ppe/bycategory/clothing/chemicalwears/chemicalwears.component';
import { BagclosermachinesComponent } from './pages/powertools/bycategories/bagclosermachines/bagclosermachines.component';
import { WheellocksComponent } from './pages/workshopgarage/wheelserviceequipment/wheellocks/wheellocks.component';
import { PuttyknifeComponent } from './pages/handtoolsandaccessories/category/puttyknife/puttyknife.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    AboutusComponent,
    SharedComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SliderComponent,
    SealantadhesiveComponent,
    WorkshopgarageComponent,
    LoginComponent,
    TrackorderComponent,
    DeliverypolicyComponent,
    WarrantyandreturnsComponent,
    TermsandconditionsComponent,
    PrivacypolicyComponent,
    FaqComponent,
    SearchBarComponent,
    SearchResultsComponent,
    ChemicalwearsComponent,
    BagclosermachinesComponent,
    WheellocksComponent,
    PuttyknifeComponent,
    BrandsComponent,
    DashboardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     FormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
