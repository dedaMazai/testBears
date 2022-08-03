import React from 'react';
import './Card.css';

import img from '../../img/1.png';

interface Props {
  img: string | null;
  name: string;
  info: string;
}


const Card: React.FC<Props> = function(props: Props) {
  return (
    <div className="Card">
      <img className="Card-Img" src={props.img === null ? img : props.img} alt="Preview" />
      <div className="Card-InfoBlock">
        <p className="Card-Name">{props.name}</p>
        <p className="Card-Info">{props.info}</p>
      </div>
    </div>
  );
}

export default Card;
