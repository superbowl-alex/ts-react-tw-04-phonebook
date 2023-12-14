import ContactItem from '../ContactItem';
import { Contact } from '../App/App';


interface IContactList {
  contacts: Contact[];
  onDeleteContact: (idContact: string) => void;
}

const ContactList = ({ contacts, onDeleteContact }: IContactList) => {
  return (
    <ul className='box-border flex flex-col justify-center items-center gap-4 w-full p-4'>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
