import styled from "styled-components";

export const CardContainer = styled.li`
  width: 100%;
  height: 240px;
  padding: 40px 0px;
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const DivDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 38%;
  margin-left: 20px;

  h3 {
    font-size: 16px;
  }

  p {
    margin-top: 15px;
    font-size: 12px;
  }
`;

export const DivFinish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;

  span {
    text-align: center;
    color: var(--cl-green);
  }
`;

export const DivTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--cl-white1);

  span {
    text-align: center;
  }
`;

export const DivCircles = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 10px;
`;
