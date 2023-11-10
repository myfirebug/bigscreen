import { useCallback, useState } from "react";
import { IComponentsTotalItem } from "@src/service";
import { API } from "@service/index";

export function useComponents() {
  const [total, setTotal] = useState<{
    loading: boolean;
    datas: IComponentsTotalItem[];
  }>({
    loading: false,
    datas: [],
  });

  const getTotal = useCallback(() => {
    setTotal((state) => ({
      ...state,
      loading: true,
    }));
    API.componentsService
      .total()
      .then((res) => {
        setTimeout(() => {
          setTotal({
            loading: false,
            datas: res.data,
          });
        }, 3000);
      })
      .catch(() => {
        setTotal((state) => ({
          ...state,
          loading: false,
        }));
      });
  }, []);

  return {
    total,
    getTotal,
  };
}
