import React from 'react';
import ReactEcharts from 'echarts-for-react';


var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const myStyle = {
  height: '400px'
};

var weatherIcons = {
  'Facebook': "https://image.flaticon.com/icons/svg/174/174848.svg",
  'Instagram': "https://image.flaticon.com/icons/svg/2111/2111463.svg",
  'YouTube': "https://image.flaticon.com/icons/svg/1384/1384868.svg"
};

var seriesLabel = {
  normal: {
    show: true,
    textBorderColor: '#333',
    textBorderWidth: 2
  }
}

class EChartCitacoesRede extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      APIdata: {},
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:3030/citacoesRede/68", requestOptions)
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

  render() {
    return (
      <ReactEcharts style={myStyle}
        option={{
          title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {
            data:  ["Carga Tributária", "Estados e Municípios", "Pro-Reforma"]
          },
          grid: {
            left: 100
          },
          xAxis: {
            type: 'value',
            name: 'Mencoes',
            axisLabel: {
              formatter: '{value}'
            }
          },
          yAxis: {
            type: 'category',
            inverse: true,
            data: ['Facebook', 'Instagram', 'YouTube'],
            axisLabel: {
              formatter: function (value) {
                return '{' + value + '| }\n{value|' + value + '}';
              },
              margin: 20,
              rich: {
                value: {
                  lineHeight: 30,
                  align: 'center'
                },
                Facebook: {
                  height: 40,
                  align: 'center',
                  backgroundColor: {
                    image: weatherIcons.Facebook
                  }
                },
                Instagram: {
                  height: 40,
                  align: 'center',
                  backgroundColor: {
                    image: weatherIcons.Instagram
                  }
                },
                YouTube: {
                  height: 40,
                  align: 'center',
                  backgroundColor: {
                    image: weatherIcons.YouTube
                  }
                }
              }
            }
          },
          series: [
            {
              name: 'Carga Tributária',
              type: 'bar',
              data: this.state.APIdata[0],
              label: seriesLabel,
              
            },
            {
              name: 'Estados e Municípios',
              type: 'bar',
              label: seriesLabel,
              data: this.state.APIdata[1]
            },
            {
              name: 'Pro-Reforma',
              type: 'bar',
              label: seriesLabel,
              data: this.state.APIdata[2]
            }
          ]
        }}
      />
    );
  }
}

export default EChartCitacoesRede;
