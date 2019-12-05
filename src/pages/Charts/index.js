import React, { useEffect } from "react";
import { View, Canvas } from "remax/wechat";
import wxCharts from "../../lib/wxcharts";
import { transformRpx as px } from "../../utils/scalePx";

function Charts() {
  let lineChart = null;
  const canvasWidth = 750;
  const canvasHeight = 400;

  useEffect(() => {
    const simulationData = createSimulationData();
    console.log("data", simulationData);
    lineChart = new wxCharts({
      canvasId: "lineCanvas",
      type: "line",
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [
        {
          name: "成交量",
          data: simulationData.data,
          format: function(val, name) {
            return val.toFixed(2) + "万";
          }
        }
        // {
        //   name: "成交量2",
        //   data: [2, 0, 0, 3, null, 4, 0, 0, 2, 0],
        //   format: function(val, name) {
        //     return val.toFixed(2) + "万";
        //   }
        // }
      ],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: "成交金额 (万元)",
        format: function(val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: px(canvasWidth),
      height: px(canvasHeight),
      dataLabel: false,
      dataPointShape: true
      // extra: {
      //   lineStyle: "curve"
      // }
    });
  }, []);

  const touchHandler = e => {
    console.log(lineChart.getCurrentDataIndex(e), e);
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function(item, category) {
        return category + " " + item.name + ":" + item.data;
      }
    });
  };

  const createSimulationData = () => {
    const categories = [];
    const data = [];
    for (var i = 0; i < 10; i++) {
      categories.push("2016-" + (i + 1));
      data.push(Math.random() * (20 - 10) + 10);
    }
    // data[4] = null;
    return { categories, data };
  };

  return (
    <View>
      <Canvas
        style={{ width: "100%", height: `${canvasHeight}rpx` }}
        canvas-id="lineCanvas"
        disable-scroll="true"
        bindtouchstart={touchHandler}
      />
    </View>
  );
}

export default Charts;
