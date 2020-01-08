import React from './../../node_modules/react'
import {Route} from './../../node_modules/react-router-dom'
import Form from './../components/Form';
import NewLogin from './../components/NewLogin';
import Forgot from './../components/Forgot';


const Router=()=> {
    return (
        <div>
        <Route exact path="/">
        <Form/>
        </Route>
        <Route exact path="/CreateLogin">
        <NewLogin/>
        </Route>
        <Route exact path="/Forgot">
        <Forgot/>
        </Route>
        </div>
    )
}
export default Router;