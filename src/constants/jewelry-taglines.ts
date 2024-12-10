const jewelryTaglines = [
  "Adorn yourself with timeless elegance.",
  "Sparkle like never before.",
  "Crafted to perfection, made for you.",
  "Your story, beautifully told in gold.",
  "Because you deserve to shine.",
  "Radiance redefined, just for you.",
  "Where every piece tells a tale.",
  "Luxury that speaks to your soul.",
  "Unleash your inner brilliance.",
  "Jewels as unique as your journey.",
  "Elegance that never fades.",
  "Celebrate every moment with sparkle.",
  "Designed for those who dazzle.",
  "Treasures you'll cherish forever.",
  "Wear your confidence in style.",
  "When beauty meets brilliance.",
  "Jewelry that inspires and delights.",
  "For memories that last a lifetime.",
  "The perfect touch of luxury.",
  "Let your radiance shine through.",
];

function getRandomTagline(): string {
  if (!Array.isArray(jewelryTaglines) || jewelryTaglines.length === 0) {
    return "Shine with timeless elegance.";
  }
  const randomIndex = Math.floor(Math.random() * jewelryTaglines.length);
  return jewelryTaglines[randomIndex];
}

export default getRandomTagline;
