import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = (props) => <HighchartsReact highcharts={Highcharts} options={props.options} oneToOne={true} />;

export default Chart;
