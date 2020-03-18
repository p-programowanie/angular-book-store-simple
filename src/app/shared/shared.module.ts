import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

const angularModules = [BrowserModule, HttpClientModule, CommonModule, ReactiveFormsModule, RouterModule];
const vendorModules = [TranslateModule];
const components = [HeaderComponent, FooterComponent];

@NgModule({
  imports: [...angularModules, ...vendorModules],
  exports: [...angularModules, ...vendorModules, ...components],
  declarations: [...components]
})
export class SharedModule { }
