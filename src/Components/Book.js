import React from "react";

const Book = (props) => {
    return (
        <div className="col-md-4 border-right">
            <p>Book: {props.name} <span onClick={props.changeStat} className="btn btn-danger">Click me for Change State</span></p>
            <p>Writer: {props.writer}
                <input type="text" onChange={props.inputName} className="form-control" value={props.name} />
            </p>
        </div>
    );
}

export default Book;