import React from 'react';
import { useSelector } from 'react-redux';
import { contactsSelectors } from '../redux/contact';
import FormContact from '../components/FormContact';
import ContactsList from '../components/ContactsList';
import Filter from '../components/Filter/Filter';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import s from '../styles/App.module.css';

export default function ContactsView() {
  const isFetching = useSelector(contactsSelectors.getLoading);
  return (
    <div className={s.Contact}>
      <div>
        <h2>List сontacts </h2>
        <Filter />
        {isFetching && (
          <Box sx={{ width: '100%', padding: '20px' }}>
            <LinearProgress />
          </Box>
        )}
        {/* {isError && (
          <p>Ups, we broke down &#128555; Please try again</p>
        )} */}
        <ContactsList />
      </div>
      <div>
        <h2>Add a new contact</h2>
        <FormContact />
      </div>
    </div>
  );
}
