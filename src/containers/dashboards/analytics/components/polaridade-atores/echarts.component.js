import React from 'react';
import ReactEcharts from 'echarts-for-react';

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
