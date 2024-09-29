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
    title: "Services",
    items: [
      {
        id: "intraday-btst-plan",
        name: "Intraday/BTST Plan",
        href: "/subscriptions/intraday-btst-plan",
      },
      {
        id: "options-plan",
        name: "Options Plan",
        href: "/subscriptions/options-plan",
      },
      {
        id: "option-intraday",
        name: "Option & IntraDay",
        href: "/subscriptions/option-intraday",
      },
      {
        id: "futures-plan",
        name: "Futures Plan",
        href: "/subscriptions/futures-plan",
      },
      {
        id: "mentorship-plan",
        name: "Mentorship Plan",
        href: "/subscriptions/mentorship-plan",
      },
      {
        id: "commodity-plan",
        name: "Commodity Plan",
        href: "/subscriptions/commodity-plan",
      },
      {
        id: "hni",
        name: "HNI",
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
