import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import DB from "../firebase";
import { Item } from "../type";

const Detail: React.FC = () => {
  const { itemId } = useParams<{ itemId: string }>();
  const [item, setItem] = useState<Item>({
    itemId: "",
    image: "",
    title: "",
    itemName: "",
    price: 0,
    size: [0 || ""],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const itemDocRef = doc(DB, "items", `item${itemId}`);
        const itemSnapshot = await getDoc(itemDocRef);

        const data = itemSnapshot.data();
        setItem(data as Item);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  if (!itemId) {
    return <div>Item not found</div>;
  }

  return (
    <>
      <h1>Detail</h1>
      <div style={{ textAlign: "center" }}>
        <h1>{item.itemName}</h1>
        <p>Price: {item.price}</p>
      </div>
    </>
  );
};

export default Detail;
