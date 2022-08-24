import React from 'react';
import EmpSegment from './Bar/EmpSegment';
import TotalEmployee from './Cards/TotalEmployee';
import Gender from './Cards/Gender';
import Kompetensi from './Pie/Kompetensi';
import StatusPegawai from './Pie/StatusPegawai';
import Education from './Pie/Education';
import AgeSegment from './Bar/AgeSegment';
import MasaKerja from './Bar/MasaKerja';
import PenempatanBU from './Bar/PenembatanBU';
import SegmentJabatan from './Bar/SegmentJabatan';
import SegmentJabatanUB from './Bar/SegmentJabatanUB';
import TotalAction from './Bar/TotalAction';

const Containers = () => {
    
    return (
        <div className='row'>
            {/* <div className='col-12'>
                <div className='row'>
                    <div className="col-12">
                        <div class="alert alert-secondary" role="alert">
                            <center><h1>Dashboard HCM bulan Juni 2022</h1></center>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='row'>
                            <div className='col-xs-3'>
                                <TotalEmployee title="Total Personil" value="1,841" />
                            </div>
                            <div className='col-xs-3'>
                                <Kompetensi />
                            </div>
                            <div className='col-xs-3'>
                                <StatusPegawai />
                            </div>
                            <div className='col-xs-3'>
                                <Education />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='row'>
                            <div className='col-4'>
                                <TotalEmployee title="Pegawai Baru" value="19" />
                            </div>
                            <div className='col-4'>
                                <TotalEmployee title="Pensiun" value="12" />
                            </div>
                            <div className='col-4'>
                                <TotalEmployee title="Resign" value="32" />
                            </div>
                            <div className='col-xs-12'>
                                <EmpSegment style={{height: '20vh'}} />
                            </div>
                            <div className="col-xs-12">
                                <PenempatanBU style={{height: '30vh'}} />
                            </div>
                            <div className="col-xs-12">
                                <div className="row">
                                    <div className="col-md-6">
                                        <AgeSegment />
                                    </div>
                                    <div className="col-md-6">
                                        <MasaKerja />        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='row'>
                            <div className="col-12">
                                <Gender title="Segmentasi Gender" />
                            </div>
                            <div className="col-12">
                                <SegmentJabatan />
                            </div>
                            <div className="col-12">
                                <SegmentJabatanUB />
                            </div>
                            <div className="col-12">
                                <TotalAction />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className='row'>
                <div className="col-12">
                    <div class="alert alert-secondary" role="alert">
                        <center><h1>Dashboard HCM bulan Juni 2022</h1></center>
                    </div>
                </div>
                <div className='col-3'>
                    <TotalEmployee title="Total Personil" value="1,841" />
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-4'>
                            <TotalEmployee title="Pegawai Baru" value="19" />
                        </div>
                        <div className='col-4'>
                            <TotalEmployee title="Pensiun" value="12" />
                        </div>
                        <div className='col-4'>
                            <TotalEmployee title="Resign" value="32" />
                        </div>
                    </div>
                </div>
                <div className='col-3'>
                    <Gender title="Segmentasi Gender" />
                </div>

                <div className='col-3'>
                    <Kompetensi />
                </div>
                <div className='col-3'>
                    <StatusPegawai />
                </div>
                <div className='col-3'>
                    <Education />
                </div>
                <div className='col-3'>
                    <TotalAction />
                </div>

                <div className='col-3'>
                    <SegmentJabatan />
                </div>
                <div className='col-3'>
                    <SegmentJabatanUB />
                </div>
                <div className='col-3'>
                    <MasaKerja /> 
                </div>
                <div className='col-3'>
                    <AgeSegment />
                </div>

                <div className='col-6'>
                    <EmpSegment style={{height: '20vh'}} />
                </div>
                <div className='col-6'>
                    <PenempatanBU style={{height: '30vh'}} />
                </div>
            </div>
        </div>
    );
} 
 
export default Containers;