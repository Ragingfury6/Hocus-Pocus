import Tixel from '../assets/tixel.jpg';
import Botox from '../assets/botox.jpg';
import EyebrowWax from '../assets/EyebrowWax.jpg';
import LipBlushing from '../assets/lipblushing.jpg';
import SaltFacial from '../assets/salt-facial.webp';
import HydraFacial from '../assets/hydrafacial.webp';
import EyebrowLashTint from '../assets/EyebrowLashTint.jpg';
import ChemicalPeels from '../assets/ChemicalPeels.jpg';
import Facial1 from '../assets/facial1.jpg';
import Promo1 from '../assets/promo1.jpg';
import Promo2 from '../assets/promo2.jpg';
import Microdermabrasion from '../assets/Microdermabrasion.jpg';
import MicroNeedling from "../assets/microneedling.jpg";
import MicroBlading  from '../assets/microblading.jpg';
import RFMicroNeedling from "../assets/rfmicroneedling.jpg";
import CryoSkin from '../assets/trimfreeze.jpg';
import SofWave from "../assets/sofwave.jpg";
import VitaminB12 from "../assets/vitaminb12.jpg"
import LEDTherapy from "../assets/ledtherapy.jpg";
import PermanentMakeup from "../assets/permanentmakeup.jpg";
import Electrolysis from "../assets/electrolysis.jpg";
import LaserAcne from "../assets/laseracne.jpg";
import LaserHair from  "../assets/laserhair.jpg";
import Carboxy from "../assets/carboxy.jpg";
import GlowSkin from "../assets/glowskin.jpg";
import SkinClassics from "../assets/skinclassics.jpg";

