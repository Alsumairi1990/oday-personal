-- CreateTable
CREATE TABLE "Work" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "imageUrls" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "serviceId" INTEGER,
    "locationId" INTEGER,
    "client" TEXT,
    "projectDate" TIMESTAMP(3),
    "projectUrl" TEXT,
    "technologies" TEXT,
    "outcome" TEXT,
    "additionalImages" TEXT[],
    "highlights" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkCategory" (
    "workId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "WorkCategory_pkey" PRIMARY KEY ("workId","categoryId")
);

-- CreateTable
CREATE TABLE "WorkTag" (
    "workId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,

    CONSTRAINT "WorkTag_pkey" PRIMARY KEY ("workId","tagId")
);

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkCategory" ADD CONSTRAINT "WorkCategory_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkCategory" ADD CONSTRAINT "WorkCategory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTag" ADD CONSTRAINT "WorkTag_workId_fkey" FOREIGN KEY ("workId") REFERENCES "Work"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkTag" ADD CONSTRAINT "WorkTag_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
