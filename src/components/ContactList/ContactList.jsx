import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = ({filteredContacts, onDelete}) => {
  return (
      <List>
        {filteredContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} onDelete={onDelete}/>
        ))}
      </List>
  );
};