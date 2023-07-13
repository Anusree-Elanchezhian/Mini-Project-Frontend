import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const navigate=useNavigate('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[error,setError]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
  if(email==='anu@gmail.com' && password==='anu')
  {
    setError('');
    setEmail('');
    setPassword('');
    navigate('/components/home/Home');
  }
  else{
    setError('Password mismatch');
  }
  };
  return (
    <div className='form'>
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <h1 className='log'>Login</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder='Email'
          id="username"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        
        <input
          type="password"
          id="password"
          placeholder='Password'
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className='error'>{error}</p>}
      <button type="submit">Login</button>
      <br>
      </br><br></br>
      <div className="links-container">
        <a href="/forgot-password">Forgot Password?</a>
        <p>Don't have an account? <Link to='/components/signup/SignUp'>Sign Up</Link></p>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
