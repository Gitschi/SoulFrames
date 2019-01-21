import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { NotationsPage } from "../pages/notations/notations";
import { HowtousePage } from "../pages/howtouse/howtouse";
import { SupportPage } from "../pages/support/support";
import { NotesPage } from "./../pages/notes/notes";

import { FrameSheetPage } from "../pages/frame-sheet/frame-sheet";

import { CharService } from "../services/char.service";
import { MoveService } from "../services/move.service";
import { StanceService } from "../services/stance.service";
import { StringManipulationService } from "../services/string-manipulation.service";
import { FiltersComponent } from "../components/filters/filters";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotationsPage,
    HowtousePage,
    SupportPage,
    FrameSheetPage,
    NotesPage,
    FiltersComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotationsPage,
    HowtousePage,
    SupportPage,
    FrameSheetPage,
    NotesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CharService,
    MoveService,
    StanceService,
    StringManipulationService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
