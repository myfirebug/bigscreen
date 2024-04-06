import React from "react";
import Box from "../../../box";
import { guid } from "@src/utils";
import { useWidgetDispatch } from "../../../../widgetContext";
import { Idata } from "@src/service";
import "./index.scss";

interface ILayout {
  onClose: () => void;
}

const init: Idata = {
  id: guid(),
  type: "row",
  element: "",
  configuration: {},
  children: [],
};

const Layout = React.memo((props: ILayout) => {
  const { onClose } = props;
  const dispatch = useWidgetDispatch();
  const list = [
    {
      row: 1,
      col: 1,
    },
    {
      row: 2,
      col: 1,
    },
    {
      row: 1,
      col: 2,
    },
    {
      row: 3,
      col: 1,
    },
    {
      row: 1,
      col: 3,
    },
    {
      row: 2,
      col: 2,
    },
    {
      row: 3,
      col: 3,
    },
  ];
  const handler = (row: number, col: number) => {
    const body: Idata[] = [];
    for (let i = 0; i < row; i++) {
      let data: Idata = {
        ...init,
        id: guid(),
        children: [],
        configuration: {
          layout: {
            flexBasis: (100 / col).toFixed(2) + "%",
          },
        },
      };
      if (col > 1) {
        for (let i = 0; i < col; i++) {
          data.children.push({
            ...init,
            id: guid(),
            type: "col",
            configuration: {
              layout: {
                flexBasis: (100 / col).toFixed(2) + "%",
              },
            },
          });
        }
      }
      body.push(data);
    }
    dispatch({
      type: "WIDGET",
      data: {
        id: guid(),
        name: "未命名微件",
        level1Type: "echarts",
        level2Type: "",
        images: "",
        count: 0,
        createTime: new Date().getTime().toString(),
        configuration: {
          header: {
            show: true,
          },
        },
        data: {
          header: [
            {
              id: guid(),
              type: "row",
              element: "",
              configuration: {
                layout: {
                  flexBasis: "100%",
                },
              },
              children: [
                {
                  id: guid(),
                  type: "col",
                  element: "",
                  configuration: {
                    layout: {
                      flexBasis: "80%",
                    },
                  },
                  children: [],
                },
                {
                  id: guid(),
                  type: "col",
                  element: "",
                  configuration: {
                    layout: {
                      flexBasis: "20%",
                    },
                  },
                  children: [],
                },
              ],
            },
          ],
          body: body,
        },
      },
    });
  };
  return (
    <Box className="cms-layout" title="布局容器" onClose={onClose}>
      <ul className="cms-layout__list">
        {list.map((item, index) => (
          <li
            key={index}
            className="cms-layout__item"
            onClick={() => handler(item.row, item.col)}
          >
            {new Array(item.col * item.row).fill("").map((_, index) => (
              <span
                key={index}
                style={{
                  width: 100 / item.col + "%",
                  height: 100 / item.row + "%",
                }}
              ></span>
            ))}
          </li>
        ))}
      </ul>
    </Box>
  );
});

export default Layout;
