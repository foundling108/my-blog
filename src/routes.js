import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './Components/Home/Home.js';
import Blog from './Components/Blog/Blog.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';

export default(
    <Switch>
        <Route component={ Home } path="/" exact />
        <Route component={ Blog } path="/blog" />
        <Route component={ About } path="/about" />
        <Route component={ Contact } path="/contact" />
    </Switch>
)