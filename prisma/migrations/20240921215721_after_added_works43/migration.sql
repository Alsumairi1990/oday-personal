-- CreateTable
CREATE TABLE "HeroSection" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "subTitl" TEXT NOT NULL,
    "subTitlAr" TEXT NOT NULL,
    "more" TEXT NOT NULL,
    "moreAr" TEXT NOT NULL,
    "isActive" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "pageName" TEXT NOT NULL,
    "footerTitle" TEXT NOT NULL,
    "footerTitleAr" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HeroSection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageSection" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "titleAr" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "descAr" TEXT NOT NULL,
    "more" TEXT NOT NULL,
    "moreAr" TEXT NOT NULL,
    "isActive" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "itemsNo" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PageSection_pkey" PRIMARY KEY ("id")
);
