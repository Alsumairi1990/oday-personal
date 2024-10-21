import { Market, MarketPage, Page } from "@prisma/client";

export type MarketWithModels = Market & {
  marketPages: (MarketPage & {
    mrPage: Page;
  })[];
};