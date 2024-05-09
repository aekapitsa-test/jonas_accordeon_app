import AccordionItem from "./AccordionItem";
import questions from "../consts/questions";
import { useState } from "react";

function Accordion() {
  const [activeElement, setActiveElement] = useState(-1);

  function handleSetActiveElement(elNum) {
    return setActiveElement((curElNum) => {
      return curElNum === elNum ? -1 : elNum;
    });
  }

  return (
    <div className="accordion">
      {questions.map((el, i) => {
        return (
          <AccordionItem
            key={i}
            number={i}
            title={el.title}
            text={el.text}
            activeElement={activeElement}
            handleSetActiveElement={handleSetActiveElement}
          />
        );
      })}
    </div>
  );
}

export default Accordion;
