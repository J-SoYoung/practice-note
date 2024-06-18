import React, { useEffect, useState } from "react";
import "./App.css";
import { ref, set, onValue, get, child, push } from "firebase/database";
import { db } from "./firebase";

function App() {
  const [todo, setTodo] = useState("");
  const [item, setItem] = useState([]);
  const [test, setTest] = useState([]);

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const writeData = () => {
    const userId = "thdud44";
    set(ref(db, "users/" + userId), {
      userId: 32,
      userName: "thdud33",
      userAvatar: "",
      address: "인천시남동구222",
      carts: { cartId: 1, totalCarts: 0 },
      orders: { cartId: 1, totalCarts: 0 },
      sales: { cartId: 1, totalCarts: 0 },
    });
  };

  const writeItem = () => {
    const itemId = "item5";
    const reviewId = "review21";
    set(ref(db, "items/" + itemId), {
      image: "",
      itemId: itemId,
      itemName: "반스55",
      price: 120000,
      review: [
        {
          reviewId: "review21",
          reviewInfo: {
            review: "리뷰테스트",
            userId: "thdud",
            userName: "소영",
          },
        },
        {
          reviewId: "review22",
          reviewInfo: {
            review: "리뷰테스트",
            userId: "thdud222",
            userName: "소영",
          },
        },
        {
          reviewId: "review23",
          reviewInfo: {
            review: "리뷰테스트",
            userId: "thdud33",
            userName: "소영",
          },
        },
      ],
    });
  };

  // 리뷰 테이블이 있다면
  // (1) 상품을 기준으로 데이터를 찾을 수 있을까?
  // (2) 유저 기준으로 데이터를 찾을 수 있을까?
  // (3) 1,2가 안된다면 item안에 review넣어야함
  const writeReview = () => {
    const reviewId = "review6";
    set(ref(db, "reviews/" + reviewId), {
      reviewId: reviewId,
      userId: "thdud333",
      itmeId: "item2",
      review: "아주좋아 d아이템 222 good",
    });
  };

  useEffect(() => {
    // 데이터 하나
    // const itemId = "item5";
    // const itemCountRef = ref(db, "items/" + itemId);
    // const unsubscribe = onValue(itemCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(data);
    //   setItem(data);
    // });
    // return () => unsubscribe();

    // push한거
    // const itemCountRef = ref(db, "test/");
    // const unsubscribe = onValue(itemCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   console.log("test-", data);
    //   setTest(data);
    // });
    // return () => unsubscribe();

    // 그냥 넣은거.. 무슨차이냐
    const itemId = "item5";
    const itemCountRef = ref(db, "items/");
    const unsubscribe = onValue(itemCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const itemsArray = Object.values(data);
        setTest(itemsArray);
        console.log(itemsArray);
      }
    });
    return () => unsubscribe();
  }, []);

  // 데이터 하나 불러오기
  const onClickGetItem = () => {
    try {
      const itemId = "item5";
      const itemCountRef = ref(db, "items/" + itemId);
      onValue(itemCountRef, (snapshot) => {
        const data = snapshot.val();
        setItem(data);
      });
    } catch (e) {
      console.error(e);
    }
  };
  console.log(test);

  // 데이터 묶음 불러오기
  const onClickItemListt = () => {};

  return (
    <div className="App">
      <div>데이터 쓰기 </div>
      <input type="text" value={todo} onChange={handleTodoChange}></input>
      <div>
        <button onClick={writeData}>유저</button>
        <button onClick={writeItem}>아이템</button>
        <button onClick={writeReview}>리뷰</button>
      </div>
      <div>
        <button onClick={onClickGetItem}>상품데이터 보여줘</button>
        <button onClick={onClickItemListt}>상품ALL 보여줘</button>
      </div>
      <div>
        <h1>ITEM</h1>
        <div>
          <p>{item.itemName}</p>
        </div>
        <div>
          {test && test.length > 0 ? (
            test.map((t) => <p>{t.itemName}</p>)
          ) : (
            <p>ㅇㅇ</p>
          )}

        </div>
        <p>
          {item.review && item.review.length > 0 ? (
            item.review.map((r) => (
              <p key={r.reviewId}>{r.reviewInfo.review}</p>
            ))
          ) : (
            <p>로딩중입니다</p>
          )}
        </p>
      </div>

      <div>
        <h1>ITEM LIST</h1>
        <div style={{ display: "flex" }}></div>
      </div>
    </div>
  );
}

export default App;
