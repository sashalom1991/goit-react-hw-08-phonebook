import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { contactsSelectors, contactsOperations } from '../../redux/contact';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';

import s from './ContactsList.module.css';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(pink[500]),
  backgroundColor: pink[500],
  '&:hover': {
    backgroundColor: pink[700],
  },
}));

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ol className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li name={name} key={id} className={s.item}>
          <b>{name}</b>: {number}
            <ColorButton
              
              type="button"
              startIcon={<DeleteIcon />}
              className={s.btnContactList}
              onClick={() => onDeleteContact(id)}
            >
              Delete
            </ColorButton>
          </li>
        ))}
      </ol>
    </>
  );
};

export default ContactsList;
