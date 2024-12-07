import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, ContactModule],
  exports: [HomeComponent],
})
export class HomeModule {}
