import React from "react";
import "./Companies.scss";

import { companies } from "../../api/dummy.json";

const Companies = () => {
  return (
    <section className="companies flex-evenly">
      {companies.map((company) => (
        <div className="company flex-col-center" key={company.id}>
            <img src={company.image} alt="company-image" />
            <span>{company.name}</span>
        </div>
      ))}
    </section>
  );
};

export default Companies;
