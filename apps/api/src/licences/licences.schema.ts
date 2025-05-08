import { z } from "zod";

/* Final Example:
{
  "id": "1a2b3c4d-5e6f-7890-1234-567890fedcba",
  "requesting_user_id": "user-id-of-student-or-staff",
  "licence_type_id": "a1b2c3d4-e5f6-7890-1234-567890abcdef", // Relacionado con 'Sickness Leave'
  "start_date": "2023-11-01",
  "end_date": "2023-11-03",
  "reason": "Flu symptoms, attached medical certificate.",
  "status": "approved",
  "request_date": "2023-10-30T15:30:00Z",
  "resolution_date": "2023-10-31T09:15:00Z",
  "resolving_user_id": "user-id-of-admin",
  "resolution_comment": null,
  "attachment_urls": ["
https://supabase.co/storage/v1/object/public/attachments/licencia_cert_medico.pdf"],
  "created_at": "2023-10-30T15:30:00Z",
  "updated_at": "2023-10-31T09:15:00Z"
}
*/

export const LicenceSchema = z.object({
	id: z.string().uuid(),
	start_date: z.string().datetime(),
	end_date: z.string().datetime(),
	reason: z.string(),
});

export type Licence = z.infer<typeof LicenceSchema>;
