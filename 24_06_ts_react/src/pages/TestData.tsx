import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import DB from "../firebase";
import shortid from "shortid";

// firebase에 등록하는게 나은건지, 여기서 추가하는 게 나은건지
// ㅋㅋㅋㅋㅋㅋㅋㅋㅋ둘다 노가다이긴 하지만

function TestData() {
  const [user, setUser] = useState("");

  const onClickAdd = async () => {
    const newUser = {
      // userId: userId,
      // userImage: "",
      // userName: user,
      // carts: { cartId: cartId, totalCarts: 0 },
      // orders: { orderId: orderId, totalOrder: 0 },
      // sales: { salesId: saleId, totalSales: 0 },
      // address: "서울시 강남구",
      // phone: "000-0000-0000",
    };

    await setDoc(doc(DB, "컬렉션명", "문서명"), newUser);
    alert("등록성공");
  };

  return (
    <>
      <h1>Items</h1>
      <input type="text" onChange={(e) => setUser(e.target.value)} />
      <button onClick={onClickAdd}>유저 데이터 등록</button>
    </>
  );
}

export default TestData;
