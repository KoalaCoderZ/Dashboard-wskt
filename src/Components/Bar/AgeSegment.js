import React from 'react';
import Charts from '../Charts';

const AgeSegment = () => {
    const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '13%',
          bottom: '3%',
          top: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['18 - 25', '26 - 35', '36 - 45', '46 - 55', '55+']
        },
        series: [
          {
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
              position: 'right'
            },
            itemStyle: {
              color: "#0a97db"
            },
            emphasis: {
              focus: 'series'
            },
            data: [26, 1168, 318, 316, 13]
          },
        ]
      };
    return (
      <Charts title="Segmentasi Umur PT/PTT" styles1={{}} styles2={{ height: '18vh' }} data={option} />
    )
}

export default AgeSegment;