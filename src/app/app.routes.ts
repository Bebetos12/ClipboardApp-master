import { Routes } from '@angular/router';
import { AppComponent } from './app.component'; // If you want to route to the main app component
import { HeaderComponent } from './header/header.component'; // Example routing to other components
import { SnippetsSectionComponent } from './snippets-section/snippets-section.component';
import { AccessAnywhereSectionComponent } from './access-anywhere-section/access-anywhere-section.component';
import { WorkflowSectionComponent } from './workflow-section/workflow-section.component';
import { PartnerLogosComponent } from './partner-logos/partner-logos.component';
import { PlatformDownloadSectionComponent } from './platform-download-section/platform-download-section.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Default route to AppComponent
  { path: 'header', component: HeaderComponent }, // Example route to HeaderComponent
  { path: 'snippets', component: SnippetsSectionComponent },
  { path: 'access-anywhere', component: AccessAnywhereSectionComponent },
  { path: 'workflow', component: WorkflowSectionComponent },
  { path: 'partners', component: PartnerLogosComponent },
  { path: 'download', component: PlatformDownloadSectionComponent },
  { path: 'footer', component: FooterComponent },
  // Add more routes as needed
];