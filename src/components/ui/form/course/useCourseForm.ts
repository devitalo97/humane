import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string(),
  enterprise_name: z.string(),
  payment_method: z.string(),
  payment_type: z.string(),
});


type Schema = z.infer<typeof schema>;

export const useCourseForm = (props: { project_name: string, htmlIdToScroll: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const {
    handleSubmit,
    register,
    formState,
    control,
  } = useForm<Schema>({
    resolver: zodResolver(schema)
  })

  const onSubmit = async (data: Schema) => {

    setIsLoading(true)
    const res = await fetch("/api/lead", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, project_name: props.project_name })
    })
    setIsLoading(false)
    res.status === 200 && setIsSuccess(true)
    const element = document.getElementById(props.htmlIdToScroll);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors: formState.errors,
    control,
    isLoading,
    isSuccess
  }
}