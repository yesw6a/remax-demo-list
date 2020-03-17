import React from "react";
import { View } from "remax/wechat";
import classNames from "classnames";

import "./style.css";

export default function Index({ className }) {
  return (
    <View className={classNames("component", className)}>
      TEST CLASSNAME SORTABLE
    </View>
  );
}
