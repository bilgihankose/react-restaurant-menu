import { useState } from "react";
import Categories from "./Components/Categories";
import Menu from "./Components/Menu";
import items from "./data";
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
