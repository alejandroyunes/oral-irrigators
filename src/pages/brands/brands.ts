import { waterPikWP660ProductUrl, waterpikwp660 } from "../categories/best-irrigators/article/best-irrigators/data/waterpikwp660"
import { turewell600mlGlobalData } from "../categories/best-irrigators/article/global-data/best-countertop/best-countertop"
import { coslus300mlGlobalData, nicwellF5025GlobalData, waterPikGlobalData } from "../categories/best-irrigators/article/global-data/best-portable/best-portable"

const bestIrrigatorsBgImage = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701063834/compareIrrigators/BestIrrigatorBg/bq3ntabxi9mjsbk7zbhi.webp'
const bestIrrigatorsBgMobileImage = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701063921/compareIrrigators/BestIrrigatorBg/vrreipanqkrf8d8xjvrl.webp'

const waterpicWP580 = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701082075/compareIrrigators/Waterpic-WP-580/au3iegupvu2oby4ibqyy.webp'
const waterpicWP580ProductUrl = 'https://a.co/d/fDPfb5g'

const waterpicWF13 = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701085259/compareIrrigators/Waterpik-WF-13/alhhatr4eii53pnyze9d.webp'
const waterpicWF13ProductUrl = 'https://a.co/d/hB29NQR'

const waterpikION = "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701733235/compareIrrigators/WaterpikION/au9clrqapxfmxlejioov.webp"
const waterpikIONProductUrl = "https://a.co/d/gc0zsKM"

const turewellFC162 = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701736336/compareIrrigators/TurewellFC162/jbh50civqiol3jtz1wps.webp'
const turewellFC162ProductUrl = 'https://a.co/d/amLAm8i'

const turewellFC159 = "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701747370/compareIrrigators/TurewellFC159/ywy8zsyqrxqav9acdfo4.webp"
const turewellFC159ProductUrl = "https://a.co/d/9z9FIj3"

const turewellYXY = "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701747707/compareIrrigators/TurewellYXY/tcqkxsmthahs9yoneg6v.webp"
const turewellYXYProductUrl = "https://a.co/d/5NMAXnH"

const nicwellf5025T = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701779174/compareIrrigators/NicwellF5025T/k9srlaxpflbgvjd6utwy.webp'
const nicwellf5025TProductUrl = "https://a.co/d/ajUpF5m"

const amazonPrime = 'https://www.amazon.com/'

export const headerProps = {
  title: "The Best Brands of Oral Irrigators in 2023",
  subtitle: "Elevate your oral hygiene routine",
  text: "Discover the Ultimate Oral Care: Unveiling the Best Brands of Oral Irrigators",
  image: bestIrrigatorsBgImage,
  mobileImage: bestIrrigatorsBgMobileImage,
  url: '/#types',
  buttonText: "View Types",
  date: '4/12/2023'
}

export const tableOfContentUrl = '/brands/#'

export const tableOfContentItems = [
  {
    content: '\u2022 1. Waterpik Oral Irrigators',
    id: `${tableOfContentUrl}waterpik`
  },
  {
    content: '\u2022 2. Turewell Oral Irrigators',
    id: `${tableOfContentUrl}turewell`
  },
  {
    content: '\u2022 3. Nicwell Oral Irrigator',
    id: `${tableOfContentUrl}nicwell`
  },
  {
    content: '\u2022 Criteria Used in this Irrigator Comparison',
    id: `${tableOfContentUrl}criteria-used-in-this-irrigator-comparison`
  },
]

export const firstProduct = {
  product: {
    id: 'waterpik',
  },
  proAndCons: {
    title: "1. Waterpik Oral Irrigators",
    subtitle: "Experience precision and power with Waterpik oral irrigators, a leading brand in oral irrigators. Engineered with state-of-the-art water pulsation technology, this device effectively removes plaque, debris, and bacteria from hard-to-reach areas. Its customizable pressure settings cater to individual preferences, making it suitable for users of all ages. Elevate your oral care routine with Waterpik – where innovation meets perfection.",
  }
}

