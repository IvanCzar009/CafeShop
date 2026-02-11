// Mock data for Knead & Brew Bakery Cafe

export const cafeInfo = {
  name: "Knead & Brew Bakery Cafe",
  tagline: "Where Great Coffee Meets Cozy Vibes",
  rating: 4.7,
  phone: "0977 023 3628",
  facebook: "https://www.facebook.com/KneadAndBrewBakeryCafe",
  address: "Hilltop Road Barangay, Batangas City, 4200 Batangas",
  hours: "8:00 AM – 12:00 AM",
  priceRange: "₱1–₱200 per person"
};

export const menuCategories = [
  {
    id: 1,
    name: "Coffee",
    description: "Expertly crafted coffee drinks made from premium beans",
    items: [
      { name: "Espresso", price: "₱80", description: "Rich and bold single shot" },
      { name: "Cappuccino", price: "₱120", description: "Classic espresso with steamed milk" },
      { name: "Caramel Macchiato", price: "₱150", description: "Sweet and creamy favorite" },
      { name: "Iced Americano", price: "₱100", description: "Refreshing cold brew" },
      { name: "Vanilla Latte", price: "₱140", description: "Smooth espresso with vanilla" }
    ],
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93"
  },
  {
    id: 2,
    name: "Desserts",
    description: "Freshly baked pastries and decadent desserts",
    items: [
      { name: "Chocolate Cake", price: "₱150", description: "Rich and moist chocolate layers" },
      { name: "Blueberry Muffin", price: "₱80", description: "Freshly baked with real blueberries" },
      { name: "Croissant", price: "₱90", description: "Buttery and flaky French pastry" },
      { name: "Cheesecake", price: "₱180", description: "Creamy New York style" },
      { name: "Cinnamon Roll", price: "₱110", description: "Warm and gooey with cream cheese frosting" }
    ],
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg"
  },
  {
    id: 3,
    name: "Tea Selection",
    description: "Premium tea blends for every mood",
    items: [
      { name: "Earl Grey", price: "₱90", description: "Classic black tea with bergamot" },
      { name: "Chamomile", price: "₱85", description: "Relaxing herbal blend" },
      { name: "Green Tea", price: "₱80", description: "Antioxidant-rich Japanese green tea" },
      { name: "Jasmine Tea", price: "₱95", description: "Fragrant and soothing" }
    ],
    image: "https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
  },
  {
    id: 4,
    name: "Quick Bites",
    description: "Perfect light meals and snacks",
    items: [
      { name: "Club Sandwich", price: "₱180", description: "Triple-decker classic" },
      { name: "Pasta Carbonara", price: "₱200", description: "Creamy bacon pasta" },
      { name: "Caesar Salad", price: "₱150", description: "Fresh and crispy" },
      { name: "Panini", price: "₱160", description: "Grilled sandwich with melted cheese" }
    ],
    image: "https://images.unsplash.com/photo-1702742322469-36315505728f"
  }
];

export const services = [
  { name: "Dine-in", icon: "UtensilsCrossed", description: "Enjoy our cozy atmosphere" },
  { name: "Takeout", icon: "ShoppingBag", description: "Grab and go convenience" },
  { name: "Delivery", icon: "Bike", description: "We deliver to your door" },
  { name: "Reservations", icon: "Calendar", description: "Book your table ahead" }
];

export const amenities = [
  { name: "Great Coffee", icon: "Coffee" },
  { name: "Great Desserts", icon: "Cake" },
  { name: "Laptop Friendly", icon: "Laptop" },
  { name: "Kid Friendly", icon: "Baby" },
  { name: "Group Friendly", icon: "Users" },
  { name: "Free Parking", icon: "ParkingCircle" },
  { name: "Restroom", icon: "DoorOpen" },
  { name: "Free WiFi", icon: "Wifi" }
];

export const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    rating: 5,
    comment: "Perfect spot for studying! Great coffee and peaceful ambiance. Love the free WiFi!",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "John Reyes",
    rating: 5,
    comment: "Best desserts in Batangas City! The chocolate cake is to die for. Highly recommended!",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Ana Cruz",
    rating: 4,
    comment: "Cozy place with excellent service. Perfect for brunch with friends!",
    date: "3 weeks ago"
  }
];

export const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1481833761820-0509d3217039",
    alt: "Cozy cafe interior"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
    alt: "Coffee and laptop work"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1521917441209-e886f0404a7b",
    alt: "Cafe seating area"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1511081692775-05d0f180a065",
    alt: "Modern cafe space"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1702742322469-36315505728f",
    alt: "Fresh pastries"
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg",
    alt: "Delicious desserts"
  }
];
