import {Routes} from '@angular/router';
import {PageComponent} from './components/page.component';
import {PageNotFoundComponent} from './components/page-not-found.component';

export const routes: Routes = [
  {path: '', component: PageComponent, data : {tab : 'Home'}},
  {path: 'hosting', component: PageComponent, data : {tab : 'Hosting'}},
  {path: 'websites', component: PageComponent, data : {tab : 'Websites'}},
  {path: 'webapps', component: PageComponent, data : {tab : 'Webapps'}},
  {path: 'portfolio', component: PageComponent, data : {tab : 'Portfolio'}},
  {path: 'contact', component: PageComponent, data : {tab : 'Contact'}},
  {path: '**', component: PageNotFoundComponent}
];
