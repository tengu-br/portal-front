import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';


echarts.registerTheme('my_theme',
  {
    "color": [
      "#516b91",
      "#59c4e6",
      "#edafda",
      "#93b7e3",
      "#a5e7f0",
      "#cbb0e3"
    ],
    "backgroundColor": "rgba(0,0,0,0)",
    "textStyle": {},
    "title": {
      "textStyle": {
        "color": "#516b91"
      },
      "subtextStyle": {
        "color": "#93b7e3"
      }
    },
    "line": {
      "itemStyle": {
        "normal": {
          "borderWidth": "2"
        }
      },
      "lineStyle": {
        "normal": {
          "width": "2"
        }
      },
      "symbolSize": "6",
      "symbol": "emptyCircle",
      "smooth": true
    },
    "radar": {
      "itemStyle": {
        "normal": {
          "borderWidth": "2"
        }
      },
      "lineStyle": {
        "normal": {
          "width": "2"
        }
      },
      "symbolSize": "6",
      "symbol": "emptyCircle",
      "smooth": true
    },
    "bar": {
      "itemStyle": {
        "normal": {
          "barBorderWidth": 0,
          "barBorderColor": "#ccc"
        },
        "emphasis": {
          "barBorderWidth": 0,
          "barBorderColor": "#ccc"
        }
      }
    },
    "pie": {
      "itemStyle": {
        "normal": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        }
      }
    },
    "scatter": {
      "itemStyle": {
        "normal": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        }
      }
    },
    "boxplot": {
      "itemStyle": {
        "normal": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        }
      }
    },
    "parallel": {
      "itemStyle": {
        "normal": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        }
      }
    },
    "sankey": {
      "itemStyle": {
        "normal": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        }
      }
    },
    "funnel": {
      "itemStyle": {
        "normal": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        }
      }
    },
    "gauge": {
      "itemStyle": {
        "normal": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        },
        "emphasis": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        }
      }
    },
    "candlestick": {
      "itemStyle": {
        "normal": {
          "color": "#edafda",
          "color0": "transparent",
          "borderColor": "#d680bc",
          "borderColor0": "#8fd3e8",
          "borderWidth": "2"
        }
      }
    },
    "graph": {
      "itemStyle": {
        "normal": {
          "borderWidth": 0,
          "borderColor": "#ccc"
        }
      },
      "lineStyle": {
        "normal": {
          "width": 1,
          "color": "#aaaaaa"
        }
      },
      "symbolSize": "6",
      "symbol": "emptyCircle",
      "smooth": true,
      "color": [
        "#516b91",
        "#59c4e6",
        "#edafda",
        "#93b7e3",
        "#a5e7f0",
        "#cbb0e3"
      ],
      "label": {
        "normal": {
          "textStyle": {
            "color": "#eeeeee"
          }
        }
      }
    },
    "map": {
      "itemStyle": {
        "normal": {
          "areaColor": "#f3f3f3",
          "borderColor": "#516b91",
          "borderWidth": 0.5
        },
        "emphasis": {
          "areaColor": "#a5e7f0",
          "borderColor": "#516b91",
          "borderWidth": 1
        }
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#000"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "#516b91"
          }
        }
      }
    },
    "geo": {
      "itemStyle": {
        "normal": {
          "areaColor": "#f3f3f3",
          "borderColor": "#516b91",
          "borderWidth": 0.5
        },
        "emphasis": {
          "areaColor": "#a5e7f0",
          "borderColor": "#516b91",
          "borderWidth": 1
        }
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#000"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "#516b91"
          }
        }
      }
    },
    "categoryAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#cccccc"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#333"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#999999"
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#eeeeee"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "valueAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#040404"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#333"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#999999"
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#eeeeee"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "logAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#cccccc"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#333"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#999999"
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#eeeeee"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "timeAxis": {
      "axisLine": {
        "show": true,
        "lineStyle": {
          "color": "#cccccc"
        }
      },
      "axisTick": {
        "show": false,
        "lineStyle": {
          "color": "#333"
        }
      },
      "axisLabel": {
        "show": true,
        "textStyle": {
          "color": "#000000"
        }
      },
      "splitLine": {
        "show": true,
        "lineStyle": {
          "color": [
            "#eeeeee"
          ]
        }
      },
      "splitArea": {
        "show": false,
        "areaStyle": {
          "color": [
            "rgba(250,250,250,0.05)",
            "rgba(200,200,200,0.02)"
          ]
        }
      }
    },
    "toolbox": {
      "iconStyle": {
        "normal": {
          "borderColor": "#040404"
        },
        "emphasis": {
          "borderColor": "#666666"
        }
      }
    },
    "legend": {
      "textStyle": {
        "color": "#040404"
      }
    },
    "tooltip": {
      "axisPointer": {
        "lineStyle": {
          "color": "#cccccc",
          "width": 1
        },
        "crossStyle": {
          "color": "#cccccc",
          "width": 1
        }
      }
    },
    "timeline": {
      "lineStyle": {
        "color": "#8fd3e8",
        "width": 1
      },
      "itemStyle": {
        "normal": {
          "color": "#8fd3e8",
          "borderWidth": 1
        },
        "emphasis": {
          "color": "#8fd3e8"
        }
      },
      "controlStyle": {
        "normal": {
          "color": "#8fd3e8",
          "borderColor": "#8fd3e8",
          "borderWidth": 0.5
        },
        "emphasis": {
          "color": "#8fd3e8",
          "borderColor": "#8fd3e8",
          "borderWidth": 0.5
        }
      },
      "checkpointStyle": {
        "color": "#8fd3e8",
        "borderColor": "rgba(138,124,168,0.37)"
      },
      "label": {
        "normal": {
          "textStyle": {
            "color": "#8fd3e8"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "#8fd3e8"
          }
        }
      }
    },
    "visualMap": {
      "color": [
        "#516b91",
        "#59c4e6",
        "#a5e7f0"
      ]
    },
    "dataZoom": {
      "backgroundColor": "rgba(0,0,0,0)",
      "dataBackgroundColor": "rgba(255,255,255,0.3)",
      "fillerColor": "rgba(167,183,204,0.4)",
      "handleColor": "#a7b7cc",
      "handleSize": "100%",
      "textStyle": {
        "color": "#333333"
      }
    },
    "markPoint": {
      "label": {
        "normal": {
          "textStyle": {
            "color": "#eeeeee"
          }
        },
        "emphasis": {
          "textStyle": {
            "color": "#eeeeee"
          }
        }
      }
    }
  }
);

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

