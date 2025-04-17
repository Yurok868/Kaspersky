import type { z } from 'zod';
import type { SnippetNewsSchema } from './schema';

export type SnippetNews = z.infer<typeof SnippetNewsSchema>;
