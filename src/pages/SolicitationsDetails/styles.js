import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: 100vh;
`;

export const DivHeader = styled.div`
  background-image: linear-gradient(
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.9)
    ),
    url(${(props) => props.imgUrl});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 600px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 14px;

  button {
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--cl-white1);
    width: 80px;
    font-size: 14px;

    img {
      width: 36px;
      height: 36px;
    }
  }

  .div_time {
    background-color: var(--cl-white0);
    height: 50px;
    width: 180px;
    display: flex;
    align-items: center;

    img {
      width: 36px;
      height: 36px;
      margin: 10px;
    }

    .div_time-text {
      display: flex;
      flex-direction: column;
    }

    .span_time-text {
      font-size: 13px;
    }

    .span_time-time {
      font-size: 16px;
      font-weight: bold;
    }
  }

  .div_title {
    margin-top: auto;
    color: var(--cl-white0);
    margin-bottom: 15px;
    margin-left: 10px;

    h3 {
      font-size: 20px;
      margin-bottom: 15px;
    }

    p {
      font-size: 14px;
      width: 85%;
    }
  }
`;

export const DivIngredients = styled.div`
  padding: 30px 30px;
  border-bottom: 0.5px solid var(--cl-white1);
  background-color: var(--cl-white1);

  h3 {
    margin-bottom: 30px;
  }
`;

export const DivPreparation = styled.div`
  padding: 30px 30px;
  border-bottom: 0.5px solid var(--cl-white1);

  h3 {
    margin-bottom: 30px;
  }
`;
