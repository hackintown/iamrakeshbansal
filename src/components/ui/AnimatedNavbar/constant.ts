export interface NavItem {
  id: string;
  name: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const NAVBAR_CONSTANT: NavGroup[] = [
  {
    title: "Home",
    items: [
      {
        id: "about-dr-rakesh-bansal",
        name: "About Dr. Rakesh Bansal",
        href: "/",
      },
    ],
  },
  {
    title: "Research Services",
    items: [
      {
        id: "intraday-btst-plan",
        name: "Intraday/BTST Services",
        href: "/subscriptions/intraday-btst-plan",
      },
      {
        id: "options-plan",
        name: "Index & Option Services",
        href: "/subscriptions/options-plan",
      },
      {
        id: "option-intraday",
        name: "Option & IntraDay Services",
        href: "/subscriptions/option-intraday",
      },
      {
        id: "futures-plan",
        name: "Futures Services",
        href: "/subscriptions/futures-plan",
      },
      {
        id: "mentorship-plan",
        name: "Mentorship Services",
        href: "/subscriptions/mentorship-plan",
      },
      {
        id: "commodity-plan",
        name: "Commodity Plan",
        href: "/subscriptions/commodity-plan",
      },
      {
        id: "hni",
        name: "HNI Services",
        href: "/subscriptions/hni",
      },
    ],
  },
  {
    title: "Courses",
    items: [
      {
        id: "kurukshetra",
        name: "KURUKSHETRA - Win The Battle",
        href: "/courses/kurukshetra",
      },
    ],
  },
  {
    title: "About Us",
    items: [
      {
        id: "about-dr-rakesh-bansal",
        name: "About Dr. Rakesh Bansal",
        href: "/about-us",
      },
    ],
  },
  {
    title: "Contact Us",
    items: [
      {
        id: "about-dr-rakesh-bansal",
        name: "About Dr. Rakesh Bansal",
        href: "/about-us",
      },
    ],
  },
  {
    title: "Disclaimer",
    items: [
      {
        id: "control-policy",
        name: "Control Policy",
        href: "control-policy",
      },
      {
        id: "privacy-policy",
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        id: "terms-and-conditions",
        name: "Terms and Conditions",
        href: "terms-and-conditions",
      },
    ],
  },
];
