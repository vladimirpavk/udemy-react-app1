import React from 'react';
import PropTypes from 'prop-types';

const Cockpit = (props)=>{
    return (
        <div>
            <h1>{props.appName}</h1>
            <p className={props.paragraphClassName}>This is really working!</p>
            <button
                className={props.buttonClassName}
                onClick={props.click}>Toggle Persons</button>
             <button
                className={props.buttonClassName}>
                Log in</button>
        </div>
    );
}

Cockpit.propTypes = {
    appName: PropTypes.string,
    paragraphClassName: PropTypes.string,
    buttonClassName: PropTypes.string,
    click: PropTypes.func
};

export default Cockpit;