// This lets us use environment variables
declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    NOTION_KEY: string
    NOTION_DATABASE_ID: string
  }
}
