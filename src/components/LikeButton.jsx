import React, { useState } from 'react';

export default function LikeButton() {
  const [count, setCount] = useState(0);
  return (
    <button className="btn" onClick={() => setCount(count + 1)}>
      👍{count}
    </button>
  );
}
