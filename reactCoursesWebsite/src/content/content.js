import React, { Component } from 'react';
import Tile from '../components/tile/tile'
class Content extends Component {
    constructor(props){
        super(props);
        // this.state = {renderFade: false};
        // componentDidMount() {
        //     setTimeout(() => { this.setState({renderFade: true}); }, 5000);
        //   }
        
        this.skillList=[
            {
                name: 'HTML',
                description: 'I will write semantic markup in HTML5 which is the latest standard of core technology of web.',
                imgURL: '/images/html.png'
            },
            {
                name: 'CSS',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/css.png'
            },
            {
                name: 'JS',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/js.jpg'
            },
            {
                name: 'React',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/react.png'
            },
            {
                name: 'Angular',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/angular2.png'
            },
            {
                name: 'GIT',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/git.png'
            },
            {
                name: 'FIREBASE',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/firebase.png'
            },
            {
                name: 'API',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/api.png'
            },
            {
                name: 'NODE',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/nodejs.png'
            },
            {
                name: 'JQUERY',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/jquery.png'
            },
            {
                name: 'TYPESCRIPT',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/ts.png'
            },
            {
                name: 'Angular',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/angular2.png'
            },
            {
                name: 'GIT',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/git.png'
            },
            {
                name: 'FIREBASE',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/firebase.png'
            },
            {
                name: 'API',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/api.png'
            },
            {
                name: 'NODE',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/nodejs.png'
            },
            {
                name: 'JQUERY',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/jquery.png'
            },
            {
                name: 'TYPESCRIPT',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/ts.png'
            },
            {
                name: 'GIT',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/git.png'
            }, 
            {
                name: 'JQUERY',
                description: 'I will style web pages using CSS3, leveraging on the new CSS3 modules, making modern websites.',
                imgURL: '/images/jquery.png'
            }

        ];
    }
    render() {
        return (
            this.skillList.map(skills=>{
                return (
                    
                    <Tile skillName={skills.name} skillDesc={skills.description} skillImg={skills.imgURL}></Tile>
                );
            }

            )
        );
    }
}
export default Content;