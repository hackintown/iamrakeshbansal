export interface NavItem {
  id: string;
  name: string;
  href: string;
  isPdf?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const NAVBAR_CONSTANT: NavGroup[] = [
  {
    title: "Research Services",
    items: [
      {
        id: "intraday-btst-plan",
        name: "Intraday/BTST Services",
        href: "/subscriptions/intraday-btst-plan",
      },
      {
        id: "option-intraday",
        name: "Option & IntraDay Services",
        href: "/subscriptions/option-intraday",
      },

      {
        id: "mentorship-plan",
        name: "Mentorship Services",
        href: "/subscriptions/mentorship-plan",
      },
      {
        id: "futures-plan",
        name: "Futures Services",
        href: "/subscriptions/futures-plan",
      },
      {
        id: "commodity-plan",
        name: "Commodity Services",
        href: "/subscriptions/commodity-plan",
      },
      {
        id: "hni-plan",
        name: "HNI Services",
        href: "/subscriptions/hni-service",
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
        id: "disclaimer",
        name: "Disclaimer",
        href: "disclaimer",
      },
      {
        id: "privacy-policy",
        name: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        id: "terms-and-conditions",
        name: "Terms and Conditions",
        href: "/terms-conditions",
      },
      {
        id: "customer-grievances",
        name: "Customer Grievances",
        href: "customer-grievances",
      },
      {
        id: "investor-charter",
        name: "Investor Charter",
        href: "/investor-charter",
        isPdf: true,
      },
    ],
  },
  {
    title: "Blog",
    items: [],
  },
  {
    title: "Contact Us",
    items: [
      {
        id: "contact-us",
        name: "Contact Us",
        href: "/contact-us",
      },
      {
        id: "feedback-form",
        name: "Feedback Form",
        href: "https://docs.google.com/forms/d/e/1FAIpQLScbFTo1a56fkSEYXrKZevHEtuClx9WS9l5Xd3gXjdfoI-GwCg/viewform",
      },
    ],
  },
];
