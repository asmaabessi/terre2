import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';



function RegisterScreen(props){
    
 const [name, setname] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [repassword, setRePassword] = useState('');
 const userRegister = useSelector(state =>state.userRegister);
 const { loading, userInfo, error} = userRegister;
 const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo){
            props.history.push("/");
        }
        return () => {
           //
        };
    }, [userInfo]);

const submitHandler =(e) =>{
    e.preventDefault();
    dispatch(register(name, email, password));

}

    return <div className="form">
        <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h2>créer un compte :</h2>
                </li>
                <li>
                    {loading && <div>chargement...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                 <label htmlFor="name">
                     name
                 </label>
                 <input type="name" name="name" id="name" onChange={(e) => setname(e.target.value)}>
                 </input>
                </li>
                <li>
                 <label htmlFor="email">
                     Email
                 </label>
                 <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
                 </input>
                </li>

                <li>
                    <label htmlFor="password">
                     mot de passe
                 </label>
                 <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
                 </input>
                </li>

                <li>
                    <label htmlFor="rePassword">
                     mot de passe
                 </label>
                 <input type="Password" id="rePassword" name="repassword"  onChange={(e) => setRePassword(e.target.value)}>
                 </input>
                </li>

                <button type="submit" className="button primary">enregistrer </button>
                <li>
                  
                Vous avez déjà un compte? <Link to="/signin">se connecter</Link>
                </li>
               

            </ul>
        </form>
    </div>
}

export default RegisterScreen;