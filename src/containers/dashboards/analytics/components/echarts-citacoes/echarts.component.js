import React from 'react';
import ReactEcharts from 'echarts-for-react';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const myStyle = {
  height: '400px'
};

class EChartCitacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      APIdataOuter: [],
      APIdataInner: [],
    };
  }

  componentDidMount() {
    fetch("http://167.71.115.228:3030/citacoes/08082020", requestOptions)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            APIdataOuter: result.outerData,
            APIdataInner: result.innerData,
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
            formatter: '{a} <br/>{b}: {c} ({d}%)'
          },
          series: [
            {
              name: 'Citacoes',
              type: 'pie',
              selectedMode: 'single',
              radius: [0, '30%'],

              label: {
                position: 'inner'
              },
              labelLine: {
                show: false
              },
              //inner data
              data: this.state.APIdataInner
            },
            {
              name: 'Citacoes',
              type: 'pie',
              radius: ['40%', '55%'],
              label: {
                formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 16,
                    lineHeight: 33
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              },
              //outer data
              data: this.state.APIdataOuter
            }
          ]
        }}
      />
    );
  }
}

export default EChartCitacao;
