import { getRandomArrayElement } from '../utils.js';

const mockDestinations = [
  {
    id: 1,
    description: 'The capital of France, known for its art, culture, and monuments.',
    name: 'Paris',
    photos: [
      {
        src: 'photo1.jpg',
        description: 'The Louvre Museum, located in the city center, is one of the most visited museums in the world.'
      }
    ],
  },
  {
    id: 2,
    description: 'The capital of Great Britain, known for its art, culture, and monuments.',
    name: 'London',
    photos: [
      {
        src: 'photo2.jpg',
        description: 'London Eye, located in the city center.'
      }
    ],
  },
  {
    id: 3,
    description: 'The capital of The Netherlands, known for its art, culture, and monuments.',
    name: 'Amsterdam',
    photos: [
      {
        src: 'photo3.jpg',
        description: 'Red Lights District'
      }
    ],
  },
];

const mockOffers = [
  {
    type: 'taxi',
    offers: [
      {
        id: 1,
        title: 'Upgrade to business class',
        price: 100,
      },
      {
        id: 2,
        title: 'Order Uber',
        price: 20,
      }
    ]
  },
  {
    type: 'flight',
    offers: [
      {
        id: 3,
        title: 'Add laggage',
        price: 50,
      },
      {
        id: 4,
        title: 'Switch to comfort',
        price: 80,
      }
    ]
  },
  {
    type: 'drive',
    offers: [
      {
        id: 5,
        title: 'Rent a car',
        price: 200,
      }
    ]
  },
  {
    type: 'check-in',
    offers: [
      {
        id: 6,
        title: 'Add breakfast',
        price: 50,
      }
    ]
  },
  {
    type: 'sightseeing',
    offers: [
      {
        id: 7,
        title: 'Book tickets',
        price: 40,
      },
      {
        id: 8,
        title: 'Lunch in city',
        price: 30,
      }
    ]
  }
];

const mockPoints = [
  {
    id: 1,
    basePrice: 300,
    dateFrom: '2024-10-22T08:00:00',
    dateTo: '2024-10-22T10:00:00',
    destination: getRandomDestination(),
    isFavorite: true,
    offers: getOffersByType('flight'),
    type: 'flight',
  },
  {
    id: 2,
    basePrice: 260,
    dateFrom: '2024-10-22T08:00:00',
    dateTo: '2024-10-22T10:00:00',
    destination: getRandomDestination(),
    isFavorite: false,
    offers: getOffersByType('taxi'),
    type: 'taxi',
  },
  {
    id: 3,
    basePrice: 200,
    dateFrom: '2024-10-22T08:00:00',
    dateTo: '2024-10-22T10:00:00',
    destination: getRandomDestination(),
    isFavorite: true,
    offers: getOffersByType('check-in'),
    type: 'check-in',
  }
];

function getOffersByType(type) {
  return mockOffers.find((offer) => offer.type === type).offers;
}

function getRandomDestination() {
  return getRandomArrayElement(mockDestinations);
}

function getRandomPoint() {
  return getRandomArrayElement(mockPoints);
}

export { getRandomPoint };
