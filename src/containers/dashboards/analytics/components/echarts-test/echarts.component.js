import React from 'react';
import ReactEcharts from 'echarts-for-react';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

class EChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      APIdata: []
    };
  }

  componentDidMount() {
    fetch("http://167.71.115.228:3030/teste/68", requestOptions)
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
      <ReactEcharts
        option={{
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
          },
          yAxis: {
            type: "value"
          },
          series: [{
            data: this.state.APIdata,
            type: "line"
          }]
        }}
      />
    );
  }
}

export default EChart;
