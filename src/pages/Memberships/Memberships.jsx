import Membership from "../../components/Membership";
import "../../scss/memberships.scss";

function Memberships() {
  return (
    <div className="memberships">
      <div className="memberships__header">
        <h1 className="memberships__header__title">Premium Memberships</h1>
        <div className="memberships__header__description">
        Exclusive skincare benefits and personalized treatments, designed to elevate your beauty routine
        </div>
      </div>
      <div className="memberships__content">
        <Membership name="Silver" price="600">
          <ul>
            <li>1 Free Wax of Choice</li>
            <li>1 Free Dermaplane Facial</li>
            <li>2 Free IV Hydration</li>
            <li>10% off Botox injections</li>
            <li>10% off Dermal Fillers</li>
            <li>10% off B-12 Injections</li>
            <li>10% off All Facials</li>
          </ul>
        </Membership>
        <Membership name="Gold" price="800">
          <ul>
            <li>1 Free Microneedling + PRP</li>
            <li>1 Free Wax Service</li>
            <li>1 Free IV Hydration</li>
            <li>15% off Botox injections</li>
            <li>15% off IV Hydration</li>
            <li>15% off Dermal Fillers</li>
            <li>15% off B-12 Injections</li>
            <li>15% off All Facials</li>
          </ul>
        </Membership>
        <Membership name="Platinum" price="1300">
          <ul>
            <li>3 Free Microneedlings + PRP</li>
            <li>1 Free Wax Service</li>
            <li>1 Free IV Hydration</li>
            <li>1 Free Lash Lift and Tint</li>
            <li>20% off Botox injections</li>
            <li>20% off Dermal Fillers</li>
            <li>20% off B-12 Injections</li>
            <li>20% off All Facials</li>
          </ul>
        </Membership>
      </div>
    </div>
  );
}
export default Memberships;
