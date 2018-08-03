import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {

  isCollapsed = false;

  data = [
    {
      title: 'Alert Message Infor 1'
    },
    {
      title: 'Alert Message Infor 2'
    },
    {
      title: 'Alert Message Infor 3'
    },
    {
      title: 'Alert Message Infor 4'
    },
    {
      title: 'Alert Message Infor 5'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  // Collapse Buttion Handler
  handleCollapseAction() {
    this.isCollapsed = ! this.isCollapsed;
  }

}
