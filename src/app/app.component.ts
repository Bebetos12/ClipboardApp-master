import { Component } from '@angular/core';
import { QrPopupComponent } from './qr-popup/qr-popup.component';
import { FooterComponent } from './footer/footer.component';
import { PlatformDownloadSectionComponent } from './platform-download-section/platform-download-section.component';
import { PartnerLogosComponent } from './partner-logos/partner-logos.component';
import { AccessAnywhereSectionComponent } from './access-anywhere-section/access-anywhere-section.component';
import { WorkflowSectionComponent } from './workflow-section/workflow-section.component';
import { SnippetsSectionComponent } from './snippets-section/snippets-section.component';
import { HeaderComponent } from './header/header.component';
import { QrCodeService } from './qr-code.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    QrPopupComponent,
    FooterComponent,
    PlatformDownloadSectionComponent, // Corrected import
    PartnerLogosComponent,
    AccessAnywhereSectionComponent,
    WorkflowSectionComponent,
    SnippetsSectionComponent,
    HeaderComponent,
    CommonModule,
  ],
})
export class AppComponent {
  showPopup$: any;
  qrCodeUrl$: any;
  fetchQrCode: any;
  title: any;
  constructor(private qrCodeService: QrCodeService) {
    this.showPopup$ = this.qrCodeService.showPopup$;
    this.qrCodeUrl$ = this.qrCodeService.qrCodeUrl$;
  }

  showQRCode(platform: string) {
    // Corrected method signature
    // Example (using a placeholder):
    if (platform === 'ios') {
      this.qrCodeUrl$ = 'https://api.api-ninjas.com/v1/qrcode?format=png&data=https://api-ninjas.com'; // Replace with actual URL
    } else if (platform === 'mac') {
      this.qrCodeUrl$ = ' https://api.api-ninjas.com/v1/qrcode?format=png&data=https://api-ninjas.com'; // Replace with actual URL
    } else {
      console.error(`Unknown platform: ${platform}`);
    }

    this.showPopup$ = true;
  }

  closeQrPopup() {
    this.showPopup$ = false;
  }
}
