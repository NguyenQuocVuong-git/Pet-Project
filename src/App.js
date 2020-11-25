import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import AppointmentList from './component/AppointmentList.component';
import MakeAnAppointment from './component/MakeAnAppointment.component';
import SearchByPhoneNumber from './component/SearchByPhoneNumber.component';
import TimeTableDoctor from './component/TimeTableDoctor.component';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { patient : [
      {
        name : "vuong2",
        age : "18",
        gender : "nam",
        detail : "dau bung",
        date : "2020-20-11",
        phone : "0123456789"
      },
      {
        name : "vuong3",
        age : "20",
        gender : "nam",
        detail : "dau dau",
        date : "2020-20-13",
        phone : "9876543210"
      },
      {
        name : "vuong3",
        age : "22",
        gender : "nu",
        detail : "dau rang",
        date : "2020-20-15",
        phone : "123789654"
      }
    ]};
  }

  componentDidMount(){
    if(localStorage && localStorage.getItem('patient')){
        var tasks = JSON.parse(localStorage.getItem('patient'));
        this.setState({
          patient : tasks
        })
      }
    };


  onSubmit = (data) => {
    console.log("object con sang cha :", data);
   
    const { patient } = this.state;
    
    patient.push(data);
    this.setState({
      patient : patient
    });
    console.log("state  sua khi chen :" ,this.state)
    localStorage.setItem('patient', JSON.stringify(patient));
  }
  render() {
    
    return (
      <Router>
        <div>
       
        </div>
        <div className="container">
        
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">Phòng khám</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to='/appointmentList' className="nav-link">Đặt lịch bệnh nhân</Link>
                </li>
                <li className="nav-item">
                  <Link to='/makeAnAppointment' className="nav-link">Danh sách lịch hẹn</Link>
                </li>
                <li className="nav-item">
                  <Link to='/searchByPhoneNumber' className="nav-link">Tìm kiếm </Link>
                </li>
                <li className="nav-item">
                  <Link to='/timeTableDoctor' className="nav-link">Thời khóa biểu bác sĩ </Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
   
          <Switch>
              <Route path="/appointmentList">
                 <AppointmentList sentData={this.onSubmit} />
              </Route>
              <Route path="/makeAnAppointment">
                 <MakeAnAppointment sentDataAfter={this.state.patient} />
              </Route>
              <Route path='/searchByPhoneNumber' component={ SearchByPhoneNumber } />
              <Route path='/timeTableDoctor' component={ TimeTableDoctor } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
