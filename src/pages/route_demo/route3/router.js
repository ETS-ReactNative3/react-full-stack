import React from 'react'
import { HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Main from './Main'
import Info from './info'
import About from './../route1/about'
import Topic from './../route1/topic'
import Home from './Home'
import NoMatch from './NoMatch'
export default class IRouter extends React.Component{

    render(){
        return (
            <Router>
                <Home>
                    {/* 里要用Switch，否则会一直加载NoMatch */}
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        <Route exact={true} path="/about/abc" component={About}></Route>
                        <Route path="/topics" component={Topic}></Route>
                        {/* 下面不写path了 */}
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        );
    }
}