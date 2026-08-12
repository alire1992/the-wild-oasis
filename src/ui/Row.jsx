import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

function Row({ type = "vertical", children, ...props }) {
  return (
    <Wrapper type={type} {...props}>
      {children}
    </Wrapper>
  );
}

export default Row;
