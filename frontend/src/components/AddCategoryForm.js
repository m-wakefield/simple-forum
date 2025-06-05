import React, { useState } from 'react';
import API from '../api';

function AddCategoryForm({ onAdd }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    API.post('/categories', { name })
      .then(res => {
        setMessage('✅ Category added!');
        setName('');
        onAdd(); // trigger parent to refresh
      })
      .catch(err => {
        const msg = err.response?.data?.message || 'Something went wrong';
        setMessage(`❌ ${msg}`);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a Category</h3>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Category name"
        required
      />
      <button type="submit">Add</button>
      <p>{message}</p>
    </form>
  );
}

export default AddCategoryForm;
