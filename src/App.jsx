import React, { useEffect, useState } from "react";
import { ColorfullMessage } from "./components/ColorfulMessage";
const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const onClickCuntUp = () => {
    setNum(num + 1);
  };

  const onClickSwichShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  // 第２引数を空にすると、初回レンダリング時だけ実行できる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です</ColorfullMessage>
      <button onClick={onClickCuntUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ´ ▽ ` )</p>}
    </React.Fragment>
  );
};

export default App;
