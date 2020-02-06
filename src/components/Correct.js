import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Lottie from 'react-lottie';
import animationData from '../14595-thumbs-up';

class Correct extends Component {
    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }
    state={
        showComponent:true,
        correctComponent:false,
        durum:false
    };

    render() {
        const {score} = this.props;

        return (
            <div>
                <Lottie height={300}
                        width={300}
                        options={{loop: true,
                            autoplay: true,
                            animationData: animationData,
                            rendererSettings: {
                                preserveAspectRatio: 'xMidYMid slice'}}}
                        />
                <h1>Correct</h1>
                <p>You Have earned 100 points</p>
                <p>Total: {score} points</p>
                <Button onClick={this.props.action} className="nextBtn" variant="outline-success" size="lg">Next Question</Button>{' '}
            </div>
        );
    }
}

export default Correct;
