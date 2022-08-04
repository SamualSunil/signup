import React, { useState } from 'react';
import './signup.css'


function Login() {


    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [password, setPassword] = useState('');

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);


    // const signIn = e => {
    //     e.preventDefault();
    // }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    const handleCompany = (e) => {
        setCompany(e.target.value);
        setSubmitted(false);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };



    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '' || company === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>{email} {company} {password} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };



    return (

        <div className='login'>

            <div className="messages">
                {errorMessage()}
                {successMessage()}
            </div>

            <div className='login__container'>
                <form>
                    <h1 className="h1">Sign Up</h1>
                    <h4 className="h4">No credit card required</h4>
                    <input type='text' className="box" placeholder='Email Address' value={email} onChange={handleEmail} />
                    <input type='text' className="box" placeholder='Company' value={company} onChange={handleCompany} />
                    <input type='password' className="box" placeholder='Password' value={password} onChange={handlePassword} />
                    <div className='checkbox'>
                        <input type='checkbox' className="box1" value="yes" /><span>I agree to the <span className="text1">Terms & Conditions</span></span></div>
                    <button type='submit' onClick={handleSubmit} className='login__signInButton'>Get Started</button>
                    <div class='acc'>Already have an account?<span class="text1">Sign in</span></div>

                </form>

            </div>
        </div>
    )
}

export default Login