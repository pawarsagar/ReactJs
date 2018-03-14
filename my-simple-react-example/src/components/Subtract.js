import React from 'react'

class Subtract extends React.Component {
    constructor() {
        super();
        this.state = {
            answer: null,
        }
        this.addNumber = (event) => {
            event.preventDefault();

            const number1 = Number(document.getElementById('num1').value);
            const number2 = Number(document.getElementById('num2').value);

            if (number1 === +number1 && number2 === +number2) {
                console.log(number1 - number2);
                this.setState({

                    answer: (number1 - number2)
                });
            }
            else {
                console.log("Input only Numbers");
                this.setState({

                    answer: "Input Only Numbers"
                });
            }
        }
    }
    render() {
        return (
            <form align="center">
                <br />
                <hr />
                <div>
                    <label>Subtract form</label><br /> <br />
                    <input id="num1" type="text" /><br /><br />
                    <input id="num2" type="text" /><br /><br />
                    <button onClick={this.addNumber}>Subtract</button><br />
                    <label>Answer : {this.state.answer}</label>
                </div>
            </form>
        );
    };
}

export default Subtract