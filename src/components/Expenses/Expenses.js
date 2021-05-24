import React, { useState } from 'react';
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';


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


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter dateFilterInit={selectedDateFilter} onFilterDate={filterDateHandler} />
                <ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    );

}
export default Expenses;