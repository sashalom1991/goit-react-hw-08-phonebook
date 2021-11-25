import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const сontactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://61917de041928b0017690084.mockapi.io/api/v1',
  }),
  tagTypes: ['Contacts'],
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: ['Contacts'],
    }),
    delContact: build.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
        providesTags: ['Contacts'],
      }),
      invalidatesTags: ['Contacts'],
    }),
    createContact: build.mutation({
      query: newContact => ({
        url: '/contacts',
        method: 'POST',
        body: {
          name: newContact.name,
          number: newContact.number,
        },
        providesTags: ['Contacts'],
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useDelContactMutation,
  useCreateContactMutation,
} = сontactApi;
