// import { CiCirclePlus } from "react-icons/ci"
import PropTypes from 'prop-types';

function AccordionItem({open, togglePlus, idx}) {
  return (
    <div className="faq__accordion__item">
    <div className="faq__accordion__item__question" onClick={()=>togglePlus(idx)}>
      <p>Can I Purchase a Package Containing Multiple Treatments?</p>
      <button className={`faq__accordion__item__question__button plusminus ${open[idx] && "active"}`}>
      </button>
    </div>
    <div className={`faq__accordion__item__answer ${open[idx] && "open"}`}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
        consequatur fugiat vel consequuntur quo id esse neque perspiciatis
        distinctio! Magnam corporis impedit, doloremque reiciendis aliquam
        dolorum sequi! Asperiores, id repudiandae!
      </p>
    </div>
  </div>
  )
}
AccordionItem.propTypes = {
    open:PropTypes.array,
    togglePlus:PropTypes.func,
    idx:PropTypes.number
}

export default AccordionItem