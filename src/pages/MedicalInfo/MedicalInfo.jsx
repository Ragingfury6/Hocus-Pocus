import MedicalCard from "../../components/MedicalCard";
import SchoolCard from "../../components/SchoolCard";
import { medical } from "../../data/medical";
import LHR from "../../assets/medical/LHRCourse.jpg";
import MedicalDirector from "../../assets/medical/MedicalDirector.webp";
import MedicalProfessional from "../../assets/medical/MedicalProfessional.webp";
import "../../scss/medicalinfo.scss";

function MedicalInfo() {
  return (
    <div className="medical">
    <h2 className="medical__title">Courses and Certifications</h2>
    <div className="medical-cards">
      <SchoolCard img={LHR} delay={0.05} title="Laser Hair Removal">
        <h3 className="school-card__content__info">What is Included?</h3>
        <p className="school-card__content__description">This 6 day course includes 4 days of laser didactic training and 2 days of clinical hands on training on laser hair removal. </p>
        <h3 className="school-card__content__info">Cost</h3>
        <p className="school-card__content__description">The full 6 day Laser Hair Removal Certification is <span className="highlight">$2,999</span></p>
        <ul>
          <li>Add on Laser Safety Officer Certification <span className="highlight">$999</span></li>
          <li>Add on Photo Facial <span className="highlight">$1,500</span> </li>
          <li>Add on any other procedure for <span className="highlight">$1,500</span></li>
        </ul>
        <h3 className="school-card__content__info">Licensing</h3>
        <p className="school-card__content__description">Upon the completion of our program you will receive a Certification of Completion from Allure Institute and an AZDHS state license as a Cosmetic Laser Technician  (Laser Hair Reduction) listed as the treatment listed to perform. </p>
      </SchoolCard>
      <SchoolCard img={MedicalDirector} delay={0.1} title="Medical Director">
      <h3 className="school-card__content__info">What is Included?</h3>
      <p className="school-card__content__description">Some of various topics and skills include a Laser Safety Certification, Laser Hair Reduction, Intensed Pulsed Light, Laser Resurfacing, Vascular Lesions, Tattoo Removal, Radio Frequency, Skin Disorders, Laser Physics, and Skin Typing.</p>
        {/* <ul>
  <li>Laser Biophysics practical aspects of laser tissue interaction</li>
  <li>Electromagnetic spectrum</li>
  <li>Non-laser Aesthetic devices (Radio Frequency)</li>
  <li>Laser Safety Certification</li>
  <li>Laser Hair Reduction</li>
  <li>Intensed Pulsed Light</li>
  <li>Laser Resurfacing</li>
  <li>Vascular lesions</li>
  <li>Tattoo Removal</li>
  <li>Radio Frequency</li>
  <li>Exam</li>
  <li>Skin disorders</li>
  <li>Laser Physics</li>
  <li>Skin Typing</li>
  <li>Responsibilities of a Medical Director</li>
</ul> */}
        <h3 className="school-card__content__info">Cost</h3>
        <p className="school-card__content__description">The full 3 day Course is <span className="highlight">$2,999</span></p>
        <h3 className="school-card__content__info">AZDHS ACCREDITATION</h3>
        <p className="school-card__content__description">Upon completion of our program you will receive a Certificate of Completion from our accredited training program and it will be submitted to AZDHS.</p>
        <p className="school-card__content__description">In the state of Arizona, its required to have an NMD,MD,DO,NP who has completed training as a Medical Director to oversee a medical spa. </p>
        <p className="school-card__content__description">At Allure Institute our Medical Director Program course offers all the requirements of Arizona to become the medical director over a cosmetic laser facility. This course includes the 24 hour certification with clinical hands on training and laser didactic training. </p>
      </SchoolCard>
      <SchoolCard img={MedicalProfessional} delay={0.15} title="Medical Professional">
      <h3 className="school-card__content__info">What is Included?</h3>
        <p className="school-card__content__description">In this course all Medical Professionals will receive hands on training with cosmetic lasers & instruction from the leading training academy in Tucson Arizona. Upon completion of our program you will receive an accredited training certificate that allows you to legally perform hands on laser treatments in the State of Arizona.  </p>
        <h3 className="school-card__content__info">Cost</h3>
        <p className="school-card__content__description">The full 3 day Program is <span className="highlight">$3,999</span></p>
        <h3 className="school-card__content__info">What Will I Learn?</h3>
        <p className="school-card__content__description">Our 3 day Medical Professional Certification course is an intensive hands on training with laser didactic. This training will give a comprehensive overview of how cosmetic lasers and IPL function, including the physics of laser/IPL. With our laser courses you will fully grasp all types of cosmetic lasers, their pros and cons, and other types of skin conditions each laser can treat effectively. </p>
      </SchoolCard>

      
    </div>
    <h2 className="medical__title">Licensed Instructors</h2>
    <section className="medical-info">
        {
        medical.map(({name, imgs, stats},idx)=>{
return <MedicalCard name={name} imgs={imgs} stats={stats} key={idx}/>
        })
        }
    </section>
    </div>
  )
}

export default MedicalInfo