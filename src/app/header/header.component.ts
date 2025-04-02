import { Component, Inject } from '@angular/core';
import { QrCodeService } from '../qr-code.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(@Inject(QrCodeService) private qrCodeService: QrCodeService) {}

  onDownloadClicked(platform: string) {
    console.log(`Download clicked for ${platform}`);
    this.qrCodeService.getQrCodeUrl(platform); // Appel de la méthode du service pour récupérer l'URL du QR code
  }
}
// Compare this snippet from clipboard/src/app/platform-download-section/platform-download-section.component.html:
// <div class="platform-download-section">
