import React, { useState } from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../Components/FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <section id="Home">
        <Header />
      </section>

      <section id="Menu">
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
      </section>

      <section id="Mobile-App">
        <AppDownload />
      </section>

      {/* If you have a Contact-Us section, add it here */}
      <section id="Contact-Us">
        {/* Your Contact-Us component or markup */}
      </section>
    </div>
  );
};

export default Home;
