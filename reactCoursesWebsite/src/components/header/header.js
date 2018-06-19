import React, {Component} from 'react';
import "./header.css";

class Header extends Component{
    render(){
        return (
            <div>
                <center>
                    <h1 class="animated fadeIn">{this.props.text}</h1>
                </center>
            </div>
        );
    }
}
export default Header;