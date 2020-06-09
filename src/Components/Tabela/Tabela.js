import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import DataTable, { createTheme } from "react-data-table-component";
const sortIcon = <ArrowDownward />;


createTheme("solarized", {
  text: {
    primary: "#268bd2",
    secondary: "#2aa198",
  },
  background: {
    default: "#002b36",
  },
  context: {
    background: "#cb4b16",
    text: "#FFFFFF",
  },
  divider: {
    default: "#073642",
  },
  action: {
    button: "rgba(0,0,0,.54)",
    hover: "rgba(0,0,0,.08)",
    disabled: "rgba(0,0,0,.12)",
  },
});

const handleChange = (state) => {};

const customStyles = {
  rows: {
    style: {
      minHeight: "72px",
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
    },
  },
};
const handleClearRows = () => {
  this.setState({ toggledClearRows: !this.state.toggledClearRows });
};

class Tabela extends Component {
  constructor(props) {
    super(props);
    this.state = { toggledClearRows: false };
  }
  render() {
    const { empresas, selectGraphics } = this.props;
    const click = () => {
    };
    const columns = [
      {
        name: "Symbol",
        selector: "symbol",
        sortable: true,
      },
      {
        name: "Name",
        selector: "name",
        sortable: true,
      },
      {
        name: "Price",
        selector: "price",
        sortable: true,
      },
      {
        selector: "symbol",
        sortable: false,
        cell: (row) => (
          <div>
            <Button
              variant="contained"
              color="primary"
              onClick={this.click}
              startIcon={<ArrowForwardIosIcon />}
            ></Button>
          </div>
        ),
      },
    ];

    return (
      <div>
        <div>
          <DataTable
            title=""
            columns={columns}
            data={empresas}
            selectableRows
            selectableRowsComponent={Checkbox}
            sortIcon={sortIcon}
            clearSelectedRows={this.state.toggledClearRows}
            pagination={true}
            paginationDefaultPage={1}
            paginationPerPage={5}
            paginationResetDefaultPage={true}
            paginationRowsPerPageOptions={[10, 15, 20, 25, 30]}
          />
        </div>
      </div>
    );
  }
}

export default Tabela;
