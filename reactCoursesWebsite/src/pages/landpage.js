import React, {Component} from 'react';
import Header from '../components/header/header';
import Content from '../content/content'
class Landpage extends Component{
    render(){
        return (
            <div>
            
            <div><Header text = "--We are Learning--" /></div>
            <div class="container">
            <Content /></div>
            </div>
        );
    }
}

// function Landpage(props){
//     return (
//                     <div>
                    
//                     <div><Header text = "--We are Learning--" /></div>
//                     <div class="container">
//                     <Content /></div>
//                     </div>
//             );
// }
export default Landpage;