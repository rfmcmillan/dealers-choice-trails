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
];

const list = () => {
  return [...data]; // Notice that we're returning a copy of the array, so the original data is safe. This is called 'immutability'.
};

const find = (id) => {
  const post = data.find((post) => post.id === +id);
  return { ...post }; // Again, we copy the post data before returning so the original information is safe.
};

module.exports = { list, find };
