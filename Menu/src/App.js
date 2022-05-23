import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const newCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(newCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(items);
      return;
    }
    setMenuItems(items.filter((item) => item.category === category));
  }

  return (<main>
    <section className="menu section">
      <div className='title'>
        <h2>Menu items</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems}/>
    </section>
  </main>);
}

export default App;
