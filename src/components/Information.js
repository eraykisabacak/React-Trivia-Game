import React, {Component} from 'react';
import {Row,Col} from 'react-bootstrap'

var myInterval = null;

export function stopTime(){
    clearInterval(myInterval);
    return true;
}

export const onTime = (state, props) => ({
    time:15
});


class Information extends Component {
    state={
        time:15
    };

    componentDidMount() {
            myInterval = setInterval(() => {
                if(this.state.time < 1) {
                    clearInterval(myInterval);
                    this.props.action();
                }
                this.setState({
                    time: this.state.time - 1
                })
            }, 1000);
    }


    render() {
        const {score,questionNumber} = this.props;
        return (
                <Row className="gameTop">
                    <Col className="topInformation">
                        <h3>Question {questionNumber}/10</h3>
                    </Col>
                    <Col className="topInformation">
                        <h3>{score} Points</h3>
                    </Col>
                    <Col className="topInformation">
                        <h3>Remaining Time : {this.state.time}</h3>
                    </Col>
                </Row>
        );
    }
}

export default Information;
