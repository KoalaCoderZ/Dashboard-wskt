import React from 'react'

const Gender = ({title, value}) => {
    return (
        <div className="card" style={{ height: '15vh' }}>
            <div className="card-body" style={{ padding: "2px 15px" }}>
                <div className="row" >
                    <div className="col-6">
                        <div className="row">
                            <div className="col-xs-6">
                                <img 
                                    src="https://w7.pngwing.com/pngs/165/45/png-transparent-computer-icons-male-avatar-white-collar-miscellaneous-blue-text.png" 
                                    width={'60vh'} 
                                    height={'60vh'} 
                                    style={{margin: "0px 18px"}}
                                    className="img-thumbnail rounded float-start" alt="..." />
                            </div>
                            <div className="col-xs-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong><p style={{ color: "#357b9e" }}>1633</p></strong>
                                    </div>
                                    <div className="col-md-6">
                                        <strong><p style={{ color: "#357b9e" }}>88.7%</p></strong>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-xs-6">
                                <img 
                                    src="https://w7.pngwing.com/pngs/899/712/png-transparent-computer-icons-female-woman-avatar-management-female-blue-white-text.png" 
                                    width={'60vh'} 
                                    height={'60vh'} 
                                    style={{margin: "0px 18px"}}
                                    className="img-thumbnail rounded float-start" alt="..." />
                            </div>
                            <div className="col-xs-6">
                                <div className="row">
                                    <div className="col-md-6">
                                        <strong><p style={{ color: "#357b9e" }}>11.3%</p></strong>
                                    </div>
                                    <div className="col-md-6">
                                        <strong><p style={{ color: "#357b9e" }}>208</p></strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="card-header text-bg-primary" style={{fontSize: "11pt", paddingBottom: "8px 15px 20px", height: "30px"}}>{title}</h5>
        </div>
    )
}

export default Gender;