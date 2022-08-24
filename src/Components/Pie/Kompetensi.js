import React from 'react';
import Charts from '../Charts';
const colorParlette = ["#50a7d4", "#91cc75"]
const Kompetensi = () => {
    const a = {
        legend: {
            bottom: '150',
            left: '0'
          },
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
                color: colorParlette,
                name: 'Kompetensi Pegawai',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                left: '100',
                top: '-180',
                label: {
                    show: false,
                    position: 'center'
                },
                itemStyle : {
                  normal : {
                       label : {
                          show: true, position: 'inner',
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
                    label: {
                    show: true,
                    fontSize: '12pt',
                    fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
              data: [
                { value: 1380, name: 'Pegawai Teknik' },
                { value: 461, name: 'Pegawai Non-Teknik' },
              ]
            }
          ]
    };
    return(
        <Charts title="Kompetensi Pegawai" styles1={{height: '20.2vh'}} styles2={{}} data={a} />
    );
}

export default Kompetensi;