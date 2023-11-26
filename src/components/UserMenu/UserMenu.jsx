import { useDispatch, useSelector } from 'react-redux';
import { LogOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      {user && <p style={{ color: 'red', textAlign: 'center' }}>{user.name}</p>}
      <button type="button" onClick={() => dispatch(LogOut())}>
        Logout
      </button>
    </div>
  );
};
