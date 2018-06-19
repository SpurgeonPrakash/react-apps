import React, { Component } from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
// import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
// import 'https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous"';
class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <div class="container">
                        <div class="col-sm-6 col lg-6 col-md-6" id="navBar">
                            <ul>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/skills"}>Skills</Link></li>
                                <li><Link to={"/blogs"}>Blogs</Link></li>
                            </ul>
                        </div>
                        <div class="col-sm-6 col lg-6 col-md-6" id="icons">
                            <a href=""><i class="fab fa-github-square"></i></a>
                            <a href=""> <i class="fa fa-twitter"></i></a>
                        </div>
                    </div>
            </nav>
        </header>
                );
            }
        }
export default Header;