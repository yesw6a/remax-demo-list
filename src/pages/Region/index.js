import React, { useRef } from "react";
import { View, Button } from "remax/wechat";
import Picker from "../../components/Picker";

export default () => {
  const pickerRef = useRef(null);
  return (
    <View>
      <Picker ref={pickerRef}>
        <Button>省-市-区</Button>
      </Picker>
      <Button onClick={() => console.log(pickerRef)}>get regionId</Button>
    </View>
  );
};
