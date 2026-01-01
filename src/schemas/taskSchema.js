import { z } from "zod";

const createTask = z.object({
  title: z.string({
    required_error: "Title is required"
  }).min(1, "Title cannot be empty"),
  description: z.string({
    required_error: "Description is required"
  }).min(1, "Description cannot be empty"),
  priority: z.enum(["high", "low"], "Priority can be high or low"),
  dueDate: z.string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD")
    .pipe(z.coerce.date())
    .refine(d => !isNaN(d.getTime()), { message: "Invalid date" })
});

const updateTask = z.object({
  taskId: z.string({
    required_error: "TaskId is required"
  }).min(1, "TaskId cannot be empty"),
  updates: z.object({
    title: z.string().min(1, "Title cannot be empty").optional(),
    description: z.string().min(1, "Title cannot be empty").optional(),
    priority: z.enum(["high", "low"], {
      errorMap: () => ({ message: "Priority can be high or low" }),
    }).optional(),
    dueDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be YYYY-MM-DD")
      .pipe(z.coerce.date())
      .refine(d => !isNaN(d.getTime()), { message: "Invalid date" })
      .optional(),
    status: z.enum(["todo", "done"], {
      errorMap: () => ({ message: "Status can be todo or done" }),
    }).optional(),
  })
  .refine(obj => Object.keys(obj).length > 0, {
    message: "At least one field must be provided for update",
  })
});

export default { createTask, updateTask };