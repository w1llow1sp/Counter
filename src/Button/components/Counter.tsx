import React from 'react';
import {BtnNameTypes, Button} from "../components-ui/Button";
import styles from './Counter.module.css'

type AppPropsType ={
    counter:number
    universalBtnHandler : (name:BtnNameTypes) => void
}

export const Counter = (props:AppPropsType) => {

    return (
        <div className={styles.counterWrapper}>
            <h1>Counter</h1>
            <div className={`${props.counter === 5? styles.criticalCounter :styles.defaultCounter}`}>{props.counter}</div>
            <div className={'btnWrapper'}>
                <Button disabledFunction={() => props.counter === 5} color={props.counter === 5  ?'disabled' : 'green'} callBack={()=>props.universalBtnHandler('+')}>+</Button>
                <Button disabledFunction={() => props.counter < 1} color={props.counter < 1 ? 'disabled' :'red'} callBack={()=>props.universalBtnHandler('-')}>-</Button>
                <Button disabledFunction={() => props.counter === 0} color={props.counter === 0 ? 'disabled' :'blue'} callBack={()=>props.universalBtnHandler('Reset')}>Reset</Button>
            </div>
        </div>
    );
};

