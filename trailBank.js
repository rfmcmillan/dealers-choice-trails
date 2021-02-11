const data = [
  {
    id: 1,
    name: 'Pennine Way',
    country: 'United Kingdom',
    difficulty: 'hard',
    stars: 4.8,
    length: 268,
    image: 'pennine.jpg',
    imageAlt: 'Hikers on the Pennine Way',
  },
  {
    id: 2,
    name: 'Camino de Santiago de Compostela',
    country: 'Spain',
    difficulty: 'medium',
    stars: 4.9,
    length: 500,
    image: 'camino.jpg',
    imageAlt: 'A hiker on the Camino de Santiago',
  },
  {
    id: 3,
    name: 'Appalachian Trail',
    country: 'United States',
    difficulty: 'medium',
    stars: 4.7,
    length: 2200,
    image: 'app-trail.jpg',
    imageAlt: 'A snowy view of the Appalachian Trail',
  },
  {
    id: 4,
    name: 'The Basho Wayfarer',
    country: 'Japan',
    difficulty: 'easy',
    stars: 4.9,
    length: 100,
    image: 'basho.jpg',
    imageAlt: 'Apple trees blossoming.',
  },
  {
    id: 5,
    name: 'Refugio Frey and Cerro Catedral',
    country: 'Argentina',
    difficulty: 'easy',
    stars: 4.6,
    length: 11.6,
    image: 'refugio.jpg',
    imageAlt: 'Old stone building on a lake with mountains surrounding.',
  },
  {
    id: 6,
    name: 'Mount Toubkal',
    country: 'Morocco',
    difficulty: 'hard',
    stars: 4.8,
    length: 3.8,
    image: 'toubkal.jpg',
    imageAlt: 'Snowy mountains and blue sky.',
  },
  {
    id: 7,
    name: 'Great Wall of China, Jinshanling section',
    country: 'China',
    difficulty: 'easy',
    stars: 4.7,
    length: 6,
    image: 'greatwall.jpg',
    imageAlt: 'Great Wall of China',
  },
  {
    id: 8,
    name: "Dragon's Back",
    country: 'Hong Kong',
    difficulty: 'hard',
    stars: 4.6,
    length: 26,
    image: 'dragon.jpg',
    imageAlt: 'Hikers hiking on an open hill with the ocean in the background.',
  },
  {
    id: 9,
    name: 'The Dingle Way',
    country: 'Ireland',
    difficulty: 'hard',
    stars: 4.5,
    length: 111,
    image: 'dingle.jpg',
    imageAlt: 'Two hikers on a gravel road',
  },
  {
    id: 10,
    name: 'Tergo La Trek',
    country: 'Bhutan',
    difficulty: 'hard',
    stars: 4.5,
    length: 6,
    image: 'tergo.jpg',
    imageAlt: 'Green mountains.',
  },
];

const list = () => {
  return [...data]; // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
};

const find = (id) => {
  const post = data.find((post) => post.id === +id);
  return { ...post }; // Again, we copy the post data before returning so the original information is safe.
};

module.exports = { list, find };
