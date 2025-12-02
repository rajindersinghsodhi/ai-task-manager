import { z } from "zod";

const createTask = z.object({
  title: z.string({
    required_error: "Title is required"
  }).min(1, "Title cannot be empty"),

  priority: z.enum(["high", "low"], "Priority can be high or low"),

  dueDate: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD")
    .pipe(z.coerce.date())
    .refine(d => !isNaN(d.getTime()), { message: "Invalid date" })
});

const updateTask = z.object({
  title: z.string().min(1, "Title cannot be empty").optional(),

  priority: z.enum(["high", "low"], "Priority can be high or low").optional(),

  dueDate: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD")
    .pipe(z.coerce.date())
    .refine(d => !isNaN(d.getTime()), { message: "Invalid date" }).optional(),
  
  status: z.enum(["todo", "done"], "Status can be todo or done").optional()
});

export default { createTask, updateTask };