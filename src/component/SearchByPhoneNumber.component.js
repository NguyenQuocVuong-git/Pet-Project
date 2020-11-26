
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
    componentDidMount(){
        console.log("didmount", JSON.parse(localStorage.getItem('result')));
    }


    findArrayElementByTitle(array, title) {
        const result = array.filter((item) => item.phone === title);
         if(result.length === 0){
            this.setState({
                mess : true
            })
         }else{
             this.setState({
                 search : result,
                 isDisplayForm : true
             })
            //  localStorage.setItem('result', JSON.stringify(result));
            //  console.log("elseeeeeee",this.state.search)
            //  console.log('result',localStorage.getItem('result'));
         }
    }

      tabRow() {
        return this.state.search.map(function (object, i) {
            return <TableRow obj={object} key={i}/>;
        });
    }

    onChangePhone(e) {
        this.setState({
            phone : e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        var valueSearch = this.state.phone;
        var tasks = JSON.parse(localStorage.getItem('patient'));
        this.findArrayElementByTitle(tasks,valueSearch);
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
                  {this.tabRow()}
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
                    <div className="form-group" >
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                  {elm}
                  {messNotification}
                </form>
            </div>
        )
    }
}