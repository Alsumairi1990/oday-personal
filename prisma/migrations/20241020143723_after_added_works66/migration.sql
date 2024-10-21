-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "description" TEXT,
    "descriptionAr" TEXT,
    "title" TEXT,
    "titleAr" TEXT,
    "image" TEXT,
    "icon" TEXT,

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketPage" (
    "marketId" INTEGER NOT NULL,
    "pageId" INTEGER NOT NULL,
    "url" TEXT,

    CONSTRAINT "MarketPage_pkey" PRIMARY KEY ("marketId","pageId")
);

-- AddForeignKey
ALTER TABLE "MarketPage" ADD CONSTRAINT "MarketPage_marketId_fkey" FOREIGN KEY ("marketId") REFERENCES "Market"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MarketPage" ADD CONSTRAINT "MarketPage_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;
