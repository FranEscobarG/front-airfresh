import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const generateLabels = (data) => {
  return data.map((sensor) => {
    const date = new Date(sensor.reg_date);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes} hrs`;
  });
};

function AreaChart({ sensorData }) {
  const initialData = {
    labels: [], // Inicialmente vacío
    datasets: [
      {
        fill: true,
        label: 'CO ppm',
        data: [], // Inicialmente vacío
        borderColor: 'rgb(235, 80, 53)',
        backgroundColor: 'rgba(73, 165, 227, 0.5)',
      },
    ],
  };

  const [data, setData] = useState(initialData);

  useEffect(() => {
    const maxDataLength = 30;
    const slicedSensorData = sensorData.slice(-maxDataLength); // Limitar a 30 datos
    const updatedData = slicedSensorData.map((sensor) => sensor.co_ppm);
    setData({
      ...data,
      labels: generateLabels(slicedSensorData),
      datasets: [
        {
          ...data.datasets[0],
          data: updatedData,
        },
      ],
    });
  }, [sensorData]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Horas de Registro del Dato',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Valores del Sensor',
        },
      },
    },
  };

  return <Line options={options} data={data} />;
}

export default AreaChart;
