import React, { useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import gotService from '../services/gotService';
import './Paginator.css';

function Paginator() {
  new gotService()

  const {content,request, paginator} = useTypedSelector(state => state.cards)
  const dispatch = useDispatch()

  const addContent = (cont: object[]) => {
    dispatch({type:"SET_CONTENT", payload: cont})
  }
  const addError = () => {
    dispatch({type:"ON_ERROR"})
  }

  const UpPaginator = () => {
    if (content.length > 14) {
      dispatch({type:"UP_PAGINATOR"})
    }
  }
  const lowerPaginator = () => {
    if (paginator > 1) {
      dispatch({type:"LOWER_PAGINATOR"})
    }
  }

  useEffect(() => {
    nextRequestSearch()
  }, [paginator]);

  const onErr = (e: React.ErrorInfo) => {
    addError();
    console.log('Ошибка ' + "\n" + e);
  }
  const nextRequestSearch = () => {
    gotService.getBears(request, paginator)
      .then(addContent)
      .catch(onErr);
  }

  return (
    <div className="Paginator">
      <button className="Paginator-Button" onClick={lowerPaginator}>&larr;</button>
      <button className="Paginator-Button">{paginator}</button>
      <button className="Paginator-Button" onClick={UpPaginator}>&rarr;</button>
    </div>
  );
}

export default Paginator;
