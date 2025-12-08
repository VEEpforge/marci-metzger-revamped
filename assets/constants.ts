export const navlinks = [
  { href: "/", label: "Home" },
  { href: "#properties", label: "Properties" },
  { href: "#about", label: "About" },
  { href: "#search", label: "Home Search" },
]

import listing_1 from './1640_Moose_St.jpg';
import listing_2 from './361_Montecito_Dr.jpg';
import listing_3 from './2061_Iroquois_Ave.jpg';
import listing_4 from './5528_Eleganza_Ave.jpg';

export const listings = [
  {
    id: '01',
    location: "1640 Moose St",
    image: listing_1,
    link: "https://www.zillow.com/homedetails/1640-Moose-St-Pahrump-NV-89048/62705987_zpid/",
    classname: "col-span-6 my-10"
  },
  {
    id: '02',
    location: "361 Montecito Dr",
    image: listing_2,
    link: "https://www.zillow.com/homedetails/361-Montecito-Dr-Pahrump-NV-89048/65315598_zpid/",
    classname: "col-span-5 col-start-8 my-10"
  },
  {
    id: '03',
    location: "2061 Iroquois Ave",
    image: listing_3,
    link: "https://www.zillow.com/homedetails/2061-Iroquois-Ave-Pahrump-NV-89048/62708465_zpid/",
    classname: "col-span-5 my-10"
  },
  {
    id: '04',
    location: "5528 Eleganza Ave",
    image: listing_4,
    link: "https://www.zillow.com/homedetails/5528-Eleganza-Ave-Pahrump-NV-89061/125310577_zpid/",
    classname: "col-span-6 col-start-7 my-10"
  }
]