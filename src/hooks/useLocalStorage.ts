import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { Contact } from '../components/App/App';

export const useLocalStorage = (key: string, defaultValue: Contact[]): [Contact[], Dispatch<SetStateAction<Contact[]>>] => {
  const [state, setState] = useState(() => {
    const storedValue = window.localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
