import React, { Component } from 'react'
import Questions from './components/Questions'
import Options from './components/Options'
import Pediction from './components/Pediction';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      optionsCreator: ['1', '2', '3', '4'],
      yourQuestion: '',
      optionsforQuestion: [],
      repeatedQuestion: []

    }
  }


  handleAddOption = () => {
    this.setState({ optionsCreator: [...this.state.optionsCreator, ((this.state.optionsCreator.length + 1).toString())] })
  }
  handleAnswerQuestions = () => {
    const inputs = [...document.querySelectorAll('input')]
    const q1 = inputs.shift()
    this.setState({ yourQuestion: q1 })
    this.setState({ optionsforQuestion: [...inputs] })
    if (this.state.repeatedQuestion.length === 0) {
      this.setState({ repeatedQuestion: [{ qCount: 1, rQuestion: q1.value }] })
      console.log(this.state.repeatedQuestion)
    } else {
      this.state.repeatedQuestion.forEach((a, i) => {
        if (a.rQuestion.localeCompare(q1.value) == 0) {
          this.setState({ repeatedQuestion: [{ qCount: a.qCount + 1, rQuestion: a.rQuestion }] })
        }
        if (a.rQuestion.localeCompare(q1.value) === -1) {
          this.setState({ repeatedQuestion: [...this.state.repeatedQuestion, { qCount: 1, rQuestion: q1.value }] })
        }
      })
    }

  }



  render() {
    return (
      <Router>
        <div className='App' >
          <header><h1>arbiter</h1></header>
          <section className="subHead">Ask It, relax about It. and let us soft it 99% correct.</section>
          <Switch>
            <Route path='/' exact>
              <div className="questionWrapper">
                <Questions />
                <div>
                  <h3>SET OPTIONS: </h3>
                  <div className="Answers" id="Answers">
                    {this.state.optionsCreator.map((num, i) => {
                      return <Options key={i} num={Number(num)} />
                    })}
                  </div>
                  <div className="actionBtn">
                    <button onClick={this.handleAddOption}>Add Option +</button>
                    <Link to='/predict'> <button onClick={this.handleAnswerQuestions}>Answer</button></Link>
                  </div>
                </div>
              </div>
            </Route>
            <Route path="/predict">
              <Pediction question={this.state.yourQuestion} opts={this.state.optionsforQuestion} rPQ={this.state.repeatedQuestion} />

            </Route>
          </Switch>
        </div >
      </Router>
    )
  }
}
