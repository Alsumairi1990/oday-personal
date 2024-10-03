-- CreateTable
CREATE TABLE "Industry" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nameAr" TEXT,
    "slug" TEXT,
    "title" TEXT,
    "titleAr" TEXT,
    "image" TEXT,
    "description" TEXT,
    "descriptionAr" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Industry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToIndustry" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToIndustry_AB_unique" ON "_CategoryToIndustry"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToIndustry_B_index" ON "_CategoryToIndustry"("B");

-- AddForeignKey
ALTER TABLE "Industry" ADD CONSTRAINT "Industry_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToIndustry" ADD CONSTRAINT "_CategoryToIndustry_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToIndustry" ADD CONSTRAINT "_CategoryToIndustry_B_fkey" FOREIGN KEY ("B") REFERENCES "Industry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