export const services = [
  {name: "Eyebrow Wax", description: "An eyebrow waxing treatment involves applying warm wax to unwanted eyebrow hair and quickly removing it to achieve a clean, defined shape. This method provides longer-lasting results compared to tweezing, leaving the eyebrows looking polished and well-groomed.", price:"$15", image:EyebrowWax, featured:false}, // done
  {name: "Tixel", description: "Tixel employs a bio compatible heated 400 degree C pyramid tip when in contact with the skin, thermal energy is transferred to the upper skin layers creating micro pores. Great for resurfacing the skin. Age spots, wrinkles, fine lines, acne scars, uneven skin tone and texture.", price:"$850", image:Tixel, featured:false}, //done
  {name: "Botox", description: "Botox is a specialized injectable treatment used to reduce the appearance of facial wrinkles and fine lines. It provides quick and minimally invasive results, making it a popular choice for those seeking a rejuvenated appearance. ", price:"$10", image:Botox, featured:false},//done
  {name:"Microdermabrasion", description:"Exfoliate the outer layer of your skin and remove deal skin cells and surface imperfections like fine lines and wrinkles. You'll notice your skin is smoother, has better texture and your complexion is dramatically healthier", price:"$110", featured:false, image:Microdermabrasion}, // done
  {name:"HydraFacial", description: " A HydraFacial is a medical-grade resurfacing treatment that clears out your pores, plus hydrates your skin. It is a four step treatment consisting of cleansing, exfoliating, extracting, and hydrating the skin with serums that are infused into pores with the HydraPeel Tip, a pen-like device.", price:"$200", image1: Facial1, image2:HydraFacial, pros:"Hydrafacials can address all sorts of skin concerns, including fine lines, wrinkles, brown spots, elasticity, vibrancy, pore size, texture, and more. The treatment will leave your skin feeling cleansed, refreshed, and hydrated.", tips: "We recommend getting a facial every 4-6 weeks as your skin cells regenerate approximately every 28 days. ", featured:true}, // done
  {name:"Microneedling", description:"Microchannels high quality serums tones, tightens builds collagen and elastin. Great for facial tightening, stretch marks, acne, pore reduction, and minimize scars. Can be used on all areas of the body.", price:"Face · $275,Body · $499", featured:false, image:MicroNeedling, sizing:2},
  {name: "Chemical Peels", description: "A chemical exfoliation that helps with acne, uneven skin tone, shrinks pores, tightens, skin reducing fine lines and wrinkles, great for all skin type concerns, rosacea and malasma. Helps build collagen and elastin. ", price:"$250", featured:false, image:ChemicalPeels}, // done
 
  {name: "Eyebrow-Lash Tint", description: "A chemical exfoliation that helps with acne, uneven skin tone, shrinks pores, tightens, skin reducing fine lines and wrinkles, great for all skin type concerns, rosacea and malasma. Helps build collagen and elastin. ", price:"$125", featured:false, image:EyebrowLashTint}, // done

  {name: "Lip Blushing", description: "Lip Blushing is a semi-permanent cosmetic procedure that enhances the natural color, shape, and definition of the lips, leaving them looking fuller and more vibrant. ", price:"$275", featured:false, image:LipBlushing}, // done
  {name: "Lymphatic Drainage ELT", description: "A chemical exfoliation that helps with acne, uneven skin tone, shrinks pores, tightens, skin reducing fine lines and wrinkles, great for all skin type concerns, rosacea and malasma. Helps build collagen and elastin. ", price:"$200", featured:false, image:CryoSkin},
 
  {name: "Salt Facial", description: "A Salt Facial is a three-step skin rejuvenation treatment that uses natural sea salt to exfoliate, hydrate, and replenish the skin. It helps improve skin texture, tone, and overall appearance, leaving the complexion radiant and refreshed.", price:"$275", featured:false, image:SaltFacial,sizing:2}, //done
  {name:"SofWave", description: "This treatment will build collagen, elastin and fibroblast for a younger refreshed look one treatment once a year to maintain can be used on different areas of the body.", price: "$200", featured:false, image:SofWave, sizing:2 },
  {name:"CryoSkin", description: "CryoSlimming uses thermoelectric cooling to perform cryopolysis (freezing of the fat) which causes cell death of subcutaneous fat tissue without damage to the overlying skin.", price: "$350", featured:false, image:CryoSkin},
  {name:"Vivance RF Needling", description: "The Vivance experience is a new treatment approach that combines Microneedling and Radiofrequency energy with a specialized treatment serum and cooling Peptide Mask to provide patients with Superior, Natural-Looking results.", price: "Prices Vary", featured:false, image:RFMicroNeedling},
  {name:"PromoItalia", description: "The PromoItalia skin treatment is a non-invasive procedure designed to rejuvenate the skin by stimulating collagen production and enhancing skin texture and tone. It utilizes advanced techniques and products to achieve a youthful and radiant complexion.", price:"Prices Vary", image1: Promo2, image2:Promo1, pros:"The PromoItalia skin treatment improves skin texture and tone, giving a smoother and more radiant appearance. It is suitable for various skin types and offers long-lasting results with proper maintenance.", tips: "To maximize and maintain results, follow the recommended aftercare routine. Additionally, stay hydrated and use sun protection.", featured:true}, // done
  {name:"Vitamin B12 Shot", description: "The B12 Shot is a high dose, intramuscular injection of this necessary and important vitamin. This increases energy and metabolism, and enhances neurological health.", price: "$35", featured:false, image:VitaminB12},
  {name:"Carboxy Therapy", description: "Carboxy therapy helps plump the skin, improves elasticity and wrinkles, and assists in getting rid of toxins. It will also help lighten and brighten the skin. Carboxy gel is applied onto the skin followed with an activating fabric masque that contains lemon acid. It will start bubbling and the client will fell heat, tingling, and a prickly sensation.", price: "$375", featured:false, image:Carboxy, sizing: 2},
  {name:"LED Therapy", description: "A serum is placed on the skin and left under the LED light for 20 minutes. Certain frequencies of light reduce fine lines and wrinkles, stimulate collagen production, and increase new tissue growth.", price: "$275", featured:false, image:LEDTherapy},

  {name:"Skin Classics", description: "The skin classic is an award-winning laser alternative treatment for common skin irregularities such as broken capillaries, cherry angiomas, keratosis, skin  tags, hyper-pigmentation, milia, sebaceous hyperplasia, and acne.", price: "Prices Vary", featured:false, image:SkinClassics},
  {name:"Laser Hair Removal", description: "One small area of laser hair removal such as the chin, top of feet including toes, back of neck, or underarms.", price: "$119", featured:false, image:LaserHair},
  {name:"Glow Skin Method Facial", description: "This customized facial is for those that are on the go. Includes cleansing, exfoliation, steam, mask, toning, massage techniques, and hydration with SPF. We treat many different skin concerns such as acne, rosacea, dry/dehydrated, aging, sun damaged, uneven skin tone, and hyperpigmented skin. ", price: "Prices Vary", featured:false, image:GlowSkin},
  {name:"Electrolysis", description: "Electrolysis is the only FDA-approved permanent hair removal treatment. Electrolysis is safe and effective in treating any hair and skin color.", price: "Prices Vary", featured:false, image:Electrolysis},
  {name:"Laser Acne Treatment", description: "Using Intense Pulsed Light, our acne treatment removes damaged cells at the deepest levels of your skin, effectively clearing up active acne, reducing inflammation, and improving the appearance of facial scarring.", price: "Face · $99,Decollete · $149,Face + Decollete · $199,Back · $199", featured:false, image:LaserAcne, sizing:2},

  {name:"Microblading", description: "Microblading is the newest trend in tattooing and permanent makeup. Microblading is a semi-permanent procedure that uses specially formulated pigments and a hand held tool. This process creates fuller, natural looking eyebrows with individual hair like strokes.", price: "Prices Vary", featured:false, image:MicroBlading},
  {name:"Permanent Makeup", description: "Lasts 1-3 years, no downtime, virtually painless, no more smeared or smudged brows", price: "Upper/Lower Eye · $350, Lash Enhancement · $350, Full Lip Blushing · $800, Full Lip Lines · $400", featured:false, image:PermanentMakeup},
  // {name:"", description: "", price: "", featured:false, image:{}},
  // {name:"PromoItalia", description: "The PromoItalia skin treatment is a non-invasive procedure designed to rejuvenate the skin by stimulating collagen production and enhancing skin texture and tone. It utilizes advanced techniques and products to achieve a youthful and radiant complexion.", price:"$250", image1: Eyeliner, image2:Microblading, image3:LipBlushing, pros:"The PromoItalia skin treatment improves skin texture and tone, giving a smoother and more radiant appearance. It is suitable for various skin types and offers long-lasting results with proper maintenance.", tips: "To maximize and maintain results, follow the recommended aftercare routine. Additionally, stay hydrated and use sun protection.", featured:true}
];

// populate all services before fixing design***

// add thing she sent me
// add spacing to images on highlighted service (or maybe scrollable container for images??)
// change contact tab at top to... services(scrolls down)?  

// then...
// square bookings

// mobile problems
/*
Reviews don't work
Spacing on About Us Page
Font Size on FAQ
Featured Card Images
Max width on Cards

*/