import { z } from "zod";

export const courseSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  price: z.number().positive().optional(),
  instructor: z.string().optional(),
});
