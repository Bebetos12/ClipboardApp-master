import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request is to the API that requires an API key
    if (request.url.startsWith('https://api.api-ninjas.com/v1/qrcode?format=png&data=https://api-ninjas.com')) {
      const authRequest = request.clone({
        setHeaders: {
          'X-Api-Key': environment.apiKey, // Utilise la clé API provenant de environment
        },
      });

      return next.handle(authRequest);
    }

    // If it's not the API, just pass the request along
    return next.handle(request);
  }
}
