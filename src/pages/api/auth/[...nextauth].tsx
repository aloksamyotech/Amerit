import NextAuth from 'next-auth';
import AzureADB2CProvider from 'next-auth/providers/azure-ad-b2c';

export default NextAuth({
  providers: [
    AzureADB2CProvider({
      tenantId: process.env.NEXT_PUBLIC_AZURE_AD_B2C_TENANT_NAME,
      clientId: process.env.NEXT_PUBLIC_AZURE_AD_B2C_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_AZURE_AD_B2C_CLIENT_SECRET!,
      primaryUserFlow: process.env.NEXT_PUBLIC_AZURE_AD_B2C_PRIMARY_USER_FLOW,
      authorization: {
        params: {
          scope: `https://${process.env.NEXT_PUBLIC_AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/api/access offline_access openid`
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (profile) {
        token.roles = profile.extension_role;
      }
      if (account) {
        token.accessToken = account.access_token;
      }

      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;

      return session;
    }
  }
});
