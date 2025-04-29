
export interface Place {
  name: string;
  description: string;
  imageUrl?: string;
}

export interface CountryPlaces {
  [countryCode: string]: Place[];
}

export const topPlacesByCountry: CountryPlaces = {
  "IN": [
    { name: "Taj Mahal, Agra", description: "One of the Seven Wonders of the World, this ivory-white marble mausoleum is India's most iconic monument." },
    { name: "Jaipur, Rajasthan", description: "The Pink City known for its stunning palaces, colorful bazaars, and rich cultural heritage." },
    { name: "Goa", description: "Famous for its pristine beaches, vibrant nightlife, and Portuguese architecture." },
    { name: "Varanasi", description: "The spiritual capital of India, known for its ancient temples and the holy Ganges River." },
    { name: "Kerala Backwaters", description: "A network of lagoons, lakes, and canals parallel to the Arabian Sea coast." },
    { name: "Leh-Ladakh", description: "A high-altitude desert known for its stunning landscapes and Buddhist monasteries." },
    { name: "Amritsar", description: "Home to the Golden Temple, the spiritual center of the Sikh faith." },
    { name: "Udaipur", description: "The City of Lakes, known for its lavish royal residences and romantic setting." },
    { name: "Darjeeling", description: "Famous for its tea plantations, colonial architecture, and views of the Himalayas." },
    { name: "Hampi", description: "An ancient village with remarkable ruins of the Vijayanagara Empire." }
  ],
  "US": [
    { name: "New York City", description: "The Big Apple with iconic sites like Times Square, Central Park, and the Statue of Liberty." },
    { name: "Las Vegas", description: "Entertainment capital known for its vibrant casinos, shows, and nightlife." },
    { name: "Grand Canyon", description: "A natural wonder carved by the Colorado River in Arizona." },
    { name: "Miami Beach", description: "Famous for its Art Deco district, beaches, and Cuban culture." },
    { name: "San Francisco", description: "Known for the Golden Gate Bridge, cable cars, and Fisherman's Wharf." },
    { name: "Hawaii - Maui", description: "Paradise island with beautiful beaches, volcanoes, and the Road to Hana." },
    { name: "New Orleans", description: "Famous for its unique culture, jazz music, and French Quarter." },
    { name: "Los Angeles", description: "Home to Hollywood, Beverly Hills, and world-famous beaches." },
    { name: "Yellowstone", description: "America's first national park with geysers and wildlife." },
    { name: "Orlando", description: "Theme park capital with Disney World and Universal Studios." }
  ],
  "FR": [
    { name: "Paris", description: "The City of Light, home to the Eiffel Tower and the Louvre." },
    { name: "French Riviera", description: "Mediterranean coastline including Nice, Cannes, and Saint-Tropez." },
    { name: "Mont Saint-Michel", description: "Iconic island commune in Normandy." },
    { name: "Loire Valley", description: "Region famous for its magnificent châteaux and wines." },
    { name: "Provence", description: "Known for lavender fields, charming villages, and Roman ruins." },
    { name: "Bordeaux", description: "World-famous wine region with elegant architecture." },
    { name: "Chamonix", description: "Alpine resort town at the base of Mont Blanc." },
    { name: "Strasbourg", description: "Beautiful city with German and French influences." },
    { name: "Saint-Malo", description: "Historic walled port city in Brittany." },
    { name: "Marseille", description: "Ancient port city with rich history and culture." }
  ],
  "JP": [
    { name: "Tokyo", description: "Japan's capital, mixing ultramodern and traditional." },
    { name: "Kyoto", description: "Former capital with numerous temples and gardens." },
    { name: "Mount Fuji", description: "Japan's highest mountain and iconic symbol." },
    { name: "Osaka", description: "Known for its modern architecture, nightlife, and street food." },
    { name: "Hiroshima", description: "Historic city with a moving peace memorial." },
    { name: "Hakone", description: "Hot spring resort town with views of Mount Fuji." },
    { name: "Nara", description: "Former capital with significant temples and friendly deer." },
    { name: "Sapporo", description: "Capital of Hokkaido, famous for beer, ramen, and winter festival." },
    { name: "Okinawa", description: "Tropical islands with beautiful beaches and unique culture." },
    { name: "Kanazawa", description: "Historic city known for gardens, arts, and samurai districts." }
  ],
  "IT": [
    { name: "Rome", description: "The Eternal City with the Colosseum and Vatican." },
    { name: "Venice", description: "City of canals with unique architecture and romance." },
    { name: "Florence", description: "Birthplace of the Renaissance with amazing art and architecture." },
    { name: "Amalfi Coast", description: "Stunning coastline with picturesque towns and beaches." },
    { name: "Milan", description: "Fashion capital with the Duomo and The Last Supper." },
    { name: "Cinque Terre", description: "Five colorful coastal villages connected by trails." },
    { name: "Lake Como", description: "Luxurious lake resort area surrounded by Alps." },
    { name: "Tuscany", description: "Region known for wine, rolling hills, and medieval towns." },
    { name: "Sicily", description: "Largest Mediterranean island with rich history and culture." },
    { name: "Naples", description: "Historic city famous for pizza and nearby Pompeii." }
  ],
  "ES": [
    { name: "Barcelona", description: "Cosmopolitan city known for Gaudí's architecture, including the Sagrada Familia." },
    { name: "Madrid", description: "Spain's capital, home to the Royal Palace and world-class art museums." },
    { name: "Seville", description: "Andalusian city known for flamenco, architecture, and the Alcazar." },
    { name: "Granada", description: "Home to the magnificent Alhambra palace and fortress complex." },
    { name: "Valencia", description: "City of arts and sciences with futuristic architecture and beautiful beaches." },
    { name: "Ibiza", description: "Famous island known for nightlife, beaches, and UNESCO-protected old town." },
    { name: "Mallorca", description: "Largest Balearic island with stunning beaches and limestone mountains." },
    { name: "San Sebastian", description: "Coastal city known for beautiful beaches and world-renowned cuisine." },
    { name: "Cordoba", description: "Historic city known for the Mezquita, a mosque-cathedral from the 8th century." },
    { name: "Toledo", description: "Ancient walled city with diverse religious and cultural influences." }
  ],
  "DE": [
    { name: "Berlin", description: "Germany's vibrant capital with rich history, museums, and nightlife." },
    { name: "Munich", description: "Bavarian capital known for Oktoberfest, beer gardens, and historic architecture." },
    { name: "Neuschwanstein Castle", description: "Fairy-tale castle that inspired Disney's Sleeping Beauty Castle." },
    { name: "The Black Forest", description: "Mountainous region known for dense evergreen forests and picturesque villages." },
    { name: "Cologne", description: "Famous for its stunning gothic cathedral and Rhine River promenade." },
    { name: "Hamburg", description: "Port city with maritime heritage, waterfront districts, and cultural venues." },
    { name: "Heidelberg", description: "Romantic city with a partial-ruined castle overlooking the Neckar River." },
    { name: "Dresden", description: "Baroque city rebuilt after WWII, known as the 'Florence on the Elbe'." },
    { name: "The Romantic Road", description: "Scenic route through Bavaria with medieval walled towns and castles." },
    { name: "The Rhine Valley", description: "UNESCO region with vineyard-covered hills, castles, and river cruises." }
  ],
  "GB": [
    { name: "London", description: "England's capital with iconic landmarks including Big Ben, Buckingham Palace, and the Tower of London." },
    { name: "Edinburgh", description: "Scotland's capital with its medieval Old Town, castle, and festivals." },
    { name: "Stonehenge", description: "Prehistoric stone monument and UNESCO World Heritage site." },
    { name: "Lake District", description: "National park with England's highest mountains and stunning lakes." },
    { name: "Bath", description: "Historic city with Roman baths and Georgian architecture." },
    { name: "Oxford & Cambridge", description: "Historic university cities with stunning architecture and punting." },
    { name: "Scottish Highlands", description: "Mountainous region with dramatic landscapes, lochs, and castles." },
    { name: "Giant's Causeway", description: "Unique volcanic formation in Northern Ireland with hexagonal basalt columns." },
    { name: "Cornwall", description: "Peninsula with rugged coastline, fishing villages, and beautiful beaches." },
    { name: "York", description: "Medieval walled city with the magnificent York Minster cathedral." }
  ],
  "AU": [
    { name: "Sydney", description: "Harbor city known for the Opera House, Harbour Bridge, and Bondi Beach." },
    { name: "Great Barrier Reef", description: "World's largest coral reef system with incredible marine diversity." },
    { name: "Uluru", description: "Sacred monolithic sandstone rock formation in the Northern Territory." },
    { name: "Melbourne", description: "Cultural capital with laneways, markets, and a thriving arts scene." },
    { name: "Great Ocean Road", description: "Scenic coastal drive featuring the Twelve Apostles limestone stacks." },
    { name: "Whitsunday Islands", description: "74 island wonders with white-sand beaches and crystal clear waters." },
    { name: "Tasmania", description: "Island state with pristine wilderness, rugged mountains, and colonial heritage." },
    { name: "Kakadu National Park", description: "Biodiverse nature reserve with Aboriginal rock art sites." },
    { name: "Byron Bay", description: "Coastal town known for its beaches, surfing, and laid-back lifestyle." },
    { name: "Gold Coast", description: "City famous for surfing beaches, theme parks, and high-rise skyline." }
  ],
  "BR": [
    { name: "Rio de Janeiro", description: "Vibrant city known for Christ the Redeemer, Copacabana Beach, and Carnival." },
    { name: "Amazon Rainforest", description: "The world's largest tropical rainforest with incredible biodiversity." },
    { name: "Iguazu Falls", description: "Spectacular waterfalls on the border with Argentina." },
    { name: "Salvador", description: "Colonial city with vibrant Afro-Brazilian culture and historic Pelourinho district." },
    { name: "Fernando de Noronha", description: "Volcanic archipelago with pristine beaches and marine life." },
    { name: "Pantanal", description: "World's largest tropical wetland with abundant wildlife." },
    { name: "São Paulo", description: "Brazil's largest city with diverse cultural scene and gastronomy." },
    { name: "Brasília", description: "The planned capital city with striking modernist architecture." },
    { name: "Lençóis Maranhenses", description: "Unique landscape of white sand dunes with freshwater lagoons." },
    { name: "Ouro Preto", description: "Colonial mining town with baroque architecture and rich history." }
  ],
  "CA": [
    { name: "Banff National Park", description: "Rocky Mountain playground with turquoise lakes and stunning vistas." },
    { name: "Niagara Falls", description: "Spectacular waterfalls straddling the US-Canada border." },
    { name: "Vancouver", description: "Coastal seaport city surrounded by mountains and outdoor activities." },
    { name: "Quebec City", description: "Walled city with European charm and French heritage." },
    { name: "Toronto", description: "Diverse metropolitan city with the CN Tower and vibrant neighborhoods." },
    { name: "Montreal", description: "Island city with French influence, historic architecture, and festivals." },
    { name: "Whistler", description: "Premier mountain resort and venue of the 2010 Winter Olympics." },
    { name: "Churchill, Manitoba", description: "Known as the 'Polar Bear Capital of the World'." },
    { name: "The Northern Lights", description: "View the aurora borealis in Yukon, Northwest Territories, or Nunavut." },
    { name: "Cape Breton Island", description: "Atlantic island known for the scenic Cabot Trail coastal drive." }
  ],
  "CN": [
    { name: "The Great Wall", description: "Ancient defensive structure stretching thousands of kilometers." },
    { name: "Beijing", description: "Capital city with the Forbidden City, Temple of Heaven, and Summer Palace." },
    { name: "Shanghai", description: "Modern metropolis with colonial architecture and futuristic skyline." },
    { name: "Terracotta Army, Xi'an", description: "Ancient collection of sculptures depicting Emperor Qin's armies." },
    { name: "Zhangjiajie", description: "National park with towering quartzite sandstone pillars, inspiration for 'Avatar'." },
    { name: "Li River, Guilin", description: "Scenic river with dramatic karst mountains and peaceful countryside." },
    { name: "Chengdu", description: "Home to giant panda research center and Sichuan cuisine." },
    { name: "Hong Kong", description: "Vibrant city with stunning skyline, shopping, and blend of East and West." },
    { name: "Tibet", description: "Autonomous region with Potala Palace, monasteries, and Himalayan landscapes." },
    { name: "Yellow Mountains (Huangshan)", description: "Scenic mountain range known for granite peaks and pine trees." }
  ],
  "EG": [
    { name: "Pyramids of Giza", description: "Ancient wonder featuring the Great Pyramid and the Sphinx." },
    { name: "Luxor's Temples", description: "Open-air museum with Karnak and Luxor Temple complexes." },
    { name: "Abu Simbel", description: "Ancient temple complex with massive rock carvings relocated during the creation of Lake Nasser." },
    { name: "Valley of the Kings", description: "Burial site of pharaohs including Tutankhamun." },
    { name: "Cairo", description: "Capital city with the Egyptian Museum, Khan el-Khalili bazaar, and Islamic Cairo." },
    { name: "Red Sea Coast", description: "Premier diving destination with coral reefs and marine life." },
    { name: "Aswan", description: "Nubian city with ancient quarries and Philae Temple." },
    { name: "Alexandria", description: "Mediterranean city founded by Alexander the Great with a rich history." },
    { name: "White Desert", description: "Unique chalk rock formations in the western desert." },
    { name: "Siwa Oasis", description: "Remote desert oasis with springs and ancient Oracle Temple." }
  ],
  "ZA": [
    { name: "Kruger National Park", description: "South Africa's flagship wildlife sanctuary with the Big Five." },
    { name: "Cape Town", description: "Coastal city with Table Mountain, Cape of Good Hope, and Robben Island." },
    { name: "Garden Route", description: "Scenic stretch of coastline with forests, lagoons, and beaches." },
    { name: "Johannesburg", description: "Largest city with Apartheid Museum and vibrant culture." },
    { name: "Durban", description: "Coastal city with Golden Mile beaches and Indian influence." },
    { name: "Blyde River Canyon", description: "One of the largest canyons in the world with spectacular viewpoints." },
    { name: "Stellenbosch", description: "Historic town in the Cape Winelands region." },
    { name: "Drakensberg Mountains", description: "Dramatic mountain range with hiking trails and San rock art." },
    { name: "Addo Elephant National Park", description: "Wildlife conservation area home to over 600 elephants." },
    { name: "Soweto", description: "Township with important role in the anti-apartheid struggle." }
  ],
  "TH": [
    { name: "Bangkok", description: "Vibrant capital with Grand Palace, temples, and floating markets." },
    { name: "Phuket", description: "Thailand's largest island with beautiful beaches and nightlife." },
    { name: "Chiang Mai", description: "Northern city with temples, night markets, and elephant sanctuaries." },
    { name: "Phi Phi Islands", description: "Stunning archipelago with limestone cliffs and clear waters." },
    { name: "Ayutthaya", description: "Ancient capital with impressive temple ruins." },
    { name: "Krabi", description: "Province with beautiful beaches, limestone karsts, and outdoor activities." },
    { name: "Sukhothai", description: "Historic park with ruins from Thailand's first capital." },
    { name: "Koh Samui", description: "Gulf island with palm-fringed beaches and luxury resorts." },
    { name: "Khao Sok National Park", description: "Rainforest preserve with limestone mountains and Cheow Lan Lake." },
    { name: "Pai", description: "Mountain town with laid-back atmosphere, hot springs, and waterfalls." }
  ],
  "MX": [
    { name: "Cancún & Riviera Maya", description: "Caribbean coastline with beaches, resorts, and Mayan ruins." },
    { name: "Mexico City", description: "Capital with historic center, museums, and nearby Teotihuacan pyramids." },
    { name: "Chichen Itza", description: "Major Maya archaeological site with the iconic El Castillo pyramid." },
    { name: "Puerto Vallarta", description: "Pacific resort town with beaches, watersports, and colonial charm." },
    { name: "Oaxaca", description: "Cultural center known for cuisine, arts, and nearby Monte Albán ruins." },
    { name: "Guanajuato", description: "Colonial-era city with colorful buildings and underground tunnels." },
    { name: "Copper Canyon", description: "Group of six canyons larger and deeper than the Grand Canyon." },
    { name: "Tulum", description: "Coastal Mayan ruins site with spectacular Caribbean views." },
    { name: "San Miguel de Allende", description: "Colonial city with vibrant arts scene and beautiful architecture." },
    { name: "Cabo San Lucas", description: "Resort city at the southern tip of Baja California Peninsula." }
  ],
  "AE": [
    { name: "Dubai", description: "Futuristic city with Burj Khalifa, Palm Jumeirah, and luxury shopping." },
    { name: "Abu Dhabi", description: "Capital with Sheikh Zayed Grand Mosque and Ferrari World." },
    { name: "Sharjah", description: "Cultural capital with museums, heritage areas, and art scene." },
    { name: "Al Ain", description: "Garden city with oasis, zoo, and UNESCO World Heritage sites." },
    { name: "Fujairah", description: "Emirate known for beaches, mountains, and historic fort." },
    { name: "Ras Al Khaimah", description: "Northernmost emirate with beaches, desert, and Jebel Jais mountain." },
    { name: "Dubai Desert Conservation Reserve", description: "Protected area for desert wildlife and activities." },
    { name: "Liwa Oasis", description: "Desert region with massive sand dunes in the Empty Quarter." },
    { name: "Hatta", description: "Mountain enclave with heritage village and outdoor activities." },
    { name: "Sir Bani Yas Island", description: "Wildlife conservation island with luxury resorts." }
  ],
  "NZ": [
    { name: "Queenstown", description: "Adventure capital surrounded by mountains and Lake Wakatipu." },
    { name: "Milford Sound", description: "Fjord in Fiordland National Park with dramatic landscapes." },
    { name: "Rotorua", description: "Geothermal wonderland with Maori culture experiences." },
    { name: "Bay of Islands", description: "Subtropical micro-region with beaches, Maori cultural sites, and marine life." },
    { name: "Auckland", description: "New Zealand's largest city between two harbors, with Sky Tower and islands." },
    { name: "Tongariro National Park", description: "Dual World Heritage area with active volcanoes and hiking." },
    { name: "Fox and Franz Josef Glaciers", description: "Accessible glaciers flowing through temperate rainforest." },
    { name: "Abel Tasman National Park", description: "Coastal paradise with golden beaches and clear turquoise waters." },
    { name: "Wellington", description: "Capital city with vibrant culture, museums, and dining scene." },
    { name: "Hobbiton", description: "Movie set from The Lord of the Rings and The Hobbit films." }
  ]
};

