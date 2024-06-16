import { useEffect, useReducer, useRef, useState, useId } from "react";
// import { testRef } from "../firebase";
import DB from "../firebase";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import shortid from "shortid";

interface UserType {
  userId: string;
  userImage: string;
  userName: string;
  carts: { cartId: string; totalCarts: number };
  orders: { orderId: string; totalOrder: number };
  sales: { salesId: string; totalSales: number };
  address: string;
  phone: string;
}

function User() {
  const userId = shortid.generate();
  const cartId = shortid.generate();
  const orderId = shortid.generate();
  const saleId = shortid.generate();

  const [user, setUser] = useState("");
  const [userlist, setUserlist] = useState<UserType[]>([]);
  const usersArray = [];

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const onClickAdd = async () => {
    const newUser = {
      userId: userId,
      userImage: "",
      userName: user,
      carts: { cartId: cartId, totalCarts: 0 },
      orders: { orderId: orderId, totalOrder: 0 },
      sales: { salesId: saleId, totalSales: 0 },
      address: "서울시 강남구",
      phone: "000-0000-0000",
    };

    await setDoc(doc(DB, "users", user), newUser);
    alert(`${user}등록`);
  };

  const onClickShow = async () => {
    // 여러 문서 가져오기
    const usersSnapshot = await getDocs(collection(DB, "users"));
    usersSnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      usersArray.push(doc.data());
    });
    // setUserlist(usersArray);
  };

  return (
    <>
      <h1>User</h1>
      <ul>
        {userlist.map((list: UserType) => (
          <li key={list.userId}>{list.userName}</li>
        ))}
        <li>{process.env.REACT_APP_TEST_NAME}</li>
      </ul>
      <input type="text" onChange={onChange} />
      <button onClick={onClickAdd}>유저 데이터 등록</button>
      <button onClick={onClickShow}>유저 데이터 보기</button>
    </>
  );
}

export default User;
