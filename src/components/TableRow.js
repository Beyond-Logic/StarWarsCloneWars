import React from "react";
import "../styling/components/TableCard.css";

function TableRow({
  one,
  two,
  three,
  four,
  five,
  six,
  key,
  seven,
  eight,
  nine,
  ten,
}) {
  return (
    <tr key={key}>
      <td>
        {/* <Image
          src={require("../assets/video-camera (1).svg").default}
          className=""
        /> */}
        {one}
      </td>
      <td>
        {/* <Image src={require("../assets/user.PNG").default} className="" /> */}
        {two}
      </td>
      <td>
        {/* <Image src={require("../assets/user.PNG").default} className="" /> */}
        {three}
      </td>
      <td>{four}</td>
      <td>{five}</td>
      <td>
        <a href={six}>{six}</a>
      </td>
      <td>{seven}</td>
      <td>{eight}</td>
      <td>{nine}</td>
      <td>{ten}</td>
    </tr>
  );
}

export default TableRow;
