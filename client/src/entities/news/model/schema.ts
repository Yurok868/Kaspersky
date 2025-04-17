import { z } from "zod";

export const TagItemSchema = z.object({
  value: z.string(),
  count: z.number(),
});

const TrafficItemSchema = z.object({
  value: z.string(),
  count: z.number(),
});

export const SnippetNewsSchema = z.object({
  ID: z.number(),
  TI: z.string(),
  AB: z.string(),
  URL: z.string().url(),
  DOM: z.string(),
  DP: z.string(),
  LANG: z.string().length(2),
  REACH: z.number(),
  KW: z.array(TagItemSchema),
  AU: z.array(z.string()),
  CNTR: z.string(),
  CNTR_CODE: z.string().length(2),
  SENT: z.string(),
  TRAFFIC: z.array(TrafficItemSchema),
  FAV: z.string().url(),
  HIGHLIGHTS: z.array(z.string()),
});

