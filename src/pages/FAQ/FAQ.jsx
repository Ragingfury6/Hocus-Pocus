import "../../scss/faq.scss";
import { useRef, useState, useContext } from "react";
import AccordionItem from "./AccordionItem";
import { FaqContext } from "../../context/FaqContext";
function Faq() {
  const accordionItems = useRef();
  const [open, setOpen] = useState([false, false, false]);
  const faq = useContext(FaqContext);
  
  const togglePlus = (idx) => {
    console.log(idx);
    const newOpen = [...open];
    newOpen[idx] = !newOpen[idx];
    setOpen(newOpen);
  };

  return (
    <section className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <div className="faq__wrapper">
      <div className="faq__accordion" ref={accordionItems}>
       {faq.map((i,idx)=>{
        return <AccordionItem open={open} togglePlus={togglePlus} data={i} idx={idx} key={idx}/>
       })}
      </div>
      </div>
    </section>
  );
}

export default Faq;
