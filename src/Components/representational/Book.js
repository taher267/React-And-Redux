import React from "react";

const Book = (props) => {
    return (
        <div className="col-md-4 border py-3 border-right-0">

            <p>Book: {props.name} <span onClick={props.changeStat} className="btn btn-danger">Click me for Change State</span></p>
            <p>Writer: {props.writer}
                <input type="text" onChange={props.inputName} className="form-control" value={props.name} />
            </p>
            <a className="btn btn-danger" href="#" onClick={props.delete} role="button">Delete</a>
        </div>
    );
}

export default Book;