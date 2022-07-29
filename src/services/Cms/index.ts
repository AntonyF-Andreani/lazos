import axios, { AxiosInstance, AxiosResponse } from "axios";

import { Content, CmsResponse } from "./types";

class CmsServiceClass {
  private readonly client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "https://gapi.storyblok.com/v1/api",
      headers: {
        token: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN as string,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    this.client.interceptors.response.use((resp: AxiosResponse<{ data: { error?: string } }>) => {
      if (resp.data.data.error) {
        throw new Error(resp.data.data.error);
      }

      return resp;
    });
  }

  getContentFetch = async () =>
    this.client.post<{ query: string }, AxiosResponse<CmsResponse<Content>>>("", {
      query: `{
          LazoscontentItem(id: "lazos/instituciones"){
            content {
              banner_image{
                alt
                filename
              }
              information_section
              logo_navbar {
                alt
                filename
                title
              }
              logo_navbar_dark {
                alt
                filename
                title
              }
              sidebar
              logo_fundacion{
                alt
                filename
              }
              logo_andreani{
                alt
                filename
              }
              title_logos
              terms {
                filename
              }
              logos
              program_information_title
              program_information_description              
              program_information_title_w
              program_information_description_w
              media
              title_steps,
              steps
              title_testimonials
              testimonials_image {
                alt
                filename                
              }
              testimonials
            }
          }
        }`,
    });
}

export const CmsService = new CmsServiceClass();
