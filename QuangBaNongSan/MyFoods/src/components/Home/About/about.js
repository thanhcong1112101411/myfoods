import React from 'react';

import classes from './about.css';
import style from '../../../Styles/style.css';
import Heading from '../Heading/heading';

const about = (props) =>(
    <div className = {[classes.about, classes.padding].join(" ")}>
        <Heading>Về Seasonal Foods</Heading>
        <div className = {[classes.aboutContent, "container", style.container].join(" ")}>
            <div className="row">
                <div className="col-lg-8 col-md-10 offset-lg-2 offset-md-1">
                    <p>jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.</p>
                    <p>jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.</p>
                </div>
            </div>
        </div>
    </div>
);

export default about;