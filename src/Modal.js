import React, {Component} from 'react';

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedEmployee: '',
            selectedTeam: '',
            employees : [],
            error: null,
        }
    }

    onChangeHandler = (e) => {
        const { data } = this.props;
        let target = e.target.value;
        this.setState({
            selectedTeam : target,
        });

        data.filter( item => {
           if(item.team === target) {
               this.setState({
                   employees : item.employees,
               });
           }
        });
    };

    onInputChangeHandler = (e) => {
        let target = e.target.value;
        this.setState({
            selectedEmployee: target,
        });
    };

    closeHandler = () => {
        prompt("Do you really want to close", "Yes");
    };

    submitHandler = () => {
        let { employees, selectedTeam, selectedEmployee } = this.state;
        if(employees.indexOf(selectedEmployee) >= 0) {
            console.log('Finally, we can call any api for further action.. :)')
        } else {
            this.setState({
                error: `'${selectedEmployee}' does not exist '${selectedTeam}' Team, Please validate..`
            })
        }
    };

    createTeamList = (team, idx) => {
        return (
            <option key={idx}>
                {team.team}
            </option>
        )
    };

    createEmployees = (employee, idx) => {
        return (
            <option key={idx}>
                {employee}
            </option>
        )
    };

    render() {
        const { data } = this.props;
        let { employees } = this.state;

        return (
            <div className='modal-section'>

                <button className='close-modal' onClick={this.closeHandler}>x</button>

                <h1>Select an Employee</h1>

                <div className='form-group'>
                    <div className='checkbox-section'>
                        <input type="checkbox" defaultChecked />
                        <span>&nbsp;</span>
                    </div>
                    <label className='checkbox-label'>Send welcome email to employee</label>
                </div>

                <div className='form-group'>
                    <label>Select an Team in the Organization</label>
                    <div className='arrow-section'>
                        <select className='form-control' onChange={this.onChangeHandler}>
                            <option>Select Team...</option>
                            { data && data.length && data.map(this.createTeamList)}
                        </select>
                        <span>&nbsp;</span>
                    </div>
                </div>

                <div className='form-group'>
                    <label>Select an Employee</label>
                    <div className='arrow-section'>
                        <input onBlur={this.onInputChangeHandler} className='form-control' list="employeeList" placeholder='Select Employee..' />
                        <span>&nbsp;</span>
                    </div>
                    <datalist id="employeeList">
                        { employees && employees.length && employees.map(this.createEmployees) }
                    </datalist>
                    { this.state.error &&
                        <p className='error-msg'>{this.state.error}</p>
                    }
                </div>

                <div className='txt-right'>
                    <button className='btn' onClick={this.closeHandler}>Cancel</button>
                    <button className='btn btn-primary' onClick={this.submitHandler}>OK</button>
                </div>

            </div>
        )
    }
}

export default Modal;
