/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    changeTransaction,
    createTransaction,
    editInActive
} from '../features/transaction/transactionsSlice';

function Form() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [amount, setAmount] = useState('');
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch();
    const { isError, isLoading, error } = useSelector((state) => state.transaction);
    const { editing } = useSelector((state) => state.transaction);

    const reset = () => {
        setAmount('');
        setName('');
        setType('');
    };
    useEffect(() => {
        const { id, name, type, amount } = editing;
        if (id) {
            setEditMode(true);
            setName(name);
            setType(type);
            setAmount(amount);
        } else {
            reset();
        }
    }, [editing]);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            createTransaction({
                name,
                type,
                amount: Number(amount),
            })
        );
        reset();
    };
    const cancelEdit = () => {
        dispatch(editInActive());
        setEditMode(false);
        reset();
    };
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(
            changeTransaction({
                id: editing?.id,
                data: {
                    name,
                    amount,
                    type,
                },
            })
        );
        setEditMode(false);
        reset();
    };
    return (
        <div className="form">
            <h3>Add new transaction</h3>

            <form onSubmit={editMode ? handleUpdate : handleSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter Title"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            checked={type === 'income'}
                            onChange={() => setType('income')}
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked={type === 'expense'}
                            onChange={() => setType('expense')}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="transaction_amount">Amount</label>
                    <input
                        type="number"
                        placeholder="Enter Amount"
                        name="amount"
                        required
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                <button disabled={isLoading} className="btn">
                    {editMode ? 'Update Transaction' : 'Add Transaction'}
                </button>
                {!isLoading && isError && <p className="error"> {error}</p>}
            </form>
            {editMode && (
                <button className="btn cancel_edit" onClick={cancelEdit}>
                    Cancel Edit
                </button>
            )}
        </div>
    );
}

export default Form;
