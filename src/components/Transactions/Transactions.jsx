import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactions } from '../../features/transaction/transactionsSlice';
import Transaction from './Transaction';

function Transactions() {
    const { transactions, isLoading, isError, error } = useSelector((state) => state.transaction);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTransactions());
    }, [dispatch]);
    console.log(transactions);
    let content = null;
    if (isLoading) {
        content = <p>Loading... </p>;
    }
    if (!isLoading && isError) {
        content = <p>{error}</p>;
    }
    if (!isLoading && !isError && transactions.length > 0) {
        content = transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
        ));
    }
    if (!isLoading && !isError && transactions.length === 0) {
        content = <p>No Transactions Found</p>;
    }
    return (
        <>
            <p className="second_heading">Your Transactions:</p>
            <div className="conatiner_of_list_of_transactions">
                <ul>{content}</ul>
            </div>
        </>
    );
}

export default Transactions;
