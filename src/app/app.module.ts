import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ReferenceComponent } from './reference/reference.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'education', component: EducationComponent },
  { path: 'pagenotfound', component: PagenotfoundComponent },
  { path: 'reference', component: ReferenceComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    PagenotfoundComponent,
    ReferenceComponent,
    ContactComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
