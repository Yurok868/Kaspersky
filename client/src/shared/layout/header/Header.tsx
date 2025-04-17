import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router";

export default function Header(): React.ReactElement {
  return (
    <div className={styles.header}>
      <Link to="/" className={styles.link}>News</Link>
    </div>
  );
}
