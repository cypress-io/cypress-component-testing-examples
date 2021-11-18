import { useMemo, useState } from 'react';
import './LoginForm.css';

export const LoginForm = ({ onLogin, title = 'Log In' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      onLogin({ username, password });
    }
    setSubmitted(true);
  };

  return (
    <form className="login-form" onSubmit={formSubmit}>
      <fieldset>
        <legend>{title}</legend>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {submitted && !username && (
            <span className="error">Username is required</span>
          )}
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {submitted && !password && (
            <span className="error">Password is required</span>
          )}
        </label>
        <button type="submit">Login</button>
      </fieldset>
    </form>
  );
};
