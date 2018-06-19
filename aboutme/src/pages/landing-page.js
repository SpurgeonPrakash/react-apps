import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Content from '../Content/Content';
import Skills from './skills/skills';
import Blogs from './blogs/blogs';

class LandPage extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Content} />
                        <Route exact path="/skills" component={Skills} />
                        <Route exact path="/blogs" component={Blogs} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default LandPage;