import { Category, Customer, Service, Tag, Testimonial,  TestimonialCategory,  TestimonialTag,  User } from "@prisma/client";

export type TestimonialWithModels = Testimonial & {
    categories: (TestimonialCategory & { category: Category })[],
    tags : (TestimonialTag & { tag: Tag })[],
    user : User,
    customer : Customer,
    service : Service
  };

