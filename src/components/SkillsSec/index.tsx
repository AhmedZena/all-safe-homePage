// InfiniteScrollbar.js

import styles from "./style.module.scss";

function InfiniteScrollbar1() {
  const scroller = document.querySelectorAll(`.${styles.scroller}`);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    scroller.forEach((scroller: any) => {
      scroller.setAttribute("data-animation", true);
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.scroller}>
        <div className={styles.textList}>
          <li>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/36656228.svg"></img>
          </li>
          <li>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/91903393.svg"></img>
          </li>
          <li>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/46447804.svg"></img>
          </li>
          <li>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/36656228.svg"></img>
          </li>
          <li className={styles.test}>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/91903393.svg"></img>
          </li>
          <li>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/46447804.svg"></img>
          </li>
          <li>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/36656228.svg"></img>
          </li>
          <li className={styles.test}>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/91903393.svg"></img>
          </li>
          <li>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/46447804.svg"></img>
          </li>
          <li>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/36656228.svg"></img>
          </li>
          <li className={styles.test}>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/91903393.svg"></img>
          </li>
          <li>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/36656228.svg"></img>
          </li>
          <li>
            <img src="https://www.allsafeeg.com/uploads/brandsreel/source/46447804.svg"></img>
          </li>
        </div>
      </div>
    </div>
  );
}
function InfiniteScrollbar2() {
  const scroller = document.querySelectorAll(`.${styles.scroller}`);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    scroller.forEach((scroller: any) => {
      scroller.setAttribute("data-animation", true);
    });
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.scroller}>
          <div className={styles.textList}>
            <li>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/82032642.svg"></img>
            </li>
            <li>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/49749330.svg"></img>
            </li>
            <li>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/23764359.svg"></img>
            </li>
            <li className={styles.test}>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/82032642.svg"></img>
            </li>
            <li>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/49749330.svg"></img>
            </li>
            <li>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/23764359.svg"></img>
            </li>
            <li className={styles.test}>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/82032642.svg"></img>
            </li>
            <li>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/49749330.svg"></img>
            </li>
            <li>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/23764359.svg"></img>
            </li>
            <li className={styles.test}>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/82032642.svg"></img>
            </li>
            <li>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/49749330.svg"></img>
            </li>
            <li>
              <img src="https://www.allsafeeg.com/uploads/brandsreel/source/23764359.svg"></img>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default function InfiniteScrollbar() {
  return (
    <>
      <InfiniteScrollbar1 />
      <InfiniteScrollbar2 />
    </>
  );
}
