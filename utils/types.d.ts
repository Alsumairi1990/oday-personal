import { User } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: User;
  }
}


declare module "next-auth/jwt" {
  interface JWT {
    user: User &{
      role : string
    }
  }
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    indent: {
      indent: () => ReturnType;
      outdent: () => ReturnType;
      setTweetAlignment: (code) => ReturnType;
      setTweeterEmbed: (code) => ReturnType;
      setFacebookEmbed: (code) => ReturnType;
      setInstagramEmbed: (code) => ReturnType;
      setTikTokEmbed: (code) => ReturnType;
    };
  }
}

declare module "prismjs";
