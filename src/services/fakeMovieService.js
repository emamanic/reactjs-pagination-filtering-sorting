export function getMovies() {
  const movies = [
    {
      _id: 1,
      title: 'Terminator',
      genre: {
        _id: 1,
        name: 'Action',
      },
      stock: 4,
      pricePerDay: 3.5,
      like: true,
    },
    {
      _id: 2,
      title: 'The Mask',
      genre: {
        _id: 2,
        name: 'Commedy',
      },
      stock: 30,
      pricePerDay: 1.5,
      like: false,
    },
    {
      _id: 3,
      title: 'Titanic',
      genre: {
        _id: 3,
        name: 'Romance',
      },
      stock: 24,
      pricePerDay: 3.5,
      like: false,
    },
    {
      _id: 4,
      title: 'Travel to Mart',
      genre: {
        _id: 4,
        name: 'Science Fiction',
      },
      stock: 74,
      pricePerDay: 3.5,
      like: false,
    },
    {
      _id: 5,
      title: 'Eddy Morphy',
      genre: {
        _id: 2,
        name: 'Commedy',
      },
      stock: 54,
      pricePerDay: 3.5,
      like: false,
    },
    {
      _id: 6,
      title: 'Junior',
      genre: {
        _id: 2,
        name: 'Commedy',
      },
      stock: 41,
      pricePerDay: 3.5,
      like: false,
    },
    {
      _id: 7,
      title: 'The Elf',
      genre: {
        _id: 2,
        name: 'Commedy',
      },
      stock: 487,
      pricePerDay: 3.5,
      like: false,
    },
    {
      _id: 8,
      title: 'Agent 007 I',
      genre: {
        _id: 1,
        name: 'Action',
      },
      stock: 43,
      pricePerDay: 3.5,
      like: false,
    },
    {
      _id: 9,
      title: 'Rescue Ryan Soldier',
      genre: {
        _id: 1,
        name: 'Action',
      },
      stock: 94,
      pricePerDay: 3.5,
      like: false,
    },
    {
      _id: 10,
      title: 'World War II',
      genre: {
        _id: 1,
        name: 'Action',
      },
      stock: 84,
      pricePerDay: 3.5,
      like: false,
    },
    {
      _id: 11,
      title: 'Cenecienta',
      genre: {
        _id: 3,
        name: 'Romance',
      },
      stock: 46,
      pricePerDay: 33.5,
      like: false,
    },
    {
      _id: 12,
      title: 'Viaje a la luna',
      genre: {
        _id: 4,
        name: 'Science Fiction',
      },
      stock: 43,
      pricePerDay: 330.5,
      like: false,
    },
    {
      _id: 13,
      title: 'Veinte mil leguas de viaje submarino',
      genre: {
        _id: 4,
        name: 'Science Fiction',
      },
      stock: 494,
      pricePerDay: 0.5,
      like: false,
    },
    {
      _id: 14,
      title: 'Retrocer núnca, rendirse jamás',
      genre: {
        _id: 1,
        name: 'Action',
      },
      stock: 45,
      pricePerDay: 31.5,
      like: false,
    },
    {
      _id: 15,
      title: 'El día después de mañana',
      genre: {
        _id: 4,
        name: 'Science Fiction',
      },
      stock: 14,
      pricePerDay: 3.25,
      like: false,
    },
    {
      _id: 16,
      title: 'Romeo y Julieta',
      genre: {
        _id: 3,
        name: 'Romance',
      },
      stock: 12,
      pricePerDay: 2.5,
      like: false,
    },
    {
      _id: 17,
      title: 'El tonto y el más tonto',
      genre: {
        _id: 2,
        name: 'Commedy',
      },
      stock: 44,
      pricePerDay: 3.35,
      like: false,
    },
    {
      _id: 18,
      title: 'Regreso al futuro II',
      genre: {
        _id: 4,
        name: 'Science Fiction',
      },
      stock: 39,
      pricePerDay: 4.0,
      like: false,
    },
  ];

  return movies;
}
