import { Component, OnInit } from '@angular/core';
import G2 from '@antv/g2/build/g2';

@Component({
  selector: 'app-g2-demo',
  templateUrl: './g2-demo.component.html',
  styleUrls: ['./g2-demo.component.css']
})
export class G2DemoComponent implements OnInit {
  data = {};
  chart ;
  graph;

  constructor() { }

  ngOnInit() {
    this.chartData();
  }

  chartData() {
    this.data = [
      { xxxxx: 'Sports', yyyyy: 275 },
      { xxxxx: 'Strategy', yyyyy: 115 },
      { xxxxx: 'Action', yyyyy: 120 },
      { xxxxx: 'Shooter', yyyyy: 350 },
      { xxxxx: 'Other', yyyyy: 150 }
    ];
    this.chart = new G2.Chart({
      container: 'c1', // 指定图表容器 ID
      width : 300, // 指定图表宽度
      height : 300 // 指定图表高度
    });

    this.chart.source(this.data);
    this.chart.interval().position('xxxxx*yyyyy').color('xxxxx');
    //  渲染图表
    this.chart.render();
    this.chart = new G2.Chart({
      container: 'c2', // 指定图表容器 ID
      width : 300, // 指定图表宽度
      height : 300 // 指定图表高度
    });

    this.chart.source(this.data);
    this.chart.interval().position('xxxxx*yyyyy').color('xxxxx');
    //  渲染图表
    this.chart.render();
  }
}
