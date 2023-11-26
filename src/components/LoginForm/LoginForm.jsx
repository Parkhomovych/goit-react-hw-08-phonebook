import { useDispatch } from 'react-redux';
import { LogIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      LogIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
      </div>
      <div>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
      </div>
      <button type="submit">Log In</button>
    </form>
  );
};
