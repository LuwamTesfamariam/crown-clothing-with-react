import { useState, useContext } from "react";
import { createAuthuserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../util/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import '../sign-in-form/sign-in-form.style.scss'
import Button from "../button/button";
import { UserContext } from "../../context/userContext";

const defaultFormFilleds = {
    email: '',
    password: ''
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFilleds);
    const { email, password } = formFields;

    const {setCurrentUser} = useContext(UserContext);

    const resetFormFields = () => {
        setFormFields(defaultFormFilleds);
    }

    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            setCurrentUser(user);
            resetFormFields();
        }
        catch (error) {
            switch (error.code) {
                case 'auth/user-not-found':
                    alert('User not found');
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect password for email');
                    break;
                default:
                    console.log(error)
            }

        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm;