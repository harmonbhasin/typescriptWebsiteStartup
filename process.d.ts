// This lets us use environment variables
declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string
    GOOGLE_ID: string
    GOOGLE_SECRET: string
    NOTION_KEY: string
    NOTION_EMAIL_DATABASE_ID: string
    NOTION_CLIENT_DATABASE_ID: string
    STRIPE_SECRET_KEY: string
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: string
    DATABASE_URL: string
    PREMIUM_KEY: string
    OPTIMIZE_KEY: string
  }
}