// Default places to show when a country doesn't have specific data
export const defaultPlaces: Place[] = [
  { name: "Capital City", description: "The country's capital, typically featuring important landmarks, government buildings, and cultural sites." },
  { name: "Largest City", description: "The country's largest urban center, often a hub of culture, commerce, and entertainment with diverse attractions." },
  { name: "Cultural Heritage Site", description: "A UNESCO World Heritage site or historically significant location representing the country's cultural identity." },
  { name: "Natural Wonder", description: "The country's most impressive natural landmark, whether mountains, waterfalls, forests, or unique geographic features." },
  { name: "Coastal Destination", description: "A popular coastal area known for beaches, water activities, and scenic ocean or sea views." },
  { name: "Historic District", description: "An area preserving the country's historical architecture, monuments, and heritage with significant cultural value." },
  { name: "Religious Site", description: "An important temple, mosque, church, or other religious structure that has cultural or historical significance." },
  { name: "Local Market", description: "A vibrant marketplace where visitors can experience local culture, cuisine, crafts, and authentic interactions." },
  { name: "Rural Retreat", description: "A countryside destination showcasing the nation's traditional lifestyle, landscapes, and natural beauty." },
  { name: "Modern Attraction", description: "A contemporary landmark, museum, or entertainment center representing the country's modern achievements." }
];

export function getTopPlacesForCountry(countryCode: string): Place[] {
  return topPlacesByCountry[countryCode] || defaultPlaces;
}
