import React from "react";
import { View, Text, Button, showModal } from "remax/wechat";
import styles from "./index.module.css";
import Region from "../Region";
import Charts from "../Charts";

export default () => {
  return (
    <View className={styles.app}>
      <Text className={styles.title}>====== Region ======</Text>
      <Region />
      <Text className={styles.title}>====== Charts ======</Text>
      <Charts />
      <Text className={styles.title}>====== Button ======</Text>
      <Text className={styles.tips}>
        测试在绝对定位情况下点击阻止冒泡回调事件(stopPropagation)
      </Text>
      <View
        style={{
          position: "relative",
          width: "500rpx",
          height: "300rpx",
          backgroundColor: "#000"
        }}
        onClick={() => {
          showModal({ title: "view click" });
        }}
      >
        <Button
          style={{
            position: "absolute",
            top: "20rpx",
            left: "20rpx",
            width: "300rpx",
            height: "100rpx"
          }}
          onClick={e => {
            e.stopPropagation();
            showModal({ title: "btn click" });
          }}
        >
          Button
        </Button>
      </View>
    </View>
  );
};
