import React from 'react';
import './SignWithSocial.css';
import googleImg from "../../../images/buttons/google.png";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Utilities/firebase.init';
import { useNavigate } from 'react-router-dom';

const SginWithSocial = ({from}) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    function handleGoogleSignIn(){
        signInWithGoogle();
    }

    if(loading){
        return <h3> please wait...........</h3>;
    }

    if (user) {
        console.log(from);  
        navigate(from, {replace:true});
      }
    return (
        <div className='text-center'>
             <div className='mt-4 d-flex justify-content-center align-items-center'>
                <div className='line'></div>
                <p className='orContainer'>or</p>
                <div className='line'></div>
            </div>
            <button onClick={handleGoogleSignIn} className='googleSignBtn'><img className='googleImg' src={googleImg} alt="google icon" /> login with google </button>           
                
        </div>
    );
};

export default SginWithSocial;