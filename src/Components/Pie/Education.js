import React from 'react';
import Charts from '../Charts';

const colorParlette = ["#50a7d4", "#a5bb68", "#cf4a6b", "#d9b36a", "#4acfa7"];
const Education = () => {
    const a = {
        legend: {
            bottom: '150',
            left: '0',
            orient: 'vertical'
          },
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
                color: colorParlette,
                name: 'Kompetensi Pegawai',
                type: 'pie',
                radius: ['90%', '53%'],
                avoidLabelOverlap: false,
                left: '100',
                top: '-100',
                label: {
                    show: false,
                    position: 'inside',
                    interval: 0
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
                labelLine: {
                    show: false
                },
              data: [
                { value: 114, name: 'SLTA' },
                { value: 197, name: 'D3' },
                { value: 1428, name: 'S1' },
                { value: 102, name: 'S2' },
              ]
            }
          ]
    };
    return(
        <Charts title="Segmentasi Pendidikan" styles1={{height: '20.7vh'}} styles2={{}} data={a} />
    );
}

export default Education;