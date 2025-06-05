import React, { useState } from 'react';
import AddCategoryForm from '../components/AddCategoryForm';
import CategoryList from '../components/CategoryList';

function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Caregiving Forum</h1>
      <AddCategoryForm onAdd={() => setRefreshKey(prev => prev + 1)} />
      <hr />
      <CategoryList refresh={refreshKey} />
    </div>
  );
}

export default Home;
