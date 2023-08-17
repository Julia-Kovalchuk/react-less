import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.less";

export const Loader = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const id = setTimeout(function run() {
      setWidth(width + 10);
      setTimeout(run, 1000);
    }, 1000);

    if (width === 100) {
      setWidth(100);
      clearTimeout(id);
    }
  }, [width]);

  return (
    <div className={styles.container}>
      <div className={styles.progress}>
        <div className={styles.color} style={{ width: `${width}%` }}></div>
      </div>
      <div className={styles.title}>Loading {width}</div>
    </div>
  );
};
