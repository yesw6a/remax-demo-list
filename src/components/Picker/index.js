import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef
} from "react";
import { Picker, View } from "remax/wechat";

const regions = [
  {
    id: 11,
    name: "北京市",
    Children: [
      {
        id: 1101,
        name: "北京市",
        Children: [
          { id: 110101, name: "海淀区" },
          { id: 110102, name: "朝阳区" }
        ]
      },
      {
        id: 1102,
        name: "帝都",
        Children: [{ id: 110201, name: "东区" }]
      }
    ]
  },
  {
    id: 20,
    name: "XX省",
    Children: [
      {
        id: 2021,
        name: "什么市",
        Children: [
          { id: 202120, name: "什么区" },
          { id: 2021221, name: "什鸠区" }
        ]
      }
    ]
  }
];

function AddressPicker({ children }, ref) {
  const [provinces, setProvinces] = useState(regions);
  const [citys, setCitys] = useState(regions[0].Children);
  const [areas, setAreas] = useState(regions[0].Children[0].Children);
  const [curChange, setCurChange] = useState(null);
  const [select, setSelect] = useState([0, 0, 0]);
  const [regionId, setRegionId] = useState(0);

  useImperativeHandle(ref, () => ({
    regionId
  }));

  const handleColChange = e => {
    console.log(e);
    const { column, value } = e.detail;
    if (column === 0) {
      setSelect([value, 0, 0]);
      setCitys(regions[value].Children);
    }
    if (column === 1) {
      const temp = [...select];
      temp.splice(1, 2, value, 0);
      setSelect(temp);
      setAreas(citys[value].Children);
    }
  };

  const handleChange = e => {
    const val = e.detail.value;
    console.log(areas, val);
    setRegionId(areas[val[2]].id);
  };

  useEffect(() => {
    setAreas(citys[curChange || 0].Children);
    setCurChange(null);
  }, [citys]);

  return (
    <View>
      <Picker
        mode="multiSelector"
        range={[provinces, citys, areas]}
        rangeKey="name"
        value={select}
        onColumnChange={handleColChange}
        onChange={handleChange}
      >
        {children}
      </Picker>
    </View>
  );
}

export default forwardRef(AddressPicker);
