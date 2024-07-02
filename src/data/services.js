import Microblading from '../assets/microblading.jpg';
import Eyeliner from '../assets/eyeliner.jpeg';
import LipBlushing from '../assets/lipblushing.jpg';
import Facial1 from '../assets/facial1.jpg';
import Facial2 from '../assets/facial2.jpg';
import Facial3 from '../assets/facial3.jpg';
import Microdermabrasion from '../assets/microdermabrasion.jpg';
import TrimFreeze from '../assets/trimfreeze.jpg';
import LaserLipo from "../assets/laserlipo.webp";

export const services = [
  {name: "Microblading", description: "Microblading is a form of semi-permanent makeup. Colored pigment is manually implanted in the superficial layers of the skin using a pen with tiny sterile needles. This produces the appearance of hair strokes. Microblading can last up to 2 years.", price:"$100", image:Microblading, featured:false},
  {name: "Permanent Eyeliner", description: "A cosmetic eyeliner tattoo is a permanent makeup treatment that recreates the look of wearing eyeliner, but it’s permanent, meaning it cannot be washed off. The result is the look of a fuller lash line or eyeliner which lasts a year, or longer.", price:"$150", image:Eyeliner, featured:false},
  {name: "Lip Blushing", description: "Lip blushing is a kind of semi-permanent cosmetic tattooing procedure achieved by depositing pigments in your lips using small needles. Lip blushing focusing on altering both color and shape to create younger looking lips.", price:"$90", image:LipBlushing, featured:false},
  {name:"HydraFacial", description: " A HydraFacial is a medical-grade resurfacing treatment that clears out your pores, plus hydrates your skin. It is a four step treatment consisting of cleansing, exfoliating, extracting, and hydrating the skin with serums that are infused into pores with the HydraPeel Tip, a pen-like device.", price:"$250", image1: Facial1, image2:Facial3, image3:Facial2, pros:"Hydrafacials can address all sorts of skin concerns, including fine lines, wrinkles, brown spots, elasticity, vibrancy, pore size, texture, and more. The treatment will leave your skin feeling cleansed, refreshed, and hydrated.", tips: "We recommend getting a facial every 4-6 weeks as your skin cells regenerate approximately every 28 days. ", featured:true},
  {name:"Microdermabrasion", description:"Exfoliate the outer layer of your skin and remove deal skin cells and surface imperfections like fine lines and wrinkles. You'll notice your skin is smoother, has better texture and your complexion is dramatically healthier", price:"$75", featured:false, image:Microdermabrasion},
  {name:"TrimFreeze", description:"Eliminate body fat from stubborn areas with TrimFreeze, A non surgical fat reduction treatment that utilizes heating and cooling technology to permanently eliminate unwanted body fat.", price:"$175", featured:false, image:TrimFreeze},
  {name: "Laser Lipo", description: " Laser Lipo is a Revolutionary High Intensity Light Wave Technology that reduces pockets of fat that diet and exercise fail to achieve. This technology is designed for the areas that the Ultra Sonic Cavitation Technology cannot do, as well as every other area of the body!", price:"$200", featured:false, image:LaserLipo}
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