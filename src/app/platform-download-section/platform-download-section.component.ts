import { Component } from '@angular/core';
import { QrCodeService } from '../qr-code.service';


@Component({
  selector: 'app-platform-download-section',
  standalone: true,
  templateUrl: './platform-download-section.component.html',
  styleUrls: ['./platform-download-section.component.scss'],
})
export class PlatformDownloadSectionComponent {
  constructor(private qrCodeService: QrCodeService) {}

  onDownloadClicked(platform: string) {
    console.log(`Download clicked for ${platform}`);
    this.qrCodeService.getQrCodeUrl(platform); // Appel de la méthode du service pour récupérer l'URL du QR code
  }
}