
import { FallarrestorsComponent } from './pages/ppe/bycategory/fallarrestors/fallarrestors.component';
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
import { PagnationComponent } from './pages/pagnation/pagnation.component';
import { ShoppressComponent } from './pages/powertools/bycategories/shoppress/shoppress.component';
import { FueltransferpumpsComponent } from './pages/pumpingmachines/fueltransferpumps/fueltransferpumps.component';
import { SiliconesealantsComponent } from './pages/sealantadhesive/siliconesealants/siliconesealants.component';
import { PufoamsealantsComponent } from './pages/sealantadhesive/pufoamsealants/pufoamsealants.component';
import { EpoxyadhesivesComponent } from './pages/sealantadhesive/epoxyadhesives/epoxyadhesives.component';
import { ConstructionadhesivesComponent } from './pages/sealantadhesive/constructionadhesives/constructionadhesives.component';
import { WoodgluesComponent } from './pages/sealantadhesive/woodglues/woodglues.component';
import { ContactadhesivesComponent } from './pages/sealantadhesive/contactadhesives/contactadhesives.component';
import { WaterproofsealantsComponent } from './pages/sealantadhesive/waterproofsealants/waterproofsealants.component';
import { SpraypaintsComponent } from './pages/sealantadhesive/spraypaints/spraypaints.component';
import { GumsComponent } from './pages/sealantadhesive/gums/gums.component';
import { GluegunsComponent } from './pages/powertools/bycategories/glueguns/glueguns.component';
import { FireblanketsComponent } from './pages/safety_traffic/firesafety/fireblankets/fireblankets.component';
import { FireextinguishersComponent } from './pages/safety_traffic/firesafety/fireextinguishers/fireextinguishers.component';
import { SmokeFirealarmsComponent } from './pages/safety_traffic/firesafety/smoke-firealarms/smoke-firealarms.component';
import { FirehosecabinetComponent } from './pages/safety_traffic/firesafety/firehosecabinet/firehosecabinet.component';
import { FirehoseComponent } from './pages/safety_traffic/firesafety/firehose/firehose.component';
import { TrafficconesComponent } from './pages/safety_traffic/trafficsafety/trafficcones/trafficcones.component';
import { CautiontapesComponent } from './pages/safety_traffic/trafficsafety/cautiontapes/cautiontapes.component';
import { ConvexmirrorsComponent } from './pages/safety_traffic/trafficsafety/convexmirrors/convexmirrors.component';
import { InspectionmirrorsComponent } from './pages/safety_traffic/trafficsafety/inspectionmirrors/inspectionmirrors.component';
import { MetaldetectorsComponent } from './pages/safety_traffic/trafficsafety/metaldetectors/metaldetectors.component';
import { ReflectorsComponent } from './pages/safety_traffic/trafficsafety/reflectors/reflectors.component';
import { RoadbarriersComponent } from './pages/safety_traffic/trafficsafety/roadbarriers/roadbarriers.component';
import { SafetyvestsComponent } from './pages/safety_traffic/trafficsafety/safetyvests/safetyvests.component';
import { SpeedbumpsComponent } from './pages/safety_traffic/trafficsafety/speedbumps/speedbumps.component';
import { WarningsignsComponent } from './pages/safety_traffic/trafficsafety/warningsigns/warningsigns.component';
import { WheelchocksComponent } from './pages/safety_traffic/trafficsafety/wheelchocks/wheelchocks.component';
import { AircompressorsComponent } from './pages/workshopgarage/aircompressors/aircompressors.component';
import { CarcreepersComponent } from './pages/workshopgarage/carcreepers/carcreepers.component';
import { LaddersComponent } from './pages/workshopgarage/ladders/ladders.component';
import { ChainblocksandhoistsComponent } from './pages/workshopgarage/lifting/chainblocksandhoists/chainblocksandhoists.component';
import { DrumhandlingequimentsComponent } from './pages/workshopgarage/lifting/drumhandlingequiments/drumhandlingequiments.component';
import { EnginecranesComponent } from './pages/workshopgarage/lifting/enginecranes/enginecranes.component';
import { JackandliftsComponent } from './pages/workshopgarage/lifting/jackandlifts/jackandlifts.component';
import { LiftingbeltsComponent } from './pages/workshopgarage/lifting/liftingbelts/liftingbelts.component';
import { PalletetrucksComponent } from './pages/workshopgarage/lifting/palletetrucks/palletetrucks.component';
import { PalletstackersComponent } from './pages/workshopgarage/lifting/palletstackers/palletstackers.component';
import { TrolleysComponent } from './pages/workshopgarage/lifting/trolleys/trolleys.component';
import { PowerextensionandreelsComponent } from './pages/workshopgarage/powerextensionandreels/powerextensionandreels.component';
import { RotarypumpsComponent } from './pages/workshopgarage/rotarypumps/rotarypumps.component';
import { TestingbucketsComponent } from './pages/workshopgarage/testingbuckets/testingbuckets.component';
import { TirechangesComponent } from './pages/workshopgarage/wheelserviceequipment/tirechanges/tirechanges.component';
import { WheelalignmentguagesComponent } from './pages/workshopgarage/wheelserviceequipment/wheelalignmentguages/wheelalignmentguages.component';
import { WheelbalancersComponent } from './pages/workshopgarage/wheelserviceequipment/wheelbalancers/wheelbalancers.component';
import { FoldingladdersComponent } from './pages/workshopgarage/ladders/foldingladders/foldingladders.component';
import { ExtensionladdersComponent } from './pages/workshopgarage/ladders/extensionladders/extensionladders.component';
import { StepladdersComponent } from './pages/workshopgarage/ladders/stepladders/stepladders.component';
import { WorkbenchesComponent } from './pages/workshopgarage/workbenches/workbenches.component';
import { ToolssetComponent } from './pages/workshopgarage/toolsset/toolsset.component';
import { ToolscabinetComponent } from './pages/workshopgarage/toolscabinet/toolscabinet.component';
import { GreasebucketsComponent } from './pages/workshopgarage/greasebuckets/greasebuckets.component';
import { AutocompressorsComponent } from './pages/electricalequipments/autocompressors/autocompressors.component';
import { BatteriesComponent } from './pages/electricalequipments/batteries/batteries.component';
import { BatterychargersComponent } from './pages/electricalequipments/batterychargers/batterychargers.component';
import { BatterytestersComponent } from './pages/electricalequipments/batterytesters/batterytesters.component';
import { CablewiresandboostersComponent } from './pages/electricalequipments/cablewiresandboosters/cablewiresandboosters.component';
import { ExtensioncablewiresComponent } from './pages/electricalequipments/extensioncablewires/extensioncablewires.component';
import { GeneratorsComponent } from './pages/electricalequipments/generators/generators.component';
import { DesielgeneratorsComponent } from './pages/electricalequipments/generators/desielgenerators/desielgenerators.component';
import { InvertergeneratorsComponent } from './pages/electricalequipments/generators/invertergenerators/invertergenerators.component';
import { PetrolgeneratorsComponent } from './pages/electricalequipments/generators/petrolgenerators/petrolgenerators.component';
import { PlasmacuttersComponent } from './pages/electricalequipments/plasmacutters/plasmacutters.component';
import { WeldingmachinesComponent } from './pages/electricalequipments/weldingmachines/weldingmachines.component';
import { ArcweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/arcweldingmachines/arcweldingmachines.component';
import { MmaweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/mmaweldingmachines/mmaweldingmachines.component';
import { TigweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/tigweldingmachines/tigweldingmachines.component';
import { WeldingaccessoriesComponent } from './pages/electricalequipments/weldingmachines/weldingaccessories/weldingaccessories.component';
import { MigweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/migweldingmachines/migweldingmachines.component';
import { MeasuringandtestingComponent } from './pages/measuringandtesting/measuringandtesting.component';
import { FueltestingandmeasuringComponent } from './pages/measuringandtesting/fueltestingandmeasuring/fueltestingandmeasuring.component';
import { FlowmetersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/flowmeters/flowmeters.component';
import { FueltestingkitsComponent } from './pages/measuringandtesting/fueltestingandmeasuring/fueltestingkits/fueltestingkits.component';
import { HydrometersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/hydrometers/hydrometers.component';
import { MeasuringcansComponent } from './pages/measuringandtesting/fueltestingandmeasuring/measuringcans/measuringcans.component';
import { MeasuringscalesComponent } from './pages/measuringandtesting/measuringscales/measuringscales.component';
import { MeasuringcylindersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/measuringcylinders/measuringcylinders.component';
import { TestingpasteComponent } from './pages/measuringandtesting/fueltestingandmeasuring/testingpaste/testingpaste.component';
import { ThermometersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/thermometers/thermometers.component';
import { GeneralmeasuringinstrumentsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generalmeasuringinstruments.component';
import { CalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/calipers.component';
import { DigitalcalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/digitalcalipers/digitalcalipers.component';
import { VerniercalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/verniercalipers/verniercalipers.component';
import { ClampmetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/clampmeters/clampmeters.component';
import { DialindicatorsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/dialindicators/dialindicators.component';
import { GuagesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/guages/guages.component';
import { LaserdistancemetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/laserdistancemeters/laserdistancemeters.component';
import { MeasuringtapesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/measuringtapes/measuringtapes.component';
import { MeasuringwheelsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/measuringwheels/measuringwheels.component';
import { GeneralMetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generalmeters/generalmeters.component';
import { MicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/micrometers.component';
import { AnaloguemicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/analoguemicrometers/analoguemicrometers.component';
import { DigitalmicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/digitalmicrometers/digitalmicrometers.component';
import { MultimetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/multimeters/multimeters.component';
import { GeneralTestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generaltesters/generaltesters.component';
import { WaterandlabtestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/waterandlabtesters.component';
import { AlcoholtestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/alcoholtesters/alcoholtesters.component';
import { ConcretetestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/concretetesters/concretetesters.component';
import { WatertestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/watertesters/watertesters.component';
import { LeveltoolsComponent } from './pages/measuringandtesting/leveltools/leveltools.component';
import { DumpinglevelsComponent } from './pages/measuringandtesting/leveltools/dumpinglevels/dumpinglevels.component';
import { LaserlevelsComponent } from './pages/measuringandtesting/leveltools/laserlevels/laserlevels.component';
import { SurveytripodsComponent } from './pages/measuringandtesting/leveltools/surveytripods/surveytripods.component';
import { AnaloguescalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/analoguescales.component';
import { DigitalscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/digitalscales.component';
import { PhmetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/phmeters/phmeters.component';
import { PricingscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/pricingscales/pricingscales.component';
import { PocketscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/pocketscales/pocketscales.component';
import { CranesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/cranes/cranes.component';
import { HangingscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/hangingscales/hangingscales.component';
import { WeighbridgesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/weighbridges/weighbridges.component';
import { KitchenscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/kitchenscales/kitchenscales.component';
import { BathroomscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/bathroomscales/bathroomscales.component';
import { PlatformscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/platformscales/platformscales.component';
import { AnalyticalbalancesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/analyticalbalances/analyticalbalances.component';
import { SpringbalancesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/springbalances/springbalances.component';
import { MechanicalplatformscalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/mechanicalplatformscales/mechanicalplatformscales.component';
import { BeambalancesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/beambalances/beambalances.component';
import { SpiritlevelsComponent } from './pages/measuringandtesting/leveltools/spiritlevels/spiritlevels.component';
import { MoisturetestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/moisturetesters/moisturetesters.component';
import { DigitalthermometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/digitalthermometers/digitalthermometers.component';
import { InfraredthermometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/infraredthermometers/infraredthermometers.component';
import { AnaloguekitchenscalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/analoguekitchenscales/analoguekitchenscales.component';
import { HandtoolsandaccessoriesComponent } from './pages/handtoolsandaccessories/handtoolsandaccessories.component';
import { AllenkeysComponent } from './pages/handtoolsandaccessories/category/allenkeys/allenkeys.component';
import { BearingpullersComponent } from './pages/handtoolsandaccessories/category/bearingpullers/bearingpullers.component';
import { ChiselsandpunchesComponent } from './pages/handtoolsandaccessories/category/chiselsandpunches/chiselsandpunches.component';
import { CrimpingtoolsComponent } from './pages/handtoolsandaccessories/category/crimpingtools/crimpingtools.component';
import { DriversComponent } from './pages/handtoolsandaccessories/category/drivers/drivers.component';
import { FlaringtoolsComponent } from './pages/handtoolsandaccessories/category/flaringtools/flaringtools.component';
import { HammersandmalletsComponent } from './pages/handtoolsandaccessories/category/hammersandmallets/hammersandmallets.component';
import { HandrivetersComponent } from './pages/handtoolsandaccessories/category/handriveters/handriveters.component';
import { HandtoolsaccessoriesComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/handtoolsaccessories.component';
import { HandtoolsMeasuringtapesComponent } from './pages/handtoolsandaccessories/category/handtoolsmeasuringtapes/handtoolsmeasuringtapes.component';
import { WaterseperatorsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterseperators/waterseperators.component';
import { CuttingandgrindingdiscComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/cuttingandgrindingdisc/cuttingandgrindingdisc.component';
import { DrillbitsComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/drillbits/drillbits.component';
import { PolishingpadsandbuffersComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/polishingpadsandbuffers/polishingpadsandbuffers.component';
import { SandingpadsComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/sandingpads/sandingpads.component';
import { SawbladesComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/sawblades/sawblades.component';
import { ScrewdriverbitsComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/screwdriverbits/screwdriverbits.component';
import { PliersandcuttersComponent } from './pages/handtoolsandaccessories/category/pliersandcutters/pliersandcutters.component';
import { SawsComponent } from './pages/powertools/bycategories/saws/saws.component';
import { ScrewdriversComponent } from './pages/handtoolsandaccessories/category/screwdrivers/screwdrivers.component';
import { SocketsandratchetsComponent } from './pages/handtoolsandaccessories/category/socketsandratchets/socketsandratchets.component';
import { SpannersandwrenchesComponent } from './pages/handtoolsandaccessories/category/spannersandwrenches/spannersandwrenches.component';
import { TilescutterComponent } from './pages/handtoolsandaccessories/category/tilescutter/tilescutter.component';
import { ToolboxesComponent } from './pages/handtoolsandaccessories/category/toolboxes/toolboxes.component';
import { ToolsbagsComponent } from './pages/handtoolsandaccessories/category/toolsbags/toolsbags.component';
import { ToolssetsComponent } from './pages/handtoolsandaccessories/category/toolssets/toolssets.component';
import { UtilityknivesandbladesComponent } from './pages/handtoolsandaccessories/category/utilityknivesandblades/utilityknivesandblades.component';
import { ConstructionequipmentComponent } from './pages/constructionequipment/constructionequipment.component';
import { CompactorsComponent } from './pages/constructionequipment/compactors/compactors.component';
import { ConcretemixersComponent } from './pages/constructionequipment/concretemixers/concretemixers.component';
import { ConcretevibratorsComponent } from './pages/constructionequipment/concretevibrators/concretevibrators.component';
import { ConstructionsafetygearComponent } from './pages/constructionequipment/constructionsafetygear/constructionsafetygear.component';
import { DrumtrucksComponent } from './pages/constructionequipment/drumtrucks/drumtrucks.component';
import { JumpingrammersComponent } from './pages/constructionequipment/jumpingrammers/jumpingrammers.component';
import { PokerhosesComponent } from './pages/constructionequipment/pokerhoses/pokerhoses.component';
import { PowertrowelsComponent } from './pages/constructionequipment/powertrowels/powertrowels.component';
import { RodbendersComponent } from './pages/constructionequipment/rodbenders/rodbenders.component';
import { RopesComponent } from './pages/constructionequipment/ropes/ropes.component';
import { SteelbarcuttingmachinesComponent } from './pages/constructionequipment/steelbarcuttingmachines/steelbarcuttingmachines.component';
import { WheelbarrowsComponent } from './pages/constructionequipment/wheelbarrows/wheelbarrows.component';
import { PressurepumpsComponent } from './pages/pumpingmachines/pressurepumps/pressurepumps.component';
import { SubmersiblepumpsComponent } from './pages/pumpingmachines/submersiblepumps/submersiblepumps.component';
import { VacuumpumpsComponent } from './pages/pumpingmachines/vacuumpumps/vacuumpumps.component';
import { WaterpumpsComponent } from './pages/pumpingmachines/waterpumps/waterpumps.component';
import { CleaningandgardensuppliesComponent } from './pages/cleaningandgardensupplies/cleaningandgardensupplies.component';
import { BrushcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/brushcutters.component';
import { CordlessbruschcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/bycategory/cordlessbruschcutters/cordlessbruschcutters.component';
import { GasolinebrushcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/bycategory/gasolinebrushcutters/gasolinebrushcutters.component';
import { BrushcuttersaccessoriesComponent } from './pages/cleaningandgardensupplies/brushcutters/brushcuttersaccessories/brushcuttersaccessoriescomponent';
import { CleaningaccessoriesComponent } from './pages/cleaningandgardensupplies/cleaningaccessories/cleaningaccessories.component';
import { HoseComponent } from './pages/cleaningandgardensupplies/hose/hose.component';
import { HoseaccessoriesComponent } from './pages/cleaningandgardensupplies/hose/hoseaccessories/hoseaccessories.component';
import { PumphoseComponent } from './pages/cleaningandgardensupplies/hose/pumphose/pumphose.component';
import { WaterhoseComponent } from './pages/cleaningandgardensupplies/hose/waterhose/waterhose.component';
import { HandpushlawnmowersComponent } from './pages/cleaningandgardensupplies/lawnmowers/bycategory/handpushlawnmowers/handpushlawnmowers.component';
import { SelfpropelledlawnmowerComponent,} from './pages/cleaningandgardensupplies/lawnmowers/bycategory/selfpropelledlawnmower/selfpropelledlawnmower.component';
import { ScrubbersandsweepersComponent } from './pages/cleaningandgardensupplies/scrubbersandsweepers/scrubbersandsweepers.component';
import { VacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/vacuumcleaners.component';
import { CommercialvacummcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/commercialvacummcleaners/commercialvacummcleaners.component';
import { CyclonevacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/cyclonevacuumcleaners/cyclonevacuumcleaners.component';
import { WetanddryvacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/wetanddryvacuumcleaners/wetanddryvacuumcleaners.component';
import { LawnmowersComponent } from './pages/cleaningandgardensupplies/lawnmowers/lawnmowers.component';
import { ElectriclawnmowerComponent } from './pages/cleaningandgardensupplies/lawnmowers/bycategory/electriclawnmower/electriclawnmowers.component';
import { PressurehoseComponent } from './pages/cleaningandgardensupplies/hose/pressurehose/pressurehose.component';
import { PetrolpressureswashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/petrolpressureswashers/petrolpressureswashers.component';
import { IndustrialpressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/industrialpressurewashers/industrialpressurewashers.component';
import { CordlesspressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/cordlesspressurewashers/cordlesspressurewashers.component';
import { LifevestsComponent } from './pages/ppe/bycategory/lifesavingequipments/lifevests/lifevests.component';
import { SafetyhelmetsComponent } from './pages/ppe/bycategory/headprotections/safetyhelmets/safetyhelmets.component';
import { WeldinghelmetsComponent } from './pages/ppe/bycategory/headprotections/weldinghelmets/weldinghelmets.component';
import { FallarrestersComponent } from './pages/constructionequipment/fallarrestors/fallarresters.component';
import { HydraulicshoppressComponent } from './pages/workshopgarage/hydraulicshoppress/hydraulicshoppress.component';
import { CordlessimpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/cordlessimpactwrenches/cordlessimpactwrenches.component';
import { ElectricimpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/electricimpactwrenches/electricimpactwrenches.component';
import { PnuematicComponent } from './pages/powertools/bycategories/impactwrenches/pnuematic/pnuematic.component';
import { BandsawsComponent } from './pages/powertools/bycategories/saws/bandsaws/bandsaws.component';
import { ChainsawsComponent } from './pages/powertools/bycategories/saws/chainsaws/chainsaws.component';
import { CircularsawsComponent } from './pages/powertools/bycategories/saws/circularsaws/circularsaws.component';
import { JigsawsComponent } from './pages/powertools/bycategories/saws/jigsaws/jigsaws.component';
import { MitresawsComponent } from './pages/powertools/bycategories/saws/mitresaws/mitresaws.component';
import { ReciprocatingsawsComponent } from './pages/powertools/bycategories/saws/reciprocatingsaws/reciprocatingsaws.component';
import { TmplAstSwitchBlock } from '@angular/compiler';
import { TablesawsComponent } from './pages/powertools/bycategories/saws/tablesaws/tablesaws.component';
import { PneumaticjackhammersComponent } from './pages/powertools/bycategories/jackhammers/pneumaticjackhammers/pneumaticjackhammers.component';
import { DemolitionbreakersComponent } from './pages/powertools/bycategories/jackhammers/demolitionbreakers/demolitionbreakers.component';
import { GrindersComponent } from './pages/powertools/bycategories/grinders/grinders.component';
import { BenchgrindersComponent } from './pages/powertools/bycategories/grinders/benchgrinders/benchgrinders.component';
import { DiegrindersComponent } from './pages/powertools/bycategories/grinders/diegrinders/diegrinders.component';
import { MinigrindersComponent } from './pages/powertools/bycategories/grinders/minigrinders/minigrinders.component';
import { AnglegrindersComponent } from './pages/powertools/bycategories/grinders/anglegrinders/anglegrinders.component';
import { CordlessblowersComponent } from './pages/powertools/bycategories/blowers/cordlessblowers/cordlessblowers.component';
import { ElectricblowersComponent } from './pages/cleaningandgardensupplies/blowers/bycategory/electricblowers/electricblowers.component';
import { GasolineblowersComponent } from './pages/powertools/bycategories/blowers/gasolineblowers/gasolineblowers.component';



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
    SafetyhelmetsComponent,
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
    WeldinghelmetsComponent,
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
    PagnationComponent,
    ShoppressComponent,
    FueltransferpumpsComponent,
    SiliconesealantsComponent,
    PufoamsealantsComponent,
    EpoxyadhesivesComponent,
    ConstructionadhesivesComponent,
    WoodgluesComponent,
    ContactadhesivesComponent,
    WaterproofsealantsComponent,
    SpraypaintsComponent,
    GumsComponent,
    GluegunsComponent,
    FireblanketsComponent,
    FireextinguishersComponent,
    SmokeFirealarmsComponent,
    FirehosecabinetComponent,
    FirehoseComponent,
    TrafficconesComponent,
    CautiontapesComponent,
    ConvexmirrorsComponent,
    InspectionmirrorsComponent,
    MetaldetectorsComponent,
    ReflectorsComponent,
    RoadbarriersComponent,
    SafetyvestsComponent,
    WeldingaccessoriesComponent,
    SpeedbumpsComponent,
    TrafficconesComponent,
    WarningsignsComponent,
    WheelchocksComponent,
    AircompressorsComponent,
    CarcreepersComponent,
    LaddersComponent,
    LaddersComponent,
    ChainblocksandhoistsComponent,
    DrumhandlingequimentsComponent,
    EnginecranesComponent,
    JackandliftsComponent,
    LiftingbeltsComponent,
    PalletetrucksComponent,
    PalletstackersComponent,
    TrolleysComponent,
    PowerextensionandreelsComponent,
    RotarypumpsComponent,
    TestingbucketsComponent,
    WheellocksComponent,
    TirechangesComponent,
    WheelalignmentguagesComponent,
    WheelbalancersComponent,
    FoldingladdersComponent,
    ExtensionladdersComponent,
    StepladdersComponent,
    WorkbenchesComponent,
    ToolssetComponent,
    ToolscabinetComponent,
    GreasebucketsComponent,
    AutocompressorsComponent,
    BatteriesComponent,
    BatterychargersComponent,
    BatterytestersComponent,
    CablewiresandboostersComponent,
    ExtensioncablewiresComponent,
    FallarrestorsComponent,
    GeneratorsComponent,
    DesielgeneratorsComponent,
    FallarrestorsComponent,
    InvertergeneratorsComponent,
    PlasmacuttersComponent,
    WeldingmachinesComponent,
    ArcweldingmachinesComponent,
    MmaweldingmachinesComponent,
    TigweldingmachinesComponent,
    MigweldingmachinesComponent,
    WeldingaccessoriesComponent,
    PetrolgeneratorsComponent,
    MeasuringandtestingComponent,
    FueltestingandmeasuringComponent,
    FueltestingkitsComponent,
    HydrometersComponent,
    MeasuringcansComponent,
    TestingpasteComponent,
    ThermometersComponent,
    GeneralmeasuringinstrumentsComponent,
    CalipersComponent,
    DigitalcalipersComponent,
    VerniercalipersComponent,
    ClampmetersComponent,
    DialindicatorsComponent,
    GuagesComponent,
    LaserdistancemetersComponent,
    MeasuringtapesComponent,
    MeasuringwheelsComponent,
    GeneralMetersComponent,
    MicrometersComponent,
    AnaloguemicrometersComponent,
    DigitalmicrometersComponent,
    MultimetersComponent,
    GeneralTestersComponent,
    WaterandlabtestersComponent,
    AlcoholtestersComponent,
    ConcretetestersComponent,
    PhmetersComponent,
    TestingbucketsComponent,
    WatertestersComponent,
    LeveltoolsComponent,
    DumpinglevelsComponent,
    LaserlevelsComponent,
    SurveytripodsComponent,
    MeasuringscalesComponent,
    AnaloguescalesComponent,
    DigitalscalesComponent,
    MeasuringcylindersComponent,
    PricingscalesComponent,
    PocketscalesComponent,
    CranesComponent,
    HangingscalesComponent,
    WeighbridgesComponent,
    KitchenscalesComponent,
    BathroomscalesComponent,
    PlatformscalesComponent,
    AnalyticalbalancesComponent,
    SpringbalancesComponent,
    MechanicalplatformscalesComponent,
    BeambalancesComponent,
    SpiritlevelsComponent,
    DumpinglevelsComponent,
    SurveytripodsComponent,
    MoisturetestersComponent,
    FlowmetersComponent,

    WaterseperatorsComponent,
    DigitalthermometersComponent,
    InfraredthermometersComponent,
    AnaloguekitchenscalesComponent,
    HandtoolsandaccessoriesComponent,
    AllenkeysComponent,
    BearingpullersComponent,
    ChiselsandpunchesComponent,
    CrimpingtoolsComponent,
    DriversComponent,
    CrimpingtoolsComponent,
    FlaringtoolsComponent,
    HammersandmalletsComponent,
    HandrivetersComponent,
    HandtoolsaccessoriesComponent,
    AllenkeysComponent,
    CuttingandgrindingdiscComponent,
    DrillbitsComponent,
    PolishingpadsandbuffersComponent,
    SandingpadsComponent,
    SawbladesComponent,
    ScrewdriverbitsComponent,
    HandtoolsMeasuringtapesComponent,
    PliersandcuttersComponent,
    PuttyknifeComponent,
    SawsComponent,
    ScrewdriversComponent,
    SocketsandratchetsComponent,
    SpannersandwrenchesComponent,
    TilescutterComponent,
    ToolboxesComponent,
    ToolsbagsComponent,
    ToolssetsComponent,
    UtilityknivesandbladesComponent,
    AllenkeysComponent,
    ConstructionequipmentComponent,
    CompactorsComponent,
    ConcretemixersComponent,
    ConcretevibratorsComponent,
    ConstructionsafetygearComponent,
    DrumtrucksComponent,
    JumpingrammersComponent,
    PokerhosesComponent,
    PowertrowelsComponent,
    RodbendersComponent,
    RopesComponent,
    SteelbarcuttingmachinesComponent,
    WheelbarrowsComponent,
    PressurepumpsComponent,
    RotarypumpsComponent,
    SubmersiblepumpsComponent,
    VacuumpumpsComponent,
    WaterpumpsComponent,
    CleaningandgardensuppliesComponent,
    BrushcuttersComponent,
    CordlessbruschcuttersComponent,
    GasolinebrushcuttersComponent,
    BrushcuttersaccessoriesComponent,
    HoseComponent,
    HoseaccessoriesComponent,
    PressurehoseComponent,
    PetrolpressureswashersComponent,
    IndustrialpressurewashersComponent,
    CordlesspressurewashersComponent,
    PumphoseComponent,
    WaterhoseComponent,
    ElectriclawnmowerComponent,
    HandpushlawnmowersComponent,
    SelfpropelledlawnmowerComponent,
    ScrubbersandsweepersComponent,
    VacuumcleanersComponent,
    CommercialvacummcleanersComponent,
    CyclonevacuumcleanersComponent,
    WetanddryvacuumcleanersComponent,
    CleaningaccessoriesComponent,
    FallarrestorsComponent,
    LifevestsComponent,
    FallarrestersComponent,
    HydraulicshoppressComponent,
    CordlessimpactwrenchesComponent,
    ElectricimpactwrenchesComponent,
    PnuematicComponent,
    PneumaticjackhammersComponent,
    DemolitionbreakersComponent,
    BandsawsComponent,
    ChainsawsComponent,
    CircularsawsComponent,
    JigsawsComponent,
    MitresawsComponent,
    ReciprocatingsawsComponent,
    TablesawsComponent,
    GrindersComponent,
    BenchgrindersComponent,
    DiegrindersComponent,
    MinigrindersComponent,
    AnglegrindersComponent,
    CordlessblowersComponent,
    ElectricblowersComponent,
    GasolineblowersComponent



























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
