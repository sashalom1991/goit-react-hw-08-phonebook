import { useState } from 'react';
import { contactsSelectors, contactsOperations } from '../../redux/contact';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
// import { useCreateContactMutation } from '../../redux/contacts/contactsSlice';
// import { useGetContactsQuery } from '../../redux/contacts/contactsSlice';
// import { connect } from 'react-redux';
// import actions from '../../redux/contacts/contacts-action';
import s from './FormContact.module.css';

export default function FormContact(){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getAllContacts);

  const createContact = contact => dispatch(contactsOperations.addContact(contact)); 

  function handelChange(e) {
    const {name, value} = e.currentTarget;

    switch(name){
      case 'name':
        setName(value)
        break;
      case 'number':
        setNumber(value)
        break;
      default: return;
    }
  }

  function handelSubmit (e){
    e.preventDefault();

    const resultSubmit = {name, number};

    if (
      contacts.find(
        contact => name.toLowerCase() === contact.name.toLowerCase(),
      ) || contacts.find(contact => number === contact.number)
    ) {
      alert(`${name} is already in contacts`);
    } else {
      createContact(resultSubmit);
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
          <form onSubmit={handelSubmit} className={s.form}>
            <label className={s.label}>
              Name
              <input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                onChange={handelChange}
                className={s.input}
              />
            </label>
            <label className={s.label}>
              Number
              <input
                type="tel"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                onChange={handelChange}
                className={s.input}
              />
            </label>
            <Stack direction="row"
  justifyContent="center"
  alignItems="center"
  spacing={2}>
      
      <Button variant="contained" type='submit' endIcon={<SendIcon />}>
      Sumbit
      </Button>
    </Stack>
          </form>
        );
}

