export interface About {
  title: string;
  greeting: string;
  education: string;
  teaching_mission: string;
  teaching_goal: string;
  individual_approach: string;
  section_title: string;
  emotional_reward: string;
  final_message: string;
  experience_block: Experience;
  advantages: string[];
}

export interface Experience {
  title: string;
  places: string[];
}
export interface Content {
  title: string;
  description: string;
  features: string[];
  price: number;
  discount: string;
  goal: string;
  call_to_action: string;
  place?: string;
  attention?: string;
}
export interface ServiceOptions {
  [key: string]: { id: number; type: string; content: Content; slides: Slides[] };
}
export interface Slides {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Services {
  title: string;
  options: ServiceOptions;
}

export interface Review {
  name: string;
  about: string;
  review: string;
  image: string;
}

export interface Reviews {
  title: string;
  list: Review[];
}

export interface Contacts {
  title: string;
  telegram: string;
  phone: string;
  phone_separator: string;
  mail: string;
  help: string;
  formName: string;
  formMessage: string;
  formSuccess: string;
  formFailed: string;
  formSend: string;
  formCaptcha: string;
  formPhone: string;
  place: string;
  place_link: string;
  owner: string;
  license: string;
  developer: string;
  developer_name: string;
  developer_link: string;
}

export interface ContentItem {
  homeNav: string;
  aboutNav: string;
  servicesNav: string;
  reviewsNav: string;
  contactsNav: string;
  name: string;
  surname: string;
  seo_title: string;
  quote: string;
  about: About;
  services: Services;
  reviews: Reviews;
  contacts: Contacts;
}

export type DefaultContent = ContentItem;
