export interface About {
  title: string;
  text: string;
}

export interface ServiceOptions {
  [key: string]: { id: number; type: string; text: string; price: string; slides: Slides[] };
}
export interface Slides {
  src: string;
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
  mail: string;
  help: string;
  formName: string;
  formMessage: string;
  formSuccess: string;
  formFailed: string;
  formSend: string;
  formCaptcha: string;
  formPhone: string;
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
