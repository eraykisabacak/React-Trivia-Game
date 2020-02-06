import React, {Component} from 'react';
import logo from "../logo.svg";
import Button from 'react-bootstrap/Button';
import {Form,Col} from 'react-bootstrap'
import Game from './Game'

class Start extends Component {
    state={
        difficult:'',
        category:0,
        isSubmitted: false
    };

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDifficultChange = this.handleDifficultChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);

    }

    handleDifficultChange = event => {
        this.setState({
            difficult:event.target.value
        })
    }
    handleCategoryChange = event => {
        this.setState({
            category:event.target.value
        })
    }
    handleSubmit = event => {
        if(this.state.difficult === '' || this.state.category === 0){
            alert('Lütfen bir zorluk ve kategori seçiniz');
            return;
        }else{
            event.preventDefault();
            this.setState({isSubmitted:true})
        }
    }
    render() {
        const {isSubmitted} = this.state;
        return (
            <div>
                {isSubmitted === false ? <div>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>A TRIVIA GAME</h1>

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Difficult</Form.Label>
                        <Form.Control name="difficult" as="select" onChange={this.handleDifficultChange}>
                            <option></option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Category</Form.Label>
                        <Form.Control name="category" as="select" onChange={this.handleCategoryChange}>
                            <option></option>
                            <option value="9">General Knowledge</option>
                            <option value="10">Entertainment: Books</option>
                            <option value="11">Entertainment: Film</option>
                            <option value="12">Entertainment: Music</option>
                            <option value="13">Entertainment: Musicals &amp; Theatres</option>
                            <option value="14">Entertainment: Television</option>
                            <option value="15">Entertainment: Video Games</option>
                            <option value="16">Entertainment: Board Games</option>
                            <option value="17">Science &amp; Nature</option>
                            <option value="18">Science: Computers</option>
                            <option value="19">Science: Mathematics</option>
                            <option value="20">Mythology</option>
                            <option value="21">Sports</option>
                            <option value="22">Geography</option>
                            <option value="23">History</option>
                            <option value="24">Politics</option>
                            <option value="25">Art</option>
                            <option value="26">Celebrities</option>
                            <option value="27">Animals</option>
                            <option value="28">Vehicles</option>
                            <option value="29">Entertainment: Comics</option>
                            <option value="30">Science: Gadgets</option>
                            <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                            <option value="32">Entertainment: Cartoon &amp; Animations</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        GET STARTED
                    </Button>
                </Form>
                    </div> :null }
                {isSubmitted ? <Game category={this.state.category} difficult={this.state.difficult}/> : null}
            </div>

        );
    }
}

export default Start;
