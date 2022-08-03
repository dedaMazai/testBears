import React from 'react';
import Card from './card';
import Search from './search';
import Paginator from './paginator';
import { Link } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import './SearchPage.css';

const SearchPage: React.FC = () => {
  const {content, request} = useTypedSelector(state => state.cards)
  const dispatch = useDispatch()
  const addCard = (id: number) => {
    dispatch({type:"SET_ID_CARD", payload: id})
  }
  const setSession = (id: number) => {
    addCard(id);
    sessionStorage.img = content[id].img;
    sessionStorage.name = content[id].name;
    sessionStorage.tagline = content[id].tagline;
    sessionStorage.description = content[id].description;
    sessionStorage.foodPairing = content[id].foodPairing;
    sessionStorage.abv = content[id].abv;
  }
  console.log(content,request)

  return (
    <div className="SearchPage">
      <Search/>
      <div className="Cards">

        {content.map( ( data: any )  => (
          <Link  to = "/card" style={{ color: 'inherit', textDecoration: 'inherit'}}>
            <div onClick={()=>setSession(data.id)}>
              <Card name={data.name} img={data.img} info={data.descriptionSmall}/>
            </div>
          </Link>
        ))}
      </div>
      <Paginator/>
    </div>
  );
}

export default SearchPage;
