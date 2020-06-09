import React, { Component, Fragment } from "react";
import { Redirect } from "react-router";
import "materialize-css/dist/css/materialize.min.css";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Tabela from "../../Components/Tabela/Tabela";
import Form from "../../Components/Search/Search";
import PopUp from "../../utils/PopUp";
import ApiService from "../../utils/ApiService";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empresas: [],
    };
  }

  selectGraphics = (symbol) => {
    this.setState({
      redirect: true,
    });
    const { empresas } = this.state;
    const empresasAtualizadas = empresas.filter((empresas) => {
      return empresas.symbol !== symbol;
    });
    ApiService.Analyze(symbol)
      .then((res) => {
        if (res.financials) {
         
        }
      })
      .catch((err) =>
        PopUp.exibeMensagem(
          "error",
          "Erro na comunicação com a API ao tentar busca Empresa"
        )
      );
  };


  componentDidMount() {
    ApiService.ListaEmpresas()
      .then((res) => {
        if (res.symbolsList) {
          this.setState({
            empresas: [...this.state.empresas, ...res.symbolsList],
          });
        }
      })
      .catch((err) =>
        PopUp.exibeMensagem(
          "error",
          "Erro na comunicação com a API ao tentar listar as Empresas"
        )
      );
  }

  render() {
    return (
      
      <Fragment>
        <Header />
        <div className="container mb-10">
          <h1>Companies</h1>
          <Form/>
          <Tabela
            empresas={this.state.empresas}
            selectGraphics={this.selectGraphics}
          />
        </div>
      </Fragment>
    );
  }
}

export default Home;
