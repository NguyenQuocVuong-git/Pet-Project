import React, {Component} from 'react';

class TableRow extends Component {
    constructor(props){
        super(props);
        

        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
    }


    onChangeStatus(event){
        console.log(this.state);
        this.setState({value: event.target.value});
    }

    onChangeDate(){

    }
    render(){
        return(
            <tr>
               <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.age}
                </td>
                <td>
                    {this.props.obj.gender}
                </td>
                <td>
                    {this.props.obj.phone}
                </td>
                <td>
                    {this.props.obj.date}
                </td>
                <td>
                    {this.props.obj.detail}
                </td>
                <td>
                    
                </td>
            </tr>
        )
    }
}

export default TableRow;