import { useEffect, useState } from 'react';
import { getTransactions, addTransaction } from './services/api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getTransactions().then(res => setData(res.data));
  }, []);

  const add = async () => {
    const res = await addTransaction({
      amount: 100,
      type: 'expense',
      category: 'food',
      date: '2026-03-22'
    });
    setData([...data, res.data]);
  };

  return (
    <div>
      <h1>Accounting App</h1>
      <button onClick={add}>Add Transaction</button>
      {data.map(d => (
        <div key={d.id}>
          ₹{d.amount} - {d.category}
        </div>
      ))}
    </div>
  );
}

export default App;