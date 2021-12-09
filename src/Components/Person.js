import React, { Component } from "react";


let Person = (props) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Excerpt: {props.children}</h1>
        </div>
    );
}



// function Person() {
//     return (
//         <div>
//             <h1>Im form Person Function</h1>
//         </div>
//     );
//     //return React.createElement('div', { className: "border py-3" }, React.createElement('h1', { className: 'text-success' }, 'React Create Element and person Func'))
// }

//Class

// class Person extends Component {
//     // constructor(props) {
//     //     super(props);
//     // }
//     render() {
//         return (
//             <div>
//                 <h1>Name: {this.props.name}</h1>
//                 <h1>Age: {this.props.age}</h1>
//                 <h1>Excerpt: {this.props.children}</h1>
//             </div>
//         );
//     }
// }
export default Person;