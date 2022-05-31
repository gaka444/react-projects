import React from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function LineChart(props) {
    const data = {
        labels: ['Jan', 'Feb,', 'Mar', 'Apr', 'May'],
        datasets: [
            {
                id: '1',
                label: "Sales for 2022 (M)",
                data: [3, 2, 1, 4, 5],
                borderColor: ['rgba(255, 206, 86, 0.2)'],
                backgroundColor: ['rgba(255, 206, 86, 0.2)'],
                pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
                pointBorderColor: 'rgba(255, 206, 86, 0.2)'
            },
            {
                id: '2',
                label: 'Sales 2019 (M)',
                data: [1, 3, 2, 2, 3],
                borderColor: ['rgba(54, 162, 235, 0.2)'],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                pointBackgroundColor: 'rgba(54, 162, 235, 0.2)',
                pointBorderColor: 'rgba(54, 162, 235, 0.2)'
            }
        ]
    }

    const options = {
        title: {
            display: true,
            text: 'Line Chart'
        },
        scales: {
            yAxes: [
                {
                    id: 'A',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        min: 0,
                        max: 6,
                        stepSize: 1
                    }
                }
            ]
        }
    }

    return (
        <div style={{ width: '400px', height: '200px' }}>
            <Line datasetIdKey='id' data={data} options={options} />
        </div>
    );
}

export default LineChart;