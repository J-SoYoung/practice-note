import { useEffect, useReducer, useRef, useState } from "react";
// import { testRef } from "../firebase";
import DB from "../firebase";
import { collection, doc, setDoc, getDoc, getDocs } from "firebase/firestore";

function User() {
  const user = "user1";
  const onClickAdd = async () => {
    // 문서 하나 가져오기
    // const users = doc(DB, "users", user);
    // const usersSnapshot = await getDoc(users);
    // if (!usersSnapshot.exists()) {
    //   return null;
    // }
    // console.log(usersSnapshot.data());
    // return usersSnapshot.data();

    // 여러 문서 가져오기
    const usersSnapshot = await getDocs(collection(DB, "users"));
    usersSnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };
  const onClickShow = async () => {};

  return (
    <>
      <h1>User</h1>
      <ul>
        <li>{process.env.REACT_APP_TEST_NAME}</li>
      </ul>
      <button onClick={onClickAdd}>유저 데이터 등록</button>
      <button onClick={onClickShow}>유저 데이터 보기</button>
    </>
  );
}

export default User;
