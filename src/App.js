import logo from "./logo.svg";
import "./App.css";
import { ReactSortable, Sortable } from "react-sortablejs";
import { useState } from "react";
import { MultiDrag, Swap } from "sortablejs";

function App() {
  const [list, setList] = useState([
    {
      img: "https://picsum.photos/id/1004/100",
      barsIcon: <i class="fa fa-bars"></i>,
      heartIcon: <i class="fa fa-heart"></i>,
      artist: "Ed Sheeran",
      song: "Perfect",
    },
    {
      img: "https://picsum.photos/id/1005/100",
      barsIcon: <i class="fa fa-bars"></i>,
      heartIcon: <i class="fa fa-heart"></i>,
      artist: "Alan Walker",
      song: "Alone",
    },
    {
      img: "https://picsum.photos/id/1004/100",
      barsIcon: <i class="fa fa-bars"></i>,
      heartIcon: <i class="fa fa-heart"></i>,
      artist: "Ed Sheeran",
      song: "Perfect",
    },
    {
      img: "https://picsum.photos/id/1005/100",
      barsIcon: <i class="fa fa-bars"></i>,
      heartIcon: <i class="fa fa-heart"></i>,
      artist: "Alan Walker",
      song: "Alone",
    },
  ]);

  return (
    <div className="App">
      <div class="center">
        <ReactSortable
          list={list}
          setList={setList}
          group="groupName"
          animation={300}
          delayOnTouchStart={true}
          delay={2}
          className="list-group"
        >
          {list.map((item) => (
            <div class="list-group-item">
              <div class="handle flex-center">{item.barsIcon}</div>
              <div class="thumbnail flex-center">
                <img src={item.img} alt="" />{" "}
              </div>
              <div class="details">
                <h2>{item.artist}</h2>
                <p>{item.song}</p>
              </div>
              <div class="btn flex-center">{item.heartIcon}</div>
            </div>
          ))}
        </ReactSortable>
      </div>
    </div>
  );
}

export default App;
