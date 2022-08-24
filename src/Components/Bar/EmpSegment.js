import React from 'react';
import Charts from '../Charts';

const EmpSegment = () => {
    const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '6%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['CO', 'BUILD' , 'EPC', 'INF1', 'INF2', 'OVS', 'WBP', 'WKI', 'WTR', 'WKR'],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            itemStyle: {
              color: "#0a97db"
            },
            label: {
              show: true,
            },
            type: 'bar',
            barWidth: '60%',
            data: [312, 318, 242, 320, 415, 44, 220, 76, 31, 44, 39]
          }
        ]
      };
    return (
      <Charts title="Segmentasi Pegawai" styles1={{}} styles2={{ height: '18vh' }} data={option} />
    )
}

export default EmpSegment;