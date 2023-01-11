import SignUpForm from '../../sign-up-form/sign-up';
import SignInForm from '../../sign-in-form/sign-in';
import '../authentication/authentication.style.scss'

const Authentication = () => {

    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    // }, [])

    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }

    return (
        <div className='authentication-container'>
            <SignInForm/>
            <SignUpForm />
            {/* <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button> */}
        </div>
    )
}

export default Authentication;