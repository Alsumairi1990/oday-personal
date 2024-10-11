-- CreateTable
CREATE TABLE "AboutUsSection" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "title" TEXT,
    "titleAr" TEXT,
    "desc" TEXT,
    "descAr" TEXT,
    "more" TEXT,
    "moreAr" TEXT,
    "url" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "AboutUsSection_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AboutUsSection" ADD CONSTRAINT "AboutUsSection_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
