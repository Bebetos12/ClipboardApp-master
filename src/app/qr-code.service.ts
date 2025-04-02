import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QrCodeService {
  // Assurez-vous que le nom de la classe est correct
  private showPopupSubject = new BehaviorSubject<boolean>(false);
  showPopup$ = this.showPopupSubject.asObservable();

  private qrCodeUrlSubject = new BehaviorSubject<string>('');
  qrCodeUrl$ = this.qrCodeUrlSubject.asObservable();

  constructor(private http: HttpClient) {}

  getQrCodeUrl(platform: string) {
    const apiUrl = 'https://api.api-ninjas.com/v1/qrcode?format=png&data=https://api-ninjas.com'; // URL de votre API
    const data = platform === 'ios' ? 'https://example.com/ios' : 'https://example.com/mac'; // Remplacez par les données appropriées

    const params = new HttpParams().set('format', 'png').set('data', data);
    const headers = new HttpHeaders({ 'X-Api-Key': 'MgJ6buT0Hwz3/yNpxOJm/Q==0KA0234bPRexUMXg' }); // Remplacez par votre clé API

    this.http
      .get(apiUrl, { headers, params, responseType: 'blob' }) // Spécifiez responseType: 'blob'
      .subscribe(
        (response: Blob) => {
          const imageUrl = URL.createObjectURL(response); // Créez une URL à partir du blob
          this.qrCodeUrlSubject.next(imageUrl);
          this.showPopupSubject.next(true);
        },
        (error) => {
          console.error('Erreur lors de la récupération du QR code :', error);
        }
      );
  }

  closePopup() {
    this.showPopupSubject.next(false);
  }
}
