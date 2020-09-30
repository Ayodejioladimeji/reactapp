import React, { Component } from 'react'

export class File extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }

        this.minusHandler = this.minusHandler.bind(this);
        this.resetHandler = this.resetHandler.bind(this);
        this.addHandler = this.addHandler.bind(this);
    }


    // Declaring the Onclick methods
    minusHandler() {
        if(this.state.count>0)
        this.setState(state => ({
            count:state.count - 1
        }))
    }

    resetHandler(){
        this.setState(state => ({
            count:state.count = 0
        }))
    }
    
    addHandler(){
        if(this.state.count>=99){
            return;
        }
        this.setState(state => ({
            count:state.count + 1
        }))
    }
    
    render() {
        return (
            <div>
            {/* THE HEADER */}
            <div className="header">
                <h1>React Counter</h1>
            </div>


            {/* THE BODY */}
            <div className="body">
                <div className="result">
                    <h1>{this.state.count}</h1>
                </div>
            </div>


            {/* THE FOOTER */}
            <div className="footer">
                <button onClick={this.minusHandler}>
                    <i className="fa fa-minus-circle"></i>
                </button>

                <button onClick={this.resetHandler}>
                    <i className="fa fa-refresh"></i>
                </button>

                <button onClick={this.addHandler}>
                    <i className="fa fa-plus-circle"></i>
                </button>
            </div>


            {/* DEV CAREER */}
            <div className="dev">
                <h2>DEV-CAREER 2.0</h2>
            </div>

        </div>
        )
    }
}

export default File
