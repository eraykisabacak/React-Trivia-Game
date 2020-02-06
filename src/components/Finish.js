import React, {Component} from 'react';
import Button from "react-bootstrap/Button";

class Correct extends Component {
    render() {
        const {score} = this.props;
        return (
            <div>
                <h1>Finish</h1>
                <p>Total: {score} points</p>
                <Button href="/" className="nextBtn" variant="outline-success" size="lg">Home Page</Button>{' '}
            </div>
        );
    }
}

export default Correct;
