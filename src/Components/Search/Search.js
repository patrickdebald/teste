import React, { Component } from "react";
import FormValidator from "../../utils/FormValidator";
import PopUp from "../../utils/PopUp";
import { Redirect } from "react-router";
import "../../Pages/Home/Home";


class Formulario extends Component {
  constructor(props) {
    super(props);

    this.validador = new FormValidator([
      {
        campo: "nome",
        metodo: "isEmpty",
        validoQuando: false,
        mensagem: "Entre com um nome",
      },
    ]);

    this.stateInicial = {
      nome: "",
      validacao: this.validador.valido(),
    };

    this.state = this.stateInicial;
  }

  escutadorDeInput = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitFormulario = () => {
    const validacao = this.validador.valida(this.state);
    this.setState({
      redirect: true,
    });
    return <Redirect to="/Compare" />;
    /* if(validacao.isValid){
            this.props.escutadorDeSubmit(this.state);
            this.setState(this.stateInicial);
        }else{
            const { Search } = validacao;
            const campos = [Search];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid;
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.mensagem);
            });
        }
        */
  };

  render() {
    const { Search } = this.state;

    return (
      <form>
        <div className="row">
          <div className="input-field col s4 left">
            <label className="input-field" htmlFor="Search">
              Search
            </label>
            <input
              className="validate"
              id="Search"
              type="text"
              name="Search"
              value={Search}
              onChange={this.escutadorDeInput}
            />
          </div>
        
        <button
          className="waves-effect waves-light indigo lighten-6 btn left margin-top"
          onClick={this.submitFormulario}
          type="button"
        >
          Compare
        </button>
        </div>
      </form>
    );
  }
}
export default Formulario;
