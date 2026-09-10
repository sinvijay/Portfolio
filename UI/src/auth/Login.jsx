import './Style.css';

export default function Login() {
    return (
        <div className='login-page'>
            <div className="login-container">
            <h1>Login</h1>
            
            <p>Please enter your credentials to log in.</p>
            <br />
            {/* <form>
                <div>
                    <input type="text" placeholder="Username" />
                </div>
                <div>
                    <input type="password" placeholder="Password" />
                </div>
                <button type="submit">Log In</button>
                <p>Already have an account? <a href="#register">Register</a></p>
                <a href="#forgot-password">Forgot Password?</a>
            </form> */}
            </div>
        </div>
    )
}