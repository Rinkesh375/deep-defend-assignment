import React from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale);

const ChartComponent = () => {
    const data = {
        labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5'],
        datasets: [
          {
            label: 'Zigzag Line',
            data: [5, 30,10, 50,60 ],
            borderColor: '#ff6384',
            // tension: 0.4, // Adjust the tension value to control the curve shape
          },
        ],
      };

      const data2 = {
        labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5'],
        datasets: [
          {
            label: 'Zigzag Line',
            data: [15, 30,7, 25,60,80 ],
            borderColor: '#a1ff63',
            // tension: 0.4, // Adjust the tension value to control the curve shape
          },
        ],
      };
    
      const options = {
        responsive: true,
        title: {
          display: true,
          text: 'Zigzag Line Chart',
        },
      };
    
      return (
        <div >
          <Line data={data} options={options} />
          
        </div>
      );
};

export default ChartComponent;