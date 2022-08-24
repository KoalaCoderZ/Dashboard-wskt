import React from 'react';
import Charts from '../Charts';

const SegmentJabatanUB = () => {
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
          right: '4%',
          bottom: '3%',
          top: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          axisLabel: {
            interval: 0,
            rotate: 30 //If the label names are too long you can manage this by rotating the label.
          }
        },
        yAxis: {
          type: 'category',
          data: ['Project Staff', 'Superintendent', 'Site Mgr', 'PM', 'OJT', 'Officer', 'Expert', 'Branch Mgr', 'Manager', 'VP', 'SVP'],
          axisLabel: {
            interval: 0,
            rotate: 0 //If the label names are too long you can manage this by rotating the label.
          }
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
            data: [418, 77, 453, 97, 0, 187, 58, 4, 36, 4, 5]
          },
        ]
      };
    return (
      <Charts title="Level Manajemen UB" styles1={{}} styles2={{ height: '18vh' }} data={option} />
    )
}

export default SegmentJabatanUB;