import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {faker} from '@faker-js/faker';
import { Line } from 'react-chartjs-2';

 function ChartComponent() {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                outerWidth : '100%'
            }
        },
        scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    stepSize: 50,
                },
            }],
        },
    };

    const labels = ['01 Nov', '11 Nov', '21 Nov', '01 Dec', '11 Dec'];

    const data = {
        labels,
        datasets: [
            {
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: 'rgb(99, 190, 255)',
                backgroundColor: 'rgba(20, 114, 140, 0.5)',
            },
            {
                data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
                borderColor: '#fb8022',
                backgroundColor: '#fb8022',
            }
        ],
    };

    return <Line width={'600%'} options={options} data={data} />;
}

export default ChartComponent