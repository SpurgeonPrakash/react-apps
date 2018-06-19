//import React, {Component} from 'react';
import React from 'react';
import "./tile.css";
// class Tile extends Component{
//     render(){
//         return (
            
//                 <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 padding-0 wow fadeInUp" >
//                     <div class="course">
//                         <center><img src={this.props.skillImg} class="img-responsive" alt="" /></center>
//                         <center><h4>{this.props.skillName}</h4></center>
//                         <h5 class="course-summary">{this.props.skillDesc}</h5>
//                     </div>
//                 </div>
           
//         );
//     }
// }

function Tile(props){
    return (
            
                        <div class="col-lg-3 col-md-4 col-sm-6 col-xs-6 padding-0 wow fadeInUp" >
                            <div class="course">
                                <center><img src={props.skillImg} class="img-responsive" alt="" /></center>
                                <center><h4>{props.skillName}</h4></center>
                                <h5 class="course-summary">{props.skillDesc}</h5>
                            </div>
                        </div>
                   
                );
}
export default Tile;