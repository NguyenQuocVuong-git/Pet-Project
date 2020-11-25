
import React, { Component } from 'react';
import TableRow from './TableRow';

export default class TimeTableDoctor extends Component {
    constructor(props){
        super(props);
        this.state = { 
            name : "vuong1",
            status: "cotheranh",
            date : "1945-04-30"
        };
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit =this.onSubmit.bind(this);
    }

    onChangeStatus(event){
         this.setState({ status : event.target.value});
        //  localStorage.setItem('status', event.target.value );
    }

    onChangeDate(event){
        this.setState({ date : event.target.value});
        // localStorage.setItem('date', event.target.value )
    }

    onSubmit(e){
        e.preventDefault();
        this.setState({
            name : this.state.name,
            status : this.state.status,
            date : this.state.date
        });
        localStorage.setItem('status', this.state.status);
        localStorage.setItem('date',this.state.date);
    }
    componentDidMount(){
        this.setState({ status : localStorage.getItem('status')});
        this.setState({ date : localStorage.getItem('date')});
    }
    render() {
        return (
            <div>
               
                    <h3 align="center">Thời khóa biểu bác sĩ</h3>
                    <table className="table table-striped" style={{marginTop : 20}}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th >Trạng thái</th>
                            <th>Ngày </th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr>
                                <td>
                                    {this.state.name}
                                </td>
                            <td>
                                <select  value={this.state.status} onChange={this.onChangeStatus}>
                                    
                                    <option value="ban">Bận</option>
                                    <option value="ranh">Rảnh</option>
                                    <option value="cotheranh">Có thể rảnh</option>
                                </select>
                            </td>
                            <td>
                                <div className="form-group">
                                    <input 
                                    type="date" 
                                    name="date" 
                                    id="input"
                                    value={this.state.date}
                                    onChange={this.onChangeDate}
                                    class="form-control" 
                                    required="required" />
                                </div>
                            </td>
                        </tr>
                       
                       <button type="button" 
                                class="btn btn-primary"
                                onClick={this.onSubmit}
                                >
                           Save
                       </button>
                       
                        
                    </tbody>
                </table>
               
               
            </div>
        )
    }
}