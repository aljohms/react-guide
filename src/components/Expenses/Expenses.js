import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


function Expenses(props) {

    console.log(props);
    const [selectedDateFilter, setDateFilter] = useState('2020');
       
    const filterDateHandler = year => {

        setDateFilter(year);
        let filteredExpenses = props.expenses.filter(function(expense) {
            return expense.date.getFullYear()==year;

        });
        
        props.setExpenses(() => {
            return [ ...filteredExpenses]
          });

    }
    
    return (
        <div>
            <ExpensesFilter dateFilterInit={selectedDateFilter} onFilterDate={filterDateHandler} />
            <Card className="expenses">
                {props.expenses.map((expense) => {
                    return <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        amount={expense.amount} />
                })}
            </Card>
        </div>
    );

}
export default Expenses;