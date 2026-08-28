export type Car = {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  price: string;
  mileage: string;
  transmission: string;
  fuel: string;
  color: string;
  image: string;
  badge?: string;
};

const imageBank = [
  'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/13861/pexels-photo-13861.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/305070/pexels-photo-305070.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/375216/pexels-photo-375216.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/842554/pexels-photo-842554.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/2899557/pexels-photo-2899557.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/1231643/pexels-photo-1231643.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/136872/pexels-photo-136872.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/100653/pexels-photo-100653.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1200',
  'https://images.pexels.com/photos/3786092/pexels-photo-3786092.jpeg?auto=compress&cs=tinysrgb&w=1200',
];

export const cars: Car[] = [
  { id: 'mac-001', year: 2020, make: 'BMW', model: '3 Series Gran Turismo', trim: 'M Sport', price: '₦34,850,000', mileage: '48,200 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Midnight Black', image: imageBank[0], badge: 'Just arrived' },
  { id: 'mac-002', year: 2021, make: 'Land Rover', model: 'Range Rover Evoque', trim: 'Not specified', price: '₦52,500,000', mileage: '41,700 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Caviar Black', image: imageBank[1], badge: 'Popular' },
  { id: 'mac-003', year: 2019, make: 'Chevrolet', model: 'Corvette', trim: 'Z06', price: '₦39,900,000', mileage: '52,100 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Obsidian', image: imageBank[2], badge: 'Price drop' },
  { id: 'mac-004', year: 2022, make: 'Mercedes-Benz', model: 'SL-Class', trim: 'Roadster', price: '₦45,750,000', mileage: '29,800 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Lunar Rock', image: imageBank[3], badge: 'Just arrived' },
  { id: 'mac-005', year: 2020, make: 'BMW', model: '3 Series', trim: 'M Sport', price: '₦28,600,000', mileage: '63,400 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Platinum White', image: imageBank[4] },
  { id: 'mac-006', year: 2018, make: 'Toyota', model: 'Highlander', trim: 'XLE', price: '₦31,200,000', mileage: '79,600 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Blizzard Pearl', image: imageBank[5] },
  { id: 'mac-007', year: 2021, make: 'Hyundai', model: 'Santa Fe', trim: 'Calligraphy', price: '₦38,400,000', mileage: '37,500 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Storm Grey', image: imageBank[6] },
  { id: 'mac-008', year: 2019, make: 'Mercedes-AMG', model: 'GT', trim: 'AMG', price: '₦36,950,000', mileage: '57,900 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Eminent White', image: imageBank[7] },
  { id: 'mac-009', year: 2022, make: 'Audi', model: 'Sedan', trim: 'Not specified', price: '₦41,800,000', mileage: '31,200 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Aurora Black', image: imageBank[8] },
  { id: 'mac-010', year: 2017, make: 'BMW', model: '3 Series', trim: 'M Sport', price: '₦25,300,000', mileage: '86,800 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Modern Steel', image: imageBank[9] },
  { id: 'mac-011', year: 2020, make: 'Alfa Romeo', model: '4C', trim: 'Coupe', price: '₦48,700,000', mileage: '46,600 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Polar White', image: imageBank[10] },
  { id: 'mac-012', year: 2018, make: 'Mercedes-Benz', model: 'S-Class', trim: 'Luxury', price: '₦20,950,000', mileage: '72,300 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Celestite', image: imageBank[11] },
  { id: 'mac-013', year: 2021, make: 'Mercedes-AMG', model: 'GT', trim: 'AMG', price: '₦68,500,000', mileage: '39,400 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Pearl White', image: imageBank[12], badge: 'Just arrived' },
  { id: 'mac-014', year: 2020, make: 'Lexus', model: 'NX 300', trim: 'F Sport', price: '₦44,900,000', mileage: '45,800 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Atomic Silver', image: imageBank[13] },
  { id: 'mac-015', year: 2019, make: 'Audi', model: 'RS6', trim: 'Avant', price: '₦46,750,000', mileage: '51,900 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Selenite Grey', image: imageBank[14], badge: 'Popular' },
  { id: 'mac-016', year: 2022, make: 'Mercedes-Benz', model: 'S-Class', trim: 'Luxury', price: '₦36,800,000', mileage: '26,700 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Amazon Grey', image: imageBank[15] },
  { id: 'mac-017', year: 2020, make: 'Mercedes-AMG', model: 'GT', trim: 'AMG', price: '₦33,950,000', mileage: '48,100 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Snow White', image: imageBank[16] },
  { id: 'mac-018', year: 2018, make: 'Toyota', model: 'Avalon', trim: 'Limited', price: '₦29,800,000', mileage: '68,500 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Ruby Flare', image: imageBank[17] },
  { id: 'mac-019', year: 2021, make: 'Audi', model: 'R8', trim: 'Coupe', price: '₦42,600,000', mileage: '35,200 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Steel Grey', image: imageBank[18] },
  { id: 'mac-020', year: 2019, make: 'Audi', model: 'TT', trim: 'Coupe', price: '₦35,400,000', mileage: '59,700 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Agate Black', image: imageBank[19] },
  { id: 'mac-021', year: 2022, make: 'Mazda', model: 'CX-5', trim: 'Signature', price: '₦40,250,000', mileage: '24,900 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Soul Red', image: imageBank[20], badge: 'Just arrived' },
  { id: 'mac-022', year: 2017, make: 'Lexus', model: 'GX 460', trim: 'Premium', price: '₦47,900,000', mileage: '91,300 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Nightfall Mica', image: imageBank[21] },
  { id: 'mac-023', year: 2020, make: 'BMW', model: '3 Series Gran Turismo', trim: 'M Sport', price: '₦32,500,000', mileage: '53,600 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Deep Black Pearl', image: imageBank[22] },
  { id: 'mac-024', year: 2019, make: 'Land Rover', model: 'Range Rover Evoque', trim: 'Not specified', price: '₦30,900,000', mileage: '65,100 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Gun Metallic', image: imageBank[23] },
  { id: 'mac-025', year: 2021, make: 'Chevrolet', model: 'Corvette', trim: 'Z06', price: '₦49,300,000', mileage: '32,800 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Coastal Grey', image: imageBank[24] },
  { id: 'mac-026', year: 2018, make: 'Mercedes-Benz', model: 'SL-Class', trim: 'Roadster', price: '₦22,750,000', mileage: '74,600 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Crystal Black', image: imageBank[25] },
  { id: 'mac-027', year: 2020, make: 'BMW', model: '3 Series', trim: 'M Sport', price: '₦50,850,000', mileage: '43,500 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Alpine White', image: imageBank[26] },
  { id: 'mac-028', year: 2019, make: 'Audi', model: 'Q5', trim: 'Premium Plus', price: '₦43,700,000', mileage: '56,400 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Navarra Blue', image: imageBank[27] },
  { id: 'mac-029', year: 2022, make: 'Audi', model: 'A7', trim: 'S line', price: '₦39,600,000', mileage: '28,700 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Graphite Grey', image: imageBank[28] },
  { id: 'mac-030', year: 2018, make: 'Genesis', model: 'G70', trim: 'Sport', price: '₦35,850,000', mileage: '61,800 km', transmission: 'Automatic', fuel: 'Petrol', color: 'Ultra White', image: imageBank[29] },
];

export const latestArrivals = cars.slice(0, 4);

export const galleryImages = [
  { src: imageBank[0], label: 'A considered selection' },
  { src: imageBank[1], label: 'Ready for Lagos roads' },
  { src: imageBank[3], label: 'The right details' },
  { src: imageBank[7], label: 'Private showroom energy' },
  { src: imageBank[5], label: 'Room to move' },
  { src: imageBank[10], label: 'Arrive with confidence' },
];
