import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [username,setUsername]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword,setCheckPassword] = useState('');
  const [error,setError]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   if(password=== checkPassword)
   {
    setError('');
    setUsername('');
    setEmail('');
    setPassword('');
    setCheckPassword('');
    alert('SignUp Successfully');
   }
   else{
    setError('Password mismatch');
   }

  };

  return (
    <div className='form'>
    <form className="login-form" onSubmit={handleSubmit}>
      <div>
        <h1 className='sig'>SignUp</h1>
      </div>
      <div>
        <input
          type="text"
          placeholder='Username'
          id="username"
          value={username}
          onChange={(e)=> setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder='Email'
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
      <div>
        <input
          type="password"
          placeholder='Check Password'
          id="password"
          value={checkPassword}
          onChange={(e)=>setCheckPassword(e.target.value)}
          required
        />
      </div>
      {error && <p className='error'>{error}</p>}
      <button type="submit">Sign Up</button>
      <br>
      </br><br></br>
      <div className="links-container">
       <p>Already have a account? <Link to="/">Login</Link></p>
      </div>
    </form>
    </div>
  );
};

export default SignUp;
