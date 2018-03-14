import React from 'react'

class Addition extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: null,
        }
        this.addNumber = (event) => {
            event.preventDefault();

            const number1 = parseInt(document.getElementById('Anum1').value);
            const number2 = parseInt(document.getElementById('Anum2').value);
            debugger;

            if (number1 === +number1 && number2 === +number2) {
                console.log(+number1 + +number2);
                this.setState({

                    answer: +number1 + +number2
                });
            }
            else {
                console.log("Insert Only Numbers");
                this.setState({

                    answer:"Insert Only Numbers"
                });
            }
        }
    }
    render() {
        return (
            <form align="center">
                <br />
                <hr />
                <div border="1">
                    <label>Addition Form</label><br /><br/>
                    <input id="Anum1" type="text" /><br /><br />
                    <input id="Anum2" type="text" /><br /><br />
                    <button onClick={this.addNumber}>Add</button><br />
                    <label>Answer : {this.state.answer}</label>
                </div>
            </form>
        );
    };
}

export default Addition