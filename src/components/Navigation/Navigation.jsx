import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div style={{display: 'flex', gap: '16px'}}>
      <Link to="/">Home</Link>

      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </div>
  );
};
