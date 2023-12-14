import { FaWindowClose } from 'react-icons/fa';

interface IContactItem {
  id: string;
  name: string;
  number: string;
  onDeleteContact: (idContact: string) => void;
}


const ContactItem = ({ id, name, number, onDeleteContact }: IContactItem) => {
  return (
    <li className='flex justify-between items-center box-border w-full p-2 rounded-lg bg-lavender transition-all duration-300 hover:scale-[1.01] hover:shadow-md focus:scale-[1.01] focus:shadow-md'>
      {name}: {number}
      <button className='flex items-center border-0 p-0 mr-2 transition-all duration-300 hover:scale-[1.1] focus:scale-[1.1]' type="button" onClick={() => onDeleteContact(id)}>
        <FaWindowClose size={32} color={'rgb(205, 92, 92)'}/>
      </button>
    </li>
  );
};

export default ContactItem;
