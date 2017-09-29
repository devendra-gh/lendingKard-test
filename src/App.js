import React, {Component} from 'react';
import Modal from './Modal';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const data = [
            {team: 'Engineering', employees: ['Lawana Fan', 'Larry Rainer', 'Rahul Malik', 'Leah Shumway']},
            {team: 'Executive', employees: ['Rohan Gupta', 'Ronda Dean', 'Robby Maharaj']},
            {team: 'Finance', employees: ['Caleb Brown', 'Carol Smithson', 'Carl Sorensen']},
            {team: 'Sales', employees: ['Ankit Jain', 'Anjali Maulingkar']}
        ];

        return (
            <div className="App">
                <Modal data={data} />
            </div>
        );
    }
}

export default App;
