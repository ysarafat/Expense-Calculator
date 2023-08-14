import { configureStore } from '@reduxjs/toolkit';
import transactionsSlice from '../features/transaction/transactionsSlice';

const store = configureStore({
    reducer: {
        transaction: transactionsSlice,
    },
});
export default store;
