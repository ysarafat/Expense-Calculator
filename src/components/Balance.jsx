import React from 'react';
import { useSelector } from 'react-redux';

function Balance() {
    const { transactions } = useSelector((state) => state.transaction);

    const calculateBalance = (transactions) => {
        let balance = 0;
        transactions.forEach((transaction) => {
            const { type, amount } = transaction;
            if (type === 'income') {
                balance += amount;
            } else {
                balance -= amount;
            }
        });
        return balance;
    };
    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>{' '}
                <span>{transactions.length > 0 ? calculateBalance(transactions) : 0}</span>
            </h3>
        </div>
    );
}

export default Balance;
