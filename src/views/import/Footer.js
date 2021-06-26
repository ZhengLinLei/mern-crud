import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return (
            <footer className="grey lighten-4 page-footer">
                <div className="container">
                    <div className="center">
                        <a href="https://github.com" className="black-text"><ion-icon name="logo-github" size="large"></ion-icon></a>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;