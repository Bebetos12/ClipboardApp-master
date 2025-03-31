import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlatformDownloadSectionComponent } from './platform-download-section/platform-download-section.component';
import { QrPopupComponent } from './qr-popup/qr-popup.component';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        AppComponent,
        PlatformDownloadSectionComponent,
        QrPopupComponent,
        HttpClientModule
    ],
    providers: [],
    //bootstrap: [AppComponent]
})
export class AppModule { }