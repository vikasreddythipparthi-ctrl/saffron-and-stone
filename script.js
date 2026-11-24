(function () {
      "use strict";

      /* ----------------------------------------------------------------------
         1. CONFIGURABLE SHOWROOM SETTINGS
         ---------------------------------------------------------------------- */
      const SHOWROOM_CONFIG = {
        name: "ELITE MOTORS",
        city: "Jubilee Hills, Hyderabad, Telangana, India",
        whatsappNumber: "919000000000",
        fallbackImage: "https://placehold.co/900x560/14161c/d4af37?text=ELITE+MOTORS+HYDERABAD"
      };

      /* ----------------------------------------------------------------------
         2. INTERNATIONAL BRANDS PORTFOLIO (31 MARQUES ACROSS 7 COUNTRIES)
         ---------------------------------------------------------------------- */
      const BRANDS_DATA = [
        // Germany
        { name: "Mercedes-Benz", country: "Germany", mono: "MB" },
        { name: "BMW", country: "Germany", mono: "BMW" },
        { name: "Audi", country: "Germany", mono: "AU" },
        { name: "Porsche", country: "Germany", mono: "PO" },
        { name: "Volkswagen", country: "Germany", mono: "VW" },
        { name: "Maybach", country: "Germany", mono: "MM" },
        // Italy
        { name: "Ferrari", country: "Italy", mono: "FE" },
        { name: "Lamborghini", country: "Italy", mono: "LA" },
        { name: "Maserati", country: "Italy", mono: "MA" },
        { name: "Alfa Romeo", country: "Italy", mono: "AR" },
        // United Kingdom
        { name: "Rolls-Royce", country: "United Kingdom", mono: "RR" },
        { name: "Bentley", country: "United Kingdom", mono: "BE" },
        { name: "Aston Martin", country: "United Kingdom", mono: "AM" },
        { name: "McLaren", country: "United Kingdom", mono: "MC" },
        { name: "Land Rover", country: "United Kingdom", mono: "LR" },
        { name: "Jaguar", country: "United Kingdom", mono: "JG" },
        // Japan
        { name: "Lexus", country: "Japan", mono: "LX" },
        { name: "Toyota", country: "Japan", mono: "TY" },
        { name: "Nissan", country: "Japan", mono: "NI" },
        { name: "Lexus F Performance", country: "Japan", mono: "LF" },
        // USA
        { name: "Tesla", country: "USA", mono: "TS" },
        { name: "Ford Mustang", country: "USA", mono: "FM" },
        { name: "Chevrolet Corvette", country: "USA", mono: "CC" },
        { name: "Cadillac", country: "USA", mono: "CD" },
        { name: "Jeep", country: "USA", mono: "JP" },
        // Sweden
        { name: "Volvo", country: "Sweden", mono: "VO" },
        { name: "Polestar", country: "Sweden", mono: "PS" },
        { name: "Koenigsegg", country: "Sweden", mono: "KG" },
        // France
        { name: "Bugatti", country: "France", mono: "BG" },
        { name: "Alpine", country: "France", mono: "AL" },
        { name: "DS Automobiles", country: "France", mono: "DS" }
      ];

      /* ----------------------------------------------------------------------
         3. CURATED AUTOMOBILE INVENTORY (REALISTIC SPECS & ILLUSTRATIVE INR)
         ---------------------------------------------------------------------- */
      const CARS_INVENTORY = [
        {
          id: "lambo-revuelto",
          brand: "Lamborghini",
          model: "Revuelto V12 HPEV",
          country: "Italy",
          year: 2025,
          bodyType: "Supercar & Hypercar",
          collection: "The Supercar Collection",
          condition: "Brand New",
          fuel: "Hybrid",
          engine: "6.5L Naturally Aspirated V12 + 3 Electric Motors",
          horsepower: 1001,
          torque: "1,062 Nm (Combined)",
          transmission: "8-Speed Dual-Clutch (DCT)",
          seating: 2,
          zeroToHundred: "2.5 sec",
          topSpeed: "350+ km/h",
          dimensions: "4,947 × 2,033 × 1,160 mm",
          economyOrRange: "10 km EV Mode / ~8.5 km/l Combined",
          priceCr: 8.89,
          priceDisplay: "₹8.89 Cr*",
          availability: "By Bespoke Allocation",
          safety: "Carbon Monofuselage, LDW, Adaptive Cruise, 6 Airbags, Carbon-Ceramic Brakes",
          tech: "8.4-inch Vertical Touchscreen, 12.3-inch Digital Cockpit, Passenger Display, Telemetry",
          options: "Ad Personam Matte Nero Nemesis, Shiny Carbon Package, Corsa Tex Interior",
          warranty: "3 Years Unlimited Km Manufacturer Warranty (Illustrative)",
          description: "Lamborghini's first High Performance Electrified Vehicle pairs an iconic 9,500-rpm naturally aspirated V12 with three axial-flux electric motors for instantaneous torque vectoring.",
          images: [
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "ferrari-296-gtb",
          brand: "Ferrari",
          model: "296 GTB Assetto Fiorano",
          country: "Italy",
          year: 2025,
          bodyType: "Supercar & Hypercar",
          collection: "The Supercar Collection",
          condition: "Brand New",
          fuel: "Hybrid",
          engine: "3.0L 120° Twin-Turbo V6 + MGU-K Electric Motor",
          horsepower: 819,
          torque: "740 Nm",
          transmission: "8-Speed F1 Dual-Clutch",
          seating: 2,
          zeroToHundred: "2.9 sec",
          topSpeed: "330 km/h",
          dimensions: "4,565 × 1,958 × 1,187 mm",
          economyOrRange: "25 km eDrive Range / ~11.2 km/l",
          priceCr: 5.40,
          priceDisplay: "₹5.40 Cr*",
          availability: "Showroom Preview Unit",
          safety: "6-Way Chassis Dynamic Sensor (6w-CDS), ABS Evo, Side Slip Control 8.0",
          tech: "Full-Digital Curved Driver Interface, Apple CarPlay, eManettino Drive Selector",
          options: "Rosso Corsa Metallic, Carbon Racing Seats, Scuderia Shields, Titanium Exhaust",
          warranty: "3 Years Warranty + 7 Years Genuine Maintenance Program",
          description: "Redefining mid-rear-engined berlinetta agility, the Ferrari 296 GTB delivers razor-sharp chassis response and an intoxicating 'piccolo V12' soundtrack.",
          images: [
            "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "ferrari-sf90",
          brand: "Ferrari",
          model: "SF90 Stradale",
          country: "Italy",
          year: 2024,
          bodyType: "Supercar & Hypercar",
          collection: "The Supercar Collection",
          condition: "Certified Pre-Owned",
          fuel: "Hybrid",
          engine: "4.0L Twin-Turbo V8 + 3 Electric Motors",
          horsepower: 986,
          torque: "800 Nm",
          transmission: "8-Speed F1 DCT (AWD)",
          seating: 2,
          zeroToHundred: "2.5 sec",
          topSpeed: "340 km/h",
          dimensions: "4,710 × 1,972 × 1,186 mm",
          economyOrRange: "25 km EV Range / ~10.5 km/l",
          priceCr: 7.50,
          priceDisplay: "₹7.50 Cr*",
          availability: "Curated Pre-Owned Showcase",
          safety: "eSSC Electronic Side Slip Control, RAC-e Torque Vectoring, Carbon-Ceramic Brakes",
          tech: "16-inch Curved HD Instrument Cluster, Head-Up Display, Capacitive Steering Controls",
          options: "Giallo Modena, Forged Diamond Wheels, Carbon Fiber Driver Zone",
          warranty: "Ferrari Approved Pre-Owned Coverage (Illustrative)",
          description: "Maranello's series-production plug-in hybrid flagship channels Formula 1 energy recovery technology into blistering all-wheel-drive acceleration.",
          images: [
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "mclaren-750s",
          brand: "McLaren",
          model: "750S Coupe",
          country: "United Kingdom",
          year: 2025,
          bodyType: "Supercar & Hypercar",
          collection: "The Supercar Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "4.0L Twin-Turbocharged M840T V8",
          horsepower: 740,
          torque: "800 Nm",
          transmission: "7-Speed Seamless Shift Gearbox (SSG)",
          seating: 2,
          zeroToHundred: "2.8 sec",
          topSpeed: "332 km/h",
          dimensions: "4,569 × 1,930 × 1,196 mm",
          economyOrRange: "~8.2 km/l (Combined)",
          priceCr: 5.91,
          priceDisplay: "₹5.91 Cr*",
          availability: "Enquire for Allocation",
          safety: "Monocage II Carbon Tub, Proactive Chassis Control III, Variable Drift Control",
          tech: "McLaren Control Launcher (MCL), Bowers & Wilkins 12-Speaker Audio, 360 Park Assist",
          options: "Papaya Spark MSO Paint, Carbon Fibre Racing Seats, Stealth Exhaust Finisher",
          warranty: "3 Years Unlimited Mileage Warranty",
          description: "Featherweight carbon-fiber engineering meets relentless twin-turbo V8 thrust in the lightest and most powerful series-production McLaren to date.",
          images: [
            "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "bugatti-chiron",
          brand: "Bugatti",
          model: "Chiron Pur Sport (Collector Spec)",
          country: "France",
          year: 2023,
          bodyType: "Supercar & Hypercar",
          collection: "The Supercar Collection",
          condition: "Certified Pre-Owned",
          fuel: "Petrol",
          engine: "8.0L Quad-Turbocharged W16",
          horsepower: 1479,
          torque: "1,600 Nm",
          transmission: "7-Speed Ricardo Dual-Clutch (AWD)",
          seating: 2,
          zeroToHundred: "2.3 sec",
          topSpeed: "350 km/h (Track Gearing)",
          dimensions: "4,544 × 2,038 × 1,212 mm",
          economyOrRange: "~4.5 km/l",
          priceCr: 28.50,
          priceDisplay: "₹28.50 Cr*",
          availability: "Global Collector Sourcing",
          safety: "Carbon Fiber Monocoque, Titanium Brake Calipers, Telemetry Diagnostics",
          tech: "CNC-Machined Aluminum Consoles, High-Resolution Speedometer, Bespoke Sound",
          options: "Exposed Blue Royal Carbon, Alcantara Lightweight Cabin, Magnesium Aero Wheels",
          warranty: "Bespoke Collector Service Plan (Illustrative)",
          description: "The pinnacle of Molsheim hypercar artistry. Powered by the legendary 16-cylinder quad-turbo engine, available through Elite Motors' global collector sourcing desk.",
          images: [
            "https://images.unsplash.com/photo-1566023888476-6f17e362fbb7?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "porsche-911-gt3rs",
          brand: "Porsche",
          model: "911 GT3 RS (992)",
          country: "Germany",
          year: 2025,
          bodyType: "Supercar & Hypercar",
          collection: "The Performance Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "4.0L High-Revving Naturally Aspirated Flat-6",
          horsepower: 518,
          torque: "465 Nm",
          transmission: "7-Speed Porsche Doppelkupplung (PDK)",
          seating: 2,
          zeroToHundred: "3.2 sec",
          topSpeed: "296 km/h",
          dimensions: "4,572 × 1,900 × 1,322 mm",
          economyOrRange: "~7.5 km/l",
          priceCr: 3.51,
          priceDisplay: "₹3.51 Cr*",
          availability: "Showroom Preview Unit",
          safety: "Weissach Roll Cage Option, PCCB Ceramic Brakes, PASM Track Suspension",
          tech: "4 Rotary Steering Mode Dials, Active DRS Rear Wing, Porsche Track Precision App",
          options: "Weissach Package, Magnesium Forged Wheels, GT Silver Metallic, Race-Tex Cabin",
          warranty: "2 Years Unlimited Mileage + Extended Porsche Approved Option",
          description: "Motorsport aerodynamics legalized for the road. Featuring an active Drag Reduction System wing and a 9,000-rpm naturally aspirated flat-six.",
          images: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "aston-db12",
          brand: "Aston Martin",
          model: "DB12 Super Tourer",
          country: "United Kingdom",
          year: 2025,
          bodyType: "Supercar & Hypercar",
          collection: "The Performance Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "4.0L Hand-Built Twin-Turbo V8",
          horsepower: 671,
          torque: "800 Nm",
          transmission: "8-Speed ZF Automatic + E-Diff",
          seating: 4,
          zeroToHundred: "3.6 sec",
          topSpeed: "325 km/h",
          dimensions: "4,725 × 1,980 × 1,295 mm",
          economyOrRange: "~8.9 km/l",
          priceCr: 4.59,
          priceDisplay: "₹4.59 Cr*",
          availability: "Available for Private Viewing",
          safety: "Electronic Rear Differential, 360° 3D Surround Camera, Adaptive Damping (Bilstein DTX)",
          tech: "Bespoke 10.25-inch Pure Black Touchscreen, Bowers & Wilkins 1,170W 15-Speaker Audio",
          options: "Q by Aston Martin Iridescent Emerald, Bridge of Weir Semi-Aniline Leather",
          warranty: "3 Years Unlimited Mileage Warranty",
          description: "The world's first Super Tourer blends unmistakable British sculptural elegance with 671 horsepower and an all-new bespoke infotainment architecture.",
          images: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "lambo-huracan",
          brand: "Lamborghini",
          model: "Huracán Tecnica",
          country: "Italy",
          year: 2024,
          bodyType: "Supercar & Hypercar",
          collection: "The Performance Collection",
          condition: "Certified Pre-Owned",
          fuel: "Petrol",
          engine: "5.2L Naturally Aspirated V10",
          horsepower: 631,
          torque: "565 Nm",
          transmission: "7-Speed LDF Dual-Clutch (RWD)",
          seating: 2,
          zeroToHundred: "3.2 sec",
          topSpeed: "325 km/h",
          dimensions: "4,567 × 1,933 × 1,165 mm",
          economyOrRange: "~7.2 km/l",
          priceCr: 4.04,
          priceDisplay: "₹4.04 Cr*",
          availability: "Curated Pre-Owned Showcase",
          safety: "LDVI Vehicle Dynamics Integrated Control, Rear-Wheel Steering, Carbon-Ceramic Brakes",
          tech: "8.4-inch HMI Capacitive Touchscreen, Telemetry System, Apple CarPlay",
          options: "Verde Selvans Pearl, Damiso 20-inch Diamond Cut Wheels, Alcantara Trim",
          warranty: "Selezione Lamborghini Certified Coverage",
          description: "Celebrated for its pure rear-wheel-drive balance and naturally aspirated 5.2-liter V10 crescendo, engineered equally for mountain passes and circuit laps.",
          images: [
            "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "rolls-phantom",
          brand: "Rolls-Royce",
          model: "Phantom Series II Extended",
          country: "United Kingdom",
          year: 2025,
          bodyType: "Luxury Sedan",
          collection: "The Ultimate Luxury Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "6.75L Twin-Turbocharged V12",
          horsepower: 563,
          torque: "900 Nm",
          transmission: "8-Speed Satellite Aided ZF Automatic",
          seating: 4,
          zeroToHundred: "5.4 sec",
          topSpeed: "250 km/h (Governed)",
          dimensions: "5,982 × 2,018 × 1,656 mm",
          economyOrRange: "~6.7 km/l",
          priceCr: 10.48,
          priceDisplay: "₹10.48 Cr*",
          availability: "By Bespoke Commission",
          safety: "Architecture of Luxury Spaceframe, Night Vision, 4-Camera Panoramic View, Laser Headlights",
          tech: "The Gallery Bespoke Fascia, Starlight Headliner, Bespoke 18-Speaker Audio, Rear Theatre",
          options: "Two-Tone Diamond Black & Jubilee Silver, Serenity Seating, Champagne Cooler",
          warranty: "4 Years Unlimited Mileage Service & Warranty Package",
          description: "The undisputed apex of global automotive luxury. Whisper-quiet Magic Carpet Ride suspension paired with an infinitely customizable bespoke sanctuary.",
          images: [
            "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "rolls-ghost",
          brand: "Rolls-Royce",
          model: "Ghost Extended",
          country: "United Kingdom",
          year: 2025,
          bodyType: "Luxury Sedan",
          collection: "The Ultimate Luxury Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "6.75L Twin-Turbocharged V12",
          horsepower: 563,
          torque: "850 Nm",
          transmission: "8-Speed Satellite Aided Automatic (AWD)",
          seating: 5,
          zeroToHundred: "4.8 sec",
          topSpeed: "250 km/h",
          dimensions: "5,716 × 2,148 × 1,571 mm",
          economyOrRange: "~7.1 km/l",
          priceCr: 7.95,
          priceDisplay: "₹7.95 Cr*",
          availability: "Showroom Preview Unit",
          safety: "Planar Suspension System, Flagbearer Stereo Camera Road Scanning, Alertness Assistant",
          tech: "Illuminated Fascia, Micro-Environment Purification System, Effortless Power Doors",
          options: "English White, Mandarin Leather Accents, Shooting Star Headliner",
          warranty: "4 Years Unlimited Mileage Service & Warranty",
          description: "Post-opulent minimalism engineered for those who love to drive as much as being driven, featuring Goodwood's Planar damper technology.",
          images: [
            "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "maybach-s680",
          brand: "Maybach",
          model: "Mercedes-Maybach S 680 4MATIC",
          country: "Germany",
          year: 2025,
          bodyType: "Luxury Sedan",
          collection: "The Ultimate Luxury Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "6.0L Handcrafted Biturbo V12",
          horsepower: 604,
          torque: "900 Nm",
          transmission: "9G-TRONIC Automatic (4MATIC AWD)",
          seating: 4,
          zeroToHundred: "4.5 sec",
          topSpeed: "250 km/h",
          dimensions: "5,469 × 1,921 × 1,510 mm",
          economyOrRange: "~7.5 km/l",
          priceCr: 3.44,
          priceDisplay: "₹3.44 Cr*",
          availability: "Available for Private Viewing",
          safety: "Rear-Seat Frontal Airbags, Active Road Noise Compensation, PRE-SAFE Impulse Side",
          tech: "MBUX High-End Rear Seat Entertainment, Burmester High-End 4D Surround Sound, E-ACTIVE Body Control",
          options: "Two-Tone Obsidian Black / Rubellite Red, Executive Rear Lounge Seats, Silver Flutes",
          warranty: "3 Years Unlimited Km Warranty",
          description: "Sindelfingen's flagship V12 limousine combines active road-noise cancellation with first-class reclining executive suites.",
          images: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "mercedes-s450",
          brand: "Mercedes-Benz",
          model: "S 450 4MATIC LWB",
          country: "Germany",
          year: 2025,
          bodyType: "Luxury Sedan",
          collection: "The Executive Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "3.0L Inline-6 Turbo + 48V EQ Boost Mild Hybrid",
          horsepower: 375,
          torque: "500 Nm",
          transmission: "9G-TRONIC Automatic (AWD)",
          seating: 5,
          zeroToHundred: "5.0 sec",
          topSpeed: "250 km/h",
          dimensions: "5,289 × 1,921 × 1,503 mm",
          economyOrRange: "~11.5 km/l",
          priceCr: 1.86,
          priceDisplay: "₹1.86 Cr*",
          availability: "Available for Private Viewing",
          safety: "DIGITAL LIGHT Headlamps, 10 Airbags, Rear-Axle Steering (10°), Active Blind Spot Assist",
          tech: "12.8-inch OLED Central Display, 3D Driver Display, Chauffeur Package, Ambient Lighting",
          options: "Nautic Blue Metallic, Macchiato Beige Nappa Leather, Panoramic Sliding Sunroof",
          warranty: "3 Years Unlimited Km Warranty",
          description: "The benchmark of executive mobility, seamlessly balancing effortless six-cylinder refinement with cutting-edge autonomous assistance.",
          images: [
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "bmw-740i",
          brand: "BMW",
          model: "740i M Sport",
          country: "Germany",
          year: 2025,
          bodyType: "Luxury Sedan",
          collection: "The Executive Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "3.0L TwinPower Turbo Inline-6 + 48V Mild Hybrid",
          horsepower: 375,
          torque: "540 Nm",
          transmission: "8-Speed Steptronic Sport Automatic",
          seating: 5,
          zeroToHundred: "5.4 sec",
          topSpeed: "250 km/h",
          dimensions: "5,391 × 1,950 × 1,544 mm",
          economyOrRange: "~12.6 km/l",
          priceCr: 1.84,
          priceDisplay: "₹1.84 Cr*",
          availability: "Showroom Preview Unit",
          safety: "Executive Drive Pro, Integral Active Steering, Parking Assistant Professional",
          tech: "31.3-inch 8K BMW Theatre Screen, Interaction Bar, Bowers & Wilkins Diamond Surround",
          options: "Oxide Grey Metallic, Cashmere Wool / Merino Leather Lounge, Sky Lounge Roof",
          warranty: "2 Years Unlimited Km + Repair Inclusive Options",
          description: "A bold new chapter in luxury flagship design featuring an 8K cinema screen in the rear cabin and crystal-accented Interaction Bar.",
          images: [
            "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "audi-a8l",
          brand: "Audi",
          model: "A8 L Technology",
          country: "Germany",
          year: 2024,
          bodyType: "Luxury Sedan",
          collection: "The Executive Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "3.0L TFSI V6 + 48V Mild Hybrid",
          horsepower: 335,
          torque: "500 Nm",
          transmission: "8-Speed Tiptronic (quattro AWD)",
          seating: 4,
          zeroToHundred: "5.7 sec",
          topSpeed: "250 km/h",
          dimensions: "5,320 × 1,945 × 1,488 mm",
          economyOrRange: "~11.8 km/l",
          priceCr: 1.63,
          priceDisplay: "₹1.63 Cr*",
          availability: "Enquire for Allocation",
          safety: "Predictive Active Suspension, Digital Matrix LED Headlights, 8 Airbags",
          tech: "Dual MMI Touch Response Displays, Rear Matrix LED Reading Lights, Bang & Olufsen 3D",
          options: "Terra Grey Metallic, Valcona Leather Relaxation Seat with Foot Massager",
          warranty: "2 Years / Unlimited Km + 5-Year Service Plan Option",
          description: "Understated Ingolstadt sophistication engineered around quattro all-wheel stability and rear-cabin relaxation ergonomics.",
          images: [
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "bentley-flying-spur",
          brand: "Bentley",
          model: "Flying Spur Mulliner V8",
          country: "United Kingdom",
          year: 2025,
          bodyType: "Luxury Sedan",
          collection: "The Ultimate Luxury Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "4.0L Twin-Turbocharged V8",
          horsepower: 542,
          torque: "770 Nm",
          transmission: "8-Speed Dual-Clutch (Active AWD)",
          seating: 4,
          zeroToHundred: "4.1 sec",
          topSpeed: "318 km/h",
          dimensions: "5,316 × 1,978 × 1,483 mm",
          economyOrRange: "~8.3 km/l",
          priceCr: 5.25,
          priceDisplay: "₹5.25 Cr*",
          availability: "By Bespoke Allocation",
          safety: "Bentley Dynamic Ride 48V Anti-Roll, Electronic All-Wheel Steering, Night Vision",
          tech: "Bentley Rotating Display, Naim for Bentley 2,200W Audio, Touch Screen Remote",
          options: "Mulliner Double-Diamond Quilting, Grand Black Veneer, Illuminated Flying B Mascot",
          warranty: "3 Years Unlimited Mileage Warranty",
          description: "Crewe's four-door grand tourer fuses athletic V8 composure with hand-stitched Mulliner coachbuilding craftsmanship.",
          images: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "lambo-urus-se",
          brand: "Lamborghini",
          model: "Urus SE Plug-In Hybrid",
          country: "Italy",
          year: 2025,
          bodyType: "Luxury SUV",
          collection: "The Royal SUV Collection",
          condition: "Brand New",
          fuel: "Hybrid",
          engine: "4.0L Twin-Turbo V8 + 141 kW Electric Motor",
          horsepower: 789,
          torque: "950 Nm",
          transmission: "8-Speed Automatic (Electric Torque Vectoring AWD)",
          seating: 5,
          zeroToHundred: "3.4 sec",
          topSpeed: "312 km/h",
          dimensions: "5,123 × 2,022 × 1,638 mm",
          economyOrRange: "60 km Pure EV Range",
          priceCr: 4.57,
          priceDisplay: "₹4.57 Cr*",
          availability: "Showroom Preview Unit",
          safety: "Adaptive Air Suspension, Carbon-Ceramic Brakes (440mm Front), ADAS Highway Assist",
          tech: "12.3-inch Central HMI Touchscreen, 11 Drive Modes (Strada to Sabbia), Telemetry",
          options: "Arancio Egon, 23-inch Galanthus Rims, Bicolor Sportivo Leather",
          warranty: "3 Years Unlimited Km Warranty",
          description: "The most powerful Urus ever built pairs a 4.0-liter twin-turbo V8 with plug-in hybrid torque for supercar pace across every terrain.",
          images: [
            "https://images.unsplash.com/photo-1669215420018-098507d14861?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "rolls-cullinan",
          brand: "Rolls-Royce",
          model: "Cullinan Series II Black Badge",
          country: "United Kingdom",
          year: 2025,
          bodyType: "Luxury SUV",
          collection: "The Royal SUV Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "6.75L Twin-Turbocharged V12",
          horsepower: 591,
          torque: "900 Nm",
          transmission: "8-Speed ZF Automatic (All-Wheel Drive)",
          seating: 4,
          zeroToHundred: "4.9 sec",
          topSpeed: "250 km/h",
          dimensions: "5,341 × 2,000 × 1,835 mm",
          economyOrRange: "~6.6 km/l",
          priceCr: 10.50,
          priceDisplay: "₹10.50 Cr*",
          availability: "By Bespoke Commission",
          safety: "Everywhere All-Terrain Button, Self-Leveling Air Suspension, Night Vision",
          tech: "SPIRIT Digital Architecture, Illuminated Pantheon Grille, Viewing Suite Tailgate",
          options: "Darkest Tungsten, Technical Carbon Veneer, Bespoke Clock Cabinet",
          warranty: "4 Years Unlimited Mileage Service & Warranty",
          description: "Effortless supremacy on any surface. Cullinan Series II elevates high-sided luxury motoring with illuminated coachwork and bespoke V12 poise.",
          images: [
            "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "bentley-bentayga",
          brand: "Bentley",
          model: "Bentayga EWB Azure",
          country: "United Kingdom",
          year: 2025,
          bodyType: "Luxury SUV",
          collection: "The Royal SUV Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "4.0L Twin-Turbo V8",
          horsepower: 542,
          torque: "770 Nm",
          transmission: "8-Speed Automatic (AWD)",
          seating: 4,
          zeroToHundred: "4.6 sec",
          topSpeed: "290 km/h",
          dimensions: "5,305 × 1,998 × 1,739 mm",
          economyOrRange: "~8.1 km/l",
          priceCr: 6.00,
          priceDisplay: "₹6.00 Cr*",
          availability: "Available for Private Viewing",
          safety: "Bentley Dynamic Ride, All-Wheel Steering, Touring Specification ADAS",
          tech: "Airline Seat Specification (22-Way Adjustment & Postural Auto-Climate), Naim Audio",
          options: "Verdant British Green, Diamond Illumination Door Panels, Open-Pore Koa Wood",
          warranty: "3 Years Unlimited Mileage Warranty",
          description: "Extended-wheelbase wellness engineering featuring Bentley's Airline Seat specification that senses occupant posture and temperature automatically.",
          images: [
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1669215420018-098507d14861?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "range-rover-autobiography",
          brand: "Land Rover",
          model: "Range Rover P530 Autobiography LWB",
          country: "United Kingdom",
          year: 2025,
          bodyType: "Luxury SUV",
          collection: "The Royal SUV Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "4.4L Twin-Turbo V8 Mild Hybrid",
          horsepower: 523,
          torque: "750 Nm",
          transmission: "8-Speed ZF Automatic (Intelligent AWD)",
          seating: 5,
          zeroToHundred: "4.6 sec",
          topSpeed: "250 km/h",
          dimensions: "5,252 × 2,047 × 1,870 mm",
          economyOrRange: "~8.7 km/l",
          priceCr: 3.16,
          priceDisplay: "₹3.16 Cr*",
          availability: "Showroom Preview Unit",
          safety: "Terrain Response 2, 900mm Wading Depth, Dynamic Response Pro, 3D Surround Camera",
          tech: "13.1-inch Curved Pivi Pro, Meridian Signature 35-Speaker 1,600W Active Noise Cancellation",
          options: "Belgravia Green, Perlino Semi-Aniline Leather, Executive Class Comfort-Plus Rear",
          warranty: "3 Years / 100,000 Km Warranty",
          description: "Modernist British luxury combined with peerless all-terrain capability and active headrest noise cancellation.",
          images: [
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1669215420018-098507d14861?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "mercedes-gls",
          brand: "Mercedes-Benz",
          model: "GLS 450d 4MATIC",
          country: "Germany",
          year: 2025,
          bodyType: "Luxury SUV",
          collection: "The Royal SUV Collection",
          condition: "Brand New",
          fuel: "Diesel",
          engine: "3.0L Inline-6 Turbo Diesel + 48V Mild Hybrid",
          horsepower: 362,
          torque: "750 Nm",
          transmission: "9G-TRONIC Automatic (AWD)",
          seating: 7,
          zeroToHundred: "6.1 sec",
          topSpeed: "250 km/h",
          dimensions: "5,209 × 2,030 × 1,823 mm",
          economyOrRange: "~12.5 km/l",
          priceCr: 1.37,
          priceDisplay: "₹1.37 Cr*",
          availability: "Available for Private Viewing",
          safety: "AIRMATIC Air Suspension, 9 Airbags, Active Brake Assist, Transparent Bonnet View",
          tech: "Dual 12.3-inch MBUX Displays, Burmester 13-Speaker Audio, 5-Zone Climate Control",
          options: "Selenite Grey, Bahia Brown Leather, 7-Seat Full-Size Configuration",
          warranty: "3 Years Unlimited Km Warranty",
          description: "The S-Class of SUVs offers seven full-size seats and effortless long-distance diesel torque for grand family journeys.",
          images: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "bmw-x7",
          brand: "BMW",
          model: "X7 xDrive40d M Sport",
          country: "Germany",
          year: 2025,
          bodyType: "Luxury SUV",
          collection: "The Royal SUV Collection",
          condition: "Brand New",
          fuel: "Diesel",
          engine: "3.0L TwinPower Turbo Inline-6 Diesel",
          horsepower: 340,
          torque: "700 Nm",
          transmission: "8-Speed Steptronic Sport (xDrive AWD)",
          seating: 7,
          zeroToHundred: "5.9 sec",
          topSpeed: "243 km/h",
          dimensions: "5,181 × 2,000 × 1,835 mm",
          economyOrRange: "~14.3 km/l",
          priceCr: 1.33,
          priceDisplay: "₹1.33 Cr*",
          availability: "Available for Private Viewing",
          safety: "Adaptive 2-Axle Air Suspension, Reversing Assistant, Driving Assistant Professional",
          tech: "BMW Curved Display (12.3 + 14.9-inch), Sky Lounge Panoramic Glass Roof, Harman Kardon",
          options: "Mineral White Metallic, Tartufo Merino Leather, 21-inch M Light Alloy Wheels",
          warranty: "2 Years Unlimited Km Warranty",
          description: "Commanding road presence paired with agile Bavarian chassis tuning and three rows of sumptuously trimmed seating.",
          images: [
            "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "porsche-cayenne",
          brand: "Porsche",
          model: "Cayenne GTS",
          country: "Germany",
          year: 2025,
          bodyType: "Luxury SUV",
          collection: "The Performance Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "4.0L Twin-Turbocharged V8",
          horsepower: 493,
          torque: "660 Nm",
          transmission: "8-Speed Tiptronic S (AWD)",
          seating: 5,
          zeroToHundred: "4.4 sec",
          topSpeed: "275 km/h",
          dimensions: "4,930 × 1,983 × 1,674 mm",
          economyOrRange: "~8.4 km/l",
          priceCr: 2.00,
          priceDisplay: "₹2.00 Cr*",
          availability: "Enquire for Allocation",
          safety: "Porsche Torque Vectoring Plus (PTV+), 2-Valve Adaptive Air Suspension, HD-Matrix LED",
          tech: "12.6-inch Curved Instrument Cluster, Optional Passenger Display, BOSE Surround Sound",
          options: "Carmine Red, GTS Interior Package with Race-Tex, Sport Exhaust in Dark Bronze",
          warranty: "2 Years Unlimited Mileage Warranty",
          description: "A true sports car in SUV proportions, delivering twin-turbo V8 charisma and cornering precision worthy of the Porsche crest.",
          images: [
            "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "land-rover-defender",
          brand: "Land Rover",
          model: "Defender 110 V8 Carpathian Edition",
          country: "United Kingdom",
          year: 2025,
          bodyType: "Luxury SUV",
          collection: "The Royal SUV Collection",
          condition: "Brand New",
          fuel: "Petrol",
          engine: "5.0L Supercharged V8",
          horsepower: 518,
          torque: "625 Nm",
          transmission: "8-Speed Automatic (AWD + Twin-Speed Transfer Box)",
          seating: 5,
          zeroToHundred: "5.2 sec",
          topSpeed: "240 km/h",
          dimensions: "5,018 × 2,008 × 1,967 mm",
          economyOrRange: "~6.8 km/l",
          priceCr: 2.35,
          priceDisplay: "₹2.35 Cr*",
          availability: "Showroom Preview Unit",
          safety: "Configurable Terrain Response, Electronic Active Differential, ClearSight Ground View",
          tech: "11.4-inch Pivi Pro Touchscreen, Meridian Surround Sound, Interactive Driver Display",
          options: "Carpathian Grey Satin Protective Film, Ebony Windsor Leather & Dinamica Suedecloth",
          warranty: "3 Years / 100,000 Km Warranty",
          description: "Unstoppable expedition architecture infused with a thunderous 5.0-liter supercharged V8 and factory satin protective finish.",
          images: [
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1669215420018-098507d14861?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "porsche-911-carrera",
          brand: "Porsche",
          model: "911 Carrera GTS T-Hybrid (992.2)",
          country: "Germany",
          year: 2025,
          bodyType: "Sports Car",
          collection: "The Performance Collection",
          condition: "Brand New",
          fuel: "Hybrid",
          engine: "3.6L eTurbo Flat-6 Performance Hybrid",
          horsepower: 532,
          torque: "610 Nm",
          transmission: "8-Speed PDK",
          seating: 4,
          zeroToHundred: "3.0 sec",
          topSpeed: "312 km/h",
          dimensions: "4,553 × 1,852 × 1,295 mm",
          economyOrRange: "~9.5 km/l",
          priceCr: 2.75,
          priceDisplay: "₹2.75 Cr*",
          availability: "Enquire for Allocation",
          safety: "Rear-Axle Steering Standard, PASM Sport (-10mm), HD-Matrix LED Headlamps",
          tech: "Fully Digital Curved Cockpit, Porsche Communication Management, Sport Chrono",
          options: "Shade Green Metallic, Center-Lock Wheels, Adaptive Sports Seats Plus",
          warranty: "2 Years Unlimited Mileage Warranty",
          description: "The iconic 911 silhouette evolved with motorsport-derived electric turbocharging for zero-lag throttle response.",
          images: [
            "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "porsche-718-cayman",
          brand: "Porsche",
          model: "718 Cayman GT4 RS",
          country: "Germany",
          year: 2024,
          bodyType: "Sports Car",
          collection: "The Performance Collection",
          condition: "Certified Pre-Owned",
          fuel: "Petrol",
          engine: "4.0L Naturally Aspirated Flat-6",
          horsepower: 493,
          torque: "450 Nm",
          transmission: "7-Speed Short-Ratio PDK",
          seating: 2,
          zeroToHundred: "3.4 sec",
          topSpeed: "315 km/h",
          dimensions: "4,456 × 1,822 × 1,267 mm",
          economyOrRange: "~7.6 km/l",
          priceCr: 2.54,
          priceDisplay: "₹2.54 Cr*",
          availability: "Curated Pre-Owned Showcase",
          safety: "Ball-Joint Track Suspension, Swan-Neck Fixed Rear Wing, PCCB Ceramic Option",
          tech: "Carbon-Fiber Side Window Air Intakes, Chrono Stopwatch, Race-Tex Steering",
          options: "Arctic Grey, Weissach Package, Full Carbon Bucket Seats",
          warranty: "Porsche Approved Certified Pre-Owned",
          description: "Mid-engine purity elevated with the GT3's 9,000-rpm flat-six and carbon air intakes positioned right behind the driver's ears.",
          images: [
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "chevy-corvette-z06",
          brand: "Chevrolet Corvette",
          model: "Corvette Z06 3LZ",
          country: "USA",
          year: 2024,
          bodyType: "Sports Car",
          collection: "The Performance Collection",
          condition: "Certified Pre-Owned",
          fuel: "Petrol",
          engine: "5.5L Flat-Plane Crank LT6 Naturally Aspirated V8",
          horsepower: 670,
          torque: "623 Nm",
          transmission: "8-Speed Dual-Clutch (RWD)",
          seating: 2,
          zeroToHundred: "2.6 sec",
          topSpeed: "314 km/h",
          dimensions: "4,688 × 2,025 × 1,235 mm",
          economyOrRange: "~6.4 km/l",
          priceCr: 2.45,
          priceDisplay: "₹2.45 Cr*",
          availability: "Global Collector Sourcing",
          safety: "Magnetic Selective Ride Control 4.0, Brembo Carbon-Ceramic Brakes, Performance Traction Mgmt",
          tech: "Performance Data Recorder, 14-Speaker Bose Performance Series, Head-Up Display",
          options: "Torch Red, Visible Carbon Fiber Aero Package, Competition Sport Bucket Seats",
          warranty: "Import Collector Service Coverage (Illustrative)",
          description: "America's mid-engine exotic featuring the highest-horsepower naturally aspirated V8 ever fitted to a production car, screaming to 8,600 rpm.",
          images: [
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "ford-mustang-darkhorse",
          brand: "Ford Mustang",
          model: "Mustang Dark Horse 5.0 V8",
          country: "USA",
          year: 2024,
          bodyType: "Sports Car",
          collection: "The Performance Collection",
          condition: "Certified Pre-Owned",
          fuel: "Petrol",
          engine: "5.0L Gen-4 Coyote Naturally Aspirated V8",
          horsepower: 500,
          torque: "567 Nm",
          transmission: "10-Speed SelectShift Automatic (RWD)",
          seating: 4,
          zeroToHundred: "4.1 sec",
          topSpeed: "267 km/h",
          dimensions: "4,819 × 1,917 × 1,403 mm",
          economyOrRange: "~7.4 km/l",
          priceCr: 1.25,
          priceDisplay: "₹1.25 Cr*",
          availability: "Global Collector Sourcing",
          safety: "MagneRide Damping System, Torsen Limited-Slip Differential, Brembo 6-Piston Front Brakes",
          tech: "13.2-inch SYNC 4 Touchscreen, 12.4-inch Unreal Engine Digital Cluster, Drift Brake",
          options: "Blue Ember Metallic, Recaro Micro-Suede Seats, Titanium Anodized Accents",
          warranty: "Import Collector Service Coverage (Illustrative)",
          description: "Track-capable American muscle celebrating naturally aspirated V8 heritage with forged internals and MagneRide suspension.",
          images: [
            "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "nissan-gtr-nismo",
          brand: "Nissan",
          model: "GT-R NISMO Special Edition",
          country: "Japan",
          year: 2024,
          bodyType: "Sports Car",
          collection: "The Performance Collection",
          condition: "Certified Pre-Owned",
          fuel: "Petrol",
          engine: "3.8L Hand-Assembled Twin-Turbo VR38DETT V6",
          horsepower: 600,
          torque: "652 Nm",
          transmission: "6-Speed Dual-Clutch (ATTESA E-TS AWD)",
          seating: 4,
          zeroToHundred: "2.7 sec",
          topSpeed: "315 km/h",
          dimensions: "4,690 × 1,895 × 1,370 mm",
          economyOrRange: "~7.0 km/l",
          priceCr: 2.65,
          priceDisplay: "₹2.65 Cr*",
          availability: "Global Collector Sourcing",
          safety: "GT3-Spec Turbochargers, Brembo Carbon-Ceramic Rotors, Bilstein DampTronic",
          tech: "NISMO Multi-Function Telemetry Display, Bose Active Noise Cancellation, Titanium Exhaust",
          options: "NISMO Stealth Gray, Clear-Coated Carbon Hood, Recaro Carbon Bucket Seats",
          warranty: "Import Collector Service Coverage (Illustrative)",
          description: "Hand-built by Takumi master craftsmen in Yokohama, the final-evolution GT-R NISMO remains a Japanese technological legend.",
          images: [
            "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "tesla-model-s-plaid",
          brand: "Tesla",
          model: "Model S Plaid Tri-Motor",
          country: "USA",
          year: 2024,
          bodyType: "Electric Vehicle",
          collection: "The Electric Revolution",
          condition: "Certified Pre-Owned",
          fuel: "Electric",
          engine: "Tri-Motor All-Wheel Drive (Carbon-Sleeved Rotors)",
          horsepower: 1020,
          torque: "1,420 Nm",
          transmission: "Single-Speed Direct Drive (AWD)",
          seating: 5,
          zeroToHundred: "2.1 sec",
          topSpeed: "322 km/h",
          dimensions: "5,021 × 1,987 × 1,431 mm",
          economyOrRange: "600 km (WLTP Est. Range)",
          priceCr: 1.95,
          priceDisplay: "₹1.95 Cr*",
          availability: "Global Collector Sourcing",
          safety: "8-Camera Vision Active Safety, Adaptive Air Suspension, Track Mode Torque Vectoring",
          tech: "17-inch Cinematic Tilting Display, 960W 22-Speaker Audio, Rear 9.4-inch Screen",
          options: "Ultra Red, 21-inch Arachnid Wheels, Cream Interior with Carbon Decor",
          warranty: "Import EV Battery & Drive Unit Advisory (Illustrative)",
          description: "Hypercar-beating straight-line acceleration packaged inside a sleek, long-range five-seat electric fastback.",
          images: [
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "tesla-model-y",
          brand: "Tesla",
          model: "Model Y Performance Dual Motor",
          country: "USA",
          year: 2024,
          bodyType: "Electric Vehicle",
          collection: "The Electric Revolution",
          condition: "Certified Pre-Owned",
          fuel: "Electric",
          engine: "Dual-Motor All-Wheel Drive",
          horsepower: 456,
          torque: "660 Nm",
          transmission: "Single-Speed Direct Drive (AWD)",
          seating: 5,
          zeroToHundred: "3.7 sec",
          topSpeed: "250 km/h",
          dimensions: "4,751 × 1,921 × 1,624 mm",
          economyOrRange: "514 km (WLTP Est. Range)",
          priceCr: 0.92,
          priceDisplay: "₹0.92 Cr*",
          availability: "Global Collector Sourcing",
          safety: "5-Star Euro NCAP Architecture, 360° Cameras, HEPA Bioweapon Defense Filtration",
          tech: "15-inch Central Touchscreen, Panoramic Glass Roof, Over-the-Air Software Suite",
          options: "Quicksilver Metallic, 21-inch Überturbine Wheels, All-Black Premium Interior",
          warranty: "Import EV Battery Advisory (Illustrative)",
          description: "Versatile electric crossover performance combining brisk dual-motor agility with everyday practicality.",
          images: [
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "porsche-taycan-turbo-gt",
          brand: "Porsche",
          model: "Taycan Turbo S (J1 II)",
          country: "Germany",
          year: 2025,
          bodyType: "Electric Vehicle",
          collection: "The Electric Revolution",
          condition: "Brand New",
          fuel: "Electric",
          engine: "800V Dual Permanent-Magnet Synchronous Motors",
          horsepower: 938,
          torque: "1,110 Nm",
          transmission: "2-Speed Rear / Single-Speed Front (AWD)",
          seating: 4,
          zeroToHundred: "2.4 sec",
          topSpeed: "260 km/h",
          dimensions: "4,962 × 1,966 × 1,378 mm",
          economyOrRange: "630 km (WLTP Est. Range)",
          priceCr: 2.53,
          priceDisplay: "₹2.53 Cr*",
          availability: "Showroom Preview Unit",
          safety: "Porsche Active Ride Suspension, PCCB Ceramic Brakes, Rear-Axle Steering",
          tech: "800-Volt 320 kW Fast Charging, Curved 16.8-inch Display, Passenger Screen",
          options: "Frozen Berry Metallic, Olea Club Leather, Carbon SportDesign Package",
          warranty: "2 Years Vehicle + 8 Years High-Voltage Battery Warranty",
          description: "Zuffenhausen's flagship electric sports saloon delivers repeatable launch-control fury and signature Porsche steering feedback.",
          images: [
            "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "bmw-i7-m70",
          brand: "BMW",
          model: "i7 M70 xDrive",
          country: "Germany",
          year: 2025,
          bodyType: "Electric Vehicle",
          collection: "The Electric Revolution",
          condition: "Brand New",
          fuel: "Electric",
          engine: "Dual Fifth-Gen BMW eDrive Motors (AWD)",
          horsepower: 650,
          torque: "1,100 Nm",
          transmission: "Single-Speed Direct Drive",
          seating: 5,
          zeroToHundred: "3.7 sec",
          topSpeed: "250 km/h",
          dimensions: "5,391 × 1,950 × 1,544 mm",
          economyOrRange: "560 km (WLTP Est. Range)",
          priceCr: 2.50,
          priceDisplay: "₹2.50 Cr*",
          availability: "Available for Private Viewing",
          safety: "Executive Drive Pro, Active Roll Stabilization, Integral Active Steering",
          tech: "31.3-inch 8K Theatre Screen, IconicSounds Electric by Hans Zimmer, B&W 36-Speaker Audio",
          options: "BMW Individual Two-Tone Tanzanite Blue / Oxide Grey, Executive Lounge Seating",
          warranty: "2 Years Vehicle + 8 Years / 160,000 Km Battery Warranty",
          description: "The most powerful all-electric BMW ever created pairs whisper-silent limousine serenity with 1,100 Nm of instant M torque.",
          images: [
            "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "mercedes-eqs-580",
          brand: "Mercedes-Benz",
          model: "EQS 580 4MATIC",
          country: "Germany",
          year: 2025,
          bodyType: "Electric Vehicle",
          collection: "The Electric Revolution",
          condition: "Brand New",
          fuel: "Electric",
          engine: "Dual Permanently Excited Synchronous Motors (107.8 kWh)",
          horsepower: 516,
          torque: "855 Nm",
          transmission: "Single-Speed Direct Drive (AWD)",
          seating: 5,
          zeroToHundred: "4.3 sec",
          topSpeed: "210 km/h",
          dimensions: "5,216 × 1,926 × 1,512 mm",
          economyOrRange: "857 km (ARAI Certified Range)",
          priceCr: 1.62,
          priceDisplay: "₹1.62 Cr*",
          availability: "Available for Private Viewing",
          safety: "0.20 Cd Aerodynamic Drag, 9 Airbags, Rear-Axle Steering (10°), PRE-SAFE Plus",
          tech: "56-inch MBUX Hyperscreen (3 Seamless OLED Displays), HEPA Energizing Air Control",
          options: "Obsidian Black, Neva Grey / Balao Brown Nappa Leather, Rear Seat Package Plus",
          warranty: "3 Years Vehicle + 10 Years Battery Warranty",
          description: "Sculpted with a record-setting 0.20 drag coefficient and dominated inside by the sweeping 56-inch MBUX Hyperscreen.",
          images: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "audi-etron-gt",
          brand: "Audi",
          model: "RS e-tron GT",
          country: "Germany",
          year: 2024,
          bodyType: "Electric Vehicle",
          collection: "The Electric Revolution",
          condition: "Brand New",
          fuel: "Electric",
          engine: "800V Dual Synchronous Electric Motors",
          horsepower: 637,
          torque: "830 Nm",
          transmission: "2-Speed Performance Transmission (quattro AWD)",
          seating: 4,
          zeroToHundred: "3.3 sec",
          topSpeed: "250 km/h",
          dimensions: "4,989 × 1,964 × 1,396 mm",
          economyOrRange: "481 km (WLTP Est. Range)",
          priceCr: 1.95,
          priceDisplay: "₹1.95 Cr*",
          availability: "Enquire for Allocation",
          safety: "3-Chamber Adaptive Air Suspension, Tungsten Carbide Coated Brakes, Matrix LED Laser",
          tech: "Audi Virtual Cockpit Plus, e-tron Sport Sound, Bang & Olufsen 3D Premium Audio",
          options: "Kemora Grey Metallic, Matte Carbon Roof, Honeycomb Fine Nappa Leather",
          warranty: "2 Years Vehicle + 8 Years High-Voltage Battery Warranty",
          description: "Hand-finished at Audi's Böllinger Höfe facility alongside the R8, blending low-slung grand touring proportions with electric quattro precision.",
          images: [
            "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=85"
          ]
        },
        {
          id: "volvo-ex90",
          brand: "Volvo",
          model: "EX90 Twin Motor Performance",
          country: "Sweden",
          year: 2025,
          bodyType: "Electric Vehicle",
          collection: "The Electric Revolution",
          condition: "Brand New",
          fuel: "Electric",
          engine: "Dual Permanent-Magnet Motors (111 kWh Battery)",
          horsepower: 510,
          torque: "910 Nm",
          transmission: "Single-Speed Direct Drive (AWD)",
          seating: 7,
          zeroToHundred: "4.9 sec",
          topSpeed: "180 km/h",
          dimensions: "5,037 × 1,964 × 1,744 mm",
          economyOrRange: "600 km (WLTP Est. Range)",
          priceCr: 1.45,
          priceDisplay: "₹1.45 Cr*",
          availability: "Enquire for Allocation",
          safety: "Roof-Integrated LiDAR Sensor Suite, Driver Understanding System, Occupant Radar",
          tech: "14.5-inch Google Built-In Portrait Display, Bowers & Wilkins 25-Speaker Dolby Atmos",
          options: "Sand Dune Metallic, Nordico Bio-Attributed Tailored Wool Blend Interior",
          warranty: "3 Years Vehicle + 8 Years Battery Warranty",
          description: "Scandinavian sanctuary engineering featuring roof-mounted LiDAR sensing and sustainable Nordic luxury materials for seven passengers.",
          images: [
            "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=85",
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1200&q=85"
          ]
        }
      ];

      /* ----------------------------------------------------------------------
         4. EXCLUSIVE CURATED COLLECTIONS DATA
         ---------------------------------------------------------------------- */
      const COLLECTIONS_DATA = [
        {
          title: "The Supercar Collection",
          filterType: "collection",
          filterValue: "The Supercar Collection",
          subtitle: "Mid-engine V12 hybrids, quad-turbo hypercars, and Maranello icons.",
          image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1000&q=80"
        },
        {
          title: "The Ultimate Luxury Collection",
          filterType: "collection",
          filterValue: "The Ultimate Luxury Collection",
          subtitle: "Coachbuilt V12 flagships from Goodwood, Crewe, and Sindelfingen.",
          image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1000&q=80"
        },
        {
          title: "The Executive Collection",
          filterType: "collection",
          filterValue: "The Executive Collection",
          subtitle: "Long-wheelbase German business limousines engineered for effortless poise.",
          image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80"
        },
        {
          title: "The Performance Collection",
          filterType: "collection",
          filterValue: "The Performance Collection",
          subtitle: "Track-honed flat-sixes, British super tourers, and iconic V8 coupes.",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
        },
        {
          title: "The Electric Revolution",
          filterType: "collection",
          filterValue: "The Electric Revolution",
          subtitle: "800-volt grand tourers and tri-motor flagships redefining zero-emission speed.",
          image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80"
        },
        {
          title: "The Royal SUV Collection",
          filterType: "collection",
          filterValue: "The Royal SUV Collection",
          subtitle: "Commanding all-terrain luxury flagships built for sovereign presence.",
          image: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=1000&q=80"
        }
      ];

      /* ----------------------------------------------------------------------
         5. AUTOMOTIVE JOURNAL ARTICLES DATA
         ---------------------------------------------------------------------- */
      const JOURNAL_ARTICLES = [
        {
          id: "art-1",
          category: "Hybrid Hypercars",
          date: "Automotive Engineering Feature",
          title: "The 9,500-RPM V12 Renaissance: How Electrification Amplifies Pure Emotion",
          excerpt: "Exploring how axial-flux electric motors eliminate torque fill gaps while preserving naturally aspirated twelve-cylinder acoustics.",
          image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1000&q=80",
          fullText: "Modern flagship supercars have entered a golden technical era. Rather than replacing iconic multi-cylinder engines, high-density axial-flux electric motors mounted on the front axle provide instantaneous torque vectoring into apexes while allowing naturally aspirated V12 powerplants to rev freely past 9,000 rpm. For collectors in Hyderabad, this architecture offers silent neighborhood departures paired with unfiltered circuit performance."
        },
        {
          id: "art-2",
          category: "Bespoke Coachbuilding",
          date: "Luxury Craftsmanship",
          title: "Inside the Modern Chauffeur Sanctuary: Acoustic Isolation & Planar Ride",
          excerpt: "How active noise cancellation, stereo road-scanning cameras, and semi-aniline hides transform urban commutes into tranquil retreats.",
          image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1000&q=80",
          fullText: "True automotive luxury is measured in decibels and composure. Flagship saloons from Goodwood, Crewe, and Sindelfingen now employ forward-facing stereo cameras that read road imperfections milliseconds before the front wheels arrive, pre-conditioning air dampers so the cabin remains serene."
        },
        {
          id: "art-3",
          category: "Electric Grand Touring",
          date: "EV Innovation",
          title: "800-Volt Architectures & Active Suspension: The New Benchmark for EVs",
          excerpt: "Why high-voltage thermal management and hydraulic active ride control have transformed electric grand tourers into corner-carving athletes.",
          image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1000&q=80",
          fullText: "With 800-volt electrical architectures and dual-valve active hydraulic suspension systems, flagship electric vehicles now counteract pitch and body roll in real time—delivering plush cruising comfort on city boulevards and flat cornering precision on open highways."
        }
      ];

      /* ----------------------------------------------------------------------
         6. APPLICATION STATE
         ---------------------------------------------------------------------- */
      const state = {
        activeCountryTab: "ALL",
        activeCollection: "ALL",
        wishlist: JSON.parse(localStorage.getItem("elite_motors_wishlist") || "[]"),
        compareIds: ["lambo-revuelto", "ferrari-296-gtb", "mclaren-750s"]
      };

      /* ----------------------------------------------------------------------
         7. UTILITY FUNCTIONS (TOASTS, WISHLIST PERSISTENCE, SCROLLING)
         ---------------------------------------------------------------------- */
      function showToast(message, iconClass = "fa-solid fa-crown text-gold") {
        const container = document.getElementById("toast-container");
        const toast = document.createElement("div");
        toast.className = "toast-item";
        toast.innerHTML = `
          <i class="${iconClass}" style="margin-top:3px;"></i>
          <div>${message}</div>
        `;
        container.appendChild(toast);
        setTimeout(() => {
          toast.style.opacity = "0";
          toast.style.transform = "translateY(10px)";
          toast.style.transition = "0.3s ease";
          setTimeout(() => toast.remove(), 300);
        }, 3400);
      }

      function saveWishlist() {
        localStorage.setItem("elite_motors_wishlist", JSON.stringify(state.wishlist));
        updateWishlistBadge();
      }

      function updateWishlistBadge() {
        const badge = document.getElementById("wishlist-badge");
        if (badge) badge.textContent = state.wishlist.length;
      }

      function toggleWishlist(carId) {
        const car = CARS_INVENTORY.find(c => c.id === carId);
        if (!car) return;
        const idx = state.wishlist.indexOf(carId);
        if (idx === -1) {
          state.wishlist.push(carId);
          showToast(`<strong>${car.brand} ${car.model}</strong> added to your Wishlist.`, "fa-solid fa-heart text-gold");
        } else {
          state.wishlist.splice(idx, 1);
          showToast(`Removed <strong>${car.brand} ${car.model}</strong> from Wishlist.`, "fa-regular fa-heart text-silver");
        }
        saveWishlist();
        renderInventory();
        renderWishlistModal();
      }

      function addToCompare(carId) {
        const car = CARS_INVENTORY.find(c => c.id === carId);
        if (!car) return;
        if (state.compareIds.includes(carId)) {
          showToast(`<strong>${car.brand} ${car.model}</strong> is already in your comparison table.`);
          document.getElementById("compare").scrollIntoView({ behavior: "smooth" });
          return;
        }
        if (state.compareIds.length >= 3) {
          state.compareIds.shift();
        }
        state.compareIds.push(carId);
        syncCompareDropdowns();
        renderComparisonTable();
        showToast(`Added <strong>${car.brand} ${car.model}</strong> to Side-by-Side Comparison.`);
        document.getElementById("compare").scrollIntoView({ behavior: "smooth" });
      }

      /* ----------------------------------------------------------------------
         8. RENDER BRANDS DISCOVERY
         ---------------------------------------------------------------------- */
      function renderBrands() {
        const grid = document.getElementById("brands-grid");
        const activeBrandFilter = document.getElementById("filter-brand").value;
        const filteredBrands = state.activeCountryTab === "ALL"
          ? BRANDS_DATA
          : BRANDS_DATA.filter(b => b.country === state.activeCountryTab);

        grid.innerHTML = filteredBrands.map(b => {
          const isActive = activeBrandFilter === b.name;
          return `
            <div class="brand-card ${isActive ? "active" : ""}" data-brand="${b.name}" role="button" tabindex="0" aria-label="Filter by ${b.name}">
              <div class="brand-card-monogram">${b.mono}</div>
              <div class="brand-card-name">${b.name}</div>
              <div class="brand-card-country">${b.country}</div>
            </div>
          `;
        }).join("");

        grid.querySelectorAll(".brand-card").forEach(card => {
          const handler = () => {
            const brandName = card.getAttribute("data-brand");
            const brandSelect = document.getElementById("filter-brand");
            brandSelect.value = brandSelect.value === brandName ? "ALL" : brandName;
            state.activeCollection = "ALL";
            renderBrands();
            renderInventory();
            document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
          };
          card.addEventListener("click", handler);
          card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handler(); } });
        });
      }

      /* ----------------------------------------------------------------------
         9. POPULATE FILTER DROPDOWNS & TEST DRIVE MODEL SELECTOR
         ---------------------------------------------------------------------- */
      function populateDropdowns() {
        const brandSelect = document.getElementById("filter-brand");
        const tdBrandSelect = document.getElementById("td-brand");
        const tdModelSelect = document.getElementById("td-model");

        const uniqueBrands = [...new Set(BRANDS_DATA.map(b => b.name))].sort();
        uniqueBrands.forEach(brand => {
          brandSelect.insertAdjacentHTML("beforeend", `<option value="${brand}">${brand}</option>`);
          tdBrandSelect.insertAdjacentHTML("beforeend", `<option value="${brand}">${brand}</option>`);
        });

        CARS_INVENTORY.forEach(car => {
          tdModelSelect.insertAdjacentHTML("beforeend", `<option value="${car.id}">${car.brand} ${car.model} (${car.year})</option>`);
        });

        tdBrandSelect.addEventListener("change", () => {
          const selectedBrand = tdBrandSelect.value;
          tdModelSelect.innerHTML = `<option value="">Select Model from Inventory</option>`;
          const matchingCars = selectedBrand
            ? CARS_INVENTORY.filter(c => c.brand.toLowerCase().includes(selectedBrand.toLowerCase()) || selectedBrand.toLowerCase().includes(c.brand.toLowerCase()))
            : CARS_INVENTORY;

          (matchingCars.length ? matchingCars : CARS_INVENTORY).forEach(car => {
            tdModelSelect.insertAdjacentHTML("beforeend", `<option value="${car.id}">${car.brand} ${car.model} (${car.year})</option>`);
          });
        });
      }

      /* ----------------------------------------------------------------------
         10. RENDER INVENTORY & FILTERING ENGINE
         ---------------------------------------------------------------------- */
      function getFilteredCars() {
        const query = document.getElementById("filter-search").value.trim().toLowerCase();
        const brand = document.getElementById("filter-brand").value;
        const country = document.getElementById("filter-country").value;
        const bodyType = document.getElementById("filter-body").value;
        const fuel = document.getElementById("filter-fuel").value;
        const priceRange = document.getElementById("filter-price").value;
        const minHp = parseInt(document.getElementById("filter-hp").value, 10) || 0;
        const seats = document.getElementById("filter-seats").value;
        const condition = document.getElementById("filter-condition").value;
        const sortBy = document.getElementById("filter-sort").value;

        let list = CARS_INVENTORY.filter(car => {
          if (state.activeCollection !== "ALL" && car.collection !== state.activeCollection) return false;
          if (brand !== "ALL" && car.brand !== brand) return false;
          if (country !== "ALL" && car.country !== country) return false;
          if (bodyType !== "ALL" && car.bodyType !== bodyType) return false;
          if (fuel !== "ALL" && car.fuel !== fuel) return false;
          if (condition !== "ALL" && car.condition !== condition) return false;
          if (car.horsepower < minHp) return false;
          if (seats !== "ALL" && String(car.seating) !== seats) return false;

          if (priceRange !== "ALL") {
            const [minP, maxP] = priceRange.split("-").map(Number);
            if (car.priceCr < minP || car.priceCr > maxP) return false;
          }

          if (query) {
            const haystack = `${car.brand} ${car.model} ${car.country} ${car.engine} ${car.bodyType} ${car.fuel}`.toLowerCase();
            if (!haystack.includes(query)) return false;
          }
          return true;
        });

        if (sortBy === "price-asc") list.sort((a, b) => a.priceCr - b.priceCr);
        else if (sortBy === "price-desc") list.sort((a, b) => b.priceCr - a.priceCr);
        else if (sortBy === "newest") list.sort((a, b) => b.year - a.year);
        else if (sortBy === "hp-desc") list.sort((a, b) => b.horsepower - a.horsepower);

        return list;
      }

      function renderInventory() {
        const grid = document.getElementById("cars-grid");
        const countEl = document.getElementById("inventory-count");
        const cars = getFilteredCars();

        countEl.textContent = cars.length;

        if (cars.length === 0) {
          grid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:4rem 1.5rem; background:var(--bg-surface); border:1px solid var(--border-subtle); border-radius:var(--radius-lg);">
              <i class="fa-solid fa-car-side text-gold" style="font-size:2.4rem; margin-bottom:1rem;"></i>
              <h3 class="font-serif" style="font-size:1.75rem; margin-bottom:0.5rem;">No Matching Vehicles Found</h3>
              <p style="color:var(--text-secondary); max-width:480px; margin:0 auto 1.5rem;">
                Adjust your filter criteria or explore our global collector sourcing service if you are seeking a bespoke specification.
              </p>
              <button class="btn btn-gold btn-sm" id="empty-reset-btn">Reset All Filters</button>
            </div>
          `;
          document.getElementById("empty-reset-btn").addEventListener("click", clearAllFilters);
          return;
        }

        grid.innerHTML = cars.map(car => {
          const isWishlisted = state.wishlist.includes(car.id);
          const isCompared = state.compareIds.includes(car.id);
          return `
            <article class="car-card">
              <div class="car-card-media">
                <img
                  src="${car.images[0]}"
                  alt="${car.brand} ${car.model}"
                  loading="lazy"
                  onerror="this.src='${SHOWROOM_CONFIG.fallbackImage}'"
                />
                <div class="car-card-badges">
                  <span class="pill-badge pill-dark">${car.country} &bull; ${car.year}</span>
                  <span class="pill-badge pill-gold">${car.availability}</span>
                </div>
                <div class="card-floating-actions">
                  <button class="icon-action-circle ${isCompared ? "active" : ""}" data-compare-id="${car.id}" title="Add to Compare" aria-label="Compare ${car.brand} ${car.model}">
                    <i class="fa-solid fa-code-compare"></i>
                  </button>
                  <button class="icon-action-circle ${isWishlisted ? "active" : ""}" data-wish-id="${car.id}" title="Save to Wishlist" aria-label="Wishlist ${car.brand} ${car.model}">
                    <i class="${isWishlisted ? "fa-solid" : "fa-regular"} fa-heart"></i>
                  </button>
                </div>
              </div>

              <div class="car-card-body">
                <div class="car-card-meta-top">
                  <span>${car.brand}</span>
                  <span>${car.bodyType}</span>
                </div>
                <h3 class="car-card-title">${car.model}</h3>

                <div class="car-specs-mini">
                  <div class="spec-mini-item"><i class="fa-solid fa-gauge-high"></i><span>${car.horsepower} HP</span></div>
                  <div class="spec-mini-item"><i class="fa-solid fa-bolt"></i><span>0-100: ${car.zeroToHundred}</span></div>
                  <div class="spec-mini-item"><i class="fa-solid fa-gas-pump"></i><span>${car.fuel}</span></div>
                  <div class="spec-mini-item"><i class="fa-solid fa-gears"></i><span>${car.seating} Seats &bull; Auto</span></div>
                </div>

                <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:0.9rem;">
                  <strong style="color:var(--silver-metallic);">Powertrain:</strong> ${car.engine}
                </div>

                <div class="car-card-price-row">
                  <div>
                    <div class="price-label">Indicative Price (INR)</div>
                    <div class="price-value">${car.priceDisplay}</div>
                  </div>
                  <span style="font-size:0.7rem; color:var(--text-muted);">${car.condition}</span>
                </div>

                <div class="car-card-footer">
                  <button class="btn btn-gold btn-sm" data-detail-id="${car.id}">View Details</button>
                  <button class="btn btn-outline btn-sm" data-book-id="${car.id}" title="Book Test Drive">Test Drive</button>
                </div>
              </div>
            </article>
          `;
        }).join("");

        grid.querySelectorAll("[data-detail-id]").forEach(btn => {
          btn.addEventListener("click", () => openCarDetailModal(btn.getAttribute("data-detail-id")));
        });
        grid.querySelectorAll("[data-wish-id]").forEach(btn => {
          btn.addEventListener("click", () => toggleWishlist(btn.getAttribute("data-wish-id")));
        });
        grid.querySelectorAll("[data-compare-id]").forEach(btn => {
          btn.addEventListener("click", () => addToCompare(btn.getAttribute("data-compare-id")));
        });
        grid.querySelectorAll("[data-book-id]").forEach(btn => {
          btn.addEventListener("click", () => prefillTestDrive(btn.getAttribute("data-book-id")));
        });
      }

      function clearAllFilters() {
        document.getElementById("filter-search").value = "";
        document.getElementById("filter-brand").value = "ALL";
        document.getElementById("filter-country").value = "ALL";
        document.getElementById("filter-body").value = "ALL";
        document.getElementById("filter-fuel").value = "ALL";
        document.getElementById("filter-price").value = "ALL";
        document.getElementById("filter-hp").value = "0";
        document.getElementById("filter-seats").value = "ALL";
        document.getElementById("filter-condition").value = "ALL";
        document.getElementById("filter-sort").value = "featured";
        state.activeCollection = "ALL";
        renderBrands();
        renderInventory();
        showToast("All inventory filters cleared.");
      }

      function prefillTestDrive(carId) {
        const car = CARS_INVENTORY.find(c => c.id === carId);
        if (!car) return;
        const brandSel = document.getElementById("td-brand");
        const modelSel = document.getElementById("td-model");
        brandSel.value = car.brand;
        brandSel.dispatchEvent(new Event("change"));
        modelSel.value = car.id;
        closeAllModals();
        document.getElementById("test-drive").scrollIntoView({ behavior: "smooth" });
        showToast(`Selected <strong>${car.brand} ${car.model}</strong> for your test drive request.`);
      }

      /* ----------------------------------------------------------------------
         11. RENDER EXCLUSIVE COLLECTIONS
         ---------------------------------------------------------------------- */
      function renderCollections() {
        const grid = document.getElementById("collections-grid");
        grid.innerHTML = COLLECTIONS_DATA.map(col => `
          <div class="collection-banner-card" data-collection="${col.filterValue}" role="button" tabindex="0">
            <img src="${col.image}" alt="${col.title}" loading="lazy" onerror="this.src='${SHOWROOM_CONFIG.fallbackImage}'" />
            <div class="collection-card-content">
              <span class="pill-badge pill-gold" style="margin-bottom:0.75rem; display:inline-block;">Curated Theme</span>
              <h3 class="font-serif" style="font-size:1.85rem; margin-bottom:0.4rem;">${col.title}</h3>
              <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:1rem;">${col.subtitle}</p>
              <span style="font-size:0.75rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--gold-champagne);">
                Explore Vehicles <i class="fa-solid fa-arrow-right" style="margin-left:6px;"></i>
              </span>
            </div>
          </div>
        `).join("");

        grid.querySelectorAll(".collection-banner-card").forEach(card => {
          const activate = () => {
            clearAllFilters();
            state.activeCollection = card.getAttribute("data-collection");
            renderInventory();
            document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
            showToast(`Viewing <strong>${state.activeCollection}</strong>.`);
          };
          card.addEventListener("click", activate);
          card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); } });
        });
      }

      /* ----------------------------------------------------------------------
         12. SIDE-BY-SIDE CAR COMPARISON ENGINE
         ---------------------------------------------------------------------- */
      function syncCompareDropdowns() {
        document.querySelectorAll(".compare-select").forEach(select => {
          const slot = parseInt(select.getAttribute("data-slot"), 10);
          select.innerHTML = `<option value="">-- None Selected --</option>` +
            CARS_INVENTORY.map(c => `<option value="${c.id}" ${state.compareIds[slot] === c.id ? "selected" : ""}>${c.brand} ${c.model} (${c.priceDisplay})</option>`).join("");
        });
      }

      function renderComparisonTable() {
        const container = document.getElementById("compare-table-container");
        const selectedCars = state.compareIds
          .map(id => CARS_INVENTORY.find(c => c.id === id))
          .filter(Boolean);

        if (selectedCars.length < 2) {
          container.innerHTML = `<div style="padding:2.5rem; text-align:center; color:var(--text-secondary);">Select at least two automobiles above to generate a side-by-side specification matrix.</div>`;
          return;
        }

        const maxHp = Math.max(...selectedCars.map(c => c.horsepower));
        const minZeroToHundred = Math.min(...selectedCars.map(c => parseFloat(c.zeroToHundred)));
        const minPrice = Math.min(...selectedCars.map(c => c.priceCr));

        const rows = [
          { label: "Indicative Price (INR)", render: c => c.priceDisplay, isBest: c => c.priceCr === minPrice },
          { label: "Horsepower", render: c => `${c.horsepower} HP`, isBest: c => c.horsepower === maxHp },
          { label: "Peak Torque", render: c => c.torque, isBest: () => false },
          { label: "Engine / Powertrain", render: c => c.engine, isBest: () => false },
          { label: "0–100 km/h", render: c => c.zeroToHundred, isBest: c => parseFloat(c.zeroToHundred) === minZeroToHundred },
          { label: "Top Speed", render: c => c.topSpeed, isBest: () => false },
          { label: "Fuel / Energy", render: c => c.fuel, isBest: () => false },
          { label: "Mileage / EV Range", render: c => c.economyOrRange, isBest: () => false },
          { label: "Transmission", render: c => c.transmission, isBest: () => false },
          { label: "Seating Capacity", render: c => `${c.seating} Adults`, isBest: () => false },
          { label: "Dimensions (L×W×H)", render: c => c.dimensions, isBest: () => false },
          { label: "Safety Architecture", render: c => c.safety, isBest: () => false },
          { label: "Infotainment & Audio", render: c => c.tech, isBest: () => false },
          { label: "Warranty Overview", render: c => c.warranty, isBest: () => false }
        ];

        container.innerHTML = `
          <table class="compare-table">
            <thead>
              <tr>
                <th>Specification</th>
                ${selectedCars.map(c => `
                  <td style="background:rgba(255,255,255,0.02);">
                    <img src="${c.images[0]}" alt="${c.brand} ${c.model}" style="width:100%; height:130px; object-fit:cover; border-radius:var(--radius-sm); margin-bottom:0.75rem;" onerror="this.src='${SHOWROOM_CONFIG.fallbackImage}'" />
                    <div style="font-size:0.7rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--gold-champagne);">${c.brand} &bull; ${c.country}</div>
                    <div class="font-serif" style="font-size:1.35rem; font-weight:600; margin-bottom:0.5rem;">${c.model}</div>
                    <button class="btn btn-ghost-gold btn-sm" data-cmp-detail="${c.id}">Inspect Vehicle</button>
                  </td>
                `).join("")}
              </tr>
            </thead>
            <tbody>
              ${rows.map(row => `
                <tr>
                  <th>${row.label}</th>
                  ${selectedCars.map(c => `<td class="${row.isBest(c) ? "best-spec-highlight" : ""}">${row.render(c)}</td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        `;

        container.querySelectorAll("[data-cmp-detail]").forEach(btn => {
          btn.addEventListener("click", () => openCarDetailModal(btn.getAttribute("data-cmp-detail")));
        });
      }

      /* ----------------------------------------------------------------------
         13. INDIVIDUAL CAR DETAIL MODAL
         ---------------------------------------------------------------------- */
      function openCarDetailModal(carId) {
        const car = CARS_INVENTORY.find(c => c.id === carId);
        if (!car) return;

        const isWishlisted = state.wishlist.includes(car.id);
        const modal = document.getElementById("car-detail-modal");
        const body = document.getElementById("car-modal-body");

        const waMsg = encodeURIComponent(`Hello Elite Motors Jubilee Hills, I am interested in the ${car.brand} ${car.model} (${car.year}). Please share further details.`);

        body.innerHTML = `
          <div style="display:grid; grid-template-columns:1.15fr 0.85fr; gap:2rem; align-items:start;" class="modal-car-grid">
            <div>
              <div style="position:relative; border-radius:var(--radius-md); overflow:hidden; border:1px solid var(--border-subtle); background:#070709;">
                <img id="modal-main-img" src="${car.images[0]}" alt="${car.brand} ${car.model}" style="width:100%; height:370px; object-fit:cover; transition:transform 0.4s ease;" onerror="this.src='${SHOWROOM_CONFIG.fallbackImage}'" />
                <button id="toggle-360-btn" class="pill-badge pill-dark" style="position:absolute; bottom:1rem; left:1rem; cursor:pointer; pointer-events:auto;">
                  <i class="fa-solid fa-rotate text-gold"></i> 360° Interactive Angle Preview
                </button>
              </div>
              <div class="gallery-thumbs">
                ${car.images.map((img, i) => `
                  <img src="${img}" alt="Angle ${i + 1}" class="gallery-thumb ${i === 0 ? "active" : ""}" data-thumb-src="${img}" onerror="this.src='${SHOWROOM_CONFIG.fallbackImage}'" />
                `).join("")}
              </div>

              <div style="margin-top:1.5rem; padding:1.25rem; background:var(--bg-obsidian); border-radius:var(--radius-md); border:1px solid var(--border-subtle);">
                <h4 class="font-serif" style="font-size:1.25rem; color:var(--gold-champagne); margin-bottom:0.4rem;">Curator&rsquo;s Overview</h4>
                <p style="font-size:0.9rem; color:var(--text-secondary);">${car.description}</p>
              </div>
            </div>

            <div>
              <span class="section-eyebrow">${car.brand} &bull; ${car.country} &bull; ${car.year}</span>
              <h2 id="modal-car-title" class="font-serif" style="font-size:2.35rem; line-height:1.12; margin-bottom:0.5rem;">${car.model}</h2>
              <div style="display:flex; align-items:baseline; gap:1rem; margin-bottom:1.25rem;">
                <span class="font-serif" style="font-size:1.95rem; color:var(--gold-champagne); font-weight:600;">${car.priceDisplay}</span>
                <span class="pill-badge pill-gold">${car.availability}</span>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; background:var(--bg-obsidian); padding:1.15rem; border-radius:var(--radius-md); border:1px solid var(--border-subtle); margin-bottom:1.25rem; font-size:0.84rem;">
                <div><span style="color:var(--text-muted); display:block; font-size:0.7rem; text-transform:uppercase;">Horsepower</span><strong>${car.horsepower} HP</strong></div>
                <div><span style="color:var(--text-muted); display:block; font-size:0.7rem; text-transform:uppercase;">Torque</span><strong>${car.torque}</strong></div>
                <div><span style="color:var(--text-muted); display:block; font-size:0.7rem; text-transform:uppercase;">0–100 km/h</span><strong>${car.zeroToHundred}</strong></div>
                <div><span style="color:var(--text-muted); display:block; font-size:0.7rem; text-transform:uppercase;">Top Speed</span><strong>${car.topSpeed}</strong></div>
                <div><span style="color:var(--text-muted); display:block; font-size:0.7rem; text-transform:uppercase;">Transmission</span><strong>${car.transmission}</strong></div>
                <div><span style="color:var(--text-muted); display:block; font-size:0.7rem; text-transform:uppercase;">Range / Economy</span><strong>${car.economyOrRange}</strong></div>
              </div>

              <div style="display:flex; flex-direction:column; gap:0.65rem; font-size:0.83rem; color:var(--text-secondary); margin-bottom:1.5rem;">
                <div><strong class="text-gold">Powertrain:</strong> ${car.engine}</div>
                <div><strong class="text-gold">Dimensions:</strong> ${car.dimensions} (${car.seating} Seater)</div>
                <div><strong class="text-gold">Safety Systems:</strong> ${car.safety}</div>
                <div><strong class="text-gold">Cabin Technology:</strong> ${car.tech}</div>
                <div><strong class="text-gold">Bespoke Options:</strong> ${car.options}</div>
                <div><strong class="text-gold">Warranty:</strong> ${car.warranty}</div>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
                <button class="btn btn-gold btn-sm" id="modal-book-btn">Book a Test Drive</button>
                <a href="https://wa.me/${SHOWROOM_CONFIG.whatsappNumber}?text=${waMsg}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                  <i class="fa-brands fa-whatsapp" style="color:#25D366;"></i> Enquire Now
                </a>
                <button class="btn btn-outline btn-sm" id="modal-wish-btn">
                  <i class="${isWishlisted ? "fa-solid" : "fa-regular"} fa-heart text-gold"></i>
                  <span>${isWishlisted ? "Saved in Wishlist" : "Add to Wishlist"}</span>
                </button>
                <button class="btn btn-outline btn-sm" id="modal-compare-btn">
                  <i class="fa-solid fa-code-compare text-gold"></i>
                  <span>Compare Vehicle</span>
                </button>
              </div>
            </div>
          </div>
        `;

        if (window.innerWidth < 860) {
          body.querySelector(".modal-car-grid").style.gridTemplateColumns = "1fr";
        }

        const mainImg = document.getElementById("modal-main-img");
        body.querySelectorAll(".gallery-thumb").forEach(thumb => {
          thumb.addEventListener("click", () => {
            body.querySelectorAll(".gallery-thumb").forEach(t => t.classList.remove("active"));
            thumb.classList.add("active");
            mainImg.src = thumb.getAttribute("data-thumb-src");
          });
        });

        let angleIdx = 0;
        document.getElementById("toggle-360-btn").addEventListener("click", () => {
          angleIdx = (angleIdx + 1) % car.images.length;
          mainImg.src = car.images[angleIdx];
          showToast(`Rotated exterior angle view (${angleIdx + 1}/${car.images.length}). Full 360° turntable active in showroom.`);
        });

        document.getElementById("modal-book-btn").addEventListener("click", () => prefillTestDrive(car.id));
        document.getElementById("modal-wish-btn").addEventListener("click", () => {
          toggleWishlist(car.id);
          openCarDetailModal(car.id);
        });
        document.getElementById("modal-compare-btn").addEventListener("click", () => {
          closeAllModals();
          addToCompare(car.id);
        });

        modal.classList.add("open");
      }

      /* ----------------------------------------------------------------------
         14. WISHLIST MODAL & EDITORIAL READER MODAL
         ---------------------------------------------------------------------- */
      function renderWishlistModal() {
        const container = document.getElementById("wishlist-items-container");
        if (!container) return;

        if (state.wishlist.length === 0) {
          container.innerHTML = `
            <p style="color:var(--text-secondary); padding:1.5rem 0;">
              Your wishlist is currently empty. Click the heart icon on any automobile card to curate your personal shortlist.
            </p>
          `;
          return;
        }

        container.innerHTML = state.wishlist.map(id => {
          const car = CARS_INVENTORY.find(c => c.id === id);
          if (!car) return "";
          return `
            <div style="display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:1rem; padding:1rem 0; border-bottom:1px solid var(--border-subtle);">
              <div style="display:flex; align-items:center; gap:1rem;">
                <img src="${car.images[0]}" alt="${car.model}" style="width:90px; height:60px; object-fit:cover; border-radius:var(--radius-sm);" onerror="this.src='${SHOWROOM_CONFIG.fallbackImage}'" />
                <div>
                  <div style="font-size:0.72rem; color:var(--gold-champagne); text-transform:uppercase; letter-spacing:0.12em;">${car.brand}</div>
                  <div class="font-serif" style="font-size:1.25rem;">${car.model}</div>
                  <div style="font-size:0.82rem; color:var(--text-secondary);">${car.priceDisplay} &bull; ${car.horsepower} HP</div>
                </div>
              </div>
              <div style="display:flex; gap:0.5rem;">
                <button class="btn btn-gold btn-sm" data-wl-view="${car.id}">Details</button>
                <button class="btn btn-outline btn-sm" data-wl-remove="${car.id}" aria-label="Remove"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>
          `;
        }).join("");

        container.querySelectorAll("[data-wl-view]").forEach(btn => {
          btn.addEventListener("click", () => {
            closeAllModals();
            openCarDetailModal(btn.getAttribute("data-wl-view"));
          });
        });
        container.querySelectorAll("[data-wl-remove]").forEach(btn => {
          btn.addEventListener("click", () => toggleWishlist(btn.getAttribute("data-wl-remove")));
        });
      }

      function renderJournal() {
        const grid = document.getElementById("journal-grid");
        grid.innerHTML = JOURNAL_ARTICLES.map(art => `
          <article class="journal-card">
            <img src="${art.image}" alt="${art.title}" loading="lazy" onerror="this.src='${SHOWROOM_CONFIG.fallbackImage}'" />
            <div class="journal-card-body">
              <div style="font-size:0.72rem; letter-spacing:0.16em; text-transform:uppercase; color:var(--gold-champagne); margin-bottom:0.4rem;">
                ${art.category} &bull; ${art.date}
              </div>
              <h3 class="font-serif" style="font-size:1.45rem; line-height:1.25; margin-bottom:0.75rem;">${art.title}</h3>
              <p style="font-size:0.86rem; color:var(--text-secondary); margin-bottom:1.35rem; flex:1;">${art.excerpt}</p>
              <button class="btn btn-ghost-gold btn-sm" data-article-id="${art.id}" style="align-self:flex-start;">Read Editorial</button>
            </div>
          </article>
        `).join("");

        grid.querySelectorAll("[data-article-id]").forEach(btn => {
          btn.addEventListener("click", () => {
            const art = JOURNAL_ARTICLES.find(a => a.id === btn.getAttribute("data-article-id"));
            if (!art) return;
            document.getElementById("reader-modal-body").innerHTML = `
              <span class="section-eyebrow">${art.category}</span>
              <h2 id="reader-modal-title" class="font-serif" style="font-size:2.1rem; line-height:1.18; margin-bottom:1rem;">${art.title}</h2>
              <img src="${art.image}" alt="${art.title}" style="width:100%; height:300px; object-fit:cover; border-radius:var(--radius-md); margin-bottom:1.5rem;" onerror="this.src='${SHOWROOM_CONFIG.fallbackImage}'" />
              <p style="font-size:1rem; color:var(--text-secondary); line-height:1.8;">${art.fullText}</p>
            `;
            document.getElementById("reader-modal").classList.add("open");
          });
        });
      }

      function closeAllModals() {
        document.querySelectorAll(".modal-backdrop").forEach(m => m.classList.remove("open"));
      }

      /* ----------------------------------------------------------------------
         15. EVENT LISTENERS & INITIALIZATION
         ---------------------------------------------------------------------- */
      window.addEventListener("load", () => {
        setTimeout(() => {
          const preloader = document.getElementById("preloader");
          if (preloader) preloader.classList.add("hidden");
        }, 550);
      });

      document.addEventListener("DOMContentLoaded", () => {
        document.getElementById("current-year").textContent = new Date().getFullYear();
        updateWishlistBadge();
        populateDropdowns();
        renderBrands();
        renderInventory();
        renderCollections();
        syncCompareDropdowns();
        renderComparisonTable();
        renderJournal();

        const todayStr = new Date().toISOString().split("T")[0];
        document.getElementById("td-date").setAttribute("min", todayStr);

        const navbar = document.getElementById("navbar");
        const heroParallax = document.getElementById("hero-parallax");
        const backToTop = document.getElementById("back-to-top");

        window.addEventListener("scroll", () => {
          const y = window.scrollY;
          if (y > 50) navbar.classList.add("scrolled");
          else navbar.classList.remove("scrolled");

          if (heroParallax && y < window.innerHeight) {
            heroParallax.style.transform = `scale(1.05) translateY(${y * 0.18}px)`;
          }

          if (y > 600) backToTop.classList.add("visible");
          else backToTop.classList.remove("visible");
        }, { passive: true });

        backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

        const drawer = document.getElementById("mobile-drawer");
        const mobileOpenBtn = document.getElementById("mobile-menu-open");
        const mobileCloseBtn = document.getElementById("mobile-menu-close");
        if (mobileOpenBtn && drawer) mobileOpenBtn.addEventListener("click", () => drawer.classList.add("open"));
        if (mobileCloseBtn && drawer) mobileCloseBtn.addEventListener("click", () => drawer.classList.remove("open"));
        document.querySelectorAll(".mobile-nav-link").forEach(link => {
          link.addEventListener("click", () => { if (drawer) drawer.classList.remove("open"); });
        });

        const navSearchTrigger = document.getElementById("nav-search-trigger");
        if (navSearchTrigger) {
          navSearchTrigger.addEventListener("click", () => {
            document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
            setTimeout(() => document.getElementById("filter-search").focus(), 500);
          });
        }

        const navWishlistTrigger = document.getElementById("nav-wishlist-trigger");
        if (navWishlistTrigger) {
          navWishlistTrigger.addEventListener("click", () => {
            renderWishlistModal();
            document.getElementById("wishlist-modal").classList.add("open");
          });
        }

        document.querySelectorAll(".country-tab").forEach(tab => {
          tab.addEventListener("click", () => {
            document.querySelectorAll(".country-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            state.activeCountryTab = tab.getAttribute("data-country");
            renderBrands();
          });
        });

        document.getElementById("reset-brand-filter-btn").addEventListener("click", () => {
          state.activeCountryTab = "ALL";
          document.querySelectorAll(".country-tab").forEach(t => t.classList.toggle("active", t.getAttribute("data-country") === "ALL"));
          document.getElementById("filter-brand").value = "ALL";
          renderBrands();
          renderInventory();
        });

        [
          "filter-search", "filter-brand", "filter-country", "filter-body",
          "filter-fuel", "filter-price", "filter-hp", "filter-seats",
          "filter-condition", "filter-sort"
        ].forEach(id => {
          const el = document.getElementById(id);
          el.addEventListener(el.tagName === "INPUT" ? "input" : "change", () => {
            if (id === "filter-brand") renderBrands();
            renderInventory();
          });
        });

        document.getElementById("clear-all-filters").addEventListener("click", clearAllFilters);

        document.querySelectorAll(".compare-select").forEach(select => {
          select.addEventListener("change", () => {
            const slot = parseInt(select.getAttribute("data-slot"), 10);
            state.compareIds[slot] = select.value;
            renderComparisonTable();
          });
        });

        document.querySelectorAll("[data-footer-brand]").forEach(link => {
          link.addEventListener("click", () => {
            clearAllFilters();
            document.getElementById("filter-brand").value = link.getAttribute("data-footer-brand");
            renderBrands();
            renderInventory();
          });
        });

        document.getElementById("test-drive-form").addEventListener("submit", e => {
          e.preventDefault();
          const name = document.getElementById("td-name").value.trim();
          const phone = document.getElementById("td-phone").value.trim();
          const email = document.getElementById("td-email").value.trim();
          const modelId = document.getElementById("td-model").value;
          const date = document.getElementById("td-date").value;
          const time = document.getElementById("td-time").value;

          if (!name || phone.length < 8 || !email.includes("@") || !modelId || !date) {
            showToast("Please complete all required fields with valid contact and vehicle details.", "fa-solid fa-circle-exclamation text-gold");
            return;
          }

          const car = CARS_INVENTORY.find(c => c.id === modelId);
          const carLabel = car ? `${car.brand} ${car.model}` : "Selected Vehicle";
          const confBox = document.getElementById("td-confirmation");

          confBox.style.display = "block";
          confBox.innerHTML = `
            <div style="color:var(--gold-champagne); font-weight:600; margin-bottom:0.4rem;">
              <i class="fa-solid fa-circle-check"></i> Demonstration Request Recorded (${carLabel})
            </div>
            <p style="color:var(--text-secondary); margin-bottom:0.5rem;">
              Thank you, <strong>${name}</strong>. Your preference for <strong>${carLabel}</strong> on <strong>${date}</strong> at <strong>${time}</strong> has been validated.
            </p>
            <p style="color:var(--text-muted); font-size:0.8rem;">
              <strong>Frontend Demonstration Notice:</strong> No live backend server is connected to this preview, so this submission does not reserve an actual dealership test drive. For direct enquiries, please use the WhatsApp Concierge option.
            </p>
          `;
          showToast("Test drive demonstration summary generated.");
        });

        document.getElementById("newsletter-form").addEventListener("submit", e => {
          e.preventDefault();
          const email = document.getElementById("newsletter-email").value.trim();
          if (!email.includes("@")) return;
          document.getElementById("newsletter-email").value = "";
          showToast("Frontend Demo: Private dispatch subscription validated.");
        });

        document.querySelectorAll(".policy-trigger").forEach(link => {
          link.addEventListener("click", e => {
            e.preventDefault();
            const title = link.getAttribute("data-policy");
            document.getElementById("reader-modal-body").innerHTML = `
              <span class="section-eyebrow">Legal &amp; Transparency</span>
              <h2 id="reader-modal-title" class="font-serif" style="font-size:2rem; margin-bottom:1rem;">${title}</h2>
              <p style="color:var(--text-secondary); font-size:0.92rem; line-height:1.75;">
                This website is an automotive showroom showcase for <strong>ELITE MOTORS (Jubilee Hills, Hyderabad, Telangana, India)</strong>. All vehicle prices shown in INR are illustrative estimates, availability statuses are representative catalog labels, and interactive forms operate as frontend demonstrations without live backend reservation storage.
              </p>
            `;
            document.getElementById("reader-modal").classList.add("open");
          });
        });

        document.getElementById("close-car-modal").addEventListener("click", closeAllModals);
        document.getElementById("close-wishlist-modal").addEventListener("click", closeAllModals);
        document.getElementById("close-reader-modal").addEventListener("click", closeAllModals);
        document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
          backdrop.addEventListener("click", e => {
            if (e.target === backdrop) closeAllModals();
          });
        });
        document.addEventListener("keydown", e => {
          if (e.key === "Escape") closeAllModals();
        });
      });
    })();
