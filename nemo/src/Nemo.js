import { useState } from "react";

const Nemo = (props) => {
  const [count, setCount] = useState(3);
  const nemo_count = Array.from({ length: count }, (v, idx) => idx);

  const addCount = () => setCount(count + 1);
  const removeCount = () => setCount(!count ? 0 : count - 1);

  console.log(count);
  return (
    <>
      {nemo_count.map((num, idx) => (
        <div
          style={{
            width: "150px",
            height: "150px",
            backgroundColor: "darkorange",
            marginBottom: "10px",
          }}
          key={idx}
        >
          nemo
        </div>
      ))}
      <button onClick={addCount}>하나 추가</button>
      <button onClick={removeCount}>하나 삭제</button>
    </>
  );
};

export default Nemo;
