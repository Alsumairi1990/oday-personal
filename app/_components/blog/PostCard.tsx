'use client'
import React from 'react';
import { AbstractIntlMessages } from 'next-intl';
import { Post } from '@prisma/client';
interface ServiceProps {
    post: Post;
    locale : string,
    messages : AbstractIntlMessages,
  }
const PostCard = ({ post, locale,messages }: ServiceProps) => {
    const talkToConsultant = (messages as any).CategoryPage.talkToConsultant;
    const home = (messages as any).Common.home;
  return (
        <div className="w-full " >  
       
    </div>
  );
};

export default PostCard;