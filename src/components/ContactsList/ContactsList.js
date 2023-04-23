import { useEffect } from 'react';
import { Btn } from './ContactsList-styled';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, fetchContacts } from 'Redux/contactsThunk';
import { getItems } from 'Redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(getItems);

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedName = filter.toLowerCase();
  const filterContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedName)
  );

  return (
    <ul>
      {filterContact.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <Btn
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Btn>
          </li>
        );
      })}
    </ul>
  );
};
