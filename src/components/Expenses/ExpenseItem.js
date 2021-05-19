import React, { useState } from 'react'; //useState is a hook that is used to update UI.
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//Components in react ar functions which return html
function ExpenseItem(props) {
    //useState must be called inside of a component function only (not inside nested functions)
    //useState registers this instance of component in state only
    const [title, setTitle] = useState(props.title);//array destructuring = useState is an array that conains a value and a function to update the value


    //Arrow function for event listener in react or just normal function (both are ok for any fucntion)
    //do not include () like clickHandler() in the button because that will make it execute on loading component!
   



    return (
        <div>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">
                        {props.amount}
                    </div>
                </div>
            </Card>
        </div>
    );
}
//must export the function in order to import it elsewhere
export default ExpenseItem;