import React from "react";

export const ColorfullMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // プロパティと設定値の名前が同じ場合、コロン以降は省略できる（color）
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};
