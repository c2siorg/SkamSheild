import React from "react";
import { Chart } from "react-google-charts";
import CustomCircularProgress from "../CustomCircularProgress/CustomCircularProgress";

export default function ComboChart(props) {
  const {
    title,
    data,
    hAxix_title,
    // vAxis_title,
    // hAxixMinValue,
    // hAxisMaxValue,
  } = props;

  return (
    <Chart
      chartType="ColumnChart"
      loader={<CustomCircularProgress />}
      data={data}
      options={{
        title: title,
        chartArea: { width: "100%" },
        hAxis: {
          title: hAxix_title,
          minValue: 0,
        },
        backgroundColor: "transparent",
      }}
      // For tests
      rootProps={{ "data-testid": "1" }}
    />
  );
}
