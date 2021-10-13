import "./style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CarouselMain } from "./../../components/CarouselMain/index";
import { Buttons } from "./../../components/Buttons/index";
import ListCards from "./../../components/ListCards/index";
import { Link } from "react-router-dom";
import { useUpMinerContext } from "../../context";
import { useEffect, useState } from "react";

function Home() {
  const state = useUpMinerContext();
  const postList = state.postList;
  const [filtedPostList, setFilteredPostList] = useState([]);

  useEffect(() => {
    setFilteredPostList(postList);
  }, []);

  const sortPostList = (type) => {
    var filtered = [];
    switch (type) {
      case "todos":
        filtered = postList;
        break;
      case "lançamento":
        filtered = [...postList].sort((a, b) => (a.id > b.id ? 1 : -1));
        break;
      case "preço":
        filtered = [...postList].sort((a, b) => (a.price > b.price ? 1 : -1));
        break;
      default:
        filtered = postList;
        break;
    }
    setFilteredPostList(filtered);
  };

  const onSelectChange = (event) => {
    sortPostList(event.target.value);
  };

  const filteredClick = (id) => {
    var filtered = [];
    filtered = [...postList].filter((item) => item.id === id);
    setFilteredPostList(filtered);
  };

  const onClearFilter = () => {
    setFilteredPostList(postList);
  };
  return (
    <div className="App">
      <CarouselMain />
      <Buttons
        buttonList={postList}
        onButtonClick={filteredClick}
        onClearFilter={onClearFilter}
      />
      <ListCards
        filtedPostList={filtedPostList}
        onSelectChange={onSelectChange}
      />
    </div>
  );
}

export default Home;
