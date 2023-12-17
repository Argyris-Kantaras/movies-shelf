import { useState } from "react";
import styles from "./YearFilter.module.css";

function YearFilter(props) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(false);

  const year = new Date().getFullYear();
  const years = Array.from(new Array(40), (val, index) => year - index);

  return (
    <div className={styles.yearFilter}>
      <span onClick={() => setDisplay(true)}>{props.currentYear}</span>
      <div
        className={styles.yearsContainer}
        style={display ? { display: "block" } : { display: "none" }}
      >
        <div
          onClick={() => {
            if (index > 0) setIndex(index - 1);
          }}
          className={styles.upArrow}
        >
          {"<"}
        </div>
        <div className={styles.selectYear}>
          <div style={{ transform: `translateY(${-index * 10}%)` }}>
            {years.map((year) => {
              return (
                <option
                  onClick={() => {
                    props.setCurrentYear(year);
                    setDisplay(false);
                  }}
                  key={year}
                  value="year"
                >
                  {year}
                </option>
              );
            })}
          </div>
        </div>
        <div
          onClick={() => {
            if (index < 9) setIndex(index + 1);
          }}
          className={styles.downArrow}
        >
          {"<"}
        </div>
      </div>
    </div>
  );
}

export default YearFilter;
