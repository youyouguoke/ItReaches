// Central hero background images for menu hub pages.
// WebP gameplay screenshots, self-hosted in /public/images/heroes/.
// blurDataURL: tiny inline placeholder so the hero paints instantly while
// the full image downloads — background and text appear together.

export type HeroKey =
  | "walkthrough"
  | "puzzles"
  | "achievements"
  | "collectibles"
  | "endings"
  | "faq";

export interface HeroImage {
  src: string;
  alt: string;
  blurDataURL: string;
}

const heroes: Record<HeroKey, HeroImage> = {
  walkthrough: {
    src: "/images/heroes/walkthrough.webp",
    alt: "It Reaches gameplay: hospital hallway on the first floor",
    blurDataURL:
      "data:image/webp;base64,UklGRjgAAABXRUJQVlA4ICwAAACwAQCdASoQAAkAAoBCJaQAAudlKRfwAP79BXr/EeWl5UyAW0FA6OzXW8sIAA==",
  },
  puzzles: {
    src: "/images/heroes/puzzles.webp",
    alt: "It Reaches gameplay: the Basement Cage Lock padlock puzzle",
    blurDataURL:
      "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADQAQCdASoQAAkAAoBCJZwAAp1czxF2IAD+/LV+bm1+WT5++tk4KpveMFarvFwA",
  },
  achievements: {
    src: "/images/heroes/achievements.webp",
    alt: "It Reaches gameplay: shotgun pickup room in The Sewer Hideout",
    blurDataURL:
      "data:image/webp;base64,UklGRk4AAABXRUJQVlA4IEIAAAAQAgCdASoQAAkAAoBCJYwCdADxNKUE758AAP78anGA0TIeUxUPO5FaN4TB8MS2d1S/X1IYl972nDYtbRj6cnUxtAA=",
  },
  collectibles: {
    src: "/images/heroes/collectibles.webp",
    alt: "It Reaches gameplay: Toy Police Car collectible in the Memory Area",
    blurDataURL:
      "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADwAQCdASoQAAkAAoBCJZwAAujddWzC8KAA/vktTASVoItbDP8pptR7a+BXKAxMi+o2omMcp8iNtIX7TWDL8Cn4BkgBnAAA",
  },
  endings: {
    src: "/images/heroes/endings.webp",
    alt: "It Reaches gameplay: police car escape finale at the end of The Sewer",
    blurDataURL:
      "data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACwAQCdASoQAAkAAoBCJaQAAlxULSHgAP78awSovXwne23PWHtihBMYTjIC90cJqjOzXQkAAAA=",
  },
  faq: {
    src: "/images/heroes/faq.webp",
    alt: "It Reaches gameplay: the Mutant encounter in the Basement maintenance area",
    blurDataURL:
      "data:image/webp;base64,UklGRj4AAABXRUJQVlA4IDIAAADwAQCdASoQAAkAAoBCJZQCdAEN4KbjT8AA/vxWp/qJjjs8xJlXzw1ZMyr8rMB8BuoAAA==",
  },
};

export function getHeroImage(key: HeroKey): HeroImage {
  return heroes[key];
}
