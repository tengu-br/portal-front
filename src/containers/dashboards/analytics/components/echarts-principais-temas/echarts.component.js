import React from 'react';
import ReactEcharts from 'echarts-for-react';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

class EChartPrincipaisTemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      APIdata: []
    };
  }

  componentDidMount() {
    fetch("http://167.71.115.228:3030/principaisTemas/08082020", requestOptions)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            APIdata: result.data
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
      <ReactEcharts

        option={{

          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'line',
              lineStyle: {
                color: 'rgba(0,0,0,0.2)',
                width: 1,
                type: 'solid'
              }
            }
          },

          legend: {
            data: ["Pro-Reforma", "Políticos", "Carga Tributária", "Tramitação", "Contra-Reforma"]
          },

          singleAxis: {
            top: 50,
            bottom: 50,
            axisTick: {},
            axisLabel: {},
            type: 'time',
            axisPointer: {
              animation: true,
              label: {
                show: true
              }
            },
            splitLine: {
              show: true,
              lineStyle: {
                type: 'dashed',
                opacity: 0.2
              }
            }
          },

          series: [
            {
              type: 'themeRiver',
              label: {
                show: false
              },
              emphasis: {
                itemStyle: {
                  label: {
                    show: false
                  },
                  shadowBlur: 20,
                  shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
              },
              data: this.state.APIdata
            }
          ]
        }}
      />
    );
  }
}

export default EChartPrincipaisTemas;
