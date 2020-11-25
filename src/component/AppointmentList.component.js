
import React, { Component } from 'react';

export default class AppointmentList extends Component {
    constructor(props){
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeDetail = this.onChangeDetail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name : "",
            age : "",
            gender : "",
            phone : "",
            detail :"",
            date : ""
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age : e.target.value
        })
    }

    onChangeGender(e) {
        this.setState({
            gender : e.target.value
        })
    }

    onChangePhone(e){
        this.setState({
            phone : e.target.value
        })
    }
    
    onChangeDetail(e) {
        this.setState({
            detail : e.target.value
        })
    }

    onChangeDate (e) {
        this.setState({
            date : e.target.value
        })
        // var target = e.target;
        // var name = target.name;
        // var value = target.value;
        // this.setState({
        //     [name] : value
        // });
    }

    onSubmit = (e) => {
         e.preventDefault();
        const object = {
            name : this.state.name,
            age : this.state.age,
            gender : this.state.gender,
            phone : this.state.phone,
            detail : this.state.detail,
            date : this.state.date
        }
        
        console.log(object);

        this.props.sentData(object);

        this.setState({
            name : "",
            age : "",
            gender : "",
            phone : "",
            detail :"",
            date : ""
        })
       
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Đặt lịch hẹn</h3>
                <form  onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Họ và tên </label>
                        <input type="text"
                        name = "name"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Tuổi  </label>
                        <input type="number" 
                        name="age"
                        value={this.state.age}
                        onChange={this.onChangeAge}
                        className="form-control"/>
                    </div>
                    {/* <div class="form-group">
                        <p>Giới tính</p>
                        <input type="radio" 
                        id="male" 
                        name="gender" 
                        value={this.}
                        />
                        <label for="male">Male</label><br></br>
                        <input type="radio" id="female" name="gender" value="0"/>
                        <label for="female">Female</label>
                    </div> */}
                     <div className="form-group">
                        <label>Giới tính  </label>
                        <input type="text" 
                        name="gender"
                        value={this.state.gender}
                        onChange={this.onChangeGender}
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại </label>
                        <input type="number" 
                        name="phone"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                        className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Chi tiết về bệnh</label><br></br>
                        <textarea 
                        rows="9" 
                        cols="70"
                        name="detail"
                        value={this.state.detail}
                        onChange={this.onChangeDetail}
                        >  
                        </textarea> 
                    </div>
                    <div className="form-group">
                        <label>Ngày đặt lịch</label>
                        <input 
                        type="date" 
                        name="date" 
                        id="input"
                        value={this.state.date}
                        onChange={this.onChangeDate}
                        class="form-control" 
                        required="required" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}
 