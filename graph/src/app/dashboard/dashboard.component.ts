
import {  Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { HighchartsService } from '../service/highcharts.service'

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @ViewChild('currentSide') public currentSide: ElementRef;
  @ViewChild('current') public current: ElementRef;
  @ViewChild('support') public support: ElementRef;
  @ViewChild('average') public average: ElementRef;
  @ViewChild('application') public application: ElementRef;
  @ViewChild('volume') public volume: ElementRef;
  @ViewChild('system') public system: ElementRef;
  
  constructor(private highcharts: HighchartsService) { }
  ngOnInit(){
   
  }
  ngAfterViewInit(){
    
    this.highcharts.createChart(this.currentSide.nativeElement, this.myCurrentSideOptions);
    this.highcharts.createChart(this.current.nativeElement, this.currentOptions);
    this.highcharts.createChart(this.support.nativeElement, this.supportOptions);
    this.highcharts.createChart(this.average.nativeElement, this.averageOptions);
    this.highcharts.createChart(this.application.nativeElement, this.applicationOptions);
    this.highcharts.createChart(this.volume.nativeElement, this.volumeOptions);
    this.highcharts.createChart(this.system.nativeElement, this.systemOptions);
  }
   public myCurrentSideOptions = {
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
  },
    title: {
      text: 'Current logged in users'
    },
    subtitle: {
      text: 'last of the averages'
    },
    xAxis: {
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      type:'time'
    },
    yAxis: {
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      enabled:false
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [
      {
          name: "",
          colorByPoint: false,
          data: [
              {
                  name: "Chrome",
                  y: 62.74,
                  drilldown: "Chrome"
              },
              {
                  name: "Firefox",
                  y: 10.57,
                  drilldown: "Firefox"
              },
              {
                  name: "Internet Explorer",
                  y: 7.23,
                  drilldown: "Internet Explorer"
              },
              {
                  name: "Safari",
                  y: 5.58,
                  drilldown: "Safari"
              },
              {
                  name: "Edge",
                  y: 4.02,
                  drilldown: "Edge"
              },
              {
                  name: "Opera",
                  y: 1.92,
                  drilldown: "Opera"
              },
              {
                  name: "Other",
                  y: 7.62,
                  drilldown: null
              }
          ]
      }
  ],
  drilldown: {
      series: [
          {
              name: "Chrome",
              id: "Chrome",
              data: [
                  [
                      "v65.0",
                      0.1
                  ],
                  [
                      "v64.0",
                      1.3
                  ],
                  [
                      "v63.0",
                      53.02
                  ],
                  [
                      "v62.0",
                      1.4
                  ],
                  [
                      "v61.0",
                      0.88
                  ],
                  [
                      "v60.0",
                      0.56
                  ],
                  [
                      "v59.0",
                      0.45
                  ],
                  [
                      "v58.0",
                      0.49
                  ],
                  [
                      "v57.0",
                      0.32
                  ],
                  [
                      "v56.0",
                      0.29
                  ],
                  [
                      "v55.0",
                      0.79
                  ],
                  [
                      "v54.0",
                      0.18
                  ],
                  [
                      "v51.0",
                      0.13
                  ],
                  [
                      "v49.0",
                      2.16
                  ],
                  [
                      "v48.0",
                      0.13
                  ],
                  [
                      "v47.0",
                      0.11
                  ],
                  [
                      "v43.0",
                      0.17
                  ],
                  [
                      "v29.0",
                      0.26
                  ]
              ]
          },
          {
              name: "Firefox",
              id: "Firefox",
              data: [
                  [
                      "v58.0",
                      1.02
                  ],
                  [
                      "v57.0",
                      7.36
                  ],
                  [
                      "v56.0",
                      0.35
                  ],
                  [
                      "v55.0",
                      0.11
                  ],
                  [
                      "v54.0",
                      0.1
                  ],
                  [
                      "v52.0",
                      0.95
                  ],
                  [
                      "v51.0",
                      0.15
                  ],
                  [
                      "v50.0",
                      0.1
                  ],
                  [
                      "v48.0",
                      0.31
                  ],
                  [
                      "v47.0",
                      0.12
                  ]
              ]
          },
          {
              name: "Internet Explorer",
              id: "Internet Explorer",
              data: [
                  [
                      "v11.0",
                      6.2
                  ],
                  [
                      "v10.0",
                      0.29
                  ],
                  [
                      "v9.0",
                      0.27
                  ],
                  [
                      "v8.0",
                      0.47
                  ]
              ]
          },
          {
              name: "Safari",
              id: "Safari",
              data: [
                  [
                      "v11.0",
                      3.39
                  ],
                  [
                      "v10.1",
                      0.96
                  ],
                  [
                      "v10.0",
                      0.36
                  ],
                  [
                      "v9.1",
                      0.54
                  ],
                  [
                      "v9.0",
                      0.13
                  ],
                  [
                      "v5.1",
                      0.2
                  ]
              ]
          },
          {
              name: "Edge",
              id: "Edge",
              data: [
                  [
                      "v16",
                      2.6
                  ],
                  [
                      "v15",
                      0.92
                  ],
                  [
                      "v14",
                      0.4
                  ],
                  [
                      "v13",
                      0.1
                  ]
              ]
          },
          {
              name: "Opera",
              id: "Opera",
              data: [
                  [
                      "v50.0",
                      0.96
                  ],
                  [
                      "v49.0",
                      0.82
                  ],
                  [
                      "v12.1",
                      0.14
                  ]
              ]
          }
      ]}
  };
  public currentOptions={
    title: {
      text: 'Current logged in users'
  },
  credits: {
    enabled: false
},
  subtitle: {
      text: ''
  },

  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
      title: {
          text: ''
      }
  },
  xAxis:{
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    type:'time'
  },
  legend: {
      enabled:false
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: true
          },
          pointStart: 11
      }
  },

  series: [{
      name: 'Logged in users',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'vertical',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }


  };
  public supportOptions={
    title: {
      text: 'Support Tickets'
  },
  credits: {
    enabled: false
},
  subtitle: {
      text: ''
  },

  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
      title: {
          text: ''
      }
  },
  xAxis:{
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    type:'time'
  },
  legend: {
      enabled:false
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: true
          },
          pointStart: 11
      }
  },

  series: [{
      name: 'Logged in users',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'vertical',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }


  };
  public averageOptions={
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false
  },
    title: {
      text: 'Average Spend ($)'
    },
    subtitle: {
      text: 'last of the averages'
    },
    xAxis: {
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      type:'time'
    },
    yAxis: {
      gridLineWidth: 0,
      minorGridLineWidth: 0,
      min: 0,
      title: {
        text: ''
      }
    },
    legend: {
      enabled:false
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [
      {
          name: "",
          colorByPoint: false,
          data: [
              {
                  name: "Chrome",
                  y: 62.74,
                  drilldown: "Chrome"
              },
              {
                  name: "Firefox",
                  y: 10.57,
                  drilldown: "Firefox"
              },
              {
                  name: "Internet Explorer",
                  y: 7.23,
                  drilldown: "Internet Explorer"
              },
              {
                  name: "Safari",
                  y: 5.58,
                  drilldown: "Safari"
              },
              {
                  name: "Edge",
                  y: 4.02,
                  drilldown: "Edge"
              },
              {
                  name: "Opera",
                  y: 1.92,
                  drilldown: "Opera"
              },
              {
                  name: "Other",
                  y: 7.62,
                  drilldown: null
              }
          ]
      }
  ],
  drilldown: {
      series: [
          {
              name: "Chrome",
              id: "Chrome",
              data: [
                  [
                      "v65.0",
                      0.1
                  ],
                  [
                      "v64.0",
                      1.3
                  ],
                  [
                      "v63.0",
                      53.02
                  ],
                  [
                      "v62.0",
                      1.4
                  ],
                  [
                      "v61.0",
                      0.88
                  ],
                  [
                      "v60.0",
                      0.56
                  ],
                  [
                      "v59.0",
                      0.45
                  ],
                  [
                      "v58.0",
                      0.49
                  ],
                  [
                      "v57.0",
                      0.32
                  ],
                  [
                      "v56.0",
                      0.29
                  ],
                  [
                      "v55.0",
                      0.79
                  ],
                  [
                      "v54.0",
                      0.18
                  ],
                  [
                      "v51.0",
                      0.13
                  ],
                  [
                      "v49.0",
                      2.16
                  ],
                  [
                      "v48.0",
                      0.13
                  ],
                  [
                      "v47.0",
                      0.11
                  ],
                  [
                      "v43.0",
                      0.17
                  ],
                  [
                      "v29.0",
                      0.26
                  ]
              ]
          },
          {
              name: "Firefox",
              id: "Firefox",
              data: [
                  [
                      "v58.0",
                      1.02
                  ],
                  [
                      "v57.0",
                      7.36
                  ],
                  [
                      "v56.0",
                      0.35
                  ],
                  [
                      "v55.0",
                      0.11
                  ],
                  [
                      "v54.0",
                      0.1
                  ],
                  [
                      "v52.0",
                      0.95
                  ],
                  [
                      "v51.0",
                      0.15
                  ],
                  [
                      "v50.0",
                      0.1
                  ],
                  [
                      "v48.0",
                      0.31
                  ],
                  [
                      "v47.0",
                      0.12
                  ]
              ]
          },
          {
              name: "Internet Explorer",
              id: "Internet Explorer",
              data: [
                  [
                      "v11.0",
                      6.2
                  ],
                  [
                      "v10.0",
                      0.29
                  ],
                  [
                      "v9.0",
                      0.27
                  ],
                  [
                      "v8.0",
                      0.47
                  ]
              ]
          },
          {
              name: "Safari",
              id: "Safari",
              data: [
                  [
                      "v11.0",
                      3.39
                  ],
                  [
                      "v10.1",
                      0.96
                  ],
                  [
                      "v10.0",
                      0.36
                  ],
                  [
                      "v9.1",
                      0.54
                  ],
                  [
                      "v9.0",
                      0.13
                  ],
                  [
                      "v5.1",
                      0.2
                  ]
              ]
          },
          {
              name: "Edge",
              id: "Edge",
              data: [
                  [
                      "v16",
                      2.6
                  ],
                  [
                      "v15",
                      0.92
                  ],
                  [
                      "v14",
                      0.4
                  ],
                  [
                      "v13",
                      0.1
                  ]
              ]
          },
          {
              name: "Opera",
              id: "Opera",
              data: [
                  [
                      "v50.0",
                      0.96
                  ],
                  [
                      "v49.0",
                      0.82
                  ],
                  [
                      "v12.1",
                      0.14
                  ]
              ]
          }
      ]}

  };
  public applicationOptions={
    title: {
      text: 'Application Response Time (p95)'
  },
  credits: {
    enabled: false
},
  subtitle: {
      text: ''
  },

  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
      title: {
          text: ''
      }
  },
  xAxis:{
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    type:'time'
  },
  legend: {
      enabled:false
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: true
          },
          pointStart: 11
      }
  },

  series: [{
      name: 'Logged in users',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'vertical',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }


  };
  public volumeOptions={
    title: {
      text: 'Application Volume'
  },
  credits: {
    enabled: false
},
  subtitle: {
      text: ''
  },

  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
      title: {
          text: ''
      }
  },
  xAxis:{
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    type:'time'
  },
  legend: {
      enabled:false
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: true
          },
          pointStart: 11
      }
  },

  series: [{
      name: 'Logged in users',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'vertical',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }


  };
  public systemOptions={
    title: {
      text: 'System Load'
  },
  credits: {
    enabled: false
},
  subtitle: {
      text: ''
  },

  yAxis: {
    gridLineWidth: 0,
    minorGridLineWidth: 0,
      title: {
          text: ''
      }
  },
  xAxis:{
    gridLineWidth: 0,
    minorGridLineWidth: 0,
    type:'time'
  },
  legend: {
      enabled:false
  },

  plotOptions: {
      series: {
          label: {
              connectorAllowed: true
          },
          pointStart: 11
      }
  },

  series: [{
      name: 'Logged in users',
      data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],

  responsive: {
      rules: [{
          condition: {
              maxWidth: 500
          },
          chartOptions: {
              legend: {
                  layout: 'vertical',
                  align: 'center',
                  verticalAlign: 'bottom'
              }
          }
      }]
  }


  };
}

