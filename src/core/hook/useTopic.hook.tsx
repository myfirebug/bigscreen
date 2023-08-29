import { useState, useCallback } from "react";
import { ITopicItem, API } from "@service/index";
export function useTopic() {
  // 获取所有主题数据
  const [topics, setTopics] = useState<ITopicItem[]>([]);
  // 是否处理loading状态
  const [topicsLoading, setTopicsLoading] = useState<boolean>(false);
  // 获取主题列表数据
  const getTopics = useCallback((params: any) => {
    setTopicsLoading(true);
    API.topicService
      .getTopics(params)
      .then((data) => {
        setTopics(data);
        setTopicsLoading(false);
      })
      .catch(() => {
        setTopicsLoading(false);
      });
  }, []);

  return {
    topics,
    topicsLoading,
    getTopics,
  };
}
