import {
  Bell,
  Bookmark,
  CircleEllipsis,
  Hash,
  Home,
  LucideIcon,
  Mail,
  NotepadText,
  UserRound,
} from "lucide-react";

type navItemType = {
  title: string;
  link: string;
  Icon: LucideIcon;
};

export const sidebar: navItemType[] = [
  {
    title: "Home",
    link: "/",
    Icon: Home,
  },
  {
    title: "Explore",
    link: "/explore",
    Icon: Hash,
  },
  {
    title: "Notifications",
    link: "/notifications",
    Icon: Bell,
  },
  {
    title: "Messages",
    link: "/messages",
    Icon: Mail,
  },
  {
    title: "Bookmarks",
    link: "/bookmarks",
    Icon: Bookmark,
  },
  {
    title: "Lists",
    link: "/lists",
    Icon: NotepadText,
  },
  {
    title: "Profile",
    link: "/profile",
    Icon: UserRound,
  },
  {
    title: "More",
    link: "/more",
    Icon: CircleEllipsis,
  },
];

const user = {
  iss: "https://accounts.google.com",
  azp: "225388805120-1ggn2u85vkgicrsiohar5fiumrolemkp.apps.googleusercontent.com",
  aud: "225388805120-1ggn2u85vkgicrsiohar5fiumrolemkp.apps.googleusercontent.com",
  sub: "116650959663321115977",
  email: "chennanagarjuna3777@gmail.com",
  email_verified: "true",
  nbf: "1712030619",
  name: "Nagarjuna Chenna",
  picture:
    "https://lh3.googleusercontent.com/a/ACg8ocJ4jz9vxS4F29jgTSwjlQ4qajc9M2uzM-r-tAPcNDibsQ=s96-c",
  given_name: "Nagarjuna",
  family_name: "Chenna",
  iat: "1712030919",
  exp: "1712034519",
  jti: "1b0185111bfc35205f0fe9f9bb2d55910ee826b0",
  alg: "RS256",
  kid: "934a5816468b95703953d14e9f15df5d09a401e4",
  typ: "JWT",
};
