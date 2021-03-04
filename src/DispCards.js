import React from 'react';
// import PropTypes from 'prop-types';

export function DispCards () {
 
  // console.log(props);
    return (
      <div className="Card-rep">
        <Card 
          img="https://www.ural56.ru/photos/2021/February2021/hdKM9z_vqSM.jpg"
          title="Все на прививку!"
          buttonTitle="Как записаться"
          url="https://www.mos.ru/city/projects/covid-19/privivka/#rec258134462">
          <p className="Card-body">Прошу всех срочно записаться на прививку от COVID-19!</p>
        </Card>
        <Card title="Lorem Ipsum" buttonTitle="Go somewhere" url="yandex.ru">
          <p className="Card-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Card>
      </div>
    );
}

function Card (props) {
  return (
    <div className="Card-main">
      <img className="Card-image" src={props.image}/>
      <h2 className="Card-title">{props.title}</h2>
      {props.children}
      <button className="Card-button" onClick={OpenURL(props.url)}>{props.buttonTitle}</button>
    </div>
  )
}

function OpenURL (url) {
  window.open(url, '_blank');
}

// Card.propTypes = {
//   image: PropTypes
//   title
//   children
//   url
//   buttonTitle
// }