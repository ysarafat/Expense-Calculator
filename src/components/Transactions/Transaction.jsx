import React from 'react';
import { useDispatch } from 'react-redux';
import deleteIcon from '../../assets/images/delete.svg';
import editIcon from '../../assets/images/edit.svg';
import { editActive, removeTransaction } from '../../features/transaction/transactionsSlice';

function Transaction({ transaction }) {
    const { id, name, amount, type } = transaction;
    const dispatch = useDispatch();
    const handleEdit = () => {
        dispatch(editActive(transaction));
    };
    const handleDelete = () => {
        dispatch(removeTransaction(id));
    };

    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link" onClick={handleEdit}>
                    <img className="icon" src={editIcon} alt="edit" />
                </button>
                <button className="link" onClick={handleDelete}>
                    <img className="icon" src={deleteIcon} alt="delete" />
                </button>
            </div>
        </li>
    );
}

export default Transaction;
