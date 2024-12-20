import PropTypes from "prop-types";
function MedicalCard({name, imgs, stats}) {
  return (
    <div className="medical-card">
    <h2 className="medical-card__name">{name}</h2>
    <div className="medical-card__img-wrapper">
        {imgs.map((img,idx)=>{
            return <img key={idx} src={img} alt="Brand Logo" className="medical-card__img" />
        })}
        
    </div>
    {stats.map(({title, value}, idx) => {
        return (
        <div className="medical-card__stat" key={idx}>
            <h4 className="medical-card__stat__title">{title}</h4>
            <p className="medical-card__stat__value">{value}</p>
        </div>
        )
    })}
    
</div>
  )
}
MedicalCard.propTypes = {
    name: PropTypes.string,
    imgs: PropTypes.array,
    stats: PropTypes.array,
}

export default MedicalCard