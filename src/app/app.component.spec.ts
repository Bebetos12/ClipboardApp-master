import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { QrCodeService } from './qr-code.service';
import { QrPopupComponent } from './qr-popup/qr-popup.component';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, HttpClientTestingModule, QrPopupComponent],
      providers: [QrCodeService],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'clipboard' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('clipboard');
  });

  it('should set showPopup to true when fetchQrCode is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const httpMock = TestBed.inject(HttpClientTestingModule);

    app.fetchQrCode('ios');

    expect(app.showPopup$).toBe(true);
  });

  it('should set showPopup to false when closeQrPopup is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.showPopup$ = true;
    app.closeQrPopup();

    expect(app.showPopup$).toBe(false);
  });

  it('should set the qrcode url when fetchQrCode is called', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const httpMock = TestBed.inject(HttpClientTestingModule);

    const mockResponse = { qrCodeUrl: 'test-url' };

    app.fetchQrCode('ios');

    expect(app.qrCodeUrl$).toBe('test-url');
  });
});
