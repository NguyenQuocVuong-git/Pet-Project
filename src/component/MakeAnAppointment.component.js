
import React, { Component } from 'react';
import TableAppointment from './TableAppointment.component';

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
        return this.state.patient.map((object,i) => {
            return <TableAppointment 
                    obj={object} 
                    key={i}
                    index={i} 
                    onUpdateStatus={this.handleChangeStatus}
                    />
        });
    }

    handleChangeStatus = (index, value) => {
        const patient = Object.assign([], this.state.patient);
        patient[index].status = value;
        this.setState({ patient });
        localStorage.setItem('patient', JSON.stringify(patient));
    }
    
    render() {
        
        console.log(this.state);
        return (    
            <table class="table table-bordered table-hover mt-15">
                <thead>
                    <tr>
                        <th>Index</th>
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