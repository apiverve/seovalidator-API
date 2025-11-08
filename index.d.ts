declare module '@apiverve/seovalidator' {
  export interface seovalidatorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface seovalidatorResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class seovalidatorWrapper {
    constructor(options: seovalidatorOptions);

    execute(callback: (error: any, data: seovalidatorResponse | null) => void): Promise<seovalidatorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: seovalidatorResponse | null) => void): Promise<seovalidatorResponse>;
    execute(query?: Record<string, any>): Promise<seovalidatorResponse>;
  }
}
