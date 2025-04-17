import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../shared/lib/ReduxHooks";
import { getNews } from "../../entities/news/lib/newsThunk";
import styles from "./MainPage.module.css";
import OneNews from "../../shared/ui/oneNews/OneNews";

export default function MainPage(): React.JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(getNews());
  }, []);

  const news = useAppSelector((store) => store.news.news);
  console.log(news);

  return (
    <div className={styles.content}>
      {news.map((oneNews) => (
        <OneNews key={oneNews.ID} oneNews={oneNews} />
      ))}
    </div>
  );
}