export const comparativeTableProps = {
  title: 'Comparison Table',
  message: 'In this table, you can see some of the Waterpik models, their features, notable advantages, user ratings, and the results of our analyses in 2023.',
  primeUrl: amazonPrime,
  items: [
    {
      id: 1,
      models: 'Waterpik WP-660',
      image: waterpikwp660,
      alt: 'Waterpik WP-660 Oral Irrigator',
      prime: true,
      dimensions: '3.8 x 4.7 x 10.3 in, 24 oz',
      multifunctionaltips: '7',
      capacity: '650 ml',
      highlight: '10 Nozzles, Best value',
      problem: 'Noise, Size',
      price: 'Fair',
      satisfaction: '9.5/10',
      view: 'View Price',
      url: waterPikWP660ProductUrl
    },
    {
      id: 2,
      models: 'Waterpik WP-580',
      image: waterpicWP580,
      alt: 'Waterpik Cordless WP-580, 200ml',
      prime: true,
      dimensions: '4 x 2.8 x 11.6 in, 12.8 oz',
      multifunctionaltips: '6',
      capacity: '200 ml',
      highlight: 'Long battery life, Cordless',
      problem: 'Small reservoir',
      price: 'Fair',
      satisfaction: '9.5/10',
      view: 'View Price',
      url: waterpicWP580ProductUrl
    },
    {
      id: 3,
      models: 'Waterpik Pearl WF-13',
      image: waterpicWF13,
      alt: 'Waterpik Pearl WF-13',
      prime: true,
      dimensions: '3.7 x 2.5 x 11.6 in, 12.8 oz',
      multifunctionaltips: '4',
      capacity: '207 ml',
      highlight: 'Quality, Ultra quiet',
      problem: 'Storage space',
      price: 'Good buy',
      satisfaction: '9.4/10',
      view: 'View Price',
      url: waterpicWF13ProductUrl
    },
    {
      id: 4,
      models: 'Waterpik ION WF-12',
      image: waterpikION,
      alt: 'Waterpik ION WF-12',
      prime: true,
      dimensions: ' 5.7 x 5.9 x 7.3 in, 20.8 oz',
      multifunctionaltips: '7',
      capacity: '590 ml',
      highlight: 'Size, Ease of use, Cleanliness',
      problem: 'Charging, Durability',
      price: 'Great Price',
      satisfaction: '8.6/10',
      view: 'View Price',
      url: waterpikIONProductUrl
    }
  ]
}

export const secondProduct = {
  product: {
    id: 'turewell',
  },
  proAndCons: {
    title: "2. Turewell Oral Irrigators",
    subtitle: "Introducing Turewell Series, a frontrunner in oral irrigation technology. Harnessing the power and quality, these advanced irrigator provides a gentle yet thorough cleaning experience. With multiple nozzle options and an intuitive control panel, Turewell oral irrigators are designed for personalized care.",
  }
}

export const comparativeTableTwoProps = {
  id: 'comparative-table-of-the-best-oral-irrigators',
  title: 'Comparison Table',
  message: 'In this table, you can see some of the Turewell models, their features, notable advantages, user ratings, and the results of our analyses in 2023.',
  primeUrl: amazonPrime,
  items: [
    {
      id: 1,
      models: 'Turewell FC165',
      image: turewell600mlGlobalData.turewell600ml,
      alt: 'Turewell FC165 Oral Irrigator',
      prime: true,
      dimensions: '5.7 x 4.9 x 8.07 in, 27.2 oz',
      multifunctionaltips: '8',
      capacity: '600 ml',
      highlight: '8 Nozzles, Value, Ease of use',
      problem: 'Water Resistance',
      price: 'Good Price',
      satisfaction: '8.6/10',
      view: 'View Price',
      url: turewell600mlGlobalData.turewell600mlProductUrl
    },
    {
      id: 2,
      models: 'Turewell FC162',
      image: turewellFC162,
      alt: 'Turewell FC162, 600ml',
      prime: true,
      dimensions: '8.7 x 6.14 x 5.08 in, 44.8 oz',
      multifunctionaltips: '8',
      capacity: '600 ml',
      highlight: 'Value, Cleaning, Size',
      problem: 'Water resistance',
      price: 'Good',
      satisfaction: '8.6/10',
      view: 'View Price',
      url: turewellFC162ProductUrl
    },
    {
      id: 3,
      models: 'Turewell FC159',
      image: turewellFC159,
      alt: 'Turewell FC159',
      prime: true,
      dimensions: '2.76 x 3.15 x 7.87 in, 13.5 oz',
      multifunctionaltips: '2',
      capacity: '250 ml',
      highlight: 'Ease of use, Compactness',
      problem: 'Recharging, Durability',
      price: 'Excelent price',
      satisfaction: '8.4/10',
      view: 'View Price',
      url: turewellFC159ProductUrl
    },
    {
      id: 4,
      models: 'Turewell YXY',
      image: turewellYXY,
      alt: 'Turewell YXY',
      prime: true,
      dimensions: '9.57 x 3.31 x 3.19 in, 15.2 oz',
      multifunctionaltips: '2',
      capacity: '300 ml',
      highlight: 'Size, Ease of use, Weight',
      problem: 'Waterproofness',
      price: 'Great Price',
      satisfaction: '8.4/10',
      view: 'View Price',
      url: turewellYXYProductUrl
    }
  ]
}

