import React, { Component } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';
import Button from './components/Button';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { operations: [] };
    }

    calculateOperations = () => {
        let result = this.state.operations.join('')
        if (result) {
            try {
                result = eval(result)
            }
            catch (err) {
                console.log(err);
            }
            result = String(result)
            this.setState({
                operations: [result],
            })
        }
    }

    handleClick = e => {
        const value = e.target.getAttribute('data-value');
        switch (value) {
            case 'clear':
                this.setState({
                    operations: [],
                })
                break;
            case 'equal':
                this.calculateOperations()
                break;
            default:
                var Operations = this.state.operations.slice();
                Operations.push(value);
                this.setState({
                    operations: Operations,
                });
                break;
        }
    }

    render() {
        return (
            <div>
                <div className="App row">
                    <div className="col-3"></div>
                    <div className="col-6 border-1 p-5">
                        <div class="text-center">
                            <h3>Online Calculator</h3>
                        </div>
                        <Display data={this.state.operations} />
                        <Buttons>
                            <div className="col-9"></div>
                            <Button onClick={this.handleClick} label="/" value="/" />

                            

                            <Button onClick={this.handleClick} label="7" value="7" />
                            <Button onClick={this.handleClick} label="8" value="8" />
                            <Button onClick={this.handleClick} label="9" value="9" />
                            <Button onClick={this.handleClick} label="*" value="*" />

                           

                            
                            <Button onClick={this.handleClick} label="4" value="4" />
                            <Button onClick={this.handleClick} label="5" value="5" />
                            <Button onClick={this.handleClick} label="6" value="6" />
                            <Button onClick={this.handleClick} label="-" value="-" />

                            

                            
                            <Button onClick={this.handleClick} label="1" value="1" />
                            <Button onClick={this.handleClick} label="2" value="2" />
                            <Button onClick={this.handleClick} label="3" value="3" />
                            <Button onClick={this.handleClick} label="+" value="+" />

                            <Button onClick={this.handleClick} label="0" value="0" />
                            <Button onClick={this.handleClick} label="." value="." />
                            <Button onClick={this.handleClick} label="C" value="clear" />
                            <Button onClick={this.handleClick} label="=" value="equal" />
                        </Buttons>
                    </div>
                </div>
                <div class="row">
                    <div className="col-3"></div>
                    <div className="col-6 p-5 text-right">
                        <h4><span class="badge badge-info">Developed by Tich Nguyen</span></h4>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default App;
