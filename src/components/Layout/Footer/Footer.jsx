import styles from "./Footer.module.scss";
import Separator from "@/components/UI/Separator/Separator";

import { hotelInfo, socialMediaLinks } from "@/data/footer";
import Section from "@/components/Common/Section/Section";

function Footer({ className = "", id, children = null }) {
  return (
    <>
      <footer id={id} className={`${styles.footerContainer} ${className}`.trim()}>
        <Separator />
        <div className={styles.footerTitle}>
          <video className={styles.bgVideo} src={hotelInfo.backgroundVideo} autoPlay loop muted playsInline preload="none" loading="lazy" />
          <div className={styles.title}>
            {hotelInfo.nameTop}
            {hotelInfo.nameBottom && (
              <>
                <br />
                {hotelInfo.nameBottom}
              </>
            )}
          </div>
        </div>
        <Separator />

        {children && <div>{children}</div>}

        <div className={styles.linksContainer}>
          <a href="#">
            <img src={hotelInfo.logoImage} alt="Logo Image" />
          </a>

          <Section>
            <div className={styles.socialMedia}>
              {socialMediaLinks.map((item, i) => (
                <a key={i} href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </Section>

          <p>&copy; All Rights Reserved.</p>
        </div>
        <Separator />
      </footer>
    </>
  );
}

export default Footer;
