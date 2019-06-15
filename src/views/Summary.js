import React, {Component} from 'react';

import SummaryStroe from '../stores/SummaryStrore.js';

class Summary extends Component {

    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);

        this.state = {
            sum: SummaryStroe.getSummary()
        }
    }

    onUpdate() {
        this.setState({sum: SummaryStroe.getSummary()});
    }

    componentDidMount() {
        SummaryStroe.addChangeListener(this.onUpdate);
    }

    componentWillUnmount() {
        SummaryStroe.removeChangeLister(this.onUpdate);
    }

    render() {
        return (
            <div>Total Count : {this.state.sum}</div>
        );
    }

}

export default Summary;