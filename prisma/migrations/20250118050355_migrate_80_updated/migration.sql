-- CreateTable
CREATE TABLE "Explore" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "nameAr" TEXT,
    "url" TEXT NOT NULL,
    "slug" TEXT,
    "title" TEXT,
    "titleAr" TEXT,
    "image" TEXT,
    "icon" TEXT,
    "description" TEXT,
    "descriptionAr" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Explore_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Explore_url_key" ON "Explore"("url");

-- AddForeignKey
ALTER TABLE "Explore" ADD CONSTRAINT "Explore_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
