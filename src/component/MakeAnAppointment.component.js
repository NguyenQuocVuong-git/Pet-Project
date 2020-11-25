
import React, { Component } from 'react';
import TableRow from './TableRow';

export default class MakeAnAppointment extends Component {
    constructor(props) {
        super(props);
        this.state = { patient : this.props.sentDataAfter}
        
    }
    

    componentDidMount(){
        if(localStorage && localStorage.getItem('patient')){
            var tasks = JSON.parse(localStorage.getItem('patient'));
            this.setState({
              patient : tasks
            })
          }
        };

    tabRow(){
        return this.state.patient.map(function(object,i){
            return <TableRow obj={object} key={i} />
        });
    }
    render() {
        return (    
            <table class="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th>Tên bệnh nhân</th>
                        <th>Tuổi</th>
                        <th>Giới tính</th>
                        <th>Số điện thoại</th>
                        <th>Ngày hẹn</th>
                        <th>Chi tiết bệnh</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
            
        )
    }
}