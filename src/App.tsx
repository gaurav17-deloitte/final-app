// import React, { useState } from 'react'
// import Menu from './Menu'
// import Categories from './Categories'
// import items from './data'

// const allCategories = ['all', new Set(items.map((item) => item.category))]

// function App() {
//   const [menuItems, setMenuItems] = useState(items)
//   const [categories, setCategories] = useState(allCategories)

//   const filterItems = (category: string) => {
//     if (category === 'all') {
//       setMenuItems(items)
//       return
//     }
//     const newItems = items.filter((item) => item.category === category)
//     setMenuItems(newItems)
//   }
//   return (
//     <main>
//       <section className="menu section">
//         <div className="title">
//           <h2>our menu</h2>
//           <div className="underline"></div>
//         </div>
//         <Categories categories={categories} filterItems={filterItems} />
//         <Menu items={menuItems} />
//       </section>
//     </main>
//   )
// }

// export default App


import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
// import logo from "./logo.JPG";

const allCategories = ["all", new Set(items.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category: React.SetStateAction<string>) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          {/* <img src={logo} alt="logo" className="logo" /> */}
          <h2>Menu List</h2>
          <div className="underline"></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
