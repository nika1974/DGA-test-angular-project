import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImdbRoutingModule} from './imdb-routing.module';
import {ImdbComponent} from './components/imdb/imdb.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from 'src/app/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {NgOptimizedImage} from '@angular/common'

const COMPONENTS = [
  ImdbComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ImdbRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    NgOptimizedImage,
    SharedModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class ImdbModule { }
