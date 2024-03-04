import Data from "../../data.json";
const Navigation = () => {
  return (
    <div className="navigation-container">
      <nav>
        <div className="logo-container">
          <h4 className="logo">Header Logo</h4>
        </div>

        <ul className="navigation-links">
          {Data.map((item) => (
            <li key={item.id}>
              <a href="">{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
