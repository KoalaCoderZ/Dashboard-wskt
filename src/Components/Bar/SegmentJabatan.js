import React from 'react';
import Charts from '../Charts';

const SegmentJabatan = () => {
    const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
          }
        },
        grid: {
          left: '2%',
          right: '7%',
          bottom: '3%',
          top: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value'
        },
        yAxis: {
          type: 'category',
          data: ['OJT', 'Officer', 'Expert', 'Unit Mgr', 'Branch Mgr', 'Auditor', 'Manager', 'SVP']
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
            data: [0, 173, 40, 19, 4, 6, 55, 15]
          },
        ]
      };
    return (
      <Charts title="Level Manajemen CO" styles1={{}} styles2={{ height: '18vh' }} data={option} />
    )
}

export default SegmentJabatan;