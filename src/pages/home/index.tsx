import React, { useState, useEffect } from "react";
import { useTopic } from "@src/core/hook";
import "./index.scss";

function Home() {
  const [code, useCode] = useState<number>(0);
  const { getTopics, topics, topicsLoading } = useTopic();

  useEffect(() => {
    getTopics({});
  }, [getTopics]);

  return (
    <div>
      <h1 className="home-title">
        Home{code}{" "}
        <button
          onClick={() => {
            useCode(code + 1);
          }}
        >
          +
        </button>
      </h1>
      {topicsLoading ? (
        <div>加载中...</div>
      ) : (
        <ul>
          {topics.map((item) => (
            <li key={item.id}>
              {item.title}
              {item.tab}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
