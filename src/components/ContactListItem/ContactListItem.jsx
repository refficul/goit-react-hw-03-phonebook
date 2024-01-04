export const ContactListItem = ({ contact, onDelete }) => {
    return (
      <li key={contact.id}>
        {contact.name}: {contact.number}
        <button onClick={() => onDelete(contact.id)}>Delete</button>
      </li>
    );
  };