import React, { useEffect, useState } from "react";
import styles from "./styles.less";

export const Loader = () => {
  const [width, setWidth] = useState(0);

  if (width === 100) {
    setWidth(0);
  }

  useEffect(() => {
    setTimeout(function run() {
      setWidth(width + 10);
      setTimeout(run, 1000);
    }, 1000);
  }, [width]);

  return (
    <div className={styles.container}>
      <div class={styles.progress}>
        <div class={styles.color}></div>
      </div>
      <div className={styles.title}>Loading {width}</div>
    </div>
  );
};
