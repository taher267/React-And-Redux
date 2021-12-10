import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DBBooklist from "../assets/Book";
import BookList from "./lists/BookList";


class MainComponent extends Component {
    state = {
        books: DBBooklist,
        showBooks: true
    }

    // changeBookState = (newBoook) => {
    //   this.setState({
    //     books: [
    //       { name: newBoook, writer: 'Writer 1' },
    //       { name: 'B0k 2', writer: 'Writer 2' },
    //       { name: 'B0k 3', writer: 'Writer 3' }
    //     ]
    //   });
    // }
    //change input state
    changeWithInputState = (event, index) => {
        const book = { ...this.state.books[index] };
        book.name = event.target.value;
        const books = [...this.state.books];
        books[index] = book;

        this.setState({ books: books });

        // this.setState({
        //   books: [
        //     { name: 'Book 1', writer: 'Writer 1' },
        //     { name: event.target.value, writer: 'Writer 2' },
        //     { name: 'B0k 3', writer: 'Writer 3' }
        //   ]
        // });
    }

    //Book State Delete
    deleteBookState = (index) => {
        // const books = this.state.books;
        // const books = this.state.books.slice();
        // const books = this.state.books.map(item => item);
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    }

    toggleBooks = () => {
        this.setState({ showBooks: !this.state.showBooks });
        // console.log(this.state.showBooks);
    }

    render() {
        const style = {
            borderBottom: "1px solid #009dea",
            paddingBottom: '5px'
        }
        let books = null;
        if (this.state.showBooks) {
            books = <BookList books={this.state.books}
                deleteBookState={this.deleteBookState}
                changeWithInputState={this.changeWithInputState}
            />
        }



        return (
            <div className="App">
                <ul className="list-unstyled d-flex align-item-center justify-content-center bg-secondary menu-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/new-book">New Book</a></li>
                </ul>
                <div className="border container mt-3 py-3">
                    <div className="row">
                        <h1 style={style}>Book List <a className="btn btn-secondary d-inline-block" onClick={this.toggleBooks}>{<FontAwesomeIcon icon={faBars} />}</a></h1>

                        {books}
                        {/* <Book
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
              /> */}
                        <div className="col-lg-6">
                            {/* <button type="button" onClick={() => this.changeBookState('New Book 01')} className="btn btn-primary">Change State</button> */}
                            {/* <button type="button" onClick={this.changeBookState.bind(this, 'New Book 01')} className="btn btn-primary">Change State</button> */}
                        </div>
                        <div className="col-lg-6 my-3">
                            {/* <input type="text" onChange={this.changeWithInputState} className="form-control" /> */}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}
export default MainComponent;