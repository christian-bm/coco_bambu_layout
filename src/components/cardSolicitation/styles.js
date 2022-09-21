import styled from "styled-components";

export const CardContainer = styled.li`
  width: 100%;
  height: 210px;
  border-bottom: 0.5px solid var(--cl-white1);
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
  width: 37%;
  margin-left: 20px;

  h3 {
    font-size: 16px;
  }

  p {
    margin-top: 15px;
    font-size: 11px;
    padding-right: 5%;
  }

  @media (min-width: 1024px) {
    h3 {
      font-size: 18px;
    }

    p {
      font-size: 12px;
    }
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
  justify-content: flex-end;
  flex: 1;
  gap: 16px;
`;
