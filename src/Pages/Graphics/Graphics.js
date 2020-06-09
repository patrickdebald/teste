import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Header from "../../Components/Header/Header";
import PopUp from "../../utils/PopUp";
import ApiService from "../../utils/ApiService";



class Graphics extends Component {
  render() {
   
    const { dados } = this.props;
    const vlr =[];
    dados.forEach(item =>{
      vlr.push(parseInt(item["Consolidated Income"]));
      })

    const options = {
      chart: {
        type: "spline",
      },
      title: {
        text: "Receita",
      },
      subtitle: {
        text: "Demonstração de Resultados Anuais",
      },
      xAxis: {
        accessibility: {
          rangeDescription: "Range: 2009 to 2020",
        },
      },
      plotOptions: {
        series: {
          label: {
            connectorAllowed: true,
          },
          pointStart: 2009,
        },
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: "horizontal",
                align: "center",
                verticalAlign: "bottom",
              },
            },
          },
        ],
      },
      series: [
        {
          name: "AAPL",
          data: vlr,
        }
      ],
    };
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}
export default Graphics;
