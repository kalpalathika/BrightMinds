export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  illustration: string;
}

export interface VolunteerFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skills: string;
  consent: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}
