import { useEffect, useReducer, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import DB from "../firebase";
import { Item } from "../type";
import "../App.css";

function Home() {
  const navigate = useNavigate();
  const ClickDetailPage = (itemId: string) => {
    navigate(`/detail/${itemId}`);
  };

  const [itemList, setItemList] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [category, setCategory] = useState<string | null>(null);

  // 데이터 All 업로드
  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemSnapshot = await getDocs(collection(DB, "items"));
        const itemArray: Item[] = itemSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            itemId: data.itemId,
            title: data.title,
            image: data.image,
            itemName: data.itemName,
            price: data.price,
            size: data.size,
          } as Item;
        });
        setItemList(itemArray);
      } catch (e) {
        console.error("data fetching Error-", e);
      }
    };
    fetchData();
  }, []);

  // 탭 별로 데이터 보기
  useEffect(() => {
    if (category) {
      if (category === "all") {
        return setFilteredItems(itemList);
      }
      setFilteredItems(itemList.filter((item) => item.title === category));
    } else {
      setFilteredItems(itemList);
    }
  }, [category, itemList]);

  return (
    <>
      <h1>HOME</h1>
      <ul>
        <li>
          <Link to="/user">User로 이동</Link>
        </li>
        <li>
          <Link to="/items">Item으로 이동</Link>
        </li>
        <li>
          <Link to="/todo">Todo로 이동</Link>
        </li>
      </ul>
      <div>
        <h1>상품</h1>
        <ul className="category-ul">
          <li
            className="category-item"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("all");
            }}
          >
            전체
          </li>
          <li
            className="category-item"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("shirts");
            }}
          >
            상의
          </li>
          <li
            className="category-item"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("pants");
            }}
          >
            하의
          </li>
          <li
            className="category-item"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setCategory("shoes");
            }}
          >
            신발
          </li>
        </ul>

        <div style={{ display: "flex" }}>
          {filteredItems.map((i, idx) => {
            return (
              <div
                key={idx}
                style={{
                  margin: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                }}
                onClick={() => ClickDetailPage(i.itemId)}
              >
                <div
                  className="imageBox"
                  style={{
                    border: "1px solid",
                    width: "150px",
                    height: "150px",
                  }}
                ></div>
                <p>{i.itemName}</p>
                <p>{i.price}</p>
                <p>{i.itemId}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
