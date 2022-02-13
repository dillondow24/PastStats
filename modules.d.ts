declare namespace NodeJS {
  export interface ProcessEnv {
    REGION: string;
    ACCESS_KEY_ID: string;
    SECRET_ACCESS_KEY: string;
    DATABASE_PORT: string;
    SERVER_PORT: string;
    MOBILE_PORT: string;
    WEB_PORT: string;
  }
}