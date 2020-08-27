import React from 'react';
import ReactEcharts from 'echarts-for-react';

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
