import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';

const Cockpit = (props)=>{
    const authContext = useContext(AuthContext);

    return (
        <div>
            <h1>{props.appName}</h1>
            <p className={props.paragraphClassName}>This is really working!</p>
            <button
                className={props.buttonClassName}
                onClick={props.click}>Toggle Persons</button>                            
            <button className={props.buttonClassName} onClick={authContext.login}>{authContext.isAuthenticated ? 'Logout' : 'Login'}</button>                                                
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