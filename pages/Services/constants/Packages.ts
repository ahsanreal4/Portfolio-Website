import { Feature } from 'models/Feature'
import { Package } from 'models/Package'

export const SERVICE_PACKAGES: Package[] = [
  {
    name: 'Basic',
    deliveryTime: '7 days',
    details:
      'A small app lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    features: [1, 2, 3],
    price: '$900',
    revisions: '1'
  },
  {
    name: 'Standard',
    deliveryTime: '14 days',
    details:
      'An medium app lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    features: [1, 2, 3, 4],
    price: '$2500',
    revisions: '2'
  },
  {
    name: 'Premium',
    deliveryTime: '2-3 month(s)',
    details:
      'A complex app lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.',
    features: [1, 2, 3, 4, 5, 6],
    price: '$5000+',
    revisions: '5+'
  }
]

export const FEATURES: Feature[] = [
  {
    id: 1,
    name: 'Feature Lorem',
    description:
      'Optional feature description goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  },
  {
    id: 2,
    name: 'Feature Ipsum',
    description:
      'Optional feature description goes here. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
  },
  { id: 3, name: 'Feature Commodo', description: '' },
  { id: 4, name: 'Feature Consectetuer', description: '' },
  { id: 5, name: 'Feature Aenean', description: '' },
  { id: 6, name: 'Feature Duis', description: '' }
]
