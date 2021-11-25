import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contact';
import s from './Filter.module.css';


const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(contactsSelectors.getFilter);

  const onChangeFilter = e => dispatch(changeFilter(e.target.value));
  return (
    <label className={s.label}>
      Find contact by name
      <input
        type="text"
        value={value}
        onChange={onChangeFilter}
        className={s.input}
      />
    </label> 
  );
};

export default Filter;
