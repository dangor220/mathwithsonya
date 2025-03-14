export interface About {
  title: string;
  text: string;
}

export interface ServiceOptions {
  [key: string]: { id: number; type: string; text: string; price: string };
}

export interface Services {
  title: string;
  options: ServiceOptions;
}

export interface Review {
  name: string;
  about: string;
  review: string;
}

export interface Reviews {
  title: string;
  list: Review[];
  makeReview: string;
}

export interface Contacts {
  title: string;
}

export interface ContentItem {
  homeNav: string;
  aboutNav: string;
  servicesNav: string;
  reviewsNav: string;
  contactsNav: string;
  name: string;
  surname: string;
  quote: string;
  about: About;
  services: Services;
  reviews: Reviews;
  contacts: Contacts;
}

export type DefaultContent = ContentItem;
