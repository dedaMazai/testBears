import React, { useState } from 'react';
import gotService from '../services/gotService';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import './Search.css';

const Search =  () => {
  new gotService()
  const [searchValue, setSearchValue] = useState<string>("");
  const {request} = useTypedSelector(state => state.cards)
  const dispatch = useDispatch()

  const addSearch = (text: string) => {
    dispatch({type:"SET_REQUEST", payload: text})
  }
  const addContent = (cont: object[]) => {
    dispatch({type:"SET_CONTENT", payload: cont})
  }
  const addError = () => {
    dispatch({type:"ON_ERROR"})
  }

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) =>{
    setSearchValue(event.target.value);
    addSearch(event.target.value.replace(/\s/g, '_'))
  };

  const onErr = (e: React.ErrorInfo) => {
    addError();
    console.log("Ошибка \n" + e);
  }
  const requestSearch = () => {
    gotService.getBears(request, 1)
      .then(addContent)
      .catch(onErr);
  }

return (
    <div className="Search">
      <div className="Search Search-shadow">
        <input
          className="SearchLine-Input"
          placeholder="Введите запрос..."
          type="search"
          value={searchValue}
          onChange={changeSearch}
        />
        <button className="SearchLine-Button" onClick={searchValue ? requestSearch : undefined}>Найти</button>
      </div>
    </div>
  );
}

export default Search;
