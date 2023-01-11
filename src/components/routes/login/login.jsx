import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from '../../../util/firebase/firebase.utils';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import SignUpForm from '../../sign-up-form/sign-up';

const Login = () => {

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    // }, [])

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google Popup
            </button>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default Login;