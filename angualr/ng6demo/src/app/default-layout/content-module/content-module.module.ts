import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2DemoComponent } from './g2-demo/g2-demo.component';
import { Routes, RouterModule } from '@angular/router';

const content_routes: Routes = [
  {
    path: 'g2',
    component: G2DemoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(content_routes)
  ],
  declarations: [G2DemoComponent]
})
export class ContentModuleModule { }
