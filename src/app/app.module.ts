import { SafetyshoesComponent } from './pages/ppe/bycategory/safetyshoes/safetyshoes.component';
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
import { ShopcategoriesComponent } from './pages/shops/shopcategories/shopcategories.component';
import { ProductdetailsComponent } from './pages/shops/productdetails/productdetails.component';
import { HandglovesComponent } from './pages/ppe/bycategory/handgloves/handgloves.component';
import { SafetybootsComponent } from './pages/ppe/bycategory/safetyboots/safetyboots.component';
import { SafetygooglesComponent } from './pages/ppe/bycategory/safetygoogles/safetygoogles.component';
import { CombokitsComponent } from './pages/powertools/bycategories/combokits/combokits.component';
import { SafetyharnessandlanyardsComponent } from './pages/ppe/bycategory/safetyharnessandlanyards/safetyharnessandlanyards.component';
import { FallarrestorsComponent } from './pages/constructionequipment/fallarrestors/fallarrestors.component';
import { BumpcapsComponent } from './pages/ppe/bycategory/headprotections/bumpcaps/bumpcaps.component';
import { FlashlightsComponent } from './pages/ppe/bycategory/flashlights/flashlights.component';
import { SafetyrainwearsComponent } from './pages/ppe/bycategory/safetyrainwears/safetyrainwears.component';
import { GasdetectorsComponent } from './pages/ppe/bycategory/gasdetectors/gasdetectors.component';
import { EmergencyeyewashComponent } from './pages/ppe/bycategory/emergencyeyewash/emergencyeyewash.component';
import { SecuritygearsComponent } from './pages/ppe/bycategory/securityandsurveillance/securitygears/securitygears.component';
import { StanchionsComponent } from './pages/ppe/bycategory/securityandsurveillance/stanchions/stanchions.component';
import { DisposablesComponent } from './pages/ppe/bycategory/clothing/disposables/disposables.component';
import { CoverallsComponent } from './pages/ppe/bycategory/clothing/coveralls/coveralls.component';
import { ReflectivevestsComponent } from './pages/ppe/bycategory/clothing/reflectivevests/reflectivevests.component';
import { LabcoatsComponent } from './pages/ppe/bycategory/clothing/labcoats/labcoats.component';
import { FireresistantwearsComponent } from './pages/ppe/bycategory/clothing/fireresistantwears/fireresistantwears.component';
import { ElectricpressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/electricpressurewashers/electricpressurewashers.component';

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
    ProductdetailsComponent,  
    HandglovesComponent,
    SafetybootsComponent,
    SafetyshoesComponent,
    SafetygooglesComponent,
    CombokitsComponent,
    SafetyharnessandlanyardsComponent,
    FallarrestorsComponent,
    BumpcapsComponent,
    FlashlightsComponent,
    SafetyrainwearsComponent,
    GasdetectorsComponent,
    EmergencyeyewashComponent,
    SecuritygearsComponent,
    StanchionsComponent,
    DisposablesComponent,
    ShopcategoriesComponent,
    CoverallsComponent,
    ReflectivevestsComponent,
    LabcoatsComponent,
    FireresistantwearsComponent,
    ElectricpressurewashersComponent
    

    
   
  
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
