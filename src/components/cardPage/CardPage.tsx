import React from 'react';
import { Link } from 'react-router-dom';
import './CardPage.css';

import imgBear from'../img/1.png';
function CardPage() {

  return (
    <>
    <div className="CardPage">
        <img className="CardPage-Img" src={sessionStorage.img === null ? imgBear : sessionStorage.img}alt="Preview" />
        <div className="CardPage-InfoBlock">
          <p className="CardPage-Name">{sessionStorage.name}</p>
          <p className="CardPage-Tagline">{sessionStorage.tagline}</p>
          <div className="CardPage-Description">
            <p>Описание:</p>
            <p>{sessionStorage.description}</p>
          </div>
          <div className="CardPage-Food_pairing">
            <p>Вкусовые сочетания:</p>
            <p>{sessionStorage.foodPairing}</p>
          </div>
          <p className="CardPage-Abv">Крепость: {sessionStorage.abv}</p>
        </div>
    </div>
    <Link to = "/">
      <button className="ButtonExit">Назад</button>
    </Link>
    </>
  );
}

export default CardPage;
