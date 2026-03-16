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
import { HeatgunsComponent } from './pages/powertools/bycategories/heatguns/heatguns.component';
import { HeadprotectionsComponent } from './pages/ppe/bycategory/headprotections/headprotections.component';
import { FaceshieldsComponent } from './pages/ppe/bycategory/headprotections/faceshields/faceshields.component';
import { SpillkitsComponent } from './pages/ppe/bycategory/spillkits/spillkits.component';
import { FirstaidsComponent } from './pages/ppe/bycategory/firstaids/firstaids.component';
import { NosemasksComponent } from './pages/ppe/bycategory/respiratoryandhearing/nosemasks/nosemasks.component';
import { EarmuffsComponent } from './pages/ppe/bycategory/respiratoryandhearing/earmuffs/earmuffs.component';
import { EarplugsComponent } from './pages/ppe/bycategory/respiratoryandhearing/earplugs/earplugs.component';
import { LifebuoyComponent } from './pages/ppe/bycategory/lifesavingequipments/lifebuoy/lifebuoy.component';
import { LifejacketsComponent } from './pages/ppe/bycategory/lifesavingequipments/lifejackets/lifejackets.component';
import { CuttingmachinesComponent } from './pages/powertools/bycategories/cuttingmachines/cuttingmachines.component';
import { MixersComponent } from './pages/powertools/bycategories/mixers/mixers.component';
import { PolishersComponent } from './pages/powertools/bycategories/polishers/polishers.component';
import { SpraygunsComponent } from './pages/powertools/bycategories/sprayguns/sprayguns.component';
import { NailersComponent } from './pages/powertools/bycategories/nailers/nailers.component';
import { GunsandtrimmersComponent } from './pages/powertools/bycategories/gunsandtrimmers/gunsandtrimmers.component';
import { ImpulsesealersComponent } from './pages/powertools/bycategories/impulsesealers/impulsesealers.component';
import { TrimmersComponent } from './pages/powertools/bycategories/trimmers/trimmers.component';
import { PlanersComponent } from './pages/powertools/bycategories/planers/planers.component';
import { PprComponent } from './pages/powertools/bycategories/ppr/ppr.component';
import { RoutersComponent } from './pages/powertools/bycategories/routers/routers.component';
import { SandersComponent } from './pages/powertools/bycategories/sanders/sanders.component';
import { EdgebandingmachinesComponent } from './pages/powertools/bycategories/edgebandingmachines/edgebandingmachines.component';
import { WallchasersComponent } from './pages/powertools/bycategories/wallchasers/wallchasers.component';
import { GreasegunsComponent } from './pages/powertools/bycategories/greaseguns/greaseguns.component';
import { CordeddrillsComponent } from './pages/powertools/bycategories/drills/cordeddrills/cordeddrills.component';
import { CordlessdrillsanddriversComponent } from './pages/powertools/bycategories/drills/cordlessdrillsanddrivers/cordlessdrillsanddrivers.component';
import { CoredrillsComponent } from './pages/powertools/bycategories/drills/coredrills/coredrills.component';
import { RotaryhammerdrillsComponent } from './pages/powertools/bycategories/drills/rotaryhammerdrills/rotaryhammerdrills.component';
import { MagneticdrillsComponent } from './pages/powertools/bycategories/drills/magneticdrills/magneticdrills.component';
import { DrillpressesComponent } from './pages/powertools/bycategories/drills/drillpresses/drillpresses.component';


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
    ElectricpressurewashersComponent,
    HeatgunsComponent,
    HeadprotectionsComponent,
    FaceshieldsComponent,
    SpillkitsComponent,
    FirstaidsComponent,
    NosemasksComponent,
    EarmuffsComponent,
    EarplugsComponent,
    FallarrestorsComponent,
    LifebuoyComponent,
    LifejacketsComponent,
    CuttingmachinesComponent,
    MixersComponent,
    PolishersComponent,
    SpraygunsComponent,
    BagclosermachinesComponent,
    NailersComponent,
    GunsandtrimmersComponent,
    TrimmersComponent,
    ImpulsesealersComponent,
    PlanersComponent,
    PprComponent,
    RoutersComponent,
    SandersComponent,
    EdgebandingmachinesComponent,
    WallchasersComponent,
    GreasegunsComponent,
    CordeddrillsComponent,
    CordlessdrillsanddriversComponent,
    CoredrillsComponent,
    RotaryhammerdrillsComponent,
    MagneticdrillsComponent,
    DrillpressesComponent,
    

    
   
  
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
