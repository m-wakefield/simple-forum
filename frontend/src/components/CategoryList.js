import React, { useEffect, useState } from 'react';
import API from '../api';

function CategoryList({ refresh }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    API.get('/categories')
      .then(res => setCategories(res.data))
      .catch(err => console.error(err));
  }, [refresh]);

  return (
    <div>
      <h2>Caregiving Categories</h2>
      <ul>
        {categories.map(cat => (
          <li key={cat._id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
