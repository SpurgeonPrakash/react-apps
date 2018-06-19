import React, { Component } from 'react';
import './Content.css';
class Content extends Component{
    render(){
        return(
           
            <div class="par">
            <h1> About Me </h1>
            
            <p>
                <h4>Profile:</h4>
                Name:T.S.G. Prakash<br/>
                Qualification:B.Tech<br/>
                Home Town:Vizianagaram
            </p>
            <img src ="../images/4.jpg" alt=""/>
            <div class="sample">
                    <p>  Hello everyone, My full name is Tara Spurgeon Gnan Prakash and I am from Vizianagaram. I was a beloved Son of Tara Samuel and Jyothi. My favorite food is "Biryani". My favorite colors are White and Black. I like those colors because they look good on my skin tone. <br/> <br/>    My hobbies are Listening Music, and I Can Play a Musical Instrument named "Jazz", I love to play sport, more specifically Cricket. Coming to Academics, I love Programming and Math</p>   
            </div>
            </div>
        );
    }
}

export default Content;