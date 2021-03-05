import React from 'react';
import PropTypes from 'prop-types';

export function DispCards () {
 
  // console.log(props);
    return (
      <div className="Card-rep">
        <Card 
          image="https://www.ural56.ru/photos/2021/February2021/hdKM9z_vqSM.jpg"
          alt="Мы пионеры дети рабочих"
          title="Все на прививку!"
          buttonTitle="Как записаться"
          url="https://www.mos.ru/city/projects/covid-19/privivka/#rec258134462">
          <p className="card-text">Прошу всех срочно записаться на прививку от COVID-19!</p>
        </Card>
        <Card title="Lorem Ipsum" buttonTitle="Go somewhere" url="http://yandex.ru">
          <p className="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Card>
      </div>
    );
}

function Card (props) {
  // console.log(props);
  return (
    <div className="card">
      <img className="card-img-top" src={props.image}/>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        {props.children}
        <button className="btn btn-primary" onClick={() => OpenURL(props.url)}>{props.buttonTitle}</button>
      </div>
    </div>
  )
}

function OpenURL (url) {
  // eslint-disable-next-line no-undef
  window.open(url, '_blank');
}

Card.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  buttonTitle: PropTypes.string.isRequired,
  children: PropTypes.node
}