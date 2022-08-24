import React from 'react';
import Charts from '../Charts';
const colorParlette = ["#50a7d4", "#91cc75"];
const StatusPegawai = () => {
    const a = {
        legend: {
          show: true,
          bottom: '125',
        },
        tooltip: {
          trigger: 'item'
        },
        series: [
          {
            color: colorParlette,
            name: 'Status Pegawai',
            type: 'pie',
            bottom: '150',
            data: [
              { value: 1705, name: 'PT' },
              { value: 136, name: 'PTT' },
            ],
            itemStyle : {
              normal : {
                   label : {
                      show: true, position: 'outer',
                      formatter : function (params){
                            return  params.value
                      },
                  },
                  labelLine : {
                      show : false
                  }
              }
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
    return(
        <Charts title="Status Pegawai" styles1={{height: '20.4vh'}} styles2={{}} data={a} />
    );
}

export default StatusPegawai;