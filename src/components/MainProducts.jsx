import React, { useState } from "react";
import { useQueryClient } from "react-query";
import Products from "./Products";

export default function MainProducts() {
  const [showLeftProducts, setShowLeftProducts] = useState(true);
  const [showRightProducts, setShowRightProducts] = useState(true);
  const client = new useQueryClient();
  return (
    <main className="container">
      <div>
        {showLeftProducts && <Products />}
        <button onClick={() => setShowLeftProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      <div>
        {showRightProducts && <Products />}
        <button onClick={() => setShowRightProducts((show) => !show)}>
          Toggle
        </button>
      </div>
      {/* 버튼을 클릭하면 우리의 cache를 invalidate하게 만듬 */}
      <button
        onClick={() => {
          client.invalidateQueries(["products"]);
        }}
      >
        정보가 업데이트 되었음!
      </button>
    </main>
  );
}
