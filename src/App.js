/* eslint-disable*/
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  

  let [title, changeTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '울산 대방어 맛집']);
  let [like, countUpLike] = useState(0);
  let posts = '강남 고기 맛집';

  function functionChangeTitle(){
    var newArray = [...title];
    newArray[0] = '여자 코트 추천';
    changeTitle(newArray);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={ functionChangeTitle}>Button</button>
      <div className="list">
        <h3>
          {title[0]}&nbsp;{like}&nbsp;
          <span style={{cursor:"pointer"}} onClick={ ()=>{ countUpLike(like + 1) }}>👍</span>  
          <span style={{cursor:"pointer"}} onClick={ ()=>{ countUpLike(like - 1) }}>😒</span>

        </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{title[1]}</h3>
        <p>3월 17일 발행</p>
        <hr/>
      </div>   
      <div className="list">
        <h3>{title[2]}</h3>
        <p>5월 17일 발행</p>
        <hr/>
      </div>         
    </div>
  );
}

export default App;
