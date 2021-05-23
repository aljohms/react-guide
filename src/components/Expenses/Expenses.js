import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


function Expenses(props) {

    const [selectedDateFilter, setDateFilter] = useState('2020');

    //onChange from ExpensesFilter component
    const filterDateHandler = year => {
        //get year from ExpensesFilter component
        setDateFilter(year);
    }

    //apply filter and 
    const filteredExpenses = props.expenses.filter(function (expense) {
        return expense.date.getFullYear().toString() === selectedDateFilter;
    });

    let expensesContent = <p>No Data!</p>;
    
    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount} />
        })
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter dateFilterInit={selectedDateFilter} onFilterDate={filterDateHandler} />
                {expensesContent}
            </Card>
        </div>
    );

}
export default Expenses;