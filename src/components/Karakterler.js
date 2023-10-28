import Karakter from "./Karakter";
import styled from "styled-components";

const Karakterler = (props) => {
  const { data } = props;
  console.log("ŞUUU", data);

  const Content = styled.div`
    display: flex;
    flex-direction: column;
  `;

  return (
    <Content>
      {" "}
      {data.map((obje, index) => (
        <Karakter key={index} data={obje} />
      ))}
    </Content>
  );
};

export default Karakterler;
