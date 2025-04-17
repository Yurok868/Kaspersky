import React from "react";
import styles from "./countWords.module.css";

type Tag = {
  count: number;
  value: string;
};

export default function CountWords({ count, value }: Tag): React.JSX.Element {
  return (
    <div className={styles.hash}>
      <div className={styles.svg}>
        <div className={styles.hashtag} />
      </div>

      <span className={styles.color}>{value + " "}</span>
      <span>{count}</span>
    </div>
  );
}
