import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  enterprise_name: z.string(),
  payment_method: z.string(),
  payment_type: z.string(),
});


type Schema = z.infer<typeof schema>;

export const useCourseForm = (props: { project_name: string }) => {
  const {
    handleSubmit,
    register,
    formState,
    control,
    reset
  } = useForm<Schema>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: Schema) => {
    await fetch("/api/lead", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, project_name: props.project_name })
    })
    reset()
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors: formState.errors,
    control
  }
}