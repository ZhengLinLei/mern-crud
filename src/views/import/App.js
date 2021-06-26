import React from 'react';

// IMPORT
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';

const App = () => {
    return (
        <React.Fragment>
            <Nav />

            <Main />

            <Footer />
        </React.Fragment>
    );
}

export default App;