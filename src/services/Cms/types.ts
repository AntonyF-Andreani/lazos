export interface Component {
  component?: string;
  _uid?: string;
  _editable?: string;
  [key: string]: unknown;
}

export interface ClientLogo extends Component {
  logo: Image;
}

export interface ClientTestimonials extends Component {
  autor: string;
  lugar: string;
  comentario: string;
}

export interface Content {
  banner_image: Image;
  logo_navbar: Image;
  logo_navbar_dark: Image;
  information_section: InformationData[];
  texto_boton?: string;
  sidebar: SidebarData[];
  logo_fundacion: Image;
  logo_andreani: Image;
  title_logos: string;
  terms: File;
  logos: ClientLogo[];
  program_information_title: string;
  program_information_description: string;
  program_information_title_w: string;
  program_information_description_w: string;
  title_steps: string;
  steps: Step[];
  media?: Media[];
  title_testimonials: string;
  testimonials_image: Image;
  testimonials: ClientTestimonials[];
}

export interface Step {
  title: string;
  description: string;
  image: Image;
  second_image?: Image;
}

export interface Media {
  facebook?: string;
  youtube?: string;
  linkedin?: string;
  twitter?: string;
}

export interface Image extends Component {
  filename: string;
  alt?: string;
}

export interface InfoSection {
  link: Link;
}
export interface Link {
  url: string;
}
export interface File extends Component {
  filename: string;
}

export interface InformationData extends InfoSection {
  button_text: string;
  description: string;
}

export interface CmsResponse<T> {
  data: { [key: string]: { content: T; slug?: string; _id?: string; full_slug?: string } };
}

export interface SidebarData {
  _uid?: string;
  link?: Link;
  text: string;
  children?: SidebarData[];
}
