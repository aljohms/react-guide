import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    /* const [enteredTitle, setEnteredTitle] = useState('');
     const [enteredAmmount, setEnteredAmmount] = useState('');
     const [enteredDate, setEnteredDate] = useState('');*/

    //useState can be used to store multiple user input at once.
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    //event.target.value gets current value when the event occured
    const titleChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmmount:event.target.value
        // });

        // The better solution or better practice
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    }
    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmmount:event.target.value
        // });
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    }
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // });
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
    }


    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        };

        props.onSaveExpenseData(expenseData);

        setUserInput(() => {
            return { enteredDate: '', enteredAmount: '', enteredTitle: '' }
        });

    }
    const [displayForm, setDisplayForm] = useState(false);

    const toggleForm = (event) => {
        event.preventDefault();
        setDisplayForm(!displayForm);
    }

    const expenseFormContent =
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Ammount</label>
                    <input type="number" min="0.1" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Ammount</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button onClick={submitHandler}>submit</button><button onClick={toggleForm}>cancel</button>
            </div>
        </form>





    if (displayForm === true)
        return (expenseFormContent);
    else
        return (<div className="new-expense__actions">
            <button onClick={toggleForm}>Add New Expense</button>
        </div>);




};

export default ExpenseForm;