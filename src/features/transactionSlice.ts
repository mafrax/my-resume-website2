import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Web3 from 'web3';

interface Transaction {
  hash: string;
  from: string;
  to: string;
  value: string;
  // Add other relevant fields
}

interface TransactionsState {
  transactions: Transaction[];
}

const initialState: TransactionsState = {
  transactions: [],
};

export const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTransactions: (state, action: PayloadAction<Transaction[]>) => {
      state.transactions = action.payload;
    },
  },
});

export const { setTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;
