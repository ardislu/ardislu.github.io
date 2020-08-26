import { NgModule } from '@angular/core';

// Angular Core and Routing
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Material Angular
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

// User defined components
import { AppComponent } from './app.component';

const coreModules = [
  BrowserModule,
  BrowserAnimationsModule,
  LayoutModule,
  FlexLayoutModule,
  HttpClientModule,
  AppRoutingModule
]

const materialModules = [
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatExpansionModule
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...coreModules,
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
