const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const brainDir = 'C:/Users/TECHISTICS/.gemini/antigravity-ide/brain/533642bd-c0db-4830-b9b0-66756819f4a2';

const masters = {
  hero: path.join(brainDir, 'luxury_hotel_hero_1792696574773.jpg'),
  promo: path.join(brainDir, 'luxury_hotel_promo_1792696662675.jpg'),
  bedroom: path.join(brainDir, 'luxury_hotel_bedroom_1792696688617.jpg'),
  lounge: path.join(brainDir, 'luxury_suite_lounge_1792696726832.jpg'),
  bathroom: path.join(brainDir, 'luxury_hotel_bathroom_1792696759772.jpg'),
  restaurant: path.join(brainDir, 'luxury_hotel_restaurant_1792696794687.jpg'),
  spa: path.join(brainDir, 'luxury_hotel_spa_1792696835995.jpg'),
  pool: path.join(brainDir, 'luxury_hotel_pool_1792696880588.jpg'),
  gym: path.join(brainDir, 'luxury_hotel_gym_1792696929885.jpg'),
  lobby: path.join(brainDir, 'luxury_hotel_lobby_1792696982683.jpg'),
  gm: path.join(brainDir, 'hotel_general_manager_1792697048521.jpg'),
  chef: path.join(brainDir, 'executive_head_chef_1792697112492.jpg'),
};

async function createLogos() {
  function getLogoSvg(textColor, accentColor) {
    return `<svg width="500" height="120" viewBox="0 0 500 120" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .brand { font-family: 'Montserrat', Arial, sans-serif; font-size: 38px; font-weight: 900; letter-spacing: 0.38em; fill: ${textColor}; }
          .sub { font-family: 'Montserrat', Arial, sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 0.55em; fill: ${textColor}; opacity: 0.85; }
          .star { fill: ${accentColor}; }
        </style>
      </defs>
      <!-- Crown / Star Accent -->
      <polygon points="250,15 254,26 266,26 256,33 260,45 250,38 240,45 244,33 234,26 246,26" class="star" />
      <text x="250" y="80" text-anchor="middle" class="brand">LUXEX</text>
      <line x1="160" y1="92" x2="340" y2="92" stroke="${textColor}" stroke-width="1" opacity="0.3" />
      <text x="250" y="108" text-anchor="middle" class="sub">THE HOTEL &amp; RESORT</text>
    </svg>`;
  }

  const lightSvg = Buffer.from(getLogoSvg('#ffffff', '#f3bf3d'));
  const darkSvg = Buffer.from(getLogoSvg('#111111', '#d4a017'));

  await sharp(lightSvg).webp({ quality: 95 }).toFile('./public/assets/images/logo-light.webp');
  await sharp(lightSvg).webp({ quality: 95 }).toFile('./public/assets/images/logo-footer.webp');
  await sharp(darkSvg).webp({ quality: 95 }).toFile('./public/assets/images/logo-dark.webp');
  console.log('Logos created successfully.');
}

