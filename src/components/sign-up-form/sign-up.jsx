import { useState } from "react";
import { createAuthuserWithEmailAndPassword, createUserDocumentFromAuth } from "../../util/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import '../sign-up-form/sign-up-form.style.scss';
import Button from "../button/button";

const defaultFormFilleds = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFilleds);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFilleds);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("password does not match");
            return;
        }

        try {
            const { user } = await createAuthuserWithEmailAndPassword(email, password);

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            alert('User successfully created');

        }
        catch (error) {
            if (error.code == 'auth/email-already-in-use') {
                alert("Cannot create user, email already in use");
            }
            console.log("error creation encountered an error", error.message);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required onChange={handleChange} name="displayName" value={displayName} />
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <FormInput label="Confirm Password" type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}
export default SignUpForm;