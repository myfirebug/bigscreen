import React, { FC } from "react";
import { IComponentsTypeItem } from "@src/service";
import "./index.scss";
interface IFilter {
  label: string;
  select: string;
  datas: IComponentsTypeItem[];
  listSearchHandler: (field: string, value: any, index?: number) => void;
  index?: number;
}

const Filter: FC<IFilter> = ({
  select,
  datas,
  label,
  listSearchHandler,
  index,
}) => {
  return (
    <div className="cms-selector__selectorLine">
      <div className="cms-selector__selectorLine--name">{label}</div>
      <div className="cms-selector__selectorLine--value">
        {datas.map((item) => (
          <span
            className={item.id === select ? "is-active" : ""}
            key={item.id}
            onClick={() => listSearchHandler("type", item.id, index)}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Filter;
