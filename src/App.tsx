import React, {useState} from "react";
import './App.css';

import {BtnNameTypes} from "./Button/components-ui/Button";
import {Counter} from './Button/components/Counter';

function App() {
  let [counter, setCounter] = useState<number>(0);

  /* Универсальная функция для компоненты Button ,
   в зависимости от имени кнопки  */
  const universalBtnHandler = (name:BtnNameTypes) => {

    switch (name) {
      case "+": {
         return counter === 5 ? counter=5  : setCounter(counter+1)
      }
      // обрабатываем  не выводим значения до нуля
      case "-": {
        return counter < 1 ?  counter=1 : setCounter(counter-1)
      }
      //обнуляем
      default : {
        return setCounter(0)
      }
    }}

  return (
    <div className="App">
        {/*элементы для градиента*/}
      <div className={'bg '}></div>
      <div className={'bg bg2'}></div>
      <div className={'bg b3'}></div>
        {/*элементы для градиента*/}
      <Counter counter = {counter} universalBtnHandler={universalBtnHandler}/>
    </div>
  );
}

export default App;
