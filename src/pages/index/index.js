import React, { useRef } from "react";
import { View, Text } from "remax/wechat";
import styles from "./index.module.css";
import Region from "../Region";

export default () => {
  const pickerRef = useRef(null);
  return (
    <View className={styles.app}>
      <Region />
    </View>
  );
};
