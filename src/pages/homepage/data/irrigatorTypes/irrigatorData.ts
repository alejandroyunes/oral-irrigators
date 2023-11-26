const counterTop = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701006421/typesOfIrrigators/hfp0f2vemqcdfkglm1nh.webp'
const wireless = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701006421/typesOfIrrigators/krk1blvi7n0yl8zwdpii.webp'
const portable = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1701006658/typesOfIrrigators/nfr2hz3tnyekctw3aznj.webp'


export const irrigatorProps = {
  title: "What Type of Dental Irrigator to Buy?",
  subTitle: "The best irrigator is the one that fits your needs. To meet different demands, manufacturers have created three main types of irrigators: countertop (powerful), cordless (more convenient to use), and travel (lightweight).",
  url: '/blog/what-is-a-dental-irrigator',
  items: [
    {
      id: 1,
      title: 'Countertop',
      text: 'Countertop dental irrigators are characterized by their stationary design and larger water tank capacity. Unlike portable models, they offer multiple pressure settings and interchangeable nozzles, allowing for more precise and customized cleaning based on individual needs. Their size and features make them ideal for intensive and personalized use at home, providing comprehensive and professional oral hygiene.',
      image: counterTop,
      alt: '',
      url: ''
    },
    {
      id: 2,
      title: 'Travel Size',
      text: 'Travel dental irrigators are the portable choice for oral hygiene on the go. Unlike countertop models, their compact and lightweight design makes them easy to carry. They often operate on batteries and have smaller water reservoirs, suitable for temporary use away from home. Although they may have fewer pressure settings, their convenience and adaptability make them essential for those who frequently travel.',
      image: portable,
      alt: '',
      url: ''
    },
    {
      id: 3,
      title: 'Wireless',
      text: 'Wireless dental irrigators offer the flexibility of cable-free cleaning. Unlike countertop models, they do not need to be connected to the electrical grid, making them more versatile and convenient to use. They operate on rechargeable batteries, and their design is often more compact and ergonomic, allowing for easy handling. Although they may have a smaller water reservoir, their freedom of movement makes them ideal for modern and efficient oral hygiene.',
      image: wireless,
      alt: '',
      url: ''
    },

  ],
}