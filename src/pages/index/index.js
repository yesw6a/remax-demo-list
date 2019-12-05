import React from "react";
import { View, Text } from "remax/wechat";
import styles from "./index.module.css";
import Region from "../Region";
import Charts from "../Charts";

export default () => {
  return (
    <View className={styles.app}>
      <Text>====== Region ======</Text>
      <Region />
      <Text>====== Charts ======</Text>
      <Charts />
    </View>
  );
};
