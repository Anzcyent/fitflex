import React from "react";
import "./Subheadings.scss";

import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import { MdOutlineArrowDropDown } from "react-icons/md";

const Subheadings = ({ icon, title, description }) => {
  return (
    <AccordionItem className="subheading">
      <AccordionItemHeading className="subheading-header">
        <AccordionItemButton className="accordion-button flex-between">
          <div className="subheading-icon flex-center">{icon}</div>
          <h4>{title}</h4>
          <div className="flex-center">
            <MdOutlineArrowDropDown />
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>

      <AccordionItemPanel>
        <p>{description}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default Subheadings;
