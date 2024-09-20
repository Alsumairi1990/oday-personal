export interface PriceDTO  {
    id: string;
    amount: string | null;  // Store as string for easy editing
    startPrice: string  | null;
    median: string | null;
    currency: string | null;
    discount: string | null;
    effectiveDate: Date | null;
    expiryDate: Date | null;
    description: string | null;
    image: string | null;
    createdAt: Date;
    updatedAt: Date;
  }