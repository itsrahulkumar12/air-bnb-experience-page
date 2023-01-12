import "./App.css";
import Card from "./components/Card";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

import data from "./data";

function App() {
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        item={item} //another way of passing props

        //one way
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // country={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Main />
      <div className="card-container">{cards}</div>
    </div>
  );
}

export default App;
