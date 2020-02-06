import React, {Component} from 'react';
import { Row,Col } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Correct from "./Correct";
import Incorrect from "./Incorrect";
import Information, {stopTime} from "./Information";
import { BounceLoader } from "react-spinners";
import { css } from "@emotion/core";
import TimeOut from './TimeOut';
import Finish from './Finish';

const override = css`
      display: block;
      margin: 0 auto;
      margin-top:50px;
      border-color: red;
    `;

class Game extends Component {
    state = {
        loading: true,
        questions: null,
        question:null,
        answer:null,
        options:null,
        questionNumber:1,
        userAnswer:null,
        score:0,
        showComponent:true,
        correctComponent:false,
        once:true,
        timeState:false,
        twoIncorrectDeleteState:true
    };
    constructor(props){
        super(props);
        this.handler = this.handler.bind(this);
        this.timeOut = this.timeOut.bind(this);
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    handler(){
        this.setState({
            showComponent:true,
            correctComponent:false,
            questions: this.state.question[this.state.questionNumber].question,
            answer: this.state.question[this.state.questionNumber].correct_answer,
            options: this.state.question[this.state.questionNumber].incorrect_answers,
            loading: false,
            once:true
        });

    }

    timeOut(){
        this.setState({
            timeState:true
        });
    };

    componentDidMount() {
        fetch(`https://opentdb.com/api.php?amount=10&category=${this.props.category}&difficulty=${this.props.difficult}&type=multiple`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ question: data.results,
                                });
                this.setState({
                    questions: this.state.question[this.state.questionNumber].question,
                    answer: this.state.question[this.state.questionNumber].correct_answer,
                    options: this.state.question[this.state.questionNumber].incorrect_answers,
                    loading: false
                });
            })
            .catch(err => console.log(err));
    }

    _onButtonClick(i) {
        this.setState({
            showComponent: false,
        });
        if(this.state.answer === i.item){
            this.setState({
                           score : this.state.score + 100,
                           correctComponent:true,
                           questionNumber:++this.state.questionNumber});
        }
        stopTime();
    }

    twoIncorrectDelete(){
        let s1,s2;
        do{
            s1 = Math.floor(Math.random()*4);
            s2 = Math.floor(Math.random()*4);
        }while(s1 === s2 || this.state.options[s1] === this.state.answer || this.state.options[s2] === this.state.answer);
        document.getElementById(this.state.options[s1]).remove();
        document.getElementById(this.state.options[s2]).remove();
        this.setState({twoIncorrectDeleteState:false})
    }

    render() {
        const {loading,answer,options,score,questionNumber,once} = this.state;

        if (loading) {
            return (<div className="sweet-loading">
                <BounceLoader
                    css={override}
                    size={120}
                    color={"#123abc"}
                    loading={this.state.loading}
                />
            </div>)
        }

        if(once){
            options.splice(Math.random() * 4,0,answer);
            this.setState({once:false});
        }

        return (
            <div>
                <Information className="inform"
                             score={score}
                             action={this.timeOut}
                             questionNumber = {questionNumber}/>
                <Row>
                    {
                        questionNumber <= 10 && this.state.showComponent === true && this.state.correctComponent === false
                            && this.state.timeState === false ?
                            <div className="questions">
                                <Col sm={12}>
                                    <h4 className="question">{this.state.questions}</h4>
                                </Col>
                                <Col className="gameBtn">
                                    {
                                        options.map( item =>
                                        <Col>
                                            <Button  id={item}
                                                     className="optionBtn"
                                                     onClick={this._onButtonClick.bind(this,{item})}
                                                     variant="secondary" size="lg">{item}</Button>
                                        </Col>
                                    )}
                                    {this.state.twoIncorrectDeleteState ?
                                    <Button className="twoIncorrect" onClick={this.twoIncorrectDelete.bind(this)}>50/50</Button> : null }
                                </Col>
                            </div> : null
                    }
                </Row>
                {this.state.showComponent === false && this.state.correctComponent === true ?
                    <Correct action={this.handler} score={score}/> : null
                }
                {this.state.showComponent === false && this.state.correctComponent === false ?
                    <Incorrect score={score}/> :null
                }
                {this.state.timeState ? <TimeOut score={score}/> : null}
                {questionNumber > 10 ? <Finish score={score}/> : null}
            </div>
        );
    }
}

export default Game;
