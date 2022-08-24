import React from 'react';
import Charts from '../Charts';

const TotalAction = () => {
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
          top: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Mutation', 'New Hire', 'Promotion', 'Termination', 'Retirement'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
                interval: 0,
                rotate: 20 //If the label names are too long you can manage this by rotating the label.
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
            name: 'Direct',
            type: 'bar',
            barWidth: '60%',
            label: {
                show: true,
                position: 'top',
            },
            itemStyle: {
              color: "#0a97db"
            },
            data: [244, 19, 16, 32, 12]
          }
        ]
      };
    return (
      <Charts title="Jumlah Action" styles1={{}} styles2={{ height: '17vh' }} data={option} />
    )
}

export default TotalAction;