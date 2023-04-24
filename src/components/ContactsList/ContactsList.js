import { useEffect } from 'react';
import { Btn, ListItem, P, Span } from './ContactsList-styled';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, fetchContacts } from 'Redux/operationsApi';
import {
  getError,
  getFilter,
  getIsLoading,
  getItems,
} from 'Redux/selectors/selectors';

export const ContactsList = () => {
  const items = useSelector(getItems);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedName = filter.toLowerCase();
  const filterContact = items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedName)
  );

  return (
    <ul>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {filterContact.map(contact => {
        return (
          <ListItem key={contact.id}>
            <P>{contact.name}:</P>
            <Span>{contact.phone}</Span>
            <Btn
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Btn>
          </ListItem>
        );
      })}
    </ul>
  );
};
