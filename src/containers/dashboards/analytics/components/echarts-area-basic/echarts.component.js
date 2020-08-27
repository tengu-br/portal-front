import React from 'react';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import TableFooter from '@material-ui/core/TableFooter';

import ReactEcharts from 'echarts-for-react';

import genericSearchData from '../../../../../assets/data/dashboards/generic-search.json';
import paidSearchData from '../../../../../assets/data/dashboards/paid-search.json';

import scss from './table-widget.module.scss';

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

class EChartAreaBasic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      APIdata: [],
      APIvalor: []
    };
  }

  componentDidMount() {
    fetch("http://167.71.115.228:3030/volumeTotalReforma/08082020", requestOptions)
      .then(response => response.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            APIdata: result.dates,
            APIvalor: result.counts
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
            type: 'category',
            boundaryGap: false,
            data: this.state.APIdata
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: this.state.APIvalor,
            type: 'line',
            areaStyle: {}
          }],
          color: ['#2196F3'],
          markPoint: {
            data: [{
              type: 'max'
            }],
            animationEasing: 'quinticInOut',
            animation: 'true'
          }
        }}
      />
    );
  }
}

export default EChartAreaBasic;
