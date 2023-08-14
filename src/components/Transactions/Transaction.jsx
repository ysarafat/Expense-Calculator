import React from 'react';
import deleteIcon from '../../assets/images/delete.svg';
import editIcon from '../../assets/images/edit.svg';

function Transaction({ transaction }) {
    const { name, amount, type } = transaction;
    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link">
                    <img className="icon" src={editIcon} alt="edit" />
                </button>
                <button className="link">
                    <img className="icon" src={deleteIcon} alt="delete" />
                </button>
            </div>
        </li>
    );
}

export default Transaction;
