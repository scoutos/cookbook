import exp from "constants";
import { z } from "zod";

export const Message = z.object({
  id: z.string(),
  role: z.enum(["user", "assistant"]),
  content: z.string().nullable(),
  createdAt: z.date(),
  displayName: z.string().nullable(),
});

export type MessageType = z.infer<typeof Message>;

// export

export const Session = z.object({
  session_id: z.string(),
  session_display_name: z.string().nullable(),
  session_img_url: z.string().nullable(),
  identities: z.array(z.string()),
});
