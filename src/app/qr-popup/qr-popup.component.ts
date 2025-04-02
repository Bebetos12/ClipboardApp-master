import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-qr-popup',
  standalone: true,
  imports: [NgIf], // Add NgIf here
  templateUrl: './qr-popup.component.html',
  styleUrls: ['./qr-popup.component.scss'],
})
export class QrPopupComponent {
  @Input() showPopup: boolean = false;
  @Input() qrCodeUrl: string = '';
  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }
}
