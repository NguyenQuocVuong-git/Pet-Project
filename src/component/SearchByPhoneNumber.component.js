
import React, { Component } from 'react';
import TableRow from './TableRow';



export default class SearchByPhoneNumber extends Component {
    constructor(props){
        super(props);

        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            search : [],
            phone :"",
            isDisplayForm : false,
            mess : false
        };

        
    }

    findArrayElementByTitle(array, title) {
        return array.find((element) => {
            if(element.phone === title) {
                var elementRusult = element;
                console.log(elementRusult);
                console.log("state sau khi get :", this.state);
                this.setState({
                    search : elementRusult,
                    isDisplayForm : true
                })
            }else {
                this.setState({
                    mess : true
                })
            }       
        })
      }

    onChangePhone(e) {
        this.setState({
            phone : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        
        var valueSearch = this.state.phone;
        console.log(valueSearch);
        var tasks = JSON.parse(localStorage.getItem('patient'));
        this.findArrayElementByTitle(tasks,valueSearch);
    }

    onToggleForm = () => {
        this.setState({
            isDisplayForm : !this.state.isDisplayForm
        })
    }

    
    render() {
        var { isDisplayForm , mess} = this.state;
        var messNotification = mess ? "Không tìm thấy số điện thoại " : "";
        var elm = isDisplayForm ?   
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
                <td>
                    {this.state.search.name}
                </td>
                <td>
                    {this.state.search.age}
                </td>
                <td>
                    {this.state.search.gender}
                </td>
                <td>
                    {this.state.search.phone}
                </td>
                <td>
                    {this.state.search.date}
                </td>
                <td>
                    {this.state.search.detail}
                </td>
                <td></td>
            </tbody>
            </table> 
        : "" ;
        
        return (
            <div>
                
                <form  onSubmit={this.onSubmit}>

                    <div className="form-group">
                        <label>Nhập số điện thoại muốn tìm kiếm </label>
                        <input type="text"
                        name = "phone"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                        className="form-control"
                        
                        />
                    </div>
                    <div className="form-group" onClick={this.onToggleForm} >
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                  {elm}
                  {messNotification}
                </form>
            </div>
        )
    }
}