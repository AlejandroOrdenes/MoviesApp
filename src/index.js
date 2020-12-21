import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'

import List from './containers/List'

import 'bootswatch/dist/pulse/bootstrap.min.css';

const App = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-dark bg-dark border-bottom border-white">
                <a href="/" className="navbar-brand">
                    MovieApp
                </a>
            </nav>
            <main className="bg-pulse">
                <div className="container">
                    <List/>
                </div>
            </main>
        </Fragment>
        
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))