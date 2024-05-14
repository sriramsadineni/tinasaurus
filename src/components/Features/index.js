import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Feature = ({ image, title, description,icon,size }) => {
  return (
    <div className={clsx("col col--4")}>
      {(
        <div className="text--center" title={icon}>
         {
          icon ? (<h1><FontAwesomeIcon icon={icon} size={size}  /></h1>) : <img className={styles.featureSvg} src={image} role="img" />
         }
        </div>
      )}
      <div className="text--center padding-horiz--md">
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export const Features = ({ data, index }) => {
  return (
    <section key={index} className={styles.features}>
      <div className="container">
        <div className="row">
          {data.items.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};
