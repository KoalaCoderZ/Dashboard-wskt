import React from 'react';
import Charts from '../Charts';

const MasaKerja = () => {
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
          data: ['<5', '6 - 10', '11 - 15', '16 - 20', '21 - 25', '26 - 30', '>30']
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
            data: [891, 553, 130, 24, 62, 160, 21]
          },
        ]
      };
    return (
      <Charts title="Segmentasi Masa Kerja" styles1={{}} styles2={{ height: '18vh' }} data={option} />
    )
}

export default MasaKerja;