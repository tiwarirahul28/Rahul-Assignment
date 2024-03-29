import React, {useState} from 'react';
import './inup.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const [allEntry, setAllEntry] = useState([])
    const formsubmit = (e) => {
        e.preventDefault();
        if(email && password){
            const newEntry = {email: email, password: password};

            setAllEntry([...allEntry, newEntry]);
            setEmail('');
            setPassword('');
        }else{
            alert('Please fill the data')
        }
    }
    return (
        <>
        <div className='body-1'>
            <div className='signup-box'>
                <h1>SignUp Now</h1>
                <form action='' onSubmit={formsubmit}>
                    <input 
                        type="email" 
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Your Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />   
                    <input 
                        type="password" 
                        placeholder="Confirm Password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    <div class="check">
                        <input type="checkbox"/> 
                        <label>I agree to the Terms Of Services</label>
                    </div>    
                    <input type="submit" value="Sign Up"/>
                </form>
                <p class="para-2">Already have an account? <a href="/SignIn">Login Here</a></p>
            </div>
        </div>
        </>
    )
}

export default SignUp
