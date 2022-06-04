import styled from "styled-components";

const Section = styled.section`
  background-color: ${(props) => props.bg};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default Section;
