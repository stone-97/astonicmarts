import { FallarrestorsComponent } from './pages/ppe/bycategory/fallarrestors/fallarrestors.component';


import { VacuumpumpsComponent } from './pages/pumpingmachines/vacuumpumps/vacuumpumps.component';
import { DrumtrucksComponent } from './pages/constructionequipment/drumtrucks/drumtrucks.component';
import { JumpingrammersComponent } from './pages/constructionequipment/jumpingrammers/jumpingrammers.component';
import { CategoryComponent } from './pages/handtoolsandaccessories/category/category.component';
import { ScrubbersandsweepersComponent } from './pages/cleaningandgardensupplies/scrubbersandsweepers/scrubbersandsweepers.component';
import { SpraygunsComponent } from './pages/powertools/bycategories/sprayguns/sprayguns.component';
import { ReciprocatingsawsComponent } from './pages/powertools/bycategories/saws/reciprocatingsaws/reciprocatingsaws.component';
import { ToolssetsComponent } from './pages/handtoolsandaccessories/category/toolssets/toolssets.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ShopcategoriesComponent } from './pages/shops/shopcategories/shopcategories.component';
import { ProductcheckoutComponent } from './pages/shops/productcheckout/productcheckout.component';
import { TrackorderComponent } from './pages/trackorder/trackorder.component';
import { ConfirmationComponent } from './pages/shops/confirmation/confirmation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog/blog.component';
import { BlogdetailsComponent } from './pages/blog/blogdetails/blogdetails.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductdetailsComponent } from './pages/shops/productdetails/productdetails.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { BybrandsComponent } from './pages/ppe/bybrands/bybrands.component';
import { BetaComponent } from './pages/ppe/bybrands/beta/beta.component';
import { DickiesComponent } from './pages/ppe/bybrands/dickies/dickies.component';
import { PortwestComponent } from './pages/ppe/bybrands/portwest/portwest.component';
import { RedwingsComponent } from './pages/ppe/bybrands/redwings/redwings.component';
import { SupersteelComponent } from './pages/ppe/bybrands/supersteel/supersteel.component';
import { PPeComponent } from './pages/ppe/ppe.component';
import { BoschComponent } from './pages/powertools/bybrands/bosch/bosch.component';
import { IngcoComponent } from './pages/powertools/bybrands/ingco/ingco.component';
import { MakitaComponent } from './pages/powertools/bybrands/makita/makita.component';
import { MaxmechComponent } from './pages/powertools/bybrands/maxmech/maxmech.component';
import { StanleyComponent } from './pages/powertools/bybrands/stanley/stanley.component';
import { TotalComponent } from './pages/powertools/bybrands/total/total.component';
import { CuttingmachinesComponent } from './pages/powertools/bycategories/cuttingmachines/cuttingmachines.component';
import { DrillsComponent } from './pages/powertools/bycategories/drills/drills.component';
import { GrindersComponent } from './pages/powertools/bycategories/grinders/grinders.component';
import { HeatgunsComponent } from './pages/powertools/bycategories/heatguns/heatguns.component';
import { ImpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/impactwrenches.component';
import { MixersComponent } from './pages/powertools/bycategories/mixers/mixers.component';
import { SandersComponent } from './pages/powertools/bycategories/sanders/sanders.component';
import { SawsComponent } from './pages/powertools/bycategories/saws/saws.component';
import { SealantadhesiveComponent } from './pages/sealantadhesive/sealantadhesive.component';
import { ConstructionadhesivesComponent } from './pages/sealantadhesive/constructionadhesives/constructionadhesives.component';
import { EpoxyadhesivesComponent } from './pages/sealantadhesive/epoxyadhesives/epoxyadhesives.component';
import { PufoamsealantsComponent } from './pages/sealantadhesive/pufoamsealants/pufoamsealants.component';
import { SiliconesealantsComponent } from './pages/sealantadhesive/siliconesealants/siliconesealants.component';
import { TilesadhesivesComponent } from './pages/sealantadhesive/tilesadhesives/tilesadhesives.component';
import { WoodgluesComponent } from './pages/sealantadhesive/woodglues/woodglues.component';
import { DewaltComponent } from './pages/powertools/bybrands/dewalt/dewalt.component';
import { ContactadhesivesComponent } from './pages/sealantadhesive/contactadhesives/contactadhesives.component';
import { TrafficsafetyComponent } from './pages/safety_traffic/trafficsafety/trafficsafety.component';
import { FiresafetyComponent } from './pages/safety_traffic/firesafety/firesafety.component';
import { FireblanketsComponent } from './pages/safety_traffic/firesafety/fireblankets/fireblankets.component';
import { FireextinguishersComponent } from './pages/safety_traffic/firesafety/fireextinguishers/fireextinguishers.component';
import { SmokeFirealarmsComponent } from './pages/safety_traffic/firesafety/smoke-firealarms/smoke-firealarms.component';
import { CautionsignsComponent } from './pages/safety_traffic/trafficsafety/cautionsigns/cautionsigns.component';
import { RoadbarriersComponent } from './pages/safety_traffic/trafficsafety/roadbarriers/roadbarriers.component';
import { SafetyvestsComponent } from './pages/safety_traffic/trafficsafety/safetyvests/safetyvests.component';
import { SpeedbumpsComponent } from './pages/safety_traffic/trafficsafety/speedbumps/speedbumps.component';
import { TrafficconesComponent } from './pages/safety_traffic/trafficsafety/trafficcones/trafficcones.component';
import { WarningsignsComponent } from './pages/safety_traffic/trafficsafety/warningsigns/warningsigns.component';
import { WheelchocksComponent } from './pages/safety_traffic/trafficsafety/wheelchocks/wheelchocks.component';
import { WorkshopgarageComponent } from './pages/workshopgarage/workshopgarage.component';
import { AircompressorsComponent } from './pages/workshopgarage/aircompressors/aircompressors.component';
import { PowerextensionandreelsComponent } from './pages/workshopgarage/powerextensionandreels/powerextensionandreels.component';
import { ToolscabinetComponent } from './pages/workshopgarage/toolscabinet/toolscabinet.component';
import { ToolssetComponent } from './pages/workshopgarage/toolsset/toolsset.component';
import { WorkbenchesComponent } from './pages/workshopgarage/workbenches/workbenches.component';
import { LaddersComponent } from './pages/workshopgarage/ladders/ladders.component';
import { ExtensionladdersComponent } from './pages/workshopgarage/ladders/extensionladders/extensionladders.component';
import { FoldingladdersComponent } from './pages/workshopgarage/ladders/foldingladders/foldingladders.component';
import { StepladdersComponent } from './pages/workshopgarage/ladders/stepladders/stepladders.component';
import { MeasuringandtestingComponent } from './pages/measuringandtesting/measuringandtesting.component';
import { FlowmetersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/flowmeters/flowmeters.component';
import { FueltestingandmeasuringComponent } from './pages/measuringandtesting/fueltestingandmeasuring/fueltestingandmeasuring.component';
import { FuelmetersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/fuelmeters/fuelmeters.component';
import { FueltestingkitsComponent } from './pages/measuringandtesting/fueltestingandmeasuring/fueltestingkits/fueltestingkits.component';
import { HydrometersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/hydrometers/hydrometers.component';
import { MeasuringcansComponent } from './pages/measuringandtesting/fueltestingandmeasuring/measuringcans/measuringcans.component';
import { MeasuringcylindersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/measuringcylinders/measuringcylinders.component';
import { PasteComponent } from './pages/measuringandtesting/fueltestingandmeasuring/paste/paste.component';
import { ThermometersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/thermometers/thermometers.component';
import { GeneralmeasuringinstrumentsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/generalmeasuringinstruments.component';
import { ClampmetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/clampmeters/clampmeters.component';

import { MeasuringtapesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/measuringtapes/measuringtapes.component';
import { MultimetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/multimeters/multimeters.component';
import { CalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/calipers.component';
import { DigitalcalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/digitalcalipers/digitalcalipers.component';
import { VerniercalipersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/calipers/verniercalipers/verniercalipers.component';
import { MicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/micrometers.component';
import { AnaloguemicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/analoguemicrometers/analoguemicrometers.component';
import { DigitalmicrometersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/micrometers/digitalmicrometers/digitalmicrometers.component';
import { LeveltoolsComponent } from './pages/measuringandtesting/leveltools/leveltools.component';
import { DumpinglevelsComponent } from './pages/measuringandtesting/leveltools/dumpinglevels/dumpinglevels.component';
import { LaserlevelsComponent } from './pages/measuringandtesting/leveltools/laserlevels/laserlevels.component';
import { SpiritlevelsComponent } from './pages/measuringandtesting/leveltools/spiritlevels/spiritlevels.component';
import { SurveytripodsComponent } from './pages/measuringandtesting/leveltools/surveytripods/surveytripods.component';
import { SafetyjoggersComponent } from './pages/ppe/bybrands/safetyjoggers/safetyjoggers.component';
import { ThreeMComponent } from './pages/ppe/bybrands/three-m/three-m.component';
import { UvexComponent } from './pages/ppe/bybrands/uvex/uvex.component';
import { BycategoryComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/bycategory.component';
import { PowertoolsComponent } from './pages/powertools/powertools.component';
import { CordeddrillsComponent } from './pages/powertools/bycategories/drills/cordeddrills/cordeddrills.component';
import { CordlessdrillsanddriversComponent } from './pages/powertools/bycategories/drills/cordlessdrillsanddrivers/cordlessdrillsanddrivers.component';
import { CoredrillsComponent } from './pages/powertools/bycategories/drills/coredrills/coredrills.component';
import { MagneticdrillsComponent } from './pages/powertools/bycategories/drills/magneticdrills/magneticdrills.component';
import { DrillpressesComponent } from './pages/powertools/bycategories/drills/drillpresses/drillpresses.component';
import { EdgebandingmachinesComponent } from './pages/powertools/bycategories/edgebandingmachines/edgebandingmachines.component';
import { GreasegunsComponent } from './pages/powertools/bycategories/greaseguns/greaseguns.component';
import { GunsandtrimmersComponent } from './pages/powertools/bycategories/gunsandtrimmers/gunsandtrimmers.component';
import { ImpulsesealersComponent } from './pages/powertools/bycategories/impulsesealers/impulsesealers.component';
import { AnglegrindersComponent } from './pages/powertools/bycategories/grinders/anglegrinders/anglegrinders.component';
import { BenchgrindersComponent } from './pages/powertools/bycategories/grinders/benchgrinders/benchgrinders.component';
import { DiegrindersComponent } from './pages/powertools/bycategories/grinders/diegrinders/diegrinders.component';
import { MinigrindersComponent } from './pages/powertools/bycategories/grinders/minigrinders/minigrinders.component';
import { NailersComponent } from './pages/powertools/bycategories/nailers/nailers.component';
import { PprComponent } from './pages/powertools/bycategories/ppr/ppr.component';
import { RoutersComponent } from './pages/powertools/bycategories/routers/routers.component';
import { BandsawsComponent } from './pages/powertools/bycategories/saws/bandsaws/bandsaws.component';
import { ChainsawsComponent } from './pages/powertools/bycategories/saws/chainsaws/chainsaws.component';
import { CircularsawsComponent } from './pages/powertools/bycategories/saws/circularsaws/circularsaws.component';
import { JigsawsComponent } from './pages/powertools/bycategories/saws/jigsaws/jigsaws.component';
import { TablesawsComponent } from './pages/powertools/bycategories/saws/tablesaws/tablesaws.component';
import { BlowersComponent } from './pages/powertools/bycategories/blowers/blowers.component';
import { CordlessblowersComponent } from './pages/powertools/bycategories/blowers/cordlessblowers/cordlessblowers.component';
import { ElectricblowersComponent } from './pages/powertools/bycategories/blowers/electricblowers/electricblowers.component';
import { GasolineblowersComponent } from './pages/powertools/bycategories/blowers/gasolineblowers/gasolineblowers.component';
import { CombokitsComponent } from './pages/powertools/bycategories/combokits/combokits.component';
import { GumsComponent } from './pages/sealantadhesive/gums/gums.component';
import { SpraypaintsComponent } from './pages/sealantadhesive/spraypaints/spraypaints.component';
import { WaterproofsealantsComponent } from './pages/sealantadhesive/waterproofsealants/waterproofsealants.component';
import { FirehoseComponent } from './pages/safety_traffic/firesafety/firehose/firehose.component';
import { FirehosecabinetComponent } from './pages/safety_traffic/firesafety/firehosecabinet/firehosecabinet.component';
import { CautiontapesComponent } from './pages/safety_traffic/trafficsafety/cautiontapes/cautiontapes.component';
import { InspectionmirrorsComponent } from './pages/safety_traffic/trafficsafety/inspectionmirrors/inspectionmirrors.component';
import { ConvexmirrorsComponent } from './pages/safety_traffic/trafficsafety/convexmirrors/convexmirrors.component';
import { MetaldetectorsComponent } from './pages/safety_traffic/trafficsafety/metaldetectors/metaldetectors.component';
import { ReflectorsComponent } from './pages/safety_traffic/trafficsafety/reflectors/reflectors.component';
import { CarcreepersComponent } from './pages/workshopgarage/carcreepers/carcreepers.component';
import { RotarypumpsComponent } from './pages/workshopgarage/rotarypumps/rotarypumps.component';
import { TestingbucketsComponent } from './pages/workshopgarage/testingbuckets/testingbuckets.component';
import { WheelserviceequipmentComponent } from './pages/workshopgarage/wheelserviceequipment/wheelserviceequipment.component';
import { TirechangesComponent } from './pages/workshopgarage/wheelserviceequipment/tirechanges/tirechanges.component';
import { WheelalignmentguagesComponent } from './pages/workshopgarage/wheelserviceequipment/wheelalignmentguages/wheelalignmentguages.component';
import { WheelbalancersComponent } from './pages/workshopgarage/wheelserviceequipment/wheelbalancers/wheelbalancers.component';
import { LpgcountingmetersComponent } from './pages/measuringandtesting/fueltestingandmeasuring/lpgcountingmeters/lpgcountingmeters.component';
import { BatterytestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/batterytesters/batterytesters.component';
import { DialindicatorsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/dialindicators/dialindicators.component';
import { GuagesComponent } from './pages/measuringandtesting/generalmeasuringinstruments/guages/guages.component';
import { LaserdistancemetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/laserdistancemeters/laserdistancemeters.component';
import { WaterandlabtestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/waterandlabtesters.component';
import { ConcretemetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/concretemeters/concretemeters.component';
import { MoisturetestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/moisturetesters/moisturetesters.component';
import { PhmetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/phmeters/phmeters.component';
import { WatertestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/watertesters/watertesters.component';
import { MeasuringscalesComponent } from './pages/measuringandtesting/measuringscales/measuringscales.component';
import { AnaloguescalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/analoguescales.component';
import { DigitalscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/digitalscales.component';
import { MeasuringwheelsComponent } from './pages/measuringandtesting/generalmeasuringinstruments/measuringwheels/measuringwheels.component';
import { MetersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/meters/meters.component';
import { ConstructionequipmentComponent } from './pages/constructionequipment/constructionequipment.component';
import { ConcretemixersComponent } from './pages/constructionequipment/concretemixers/concretemixers.component';
import { ConcretevibratorsComponent } from './pages/constructionequipment/concretevibrators/concretevibrators.component';
import { ConstructionsafetygearComponent } from './pages/constructionequipment/constructionsafetygear/constructionsafetygear.component';
import { PokerhosesComponent } from './pages/constructionequipment/pokerhoses/pokerhoses.component';
import { RodbendersComponent } from './pages/constructionequipment/rodbenders/rodbenders.component';
import { SteelbarcuttingmachinesComponent } from './pages/constructionequipment/steelbarcuttingmachines/steelbarcuttingmachines.component';
import { WheelbarrowsComponent } from './pages/constructionequipment/wheelbarrows/wheelbarrows.component';
import { RopesComponent } from './pages/constructionequipment/ropes/ropes.component';
import { CompactorsComponent } from './pages/constructionequipment/compactors/compactors.component';
import { PumpingmachinesComponent } from './pages/pumpingmachines/pumpingmachines.component';
import { FueltransferpumpsComponent } from './pages/pumpingmachines/fueltransferpumps/fueltransferpumps.component';
import { PressurepumpsComponent } from './pages/pumpingmachines/pressurepumps/pressurepumps.component';
import { SubmersiblepumpsComponent } from './pages/pumpingmachines/submersiblepumps/submersiblepumps.component';
import { WaterpumpsComponent } from './pages/pumpingmachines/waterpumps/waterpumps.component';
import { CleaningandgardensuppliesComponent } from './pages/cleaningandgardensupplies/cleaningandgardensupplies.component';
import { BrushcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/brushcutters.component';
import { CordlessbruschcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/bycategory/cordlessbruschcutters/cordlessbruschcutters.component';
import { GasolinebrushcuttersComponent } from './pages/cleaningandgardensupplies/brushcutters/bycategory/gasolinebrushcutters/gasolinebrushcutters.component';
import { AccessoriesComponent } from './pages/cleaningandgardensupplies/pressurewashers/accessories/accessories.component';
import { HoseComponent } from './pages/cleaningandgardensupplies/hose/hose.component';
import { HoseaccessoriesComponent } from './pages/cleaningandgardensupplies/hose/hoseaccessories/hoseaccessories.component';
import { PressurehoseComponent } from './pages/cleaningandgardensupplies/hose/pressurehose/pressurehose.component';
import { PumphoseComponent } from './pages/cleaningandgardensupplies/hose/pumphose/pumphose.component';
import { WaterhoseComponent } from './pages/cleaningandgardensupplies/hose/waterhose/waterhose.component';
import { LawnmowersComponent } from './pages/cleaningandgardensupplies/lawnmowers/lawnmowers.component';
import { ElectricComponent } from './pages/cleaningandgardensupplies/lawnmowers/bycategory/electric/electric.component';
import { HandpushComponent } from './pages/cleaningandgardensupplies/lawnmowers/bycategory/handpush/handpush.component';
import { SelfpropelledComponent } from './pages/cleaningandgardensupplies/lawnmowers/bycategory/selfpropelled/selfpropelled.component';
import { PrincegardenComponent } from './pages/cleaningandgardensupplies/lawnmowers/bybrands/princegarden/princegarden.component';
import { PressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/pressurewashers.component';
import { CordlesspressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/cordlesspressurewashers/cordlesspressurewashers.component';
import { ElectricpressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/electricpressurewashers/electricpressurewashers.component';
import { IndustrialpressurewashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/industrialpressurewashers/industrialpressurewashers.component';
import { PetrolpressureswashersComponent } from './pages/cleaningandgardensupplies/pressurewashers/bycategory/petrolpressureswashers/petrolpressureswashers.component';
import { KarcherComponent } from './pages/cleaningandgardensupplies/pressurewashers/bybrands/karcher/karcher.component';
import { VacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/vacuumcleaners.component';
import { CommercialvacummcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/commercialvacummcleaners/commercialvacummcleaners.component';
import { CyclonevacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/cyclonevacuumcleaners/cyclonevacuumcleaners.component';
import { WetanddryvacuumcleanersComponent } from './pages/cleaningandgardensupplies/vacuumcleaners/bycategory/wetanddryvacuumcleaners/wetanddryvacuumcleaners.component';
import { FarmequipmentsComponent } from './pages/farmequipments/farmequipments.component';
import { FarmtoolsComponent } from './pages/farmequipments/farmtools/farmtools.component';
import { FarmmachinesComponent } from './pages/farmequipments/farmmachines/farmmachines.component';
import { MsaComponent } from './pages/ppe/bybrands/msa/msa.component';
import { CordlessimpactwrenchesComponent } from './pages/powertools/bycategories/impactwrenches/cordlessimpactwrenches/cordlessimpactwrenches.component';
import { PnuematicComponent } from './pages/powertools/bycategories/impactwrenches/pnuematic/pnuematic.component';
import { ElectricalequipmentsComponent } from './pages/electricalequipments/electricalequipments.component';
import { AutocompressorsComponent } from './pages/electricalequipments/autocompressors/autocompressors.component';
import { BatteriesComponent } from './pages/electricalequipments/batteries/batteries.component';
import { BatterychargersComponent } from './pages/electricalequipments/batterychargers/batterychargers.component';
import { ExtensioncablewiresComponent } from './pages/electricalequipments/extensioncablewires/extensioncablewires.component';
import { GeneratorsComponent } from './pages/electricalequipments/generators/generators.component';
import { InvertergeneratorsComponent } from './pages/electricalequipments/generators/invertergenerators/invertergenerators.component';
import { PetrolgeneratorsComponent } from './pages/electricalequipments/generators/petrolgenerators/petrolgenerators.component';
import { PlasmacuttersComponent } from './pages/electricalequipments/plasmacutters/plasmacutters.component';
import { MigweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/migweldingmachines/migweldingmachines.component';
import { MmaweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/mmaweldingmachines/mmaweldingmachines.component';
import { TigweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/tigweldingmachines/tigweldingmachines.component';
import { WeldingaccessoriesComponent } from './pages/electricalequipments/weldingmachines/weldingaccessories/weldingaccessories.component';
import { WeldingmachinesComponent } from './pages/electricalequipments/weldingmachines/weldingmachines.component';
import { CablewiresandboostersComponent } from './pages/electricalequipments/cablewiresandboosters/cablewiresandboosters.component';
import { HandtoolsaccessoriesComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/handtoolsaccessories.component';
import { ChiselsandpunchesComponent } from './pages/handtoolsandaccessories/category/chiselsandpunches/chiselsandpunches.component';
import { CrimpingtoolsComponent } from './pages/handtoolsandaccessories/category/crimpingtools/crimpingtools.component';
import { DriversComponent } from './pages/handtoolsandaccessories/category/drivers/drivers.component';
import { FlaringtoolsComponent } from './pages/handtoolsandaccessories/category/flaringtools/flaringtools.component';
import { HammersandmalletsComponent } from './pages/handtoolsandaccessories/category/hammersandmallets/hammersandmallets.component';
import { HandrivetersComponent } from './pages/handtoolsandaccessories/category/handriveters/handriveters.component';
import { PliersandcuttersComponent } from './pages/handtoolsandaccessories/category/pliersandcutters/pliersandcutters.component';
import { SocketsandratchetsComponent } from './pages/handtoolsandaccessories/category/socketsandratchets/socketsandratchets.component';
import { SpannersandwrenchesComponent } from './pages/handtoolsandaccessories/category/spannersandwrenches/spannersandwrenches.component';
import { ToolsbagsComponent } from './pages/handtoolsandaccessories/category/toolsbags/toolsbags.component';
import { ScrewdriversComponent } from './pages/handtoolsandaccessories/category/screwdrivers/screwdrivers.component';
import { TilescutterComponent } from './pages/handtoolsandaccessories/category/tilescutter/tilescutter.component';
import { ToolboxesComponent } from './pages/handtoolsandaccessories/category/toolboxes/toolboxes.component';
import { UtilityknicesandbladesComponent } from './pages/handtoolsandaccessories/category/utilityknicesandblades/utilityknicesandblades.component';
import { DrillbitsComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/drillbits/drillbits.component';
import { PolishingpadsandbuffersComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/polishingpadsandbuffers/polishingpadsandbuffers.component';
import { SandingpadsComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/sandingpads/sandingpads.component';
import { SawbladesComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/sawblades/sawblades.component';
import { ScrewdriverbitsComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/screwdriverbits/screwdriverbits.component';
import { AllenkeysComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/allenkeys/allenkeys.component';
import { CoverallsComponent } from './pages/ppe/bycategory/clothing/coveralls/coveralls.component';
import { FireresistantwearsComponent } from './pages/ppe/bycategory/clothing/fireresistantwears/fireresistantwears.component';
import { FlashlightsComponent } from './pages/ppe/bycategory/flashlights/flashlights.component';
import { LabcoatsComponent } from './pages/ppe/bycategory/clothing/labcoats/labcoats.component';
import { RainwearsComponent } from './pages/ppe/bycategory/clothing/rainwears/rainwears.component';
import { ReflectivevestsComponent } from './pages/ppe/bycategory/clothing/reflectivevests/reflectivevests.component';
import { EmergencyeyewashComponent } from './pages/ppe/bycategory/emergencyeyewash/emergencyeyewash.component';
import { HandglovesComponent } from './pages/ppe/bycategory/handgloves/handgloves.component';
import { HeadprotectionsComponent } from './pages/ppe/bycategory/headprotections/headprotections.component';
import { BumpcapsComponent } from './pages/ppe/bycategory/headprotections/bumpcaps/bumpcaps.component';
import { FaceshieldsComponent } from './pages/ppe/bycategory/headprotections/faceshields/faceshields.component';
import { WeldinghelmetsComponent } from './pages/ppe/bycategory/headprotections/weldinghelmets/weldinghelmets.component';
import { LifesavingequipmentsComponent } from './pages/ppe/bycategory/lifesavingequipments/lifesavingequipments.component';
import { LifejacketsComponent } from './pages/ppe/bycategory/lifesavingequipments/lifejackets/lifejackets.component';
import { LifevestsComponent } from './pages/ppe/bycategory/lifesavingequipments/lifevests/lifevests.component';
import { EarmuffsComponent } from './pages/ppe/bycategory/respiratoryandhearing/earmuffs/earmuffs.component';
import { EarplugsComponent } from './pages/ppe/bycategory/respiratoryandhearing/earplugs/earplugs.component';
import { NosemasksComponent } from './pages/ppe/bycategory/respiratoryandhearing/nosemasks/nosemasks.component';
import { SafetybootsComponent } from './pages/ppe/bycategory/safetyboots/safetyboots.component';
import { SafetygooglesComponent } from './pages/ppe/bycategory/safetygoogles/safetygoogles.component';
import { SafetyhelmetsComponent } from './pages/ppe/bycategory/headprotections/safetyhelmets/safetyhelmets.component';
import { SafetyraincoatsandbootsComponent } from './pages/ppe/bycategory/safetyraincoatsandboots/safetyraincoatsandboots.component';
import { SafetyshoesComponent } from './pages/ppe/bycategory/safetyshoes/safetyshoes.component';
import { SpillkitsComponent } from './pages/ppe/bycategory/spillkits/spillkits.component';
import { FirstaidsComponent } from './pages/ppe/bycategory/firstaids/firstaids.component';
import { LifebuoyComponent } from './pages/ppe/bycategory/lifesavingequipments/lifebuoy/lifebuoy.component';
import { RespiratoryandhearingComponent } from './pages/ppe/bycategory/respiratoryandhearing/respiratoryandhearing.component';
import { SafetyhelmetsandlayardsComponent } from './pages/ppe/bycategory/safetyhelmetsandlayards/safetyhelmetsandlayards.component';
import { JackhammersComponent } from './pages/powertools/bycategories/jackhammers/jackhammers.component';
import { DemolitionbreakersComponent } from './pages/powertools/bycategories/jackhammers/demolitionbreakers/demolitionbreakers.component';
import { PneumaticjackhammersComponent } from './pages/powertools/bycategories/jackhammers/pneumaticjackhammers/pneumaticjackhammers.component';
import { PolishersComponent } from './pages/powertools/bycategories/polishers/polishers.component';
import { TrimmersComponent } from './pages/powertools/bycategories/trimmers/trimmers.component';
import { PlanersComponent } from './pages/powertools/bycategories/planers/planers.component';
import { WallchasersComponent } from './pages/powertools/bycategories/wallchasers/wallchasers.component';
import { ArcweldingmachinesComponent } from './pages/electricalequipments/weldingmachines/arcweldingmachines/arcweldingmachines.component';
import { BearingpullersComponent } from './pages/handtoolsandaccessories/category/bearingpullers/bearingpullers.component';
import { BeambalancesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/beambalances/beambalances.component';
import { MechanicalplatformscalesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/mechanicalplatformscales/mechanicalplatformscales.component';
import { SpringbalancesComponent } from './pages/measuringandtesting/measuringscales/analoguescales/springbalances/springbalances.component';
import { AnalyticalbalancesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/analyticalbalances/analyticalbalances.component';
import { CranesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/cranes/cranes.component';
import { HangingscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/hangingscales/hangingscales.component';
import { KitchenscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/kitchenscales/kitchenscales.component';
import { PocketscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/pocketscales/pocketscales.component';
import { PricingscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/pricingscales/pricingscales.component';
import { WeighbridgesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/weighbridges/weighbridges.component';
import { GasdetectorsComponent } from './pages/ppe/bycategory/gasdetectors/gasdetectors.component';
import { DisposablesComponent } from './pages/ppe/bycategory/clothing/disposables/disposables.component';
import { CleaningaccessoriesComponent } from './pages/cleaningandgardensupplies/cleaningaccessories/cleaningaccessories.component';
import { TestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/testers/testers.component';
import { LiftingComponent } from './pages/workshopgarage/lifting/lifting.component';
import { DrumhandlingequimentsComponent } from './pages/workshopgarage/lifting/drumhandlingequiments/drumhandlingequiments.component';
import { EnginecranesComponent } from './pages/workshopgarage/lifting/enginecranes/enginecranes.component';
import { JackandliftsComponent } from './pages/workshopgarage/lifting/jackandlifts/jackandlifts.component';
import { LiftingbeltsComponent } from './pages/workshopgarage/lifting/liftingbelts/liftingbelts.component';
import { PalletetrucksComponent } from './pages/workshopgarage/lifting/palletetrucks/palletetrucks.component';
import { PalletstackersComponent } from './pages/workshopgarage/lifting/palletstackers/palletstackers.component';
import { ChainblocksandhoistsComponent } from './pages/workshopgarage/lifting/chainblocksandhoists/chainblocksandhoists.component';
import { TrolleysComponent } from './pages/workshopgarage/lifting/trolleys/trolleys.component';
import { ShoppingcartComponent } from './pages/shops/shoppingcart/shoppingcart.component';
import { EdonComponent } from './pages/powertools/bybrands/edon/edon.component';
import { SecurityandsurveillanceComponent } from './pages/ppe/bycategory/securityandsurveillance/securityandsurveillance.component';
import { SecuritygearsComponent } from './pages/ppe/bycategory/securityandsurveillance/securitygears/securitygears.component';
import { StanchionsComponent } from './pages/ppe/bycategory/securityandsurveillance/stanchions/stanchions.component';
import { PagesComponent } from './pages/pages/pages.component';
import { DeliverypolicyComponent } from './pages/pages/deliverypolicy/deliverypolicy.component';
import { WarrantyandreturnsComponent } from './pages/pages/warrantyandreturns/warrantyandreturns.component';
import { TermsandconditionsComponent } from './pages/pages/termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './pages/pages/privacypolicy/privacypolicy.component';
import { FaqComponent } from './pages/pages/faq/faq.component';
import { SearchResultsComponent } from './pages/search/search-results/search-results.component';
import { ChemicalwearsComponent } from './pages/ppe/bycategory/clothing/chemicalwears/chemicalwears.component';
import { BagclosermachinesComponent } from './pages/powertools/bycategories/bagclosermachines/bagclosermachines.component';
import { WheellocksComponent } from './pages/workshopgarage/wheelserviceequipment/wheellocks/wheellocks.component';
import { DesielgeneratorsComponent } from './pages/electricalequipments/generators/desielgenerators/desielgenerators.component';
import { AlcoholtestersComponent } from './pages/measuringandtesting/generalmeasuringinstruments/waterandlabtesters/alcoholtesters/alcoholtesters.component';
import { PlatformscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/platformscales/platformscales.component';
import { BathroomscalesComponent } from './pages/measuringandtesting/measuringscales/digitalscales/bathroomscales/bathroomscales.component';
import { CuttingandgrindingdiscComponent } from './pages/handtoolsandaccessories/category/handtoolsaccessories/cuttingandgrindingdisc/cuttingandgrindingdisc.component';
import { PuttyknifeComponent } from './pages/handtoolsandaccessories/category/puttyknife/puttyknife.component';
import { DashboardComponent } from './pages/dashboard/dashboard/dashboard.component';



const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "index", component: HomeComponent},
  {path: "dash", component: DashboardComponent},
  {path: "search-results", component: SearchResultsComponent},
  {path: "shopcategories", component:ShopcategoriesComponent},
  {path:"shoppingcart", component:ShoppingcartComponent},
  {path: "productdetails", component: ProductdetailsComponent},
  {path: "productcheckout" , component: ProductcheckoutComponent},
  {path: "pages", component:PagesComponent},
  {path: "login", component: LoginComponent},
  {path: "trackorder", component: TrackorderComponent},
  {path: "faq", component:FaqComponent},
  {path: "termsandconditions", component: TermsandconditionsComponent},
  {path: "privacypolicy", component: PrivacypolicyComponent},
  {path: "deliverypolicy", component: DeliverypolicyComponent},
   {path: "warrantyandreturns", component: WarrantyandreturnsComponent},
  {path: "confirmation", component: ConfirmationComponent},
  {path: "contact", component: ContactComponent},
   {path: "blog", component: BlogComponent},
   {path: "blogdetails", component: BlogdetailsComponent},
  {path: "aboutus", component:AboutusComponent},


      // ppe
  {path: "ppe", component: PPeComponent},
  // bybrands
  {path: "bybrands", component: BybrandsComponent},
  {path: "beta", component: BetaComponent},
  {path: "dickies", component:DickiesComponent},
  {path: "portwest", component: PortwestComponent},
  {path: "redwings", component: RedwingsComponent},
  {path: "supersteel", component: SupersteelComponent},
  {path: "safetyjoggers", component:SafetyjoggersComponent},
  {path: "threem", component: ThreeMComponent},
  {path: "msa", component:MsaComponent},
  {path:"uvex", component:UvexComponent},

  //  Bycategory
   {path: "bycategory", component:BycategoryComponent},
   {path: "clothing", component: SupersteelComponent},
    {path: "disposables", component: DisposablesComponent},
    {path: "coveralls", component: CoverallsComponent},
   {path: "fireresistantsuits", component: FireresistantwearsComponent},
    {path: "labcoats", component: LabcoatsComponent},
   {path: "chemicalwears", component: ChemicalwearsComponent },
    {path: "rainwears", component:RainwearsComponent},
    {path: "reflectivevests", component:ReflectivevestsComponent},
     {path: "umbrellas", component: SupersteelComponent},
    {path: "emergencyeyewash", component: EmergencyeyewashComponent},
    {path: "fallarrestors", component: FallarrestorsComponent},
    {path: "flashlights", component: FlashlightsComponent},
    {path: "gasdetectors", component:GasdetectorsComponent},
     {path: "handgloves", component: HandglovesComponent},
    {path: "headprotections", component: HeadprotectionsComponent},
    {path: "flashlights", component: FlashlightsComponent},
     {path: "bumpcaps", component: BumpcapsComponent},
      {path: "faceshields", component: FaceshieldsComponent},
      {path: "safetyhelmets", component: SafetyhelmetsComponent},
       {path: "weldinghelmets", component: WeldinghelmetsComponent},
     {path: "lifesavingequipments", component: LifesavingequipmentsComponent},
     {path: "lifebuoys", component: LifebuoyComponent},
      {path: "lifejackets", component: LifejacketsComponent},
      {path: "lifevests", component: LifevestsComponent},
      {path: "respiratoryandhearings", component: RespiratoryandhearingComponent},
       {path: "earmuffs", component: EarmuffsComponent},
         {path: "earplugs", component: EarplugsComponent},
         {path: "nosemasks", component:NosemasksComponent},
          {path: "safetyboots", component: SafetybootsComponent},
           {path: "safetygoogles", component:SafetygooglesComponent},
            {path: "safetyharnessandlanyards", component: SafetyhelmetsandlayardsComponent},
             {path: "safetyhelmets", component: SafetyhelmetsComponent},
              {path: "safetyraincoatsandboots", component: SafetyraincoatsandbootsComponent},
               {path: "safetyshoes", component: SafetyshoesComponent},
               {path: "spillkits", component: SpillkitsComponent},
               {path: "firstaids", component: FirstaidsComponent},
             {path: "securityandsurveillance", component: SecurityandsurveillanceComponent}, 
              {path: "securitygears", component: SecuritygearsComponent},
               {path: "stanchions", component: StanchionsComponent},      
      // powertools
  {path:"powertools",component:PowertoolsComponent},
   {path:"bybrands", component:BybrandsComponent},
  {path:"bosch", component:BoschComponent},
  {path:"ingco", component:IngcoComponent},
  {path:"makita", component:MakitaComponent},
  {path:"maxmech", component:MaxmechComponent},
  {path:"stanley", component:StanleyComponent},
  {path:"total", component:TotalComponent},
  {path:"dewalt", component:DewaltComponent},
 {path:"edon", component:EdonComponent}, 
  
  // Bycategory
  {path:"cuttingmachines", component:CuttingmachinesComponent},
  {path:"drills", component:DrillsComponent},
  {path:"cordeddrills", component:CordeddrillsComponent},
  {path:"cordlessdrillsanddrivers", component:CordlessdrillsanddriversComponent},
  {path:"coredrilss", component:CoredrillsComponent}, 
  {path:"magneticdrills", component:MagneticdrillsComponent}, 
  {path:"drillpresses", component:DrillpressesComponent}, 
  {path:"blowers", component:BlowersComponent},  
  {path:"cordlessblowers", component:CordlessblowersComponent}, 
  {path:"electricblowers", component:ElectricblowersComponent},  
  {path:"gasolineblowers", component:GasolineblowersComponent},   
  {path:"rotaryhammerdrills", component:MagneticdrillsComponent},     
  {path:"grinders", component:GrindersComponent},
  {path:"anglegrinders", component:AnglegrindersComponent},   
  {path:"benchgrinders", component:BenchgrindersComponent}, 
  {path:"combokits", component:CombokitsComponent},  
  {path:"diegrinders", component:DiegrindersComponent},   
  {path:"minigrinders", component:MinigrindersComponent},     
  {path:"heatguns", component:HeatgunsComponent},
  {path:"mixers", component:MixersComponent},
  {path:"impactwrenches", component:ImpactwrenchesComponent},
  {path: "cordlessimpactwrenches", component: CordlessimpactwrenchesComponent},
  {path: "electricimpactwrenches", component: LifejacketsComponent},
  {path: "pneumatic", component: PnuematicComponent},
  {path:"mixers", component:MixersComponent},
  {path:"sanders", component:SandersComponent},
  {path:"polishers", component: PolishersComponent},
  {path:"saws", component:SawsComponent},
  {path: "bagclosermachines", component: BagclosermachinesComponent},
  {path:"planers", component:PlanersComponent},
  {path:"edgebandingmachines", component:EdgebandingmachinesComponent},   
  {path:"greaseguns", component:GreasegunsComponent},  
  {path:"gunsandtrimmers", component:GunsandtrimmersComponent},  
  {path:"impulsesealers", component:ImpulsesealersComponent},     
  {path:"nailers", component:NailersComponent}, 
  {path:"ppr", component:PprComponent},
   {path:"wallchasers", component:WallchasersComponent},  
  {path:"routers", component:RoutersComponent},  
  {path:"sprayguns", component:SpraygunsComponent}, 
  {path:"saws", component:SawsComponent},  
  {path:"bandsaws", component:BandsawsComponent},  
  {path:"chainsaws", component:ChainsawsComponent},
   {path:"trimmers", component:TrimmersComponent},  
    {path:"trimmers", component:TrimmersComponent},  
    {path:"planers", component:PlanersComponent},   
   {path:"jackhammers", component:JackhammersComponent},
   {path:"demolitionbreakers", component:DemolitionbreakersComponent},
  {path:"pneumaticjackhammers", component:PneumaticjackhammersComponent},
  {path:"circularsaws", component:CircularsawsComponent}, 
  {path:"jigsaws", component:JigsawsComponent}, 
  {path:"mitresaws", component:TablesawsComponent},           
  {path:"tablesaws", component:TablesawsComponent},
  {path: "reciprocatingsaws", component:ReciprocatingsawsComponent},  

  // sealantadhesive
   {path:"sealantadhesive", component:SealantadhesiveComponent},
    {path:"constructionadhesives", component:ConstructionadhesivesComponent},
     {path:"epoxyadhesives", component:EpoxyadhesivesComponent},
   {path:"pufoamsealants", component:PufoamsealantsComponent},
   {path:"siliconsealants", component:SiliconesealantsComponent},
    {path:"tilesadhesives",component: TilesadhesivesComponent},
     {path:"woodglues", component:WoodgluesComponent},
    {path:"gums", component:GumsComponent},
    {path:"contactadhesives", component:ContactadhesivesComponent},
    {path:"spraypaints", component:SpraypaintsComponent},
    {path:"waterproofsealants", component:WaterproofsealantsComponent},

        //  safety&traffic
    {path:"safety_traffic", component:TrafficsafetyComponent},
       // Fire safety
      {path: "firesafety", component:FiresafetyComponent},
      {path: "fireblankets", component:FireblanketsComponent},
       {path: "fireextinguishers", component:FireextinguishersComponent},
        {path: "smoke_firealarms", component:SmokeFirealarmsComponent},
       {path:"firehose", component:FirehoseComponent},
       {path:"firehosecabinet", component:FirehosecabinetComponent},

        // traffic safety
         {path: "cautionsigns", component:CautionsignsComponent},
         {path:"cautiontapes", component:CautiontapesComponent},
          {path: "roadbarriers", component:RoadbarriersComponent},
         {path: "safetyvests", component:SafetyvestsComponent},
         {path: "speedbumps", component:SpeedbumpsComponent},
         {path: "trafficcones", component:TrafficconesComponent},
         {path: "warningsigns", component:WarningsignsComponent},
         {path: "wheelchokes", component:WheelchocksComponent},
         {path:"inspectionmirrors", component:InspectionmirrorsComponent},
         {path:"convexmirrors", component:ConvexmirrorsComponent},
         {path:"metaldetectors", component:MetaldetectorsComponent},
         {path:"reflectors", component:ReflectorsComponent},
        {path:"wheelchocks", component:WheelchocksComponent}, 
        


       

        // WorkshopGarage
        {path:"workshopgarage", component:WorkshopgarageComponent},
         {path:"aircompressors", component:AircompressorsComponent},
         {path:"powerextensionandreels", component:PowerextensionandreelsComponent},
         {path:"toolscabinets", component:ToolscabinetComponent},
          {path:"toolssets", component:ToolssetComponent},
          {path:"workbenches", component:WorkbenchesComponent},
          {path: "greasebuckets", component: GreasegunsComponent},
          {path:"carcreepers", component:CarcreepersComponent},
            {path:"rotarypumps", component:RotarypumpsComponent}, 
           {path:"testingbuckets", component:TestingbucketsComponent},  
           
           {path:"lifting", component:LiftingComponent},  
            {path:"drumhandlingequipments", component:DrumhandlingequimentsComponent}, 
             {path:"enginecranes", component:EnginecranesComponent},   
             {path:"jackandlifts", component:JackandliftsComponent}, 
            {path:"liftingbelts", component:LiftingbeltsComponent},  
            {path:"pallettetrucks", component:PalletetrucksComponent}, 
             {path:"palletestackers", component:PalletstackersComponent}, 
            {path:"trolleys", component:TrolleysComponent}, 
             {path:"chainblocksandhoists", component:ChainblocksandhoistsComponent},  
              {path:"workbenches", component:WorkbenchesComponent}, 
              {path:"wheeelserviceequipment", component:WheelserviceequipmentComponent}, 
              {path:"tirechangers", component:TirechangesComponent},
              {path:"wheelsalignmentguages", component:WheelalignmentguagesComponent},
             {path:"wheelchock", component:WheelchocksComponent},
             {path: "wheellocks", component: WheellocksComponent},
              {path:"wheelbalancers", component:WheelbalancersComponent},
                

                  
              // ladder
               {path:"ladders", component:LaddersComponent},
                {path:"extensionladders", component:ExtensionladdersComponent},
                 {path:"foldingladders", component:FoldingladdersComponent},
                  {path:"stepladders", component:StepladdersComponent},



                  // Electricalequipments
              {path:"electricalequipments", component:ElectricalequipmentsComponent},
              {path:"autocompressors", component:AutocompressorsComponent},
               {path:"aircompressors", component:AircompressorsComponent},
              {path:"batteries", component:BatteriesComponent},
              {path:"batterychargers", component:BatterychargersComponent},
              {path:"batterytesters", component:BatterytestersComponent}, 
              {path:"extensioncablewires", component:ExtensioncablewiresComponent},  
              {path:"generators", component:GeneratorsComponent}, 
              {path:"desielgenerators", component:DesielgeneratorsComponent}, 
              {path:"invertergenerators", component:InvertergeneratorsComponent}, 
              {path:"petrolgenerators", component:PetrolgeneratorsComponent},      
              {path:"plasmacutters", component:PlasmacuttersComponent}, 
               {path:"cablewireandboosters", component:CablewiresandboostersComponent}, 
              {path:"weldingmachines", component:WeldingmachinesComponent},  
              {path:"migweldingmachines", component:MigweldingmachinesComponent},   
              {path:"mmaweldingmachines", component:MmaweldingmachinesComponent},  
              {path:"tigweldingmachines", component:TigweldingmachinesComponent},
              {path:"weldingaccessories", component:WeldingaccessoriesComponent},      
               {path:"arcweldingmachines", component:ArcweldingmachinesComponent},

                  // Measuringandtesting
                   {path:"measuringandtesting", component:MeasuringandtestingComponent},

                  // Fueltestingandmeasuring
                   {path:"fueltestingandmeasuring", component:FueltestingandmeasuringComponent},
                    {path:"flowmeters", component:FlowmetersComponent},
                     {path:"fuelmeters", component:FuelmetersComponent},
                       {path:"fueltestingkits", component:FueltestingkitsComponent},
                         {path:"hydrometers", component:HydrometersComponent},
                        {path:"measuringcans", component:MeasuringcansComponent},
                         {path:"measuringcylinders", component:MeasuringcylindersComponent},
                           {path:"paste", component:PasteComponent},
                           {path:"thermometers", component:ThermometersComponent},
                             {path:"lpgcountingmeters", component:LpgcountingmetersComponent},

                           //  GeneralmeasuringinstrumentsComponent
                   {path:"generalmeasuring", component:GeneralmeasuringinstrumentsComponent},
                     {path:"clampmeters", component:ClampmetersComponent},
                     {path:"batterytesters", component:BatterytestersComponent},
                    {path:"calipers", component:CalipersComponent},
                     {path:"digitalcalipers", component:DigitalcalipersComponent},
                     {path:"verniercalpers", component:VerniercalipersComponent},
                     {path:"measuringtapes", component:MeasuringtapesComponent},
                     {path:"measuringwheels", component:MeasuringwheelsComponent},
                      {path:"multimeters", component:MultimetersComponent},
                       {path:"micrometers", component:MicrometersComponent},
                       {path:"measuringtapes", component:MeasuringtapesComponent},
                       {path:"analoguemicromter", component:AnaloguemicrometersComponent}, 
                       {path:"digitalmicromters", component:DigitalmicrometersComponent}, 
                     {path:"dialindicators", component:DialindicatorsComponent}, 
                     {path:"guages", component:GuagesComponent},  
                     {path:"laserdistancemeters", component:LaserlevelsComponent},
                     {path:"meters",component:MetersComponent},
                    {path:"testers",component:TestersComponent},
                     {path:"waterandlabtesters", component:WaterandlabtestersComponent},
                     {path: "alcoholtesters", component: AlcoholtestersComponent},
                     {path:"concretemeters", component:ConcretemetersComponent},
                     {path:"moisturetester", component:MoisturetestersComponent},
                   {path:"phmeters", component:PhmetersComponent}, 
                   {path:"testingbuckets", component:TestingbucketsComponent}, 
                    {path:"watertesters", component:WatertestersComponent},
                    {path:"moisturetesters", component:MoisturetestersComponent}, 
                      // meaasuring scales 
                    {path:"measuringscales", component:MeasuringscalesComponent},
                    {path:"analoguescales", component:AnaloguescalesComponent},
                  {path:"beambalances", component:BeambalancesComponent},
                    {path:"mechanicalplatformscales", component:MechanicalplatformscalesComponent},
                   {path:"springbalancers", component:SpringbalancesComponent},             
                    {path:"digitalscalers", component:DigitalscalesComponent},
                  {path:"analyticalbalancers", component:AnalyticalbalancesComponent},
                  {path: "platformscales", component: PlatformscalesComponent},
                
                  {path:"bathroomscales", component:BathroomscalesComponent},
                  {path:"cranes", component:CranesComponent}, 
                  {path:"hangingscales", component:HangingscalesComponent},
                 {path:"kitchenscales", component:KitchenscalesComponent}, 
                 {path:"pocketscales", component:PocketscalesComponent}, 
                 {path:"pricingscales", component:PricingscalesComponent},
                 {path:"weighbridges", component:WeighbridgesComponent}, 
                    
                                  // levelingtools
                    {path:"leveltools", component:LeveltoolsComponent},
                    {path:"dumpinglevels", component:DumpinglevelsComponent},
                    {path:"laserlevels", component:LaserlevelsComponent},
                    {path:"spiritlevels", component:SpiritlevelsComponent},
                     {path:"surveytripods", component:SurveytripodsComponent},



                     

      // Handtoolsaccessories
         {path:"handtoolsandaccessories", component:HandtoolsaccessoriesComponent},
        //  Bycategory
         {path:"category", component:CategoryComponent},
          {path:"chieselsandpunches", component:ChiselsandpunchesComponent},
          {path:"crimpingtools", component:CrimpingtoolsComponent},
          {path:"drivers", component:DriversComponent},
          {path:"flaringtools", component:FlaringtoolsComponent},
          {path:"hammersandmallets", component:HammersandmalletsComponent},
          {path:"handriveters", component:HandrivetersComponent}, 
          {path:"pliersandcutters", component:PliersandcuttersComponent},   
          {path:"screwdrivers", component:ScrewdriversComponent},   
          {path:"socketsandratchets", component:SocketsandratchetsComponent}, 
          {path: 'chiselsandpunches', component: ChiselsandpunchesComponent},
          {path:"spannersandwrenches", component:SpannersandwrenchesComponent},   
          {path:"tilescutters", component:TilescutterComponent},  
          {path:"handsaws", component:SawsComponent}, 
          {path:"bearingpullers", component:BearingpullersComponent},      
          {path:"measuringtapes", component:MeasuringtapesComponent},         
          {path:"toolsbags", component:ToolsbagsComponent}, 
          {path:"toolsboxes", component:ToolboxesComponent},  
          {path:"utilityknivesandblades", component:UtilityknicesandbladesComponent},
          {path: "puttyknife", component:PuttyknifeComponent},
          {path:"handtoolsaccesories", component:HandtoolsaccessoriesComponent}, 
          {path:"cuttingandgrindingdisc", component:CuttingandgrindingdiscComponent}, 
          {path:"drillbits", component:DrillbitsComponent},  
          {path:"polishingpadsandbuffers", component:PolishingpadsandbuffersComponent},   
          {path:"sandingpads", component:SandingpadsComponent},    
          {path:"sawblades", component:SawbladesComponent},    
          {path:"screwdriverbits", component:ScrewdriverbitsComponent},  
           {path:"toolssets", component:ToolssetComponent}, 
           {path:"allenkeys", component:AllenkeysComponent}, 
          

          //  Bybrands
   {path:"bybrands", component:BybrandsComponent},
  {path:"bosch", component:BoschComponent},
  {path:"ingco", component:IngcoComponent},
  {path:"makita", component:MakitaComponent},
  {path:"maxmech", component:MaxmechComponent},
  {path:"stanley", component:StanleyComponent},
  {path:"total", component:TotalComponent},


  // Constructionequipment
  {path:"constructionequipment",component:ConstructionequipmentComponent},
  {path:"compactors", component:CompactorsComponent},
  {path:"concretevibrators", component:ConcretevibratorsComponent}, 
  {path:"constructionsafetygear", component:ConstructionsafetygearComponent}, 
   {path:"fallarrestors", component:FallarrestorsComponent},   
  {path:"pokerhoses", component:PokerhosesComponent},  
   {path:"powertrowels", component:PowertoolsComponent}, 
 {path:"jumpingrammers", component:JumpingrammersComponent},   
    {path:"rodbenders", component:RodbendersComponent},     
    {path:"steelbarcuttingmachines", component:SteelbarcuttingmachinesComponent},
     {path:"wheelbarrows", component:WheelbarrowsComponent},
       {path:"ropes", component:RopesComponent},    
      {path:"concretemixers", component:ConcretemixersComponent},
     {path:"Drumtrucks", component:DrumtrucksComponent},       
      
      // Pumpingmachines

         {path:"pumpingmachines", component:PumpingmachinesComponent}, 
         {path:"fueltransferpumps", component:FueltransferpumpsComponent}, 
         {path:"pressurepumps", component:PressurepumpsComponent}, 
         {path:"rotarypumps", component:RotarypumpsComponent},    
         {path:"submersiblepumps", component:SubmersiblepumpsComponent},  
         {path:"waterpumps", component:WaterpumpsComponent},
          {path:"vacuumpumps", component:VacuumpumpsComponent},   
         
             
         
        //  Cleaningandgardensupplies

           {path:"cleaniningandgardensupplies", component:CleaningandgardensuppliesComponent}, 
           {path:"blowers", component:BlowersComponent}, 
            // Bycategory
          {path:"cordlessblowers", component:CordlessblowersComponent},  
          {path:"electricblowers", component:ElectricblowersComponent},  
          {path:"gasolineblowers", component:GasolineblowersComponent},  
              
     //  Bybrands
     {path:"bybrands", component:BybrandsComponent},
    {path:"bosch", component:BoschComponent},
    {path:"ingco", component:IngcoComponent},
    {path:"maxmech", component:MaxmechComponent},
   {path:"total", component:TotalComponent},
              
          //  Brushcutters
            {path:"brushcutters", component:BrushcuttersComponent},
            {path:"accessories", component:AccessoriesComponent},

            //  Bycategory
            {path:"cordlessbrushcutters", component:CordlessbruschcuttersComponent}, 
              {path:"gasolinebrushcutters", component:GasolinebrushcuttersComponent}, 
          
                   //  Bybrands
   {path:"bybrands", component:BybrandsComponent},
  {path:"ingco", component:IngcoComponent},
  {path:"maxmech", component:MaxmechComponent},
  {path:"total", component:TotalComponent},
  

    //  hose
    {path:"hose", component:HoseComponent},
  {path:"hoseaccessories", component:HoseaccessoriesComponent},  
  {path:"pressurehose", component:PressurehoseComponent},
  {path:"pumphose", component:PumphoseComponent},
  {path:"waterhose", component:WaterhoseComponent},

          //  Lawnmowers
       {path:"lawnmowers", component:LawnmowersComponent},
       {path:"electric", component:ElectricComponent},
        {path:"handpush", component:HandpushComponent},
        {path:"selfpropelled", component:SelfpropelledComponent}, 
        // Bybrands
      {path:"ingco", component:IngcoComponent},
      {path:"princegarden", component:PrincegardenComponent},
      {path:"total", component:TotalComponent},


      // Scrubbersandsweepers
   {path:"scrubbersandsweepers", component:ScrubbersandsweepersComponent},
 {path:"cleaningaccessories", component:CleaningaccessoriesComponent},  

      // Pressurewashers
    {path:"pressurewashers", component:PressurewashersComponent},
  {path:"accessories", component:AccessoriesComponent},
  
          // Bycategory
  {path:"cordlesspressurewahers", component:CordlesspressurewashersComponent},
  {path:"electricpressurewashers", component:ElectricpressurewashersComponent},
 {path:"industrialpressurewashers", component:IndustrialpressurewashersComponent},
  {path:"petrolpressurewashers", component:PetrolpressureswashersComponent},

   
                   //  Bybrands
   {path:"bybrands", component:BybrandsComponent},
  {path:"ingco", component:IngcoComponent},
  {path:"maxmech", component:MaxmechComponent},
  {path:"total", component:TotalComponent},
   {path:"karcher", component:KarcherComponent},

          //  Vacuumcleaners
            {path:"vacuumecleaners", component:VacuumcleanersComponent},
              // Bycategory
              {path:"commercialvacuumcleaners", component:CommercialvacummcleanersComponent},
                {path:"cyclonevacuumcleaners", component:CyclonevacuumcleanersComponent},
                  {path:"wetanddryvacuumcleaners", component:WetanddryvacuumcleanersComponent},
                  
                     
                   //  Bybrands
   {path:"bybrands", component:BybrandsComponent},
  {path:"ingco", component:IngcoComponent},
  {path:"total", component:TotalComponent},

        //  Farmequipments
   {path:"farmequipments", component:FarmequipmentsComponent},
  {path:"farmtools", component:FarmtoolsComponent},
   {path:"farmmachines", component:FarmmachinesComponent},
  
  
  
  
  
  
  
  
  
              
        
        




  
  


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
