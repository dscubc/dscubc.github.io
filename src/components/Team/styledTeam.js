import styled from "styled-components";
import { Grid, Row } from 'react-flexbox-grid';

export const TeamGrid = styled(Grid)`
  background: #17151c; 
`;

export const TeamRow = styled(Row)`
  margin: 20px;
  align-items: center;
  text-align: center;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  margin-top: 30px;
  color: #ffffff;
`;

export const Description = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  color: #439CFB;
`;

export const Slide = styled.div`
  height: 200px;
  width: 300px;
  background: white;
  border-radius: 15px;
`
