/** @type {import('next').NextConfig} */
const nextConfig = {
	rewrites: async () => {
		return [
			{
				source: "/trpc/:path*",
				destination: `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/trpc"}/:path*`,
			},
		];
	},
};

export default nextConfig;
