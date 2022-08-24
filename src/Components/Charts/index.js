import React from 'react';
import ReactEcharts from 'echarts-for-react';

const Charts = ({title, styles1, styles2, data}) => {
    return (
        <div className="card">
            <div className="card-body" style={styles1}>
                <ReactEcharts option={data} style={styles2} />
            </div>
            <h5 className="card-header text-bg-primary" style={{fontSize: "11pt", paddingBottom: "20px"}}>{title}</h5>
        </div>
    )
}

export default Charts;