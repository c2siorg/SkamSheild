import React from "react";
import { Chart } from "react-google-charts";
import CustomCircularProgress from "../CustomCircularProgress/CustomCircularProgress";

export default function ComboChart(props) {
  const {
    title,
    data,
    // hAxix_title,
    // vAxis_title,
    // hAxixMinValue,
    // hAxisMaxValue,
  } = props;

  return (
    <Chart
      chartType="PieChart"
      loader={<CustomCircularProgress />}
      data={data}
      options={{
        title: title,
        chartArea: { width: "100%" },
        backgroundColor: "transparent",
      }}
      rootProps={{ "data-testid": "1" }}
    />
  );
}