async function convertImage(srcPath, destPath, options = {}) {
  const dir = path.dirname(destPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  let pipeline = sharp(srcPath);

  if (options.width || options.height) {
    pipeline = pipeline.resize(options.width, options.height, {
      fit: options.fit || 'cover',
      position: options.position || 'center',
    });
  }

  await pipeline.webp({ quality: options.quality || 85 }).toFile(destPath);
  console.log(`Saved: ${destPath}`);
}

async function run() {
  await createLogos();

  // Landing page assets
  await convertImage(masters.hero, './src/pages/Landing/assets/hero/1.webp', { width: 1920, height: 1080 });
  await convertImage(masters.promo, './src/pages/Landing/assets/promo/1.webp', { width: 1920, height: 1080 });

  // Landing demo cards
  await convertImage(masters.hero, './src/pages/Landing/assets/demos/1.webp', { width: 800, height: 500 });
  await convertImage(masters.pool, './src/pages/Landing/assets/demos/2.webp', { width: 800, height: 500 });
  await convertImage(masters.bedroom, './src/pages/Landing/assets/demos/3.webp', { width: 800, height: 500 });
  await convertImage(masters.promo, './src/pages/Landing/assets/demos/4.webp', { width: 800, height: 500 });

  // Backgrounds
  await convertImage(masters.hero, './public/assets/images/background/hero-bg-1.webp', { width: 1920, height: 1080 });
  await convertImage(masters.bedroom, './public/assets/images/background/hero-bg-2.webp', { width: 1920, height: 1080 });
  await convertImage(masters.pool, './public/assets/images/background/hero-bg-3.webp', { width: 1920, height: 1080 });
  await convertImage(masters.restaurant, './public/assets/images/background/hero-bg-4.webp', { width: 1920, height: 1080 });

  await convertImage(masters.promo, './public/assets/images/background/parallax-image-bg-1.webp', { width: 1920, height: 1080 });
  await convertImage(masters.spa, './public/assets/images/background/parallax-image-bg-2.webp', { width: 1920, height: 1080 });
  await convertImage(masters.lobby, './public/assets/images/background/parallax-image-bg-3.webp', { width: 1920, height: 1080 });
  await convertImage(masters.lounge, './public/assets/images/background/parallax-image-bg-4.webp', { width: 1920, height: 1080 });

  // Rooms
  await convertImage(masters.lobby, './public/assets/images/rooms/rooms-intro/1.webp', { width: 1200, height: 800 });
  await convertImage(masters.bedroom, './public/assets/images/rooms/rooms-single/1.webp', { width: 1200, height: 800 });
  await convertImage(masters.lounge, './public/assets/images/rooms/rooms-single/2.webp', { width: 1200, height: 800 });
  await convertImage(masters.promo, './public/assets/images/rooms/rooms-single/3.webp', { width: 1200, height: 800 });
  await convertImage(masters.bedroom, './public/assets/images/rooms/rooms-single/4.webp', { width: 1200, height: 800, position: 'right' });
  await convertImage(masters.bathroom, './public/assets/images/rooms/rooms-single/5.webp', { width: 1200, height: 800 });

  // Facilities
  await convertImage(masters.restaurant, './public/assets/images/facilities/1.webp', { width: 1200, height: 800 });
  await convertImage(masters.pool, './public/assets/images/facilities/2.webp', { width: 1200, height: 800 });
  await convertImage(masters.spa, './public/assets/images/facilities/3.webp', { width: 1200, height: 800 });
  await convertImage(masters.gym, './public/assets/images/facilities/4.webp', { width: 1200, height: 800 });

  await convertImage(masters.restaurant, './public/assets/images/facilities/restaurant/1.webp', { width: 1600, height: 900 });
  await convertImage(masters.pool, './public/assets/images/facilities/pool/1.webp', { width: 1600, height: 900 });
  await convertImage(masters.spa, './public/assets/images/facilities/spa/1.webp', { width: 1600, height: 900 });
  await convertImage(masters.gym, './public/assets/images/facilities/fitness/1.webp', { width: 1600, height: 900 });

  // About & Contact
  await convertImage(masters.lobby, './public/assets/images/about/1.webp', { width: 1400, height: 900 });
  await convertImage(masters.lobby, './public/assets/images/contact/1.webp', { width: 1400, height: 900 });

  await convertImage(masters.lobby, './public/assets/images/about/services/1.webp', { width: 800, height: 600 });
  await convertImage(masters.restaurant, './public/assets/images/about/services/2.webp', { width: 800, height: 600 });
  await convertImage(masters.spa, './public/assets/images/about/services/3.webp', { width: 800, height: 600 });
  await convertImage(masters.pool, './public/assets/images/about/services/4.webp', { width: 800, height: 600 });

  // Team
  await convertImage(masters.gm, './public/assets/images/about/team/1.webp', { width: 600, height: 800 });
  await convertImage(masters.chef, './public/assets/images/about/team/2.webp', { width: 600, height: 800 });
  await convertImage(masters.gm, './public/assets/images/about/team/3.webp', { width: 600, height: 800, position: 'top' });
  await convertImage(masters.chef, './public/assets/images/about/team/4.webp', { width: 600, height: 800, position: 'top' });

  // Gallery
  await convertImage(masters.hero, './public/assets/images/gallery/1.webp', { width: 1600, height: 900 });

  // Photoswipe (large & small)
  const galleryItems = [
    masters.bedroom,
    masters.pool,
    masters.restaurant,
    masters.spa,
    masters.bathroom,
    masters.lounge,
  ];

  for (let i = 0; i < galleryItems.length; i++) {
    const num = i + 1;
    await convertImage(galleryItems[i], `./public/assets/images/photoswipe/photos/large/${num}.webp`, { width: 1600, height: 1000 });
    await convertImage(galleryItems[i], `./public/assets/images/photoswipe/photos/small/${num}.webp`, { width: 600, height: 400 });
  }

  // Menu items (1 to 20): Generate distinct culinary crops from restaurant master
  for (let m = 1; m <= 20; m++) {
    await convertImage(masters.restaurant, `./public/assets/images/menu/${m}.webp`, {
      width: 400,
      height: 400,
      fit: 'cover',
    });
  }

  console.log('All images and assets successfully processed and deployed!');
}

run().catch(err => {
  console.error('Error during asset processing:', err);
  process.exit(1);
});