var weatherIcons = {
  'Facebook': "https://image.flaticon.com/icons/svg/743/743418.svg",
  'YouTube': "https://image.flaticon.com/icons/svg/743/743365.svg",
  'Instagram': "https://image.flaticon.com/icons/svg/743/743309.svg"
};

const myStyle = {
  height: '400px'
};

class EChartPolaridade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      APIdata: [[],[],[]],
      formatterTest : []
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3030/polaridadePartidos/68", requestOptions)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            APIdata: result,
            formatterTest: [
              '{title|{b}}{abg|}',
              `  {Sunny|}{value|${result[0][0]}}{rate|${Math.round((result[0][0]*100)/(result[0][0]+result[1][0]+result[2][0]))}%}`,
              `  {Cloudy|}{value|${result[1][0]}}{rate|${Math.round((result[1][0]*100)/(result[0][0]+result[1][0]+result[2][0]))}%}`,
              `  {Showers|}{value|${result[2][0]}}{rate|${Math.round((result[2][0]*100)/(result[0][0]+result[1][0]+result[2][0]))}%}`,
            ]
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    return (
      <ReactEcharts style={myStyle}
      theme="my_theme"
        option={{
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)'
          },
          legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: ['PT', 'PSOL', 'PSDB', 'PSL']
          },
          series: [
            {
              type: 'pie',
              radius: '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data: [
                {
                  value: this.state.APIdata[0][0]+this.state.APIdata[1][0]+this.state.APIdata[2][0],
                  name: 'PT',
                  label: {
                    formatter: this.state.formatterTest.join('\n'),
                    backgroundColor: '#eee',
                    borderColor: '#777',
                    borderWidth: 1,
                    borderRadius: 4,
                    rich: {
                      title: {
                        color: '#eee',
                        align: 'center'
                      },
                      abg: {
                        backgroundColor: '#333',
                        width: '100%',
                        align: 'right',
                        height: 25,
                        borderRadius: [4, 4, 0, 0]
                      },
                      Sunny: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                          image: weatherIcons.Facebook
                        }
                      },
                      Cloudy: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                          image: weatherIcons.YouTube
                        }
                      },
                      Showers: {
                        height: 30,
                        align: 'left',
                        backgroundColor: {
                          image: weatherIcons.Instagram
                        }
                      },
                      weatherHead: {
                        color: '#333',
                        height: 24,
                        align: 'left'
                      },
                      hr: {
                        borderColor: '#777',
                        width: '100%',
                        borderWidth: 0.5,
                        height: 0
                      },
                      value: {
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: 'left'
                      },
                      valueHead: {
                        color: '#333',
                        width: 20,
                        padding: [0, 20, 0, 30],
                        align: 'center'
                      },
                      rate: {
                        width: 40,
                        align: 'right',
                        padding: [0, 10, 0, 0]
                      },
                      rateHead: {
                        color: '#333',
                        width: 40,
                        align: 'center',
                        padding: [0, 10, 0, 0]
                      }
                    }
                  }
                },
                { value: this.state.APIdata[0][1]+this.state.APIdata[1][1]+this.state.APIdata[2][1], name: 'PSOL'},
                { value: this.state.APIdata[0][2]+this.state.APIdata[1][2]+this.state.APIdata[2][2], name: 'PSDB' },
                { value: this.state.APIdata[0][3]+this.state.APIdata[1][3]+this.state.APIdata[2][3], name: 'PSL' }
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        }}
      />
    );
  }
}

export default EChartPolaridade;
