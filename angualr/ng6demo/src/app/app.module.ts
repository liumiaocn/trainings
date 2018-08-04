import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { Routes, RouterModule } from '@angular/router';
import {ContentModuleModule} from './default-layout/content-module/content-module.module';
import {G2DemoComponent} from './default-layout/content-module/g2-demo/g2-demo.component';

registerLocaleData(zh);

const routes: Routes = [
  {
    path: 'layout',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'g2',
        component: G2DemoComponent
      }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent
  },
  {
    path: '**',
    component: DefaultLayoutComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgZorroAntdModule,
    ContentModuleModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
