import { Product, Price, Category, Tag, Media, Service, Vendor, Location } from "@prisma/client";

export type ProductForFront = Product & {
  prices: Price[];
  categories: Category[];
  tags: Tag[];
  media: Media[];
  services: Service[];
  vendor: Vendor | null;
  locations: Location[]; // Array for the many-to-many relation with Location
};