import { PriceWithModels } from "../../service/prices/utils/PriceWithModels";

export function getPriceByLocation(convertedData: PriceWithModels[]): Promise<Record<string, PriceWithModels[]>> {
  const groupedByLocation = convertedData.reduce((acc, price) => {
    const locationName = price.location.country;
    if (!acc[locationName]) {
      acc[locationName] = [];
    }
    acc[locationName].push(price);
    return acc;
  }, {} as Record<string, PriceWithModels[]>);

  return Promise.resolve(groupedByLocation);
}
