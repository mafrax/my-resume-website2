import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from 'web3';
import { setTransactions } from '../features/transactionSlice';
import { RootState } from '../store'; // Adjust the import path according to your file structure

// Defining the type for a transaction log object
interface TransactionLog {
    transactionHash: string;
    from: string;
    to: string;
    value: string;
}

// Type guard function to check if an object is a TransactionLog
const isTransactionLog = (obj: any): obj is TransactionLog => {
    return obj && typeof obj.transactionHash === 'string';
};

const Project1Page: React.FC = () => {
  const [web3, setWeb3] = useState<Web3 | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const transactions = useSelector((state: RootState) => state.transactions.transactions);
  const dispatch = useDispatch();

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum as any); 
      setWeb3(web3Instance);
      console.log("MetaMask is installed.");
    } else {
      console.log("MetaMask is not installed.");
    }
  }, []);

  const connectWallet = async () => {
    if (window.ethereum && window.ethereum.request && web3) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
          setIsConnected(true);
        }
        console.log("Connected accounts:", accounts);
        fetchTransactions(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask", error);
      }
    } else {
      console.log("MetaMask is not installed or web3 is not initialized.");
    }
  };

  const fetchTransactions = async (account: string) => {
    if (!web3) {
      console.log("web3 instance is not available");
      return;
    }
    try {
    const transactions = await web3.eth.getPastLogs({
      address: account,
      // Add other necessary parameters
    });
    console.log("Fetched transactions:", transactions);

    const formattedTransactions = transactions
      .filter(isTransactionLog)
      .map((tx) => ({
        hash: tx.transactionHash,
        from: tx.from,
        to: tx.to,
        value: tx.value, // Ensure this is formatted correctly
      }));
    console.log("Formatted transactions:", formattedTransactions);

    dispatch(setTransactions(formattedTransactions));
    } catch (error) {
        console.error("Error fetching transactions:", error);
    }
  };

  return (
    <div>
      <h1>Connect with MetaMask</h1>
      <button onClick={connectWallet} disabled={isConnected}>
        {isConnected ? "Connected" : "Connect Wallet"}
      </button>
    <div>
        <h1>Transactions</h1>
        {transactions.length === 0 ? (
          <p>No transactions found</p>
        ) : (
          <ul>
            {transactions.map((tx, index) => (
              <li key={index}>
                <p>Transaction Hash: {tx.hash}</p>
                <p>From: {tx.from}</p>
                <p>To: {tx.to}</p>
                <p>Value: {tx.value}</p>
                {/* Render other transaction details as needed */}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Project1Page;
