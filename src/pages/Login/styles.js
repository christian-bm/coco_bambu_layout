import styled from "styled-components";
import bgImg from "../../assets/images/img-bg-login.jpg";

export const StyledMain = styled.main`
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const DivSolicitation = styled.div`
  margin-bottom: 60px;

  .div_all {
    height: 120px;
    width: 400px;
    background-color: var(--cl-white0);
    display: flex;
    align-items: center;
    border-radius: 8px;
  }

  .div_number {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 150px;
    border-right: 0.5px solid var(--cl-white1);
  }

  .div_number span {
    color: var(--cl-orange);
  }

  .div_number-number {
    font-size: 60px;
    font-weight: 600;
  }

  .div_text {
    flex: 1;
    margin: 0px 35px;
    font-style: italic;
  }

  .div_triangle {
    width: 30px;
    height: 20px;
    background-color: transparent;
    margin: 0px auto;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 18px solid var(--cl-white0);
  }
`;

export const DivLogo = styled.div``;

export const DivLogin = styled.div`
  width: 240px;
  margin: 30px auto;

  div + div,
  div + button {
    margin-top: 15px;
  }
`;
