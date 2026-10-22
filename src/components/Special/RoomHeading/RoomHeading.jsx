import styles from "./RoomHeading.module.scss";
import { GoStarFill } from "react-icons/go";

function RoomHeading({ className = "", id, topTitle = "", title = "" }) {
  return (
    <div id={id} className={`${styles.headingContainer} ${className}`.trim()}>
      {topTitle ? (
        <span className={styles.topTitle}>{topTitle}</span>
      ) : (
        <div className={styles.starsContainer}>
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
          <GoStarFill />
        </div>
      )}

      {title && <h2 className={styles.title}>{title}</h2>}
    </div>
  );
}

export default RoomHeading;
