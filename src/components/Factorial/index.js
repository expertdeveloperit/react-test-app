import React, { Component } from 'react';
import './fact.css';

class Factorial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number:'',
            result:'',
            error:''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://0.0.0.0:9000/fact',{
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({number:this.state.number})
        })
        .then(res =>  res.json())
        .then(data =>  this.setState({result:data.result}))
        .catch(err =>   this.setState({error:err.message}))
    }
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value ,result:'', error:''})
    }
 render() {
     const { number, result } = this.state;
  return (
    <div className="fact">
      <header className="header">
        <h2>
          Find Factorial
        </h2>
      </header>
      <div>
          <form onSubmit={(e) => this.handleSubmit(e)}> 
              <label>Enter the Number</label><br/>
              <input className="input" required value={number} onChange={(e) => this.handleChange(e)} name="number" type="number" placeholder="Enter the number" /><br/>
              <button className="btn" type="submit">Calculate</button>
          </form>
          <div>
              <p>{result ? result : ''}</p>
          </div>
      </div>
    </div>
  );
}
}

export default Factorial;