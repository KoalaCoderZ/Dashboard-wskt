import React from 'react';
import Charts from '../Charts';

const PenempatanBU = () => {
    const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '12%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['EPC', 'OVS', 'Building', 'INF1', 'INF2']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            color: "#50a7d4",
            name: 'Proyek',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            label: {
              show: true,
            },
            data: [193, 21, 244, 265, 193]
          },
          {
            color: "#91cc75",
            name: 'Kantor',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            label: {
              show: true,
            },
            data: [49, 23, 74, 55, 49]
          },
        ]
      };
    return (
      <Charts title="Segmentasi Penempatan Kantor & Project Business Unit" styles1={{}} styles2={{ height: '18vh' }} data={option} />
    )
}

export default PenempatanBU;