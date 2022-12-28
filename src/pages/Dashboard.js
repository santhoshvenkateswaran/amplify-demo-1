import { Card } from '@aws-amplify/ui-react';
import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import Chart from '../components/chart';
import { EmpGrowth } from '../models';
import './Dashboard.css';

const Dashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [showChart, setShowChart] = useState(false);

  const fetchData = () => {
    const prepareChartOptions = (data) => ({
      chart: { width: 760 },
      title: { text: 'U.S Solar Employment Growth by Job Category, 2010-2020' },
      yAxis: { title: { text: 'Number of Employees' } },
      xAxis: { accessibility: { rangeDescription: 'Range: 2010 to 2020' } },
      legend: {
        layout: 'vertical',
        align: 'right',
        // verticalAlign: 'middle',
      },
      credits: { enabled: false },
      plotOptions: { series: { label: { connectorAllowed: false }, pointStart: 2010 } },
      series: data,
    });

    setShowChart(false);
    DataStore.query(EmpGrowth)
      .then((models) => {
        if (models) {
          const chartOptions = prepareChartOptions(models.map(({ name, data }) => ({ name, data })));
          setChartData(JSON.parse(JSON.stringify(chartOptions)));
          setShowChart(true);
        }
      })
      .catch(() => {
        // TODO: Handle fetch error.
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="Dashboard">
      <Card className="Dashboard__Card">{showChart && <Chart options={chartData} />}</Card>
    </div>
  );
};

export default Dashboard;
