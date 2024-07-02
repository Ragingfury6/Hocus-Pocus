import "../../scss/faq.scss";
import { useRef, useState } from "react";
import AccordionItem from "./AccordionItem";
function Faq() {
  const accordionItems = useRef();
  const [open, setOpen] = useState([false, false, false]);
  
  const togglePlus = (idx) => {
    console.log(idx);
    const newOpen = [...open];
    newOpen[idx] = !newOpen[idx];
    setOpen(newOpen);
  };

  return (
    <section className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <div className="faq__accordion" ref={accordionItems}>
       {[0,1,2,3].map(i=>{
        return <AccordionItem open={open} togglePlus={togglePlus} idx={i} key={i}/>
       })}
      </div>
    </section>
  );
}

export default Faq;