export const thirdProduct = {
  product: {
    id: 'nicwell'
  },
  proAndCons: {
    title: "3. Nicwell Oral Irrigators",
    subtitle: "Nicwell Water Dental Flosser takes oral health to new heights with its comprehensive care system. This brand is renowned for its smart design, combining water pulsation and air infusion for an action cleansing effect.",
  }
}
export const comparativeTableThirdProps = {
  id: 'comparative-table-of-the-best-oral-irrigators',
  title: 'Comparison Table',
  message: 'In this table, you can see some of the Nicwell models, their features, notable advantages, user ratings, and the results of our analyses in 2023. It is important to consider that there are fewer products available for Nicwell.',
  primeUrl: amazonPrime,
  items: [
    {
      id: 1,
      models: 'Nicwell F5025',
      image: nicwellF5025GlobalData.nicwellf5025,
      alt: 'Nicwell 200ml Oral Irrigator',
      prime: true,
      dimensions: '8.03 x 4.02 x 2.73 in, 14 oz',
      multifunctionaltips: '5',
      capacity: '200 ml',
      highlight: 'Cleaning Orthodontic Gums, Prevent Bad Breath',
      problem: 'Charging',
      price: 'Great Price',
      satisfaction: '9/10',
      view: 'View Price',
      url: nicwellF5025GlobalData.nicwellf5025ProductUrl
    },
    {
      id: 2,
      models: 'Nicwell F5025 + T2051',
      image: nicwellf5025T,
      alt: 'Nicwell F5025 + T2051',
      prime: true,
      dimensions: '9.17 x 6.34 x 3.19 in, 22 oz',
      multifunctionaltips: '6',
      capacity: '200 ml',
      highlight: 'Value, Cleaning, Size',
      problem: 'Charging',
      price: 'Fair',
      satisfaction: '8.6/10',
      view: 'View Price',
      url: nicwellf5025TProductUrl
    },
    {
      id: 3,
      models: 'Coslus F5020E',
      image: coslus300mlGlobalData.coslus300ml,
      alt: 'Coslus F5020E Oral Irrigator',
      prime: true,
      dimensions: '1.97 x 2.74 x 12.2 in, 15.52 oz',
      multifunctionaltips: '5',
      capacity: '300ml',
      highlight: 'Dual-thread stream, Child mode, IPX7 waterproof',
      problem: 'Limited water capacity',
      price: 'Excelent price',
      satisfaction: '9/10',
      view: 'View Price',
      url: coslus300mlGlobalData.coslus300mlProductUrl
    },
    {
      id: 4,
      models: 'Waterpik WF-02',
      image: waterPikGlobalData.waterpikwf02,
      alt: 'Waterpik Model WF-02',
      prime: true,
      dimensions: '3.6 x 2.5 x 11.75 in, 11.68 oz',
      multifunctionaltips: '2',
      capacity: '5oz reservoir for 30 seconds of flossing time',
      highlight: 'Economical, Portable, Waterproof, Customizable.',
      problem: 'Battery replacement, Limited water capacity.',
      price: 'Best buy',
      satisfaction: '9/10',
      view: 'View Price',
      url: waterPikGlobalData.waterpikwf02ProductUrl
    }
  ]
}

export const titleProps = 'Dental irrigators are efficient for removing plaque and food particles from between the teeth. Additionally, they contribute to reducing the risk of gum diseases and combating bad breath. But, which irrigator to buy? What would be the best irrigator? Below, we present the most comprehensive and detailed analysis of the best irrigators to assist you in your purchase.'
export const titleListProps = {
  id: 'criteria-used-in-this-irrigator-comparison',
  title: 'What criteria we used in this Irrigators Comparison?',
  items: [
    {
      itemTitle: [
        '',
        '',
        '',
        '',
      ],
      itemContent: [
        'To find the most reliable oral irrigators, we have analyzed user satisfaction levels, rating them on a scale of 1 to 10.',
        'From buyer opinions, we have extracted the most praised feature and the most common issue for each irrigator.',
        'To provide you with comprehensive information, we present the features and accessories of each one.',
        'Finally, we assess the price in relation to its quality, rating it as: Improvable, Fair, Exceptional.',
      ]
    }
  ]
}