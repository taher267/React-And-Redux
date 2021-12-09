import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person';
// import Person from './Components/Person';
import Book from './Components/Book';

class App extends Component {
  state = {
    books: [
      { name: 'Book 1', writer: 'Wri 1' },
      { name: 'Book 2', writer: 'Wri 2' },
      { name: 'Book 3', writer: 'Wri 3' }
    ],
    otherProp: "Other Prop of State"
  }

  changeBookState = (newBoook) => {
    this.setState({
      books: [
        { name: newBoook, writer: 'Writer 1' },
        { name: 'B0k 2', writer: 'Writer 2' },
        { name: 'B0k 3', writer: 'Writer 3' }
      ]
    });
  }
  //change input state
  changeWithInputState = (event) => {
    this.setState({
      books: [
        { name: 'Book 1', writer: 'Writer 1' },
        { name: event.target.value, writer: 'Writer 2' },
        { name: 'B0k 3', writer: 'Writer 3' }
      ]
    });
  }


  render() {
    const style = {
      borderBottom: "1px solid #009dea",
      paddingBottom: '5px'
    }
    return (
      <div className="App">
        <div className="border container mt-3 py-3">
          <div className="row">
            <h1 style={style}>Book List</h1>
            <div className="col-lg-6"><button type="button" onClick={() => this.changeBookState('New Book 01')} className="btn btn-primary">Change State</button>
              {/* <button type="button" onClick={this.changeBookState.bind(this, 'New Book 01')} className="btn btn-primary">Change State</button> */}</div>
            <div className="col-lg-6 my-3"><input type="text" onChange={this.changeWithInputState} className="form-control" /></div>


            <Book
              name={this.state.books[0].name}
              writer={this.state.books[0].writer}
            />
            <Book
              name={this.state.books[1].name}
              writer={this.state.books[1].writer}
              inputName={this.changeWithInputState}
            />
            <Book
              name={this.state.books[2].name}
              writer={this.state.books[2].writer} changeStat={this.changeBookState.bind(this, 'The new book 02')}
            />

          </div>
        </div>
      </div>
    );
  }
}



export default App;
