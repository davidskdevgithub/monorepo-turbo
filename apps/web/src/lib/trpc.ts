"use client";

import type { AppRouter } from "@repo/trpc-router/router";
import {
	type CreateTRPCReact,
	createTRPCReact,
	httpBatchLink,
} from "@trpc/react-query";

export const trpc: CreateTRPCReact<AppRouter, unknown, null> =
	createTRPCReact<AppRouter>();

export const trpcClient = trpc.createClient({
	links: [
		httpBatchLink({
			url: "/trpc",
		}),
	],
});
