import MedicalCard from "../../components/MedicalCard";
import { medical } from "../../data/medical";
import "../../scss/medicalinfo.scss";

function MedicalInfo() {
  return (
    <section className="medical-info">
        {
        medical.map(({name, imgs, stats},idx)=>{
return <MedicalCard name={name} imgs={imgs} stats={stats} key={idx}/>
        })
        }
    </section>
  )
}

export default MedicalInfo