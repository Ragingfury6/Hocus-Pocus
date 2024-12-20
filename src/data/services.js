import Tixel from '../assets/tixel.jpg';
import Botox from '../assets/botox.jpg';
import EyebrowWax from '../assets/EyebrowWax.jpg';
import LipBlushing from '../assets/lipblushing.jpg';
import SaltFacial from '../assets/salt-facial.webp';
import OxygenFacial from '../assets/oxygenfacial.jpg';
import HydraFacial from '../assets/hydrafacial.webp';
import EyebrowLashTint from '../assets/EyebrowLashTint.jpg';
import ChemicalPeels from '../assets/ChemicalPeels.jpg';
import Facial1 from '../assets/facial1.jpg';
import Promo1 from '../assets/promo1.jpg';
import Promo2 from '../assets/promo2.jpg';
import Microdermabrasion from '../assets/Microdermabrasion.jpg';
import MicroNeedling from "../assets/microneedling.jpg";
import TrimFreeze from '../assets/trimfreeze.jpg';

export const services = [
  {name: "Eyebrow Wax", description: "An eyebrow waxing treatment involves applying warm wax to unwanted eyebrow hair and quickly removing it to achieve a clean, defined shape. This method provides longer-lasting results compared to tweezing, leaving the eyebrows looking polished and well-groomed.", price:"$100", image:EyebrowWax, featured:false}, // done
  {name: "Tixel", description: "Tixel employs a bio compatible heated 400 degree C pyramid tip when in contact with the skin, thermal energy is transferred to the upper skin layers creating micro pores. Great for resurfacing the skin. Age spots, wrinkles, fine lines, acne scars, uneven skin tone and texture.", price:"$150", image:Tixel, featured:false}, //done
  {name: "Botox-Dysport", description: "Botox-Dysport is a specialized injectable treatment used to reduce the appearance of facial wrinkles and fine lines. It provides quick and minimally invasive results, making it a popular choice for those seeking a rejuvenated appearance. ", price:"$90", image:Botox, featured:false},//done
  {name:"Microdermabrasion", description:"Exfoliate the outer layer of your skin and remove deal skin cells and surface imperfections like fine lines and wrinkles. You'll notice your skin is smoother, has better texture and your complexion is dramatically healthier", price:"$75", featured:false, image:Microdermabrasion}, // done
  {name:"HydraFacial", description: " A HydraFacial is a medical-grade resurfacing treatment that clears out your pores, plus hydrates your skin. It is a four step treatment consisting of cleansing, exfoliating, extracting, and hydrating the skin with serums that are infused into pores with the HydraPeel Tip, a pen-like device.", price:"$250", image1: Facial1, image2:HydraFacial, pros:"Hydrafacials can address all sorts of skin concerns, including fine lines, wrinkles, brown spots, elasticity, vibrancy, pore size, texture, and more. The treatment will leave your skin feeling cleansed, refreshed, and hydrated.", tips: "We recommend getting a facial every 4-6 weeks as your skin cells regenerate approximately every 28 days. ", featured:true}, // done
  {name:"Microneedling", description:"Microchannels high quality serums tones, tightens builds collagen and elastin. Great for facial tightening, stretch marks, acne, pore reduction, and minimize scars. Can be used on all areas of the body.", price:"$175", featured:false, image:MicroNeedling},
  {name: "Chemical Peels", description: "A chemical exfoliation that helps with acne, uneven skin tone, shrinks pores, tightens, skin reducing fine lines and wrinkles, great for all skin type concerns, rosacea and malasma. Helps build collagen and elastin. ", price:"$200", featured:false, image:ChemicalPeels}, // done
 
  {name: "Eyebrow-Lash Tint", description: "A chemical exfoliation that helps with acne, uneven skin tone, shrinks pores, tightens, skin reducing fine lines and wrinkles, great for all skin type concerns, rosacea and malasma. Helps build collagen and elastin. ", price:"$200", featured:false, image:EyebrowLashTint}, // done
  {name: "Lip Blushing", description: "Lip Blushing is a semi-permanent cosmetic procedure that enhances the natural color, shape, and definition of the lips, leaving them looking fuller and more vibrant. ", price:"$200", featured:false, image:LipBlushing}, // done
  {name:"PromoItalia", description: "The PromoItalia skin treatment is a non-invasive procedure designed to rejuvenate the skin by stimulating collagen production and enhancing skin texture and tone. It utilizes advanced techniques and products to achieve a youthful and radiant complexion.", price:"$250", image1: Promo2, image2:Promo1, pros:"The PromoItalia skin treatment improves skin texture and tone, giving a smoother and more radiant appearance. It is suitable for various skin types and offers long-lasting results with proper maintenance.", tips: "To maximize and maintain results, follow the recommended aftercare routine. Additionally, stay hydrated and use sun protection.", featured:true}, // done
  {name: "Lymphatic Drainage ELT", description: "A chemical exfoliation that helps with acne, uneven skin tone, shrinks pores, tightens, skin reducing fine lines and wrinkles, great for all skin type concerns, rosacea and malasma. Helps build collagen and elastin. ", price:"$200", featured:false, image:TrimFreeze},
 
  {name: "Salt Facial", description: "A Salt Facial is a three-step skin rejuvenation treatment that uses natural sea salt to exfoliate, hydrate, and replenish the skin. It helps improve skin texture, tone, and overall appearance, leaving the complexion radiant and refreshed.", price:"$200", featured:false, image:SaltFacial}, //done
  {name: "Trim Freeze", description: "Eliminate body fat from stubborn areas with TrimFreeze, a non-surgical fat reduction treatment that utilizes heating and cooling technology to permanently eliminate unwanted body fat in a quick amount of time. ", price:"$200", featured:false, image:TrimFreeze},
  {name: "Oxygen Facial", description: "An Oxygen Facial is a skincare treatment that delivers concentrated oxygen and essential nutrients to the skin, promoting hydration and a radiant complexion. This non-invasive procedure helps to rejuvenate the skin, reduce fine lines, and improve overall texture and tone.", price:"$200", featured:false, image:OxygenFacial},
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