import styles from "./RoomFeaturesGrid.module.scss";

function RoomFeaturesGrid({ className = "", id, features = [] }) {
  return (
    <>
      <ul id={id} className={`${styles.roomFeatures} ${className}`.trim()}>
        {features.map((feature, i) => (
          <li key={i} className={feature.value ? styles.pairedItem : styles.simpleItem}>
            {feature.value ? (
              <div className={styles.pairContainer}>
                <span className={styles.label}>{feature.label}</span>
                <span className={styles.value}>{feature.value}</span>
              </div>
            ) : (
              <div className={styles.simpleContainer}>
                {feature.icon && <span className={styles.icon}>{feature.icon}</span>}
                <span className={styles.iconText}>{feature.label}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default RoomFeaturesGrid;
