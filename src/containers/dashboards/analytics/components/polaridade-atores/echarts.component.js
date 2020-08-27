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
  'Tabata': "https://drive.google.com/uc?export=view&id=1IC9FD2hapGutTPq8uUjdrr11klMEl_3d",
  'Marina': "https://drive.google.com/uc?export=view&id=1jUKxmv-998PFYGuuUrSTUkf5j_Lj7hUy",
  'Ivan': "https://drive.google.com/uc?export=view&id=186I5B3fiE5YxUVYHfzoAfVfwU5c3vC4c",
  'Marcel': "https://drive.google.com/uc?export=view&id=11NdlE-pKL-I0yfP0ZJbRFa63lbCFWBT6"
};

const myStyle = {
  height: '600px'
};

class EChartPolaridadeAtores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      APIdata: [[], [], [], []],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3030/polaridadeAtores/68", requestOptions)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            APIdata: result
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
  getNomeAtor = (value) => {
    if (value === 'TabataAmaral') {
      return "Tabata Amaral"
    } else {
      return "heeh"
    }
  }
  render() {
    return (
      <ReactEcharts style={myStyle}
      theme="my_theme"
        option={{
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          legend: {
            data: ['Positivos', 'Negativo']
          },
          grid: {
            left: '7%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value'
          },
          yAxis: {
            type: 'category',
            data: ['TabataAmaral', 'MarinaSilva', 'IvanValente', 'MarcelVanHatten'],
            axisLabel: {
              formatter: function (value, index) {
                var nome = ''
                if (index === 0) {
                  nome = 'Tabata Amaral'
                } else if (index === 1) {
                  nome = "Marina Silva"
                } else if (index === 2) {
                  nome = "Ivan Valente"
                } else {
                  nome = "Marcel Van Hatten"
                }
                return '{value|' + nome + '}\t{' + value + '| }';
              },
              margin: 20,
              rich: {
                value: {
                  lineHeight: 18,
                  align: 'center'
                },
                TabataAmaral: {
                  height: 95,
                  align: 'center',
                  backgroundColor: {
                    image: weatherIcons.Tabata
                  }
                },
                MarinaSilva: {
                  height: 95,
                  align: 'center',
                  backgroundColor: {
                    image: weatherIcons.Marina
                  }
                },
                IvanValente: {
                  height: 95,
                  align: 'center',
                  backgroundColor: {
                    image: weatherIcons.Ivan
                  }
                },
                MarcelVanHatten: {
                  height: 95,
                  align: 'center',
                  backgroundColor: {
                    image: weatherIcons.Marcel
                  }
                }
              }
            }
          },
          series: [
            {
              name: 'Positivos',
              type: 'bar',
              stack: 'unico',
              label: {
                show: true,
                position: 'insideRight'
              },
              data: [this.state.APIdata[0][0], this.state.APIdata[1][0], this.state.APIdata[2][0], this.state.APIdata[3][0]]
            },
            {
              name: 'Negativo',
              type: 'bar',
              stack: 'unico',
              label: {
                show: true,
                position: 'right'
              },
              data: [this.state.APIdata[0][1], this.state.APIdata[1][1], this.state.APIdata[2][1], this.state.APIdata[3][1]]
            },
          ]
        }}
      />
    );
  }
}

export default EChartPolaridadeAtores;
