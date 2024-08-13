// import { CiCirclePlus } from "react-icons/ci"
import PropTypes from 'prop-types';

function AccordionItem({open, togglePlus, data, idx}) {
  return (
    <div className="faq__accordion__item">
    <div className="faq__accordion__item__question" onClick={()=>togglePlus(idx)}>
      <p>{data.title}</p>
      <button className={`faq__accordion__item__question__button plusminus ${open[idx] && "active"}`}>
      </button>
    </div>
    <div className={`faq__accordion__item__answer ${open[idx] && "open"}`}>
      <p>
        {data.answer}
      </p>
    </div>
  </div>
  )
}
AccordionItem.propTypes = {
    open:PropTypes.array,
    togglePlus:PropTypes.func,
    data:PropTypes.object,
    idx:PropTypes.number
}

export default AccordionItem