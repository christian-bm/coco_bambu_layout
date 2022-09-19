import Input from "../../components/input";
import Button from "../../components/button";
import {
  DivContainer,
  DivSolicitation,
  StyledMain,
  DivLogin,
  DivLogo,
} from "./styles";
import logo from "../../assets/images/logo-coco-bambu.png";
import iconLogin from "../../assets/images/icon-login.png";
import iconKey from "../../assets/images/icon-key.png";
import { useSolicitations } from "../../providers/solicitations";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../providers/token";
import api from "../../services/api";

const Login = () => {
  const { numberNewSolicitations } = useSolicitations();
  const { register, handleSubmit } = useForm();
  const { token, setToken } = useToken();
  const navigate = useNavigate();

  const login = async (data) => {
    await api.post("/users/login", data).then(({ data }) => {
      setToken(data);
      localStorage.setItem("@COCOBAMBU:Token", data);
      navigate("/pedidos");
    });
  };

  if (token) {
    navigate("/pedidos");
  }
  return (
    <StyledMain>
      <DivContainer>
        <DivSolicitation>
          <div className='div_all'>
            <div className='div_number'>
              <span className='div_number-number'>
                {numberNewSolicitations}
              </span>
              <span className='div_number-text'>
                {numberNewSolicitations > 1 ? "Novos pedidos" : "Novo pedido"}
              </span>
            </div>
            <div className='div_text'>
              <p>
                Por favor, faça o login para ver o pedido e ter acesso a receita
                com o modo de preparo
              </p>
            </div>
          </div>
          <div className='div_triangle'></div>
        </DivSolicitation>
        <DivLogo>
          <img src={logo} alt='Logo coco bambu' />
        </DivLogo>
        <DivLogin>
          <form onSubmit={handleSubmit(login)}>
            <Input
              iconImage={iconLogin}
              placeholder='Nome do usuário'
              name='username'
              register={register}
              required
            />
            <Input
              iconImage={iconKey}
              placeholder='Senha'
              name='password'
              register={register}
              type='password'
              required
            />
            <Button>Acessar</Button>
          </form>
        </DivLogin>
      </DivContainer>
    </StyledMain>
  );
};

export default Login;
