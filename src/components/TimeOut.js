import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import animationData from "../4970-unapproved-cross";
import Lottie from "react-lottie";

class Correct extends Component {
    render() {
        const {score} = this.props;
        console.log("Skor" + score);
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
                <h1>Time Out</h1>
                <p>Total: {score} points</p>
                <Button href="/" className="nextBtn" variant="outline-success" size="lg">Home Page</Button>{' '}
            </div>
        );
    }
}

export default Correct;
