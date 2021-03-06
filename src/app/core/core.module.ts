import { NgModule, SkipSelf, Optional } from '@angular/core';
import { MatIconRegistry } from "@angular/material";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../shared/shared.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from "../app-routing.module";

import { loadSvg } from "../utils/svg.util";

@NgModule({
  imports: [
    // shared
    SharedModule,
    // animations
    BrowserAnimationsModule,
    // http
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [HeaderComponent, FooterComponent, SidebarComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
  ],
  providers: [
    {provide: 'BASE_CONFIG', useValue: {
      url: 'http://localhost:3000'
    }}
  ]
  
})
export class CoreModule { 
  constructor(
    @Optional() @SkipSelf() parent: CoreModule, 
    ir: MatIconRegistry, 
    ds: DomSanitizer
  ) {
    if(parent) {
      throw new Error('Module has existed')
    }
    loadSvg(ir, ds)
  }
}
