import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  licences: t.router({
    getAll: publicProcedure.output(z.array(z.object({
      id: z.string().uuid(),
      start_date: z.string().datetime(),
      end_date: z.string().datetime(),
      reason: z.string(),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any),
    create: publicProcedure.input(z.object({
      id: z.string().uuid(),
      start_date: z.string().datetime(),
      end_date: z.string().datetime(),
      reason: z.string(),
    })).output(z.object({
      id: z.string().uuid(),
      start_date: z.string().datetime(),
      end_date: z.string().datetime(),
      reason: z.string(),
    })).mutation(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

