/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
    AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL,
    AUTH0_REDIRECT_URI: process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI,
    AUTH0_LOGOUT_REDIRECT_URI: process.env.AUTH0_LOGOUT_REDIRECT_URI,
  },
}

module.exports = nextConfig
