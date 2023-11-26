import { useDispatch } from 'react-redux';
import { statusFilter } from 'redux/filterSlice';
import { ListContacts } from 'components/ListContacts/ListContacts';

export const ContactSection = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <h2>Contacts</h2>
        <label>Find contacts by name</label>
        <input
          style={{
            padding: '4px 8px',
            border: '1px solid orange',
            borderRadius: '8px',
            outline: 'none',
          }}
          type="text"
          onChange={e => dispatch(statusFilter(e.target.value))}
        />
      </div>
      <ListContacts />
    </>
  );
};
