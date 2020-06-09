import React, { Component, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import Graphics from "./Graphics";
import Header from "../../Components/Header/Header";
import Tabela from "../../Components/Tabela/Tabela";
import Form from "../../Components/Search/Search";
import PopUp from "../../utils/PopUp";
import ApiService from "../../utils/ApiService";

class Compare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dados: [],
    };
  }

  componentDidMount() {
    let symbol = ["APPL", "GOOG"];
    symbol.forEach((element) => {
      ApiService.Analyze(element)
        .then((res) => {
          if (res.financials) {
            this.setState({
              dados: [...this.state.dados, ...res.financials],
            });
          }
        })
        .catch((err) =>
          PopUp.exibeMensagem(
            "error",
            "Erro na comunicação com a API ao tentar busca Empresa"
          )
        );
    });
  }

  render() {
    return (
      <Fragment>
        <Header />
        <Graphics dados={this.state.dados} />
      </Fragment>
    );
  }
}

export default Compare;
