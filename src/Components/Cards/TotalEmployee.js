import React from 'react'

const TotalEmployee = ({title, value}) => {
    return (
        <div className="card" style={{ height: '15vh' }}>
            <div className="card-body" style={{padding: '0 0'}}>
                <strong ><center><p class="fs-1" style={{ color: "#357b9e", margin: "20px 0" }}>{value}</p></center></strong>
            </div>
            <h5 className="card-header text-bg-primary" style={{fontSize: "11pt", paddingBottom: "20px"}}>{title}</h5>
        </div>
    )
}

export default TotalEmployee;