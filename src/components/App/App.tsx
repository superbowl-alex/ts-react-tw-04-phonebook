import { useState } from 'react';
import Notiflix from 'notiflix';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';
import Notification from '../Notification';
import { useLocalStorage } from '../../hooks/useLocalStorage';

Notiflix.Notify.init({
  width: '500px',
  position: 'center-top',
  closeButton: true,
  fontFamily: 'Comic Sans MS',
  fontSize: '24px',
  warning: {
    background: 'rgb(255, 240, 245)',
    textColor: 'rgb(40, 70, 219)',
    notiflixIconColor: 'rgb(205, 92, 92)',
  },
});

export type Contact = {
  id: string;
  name: string;
  number: string;
};


export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState<string>('');

  const findContactByName = (name: string): Contact | undefined => {
    return contacts.find((item: Contact) => item.name.toLowerCase() === name);
  };

  const formSubmitHandler = (data: { name: string; number: string }): void => {
    const { name, number } = data;
    const normalizedName: string = name.toLowerCase();
    if (findContactByName(normalizedName)) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
      return;
    }
    addContact(name, number);
  };

  const addContact = (name: string, number: string): void => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(contacts => [contact, ...contacts]);
  };

  const deleteContact = (id: string): void => {
    setContacts(contacts => contacts.filter(contact => contact.id !== id));
  };

  const getVisibleContacts = (): Contact[] => {
    const normalizedFilter: string = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className='flex mx-auto justify-center items-start gap-16 p-8 text-2xl text-blue'>
      <div className='w-[600px] flex flex-col justify-center items-center p-4 shadow-lg rounded-lg bg-lightBlue'>
        <h1 className='mb-4 text-6xl tracking-[3px] text-deepBlue font-bold'>Phonebook</h1>
        <ContactForm onSubmit={formSubmitHandler} />
        <Filter filter={filter} onChange={changeFilter} />
      </div>
      <div className='box-border flex flex-col justify-center items-center w-[500px] p-4 shadow-lg rounded-lg bg-lightBlue'>
        <h2 className='mb-4 text-5xl tracking-[3px] text-deepBlue font-bold'>Contacts</h2>
        {contacts.length > 0 ? (
          <ContactList
            contacts={getVisibleContacts()}
            onDeleteContact={deleteContact}
          />
        ) : (
          <Notification message="There is no contact in Phonebook" />
        )}
      </div>
    </div>
  );
}
