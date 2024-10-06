import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  users: z.array(z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
  })),
  enterprise_name: z.string().optional(),
  enterprise_document: z.string().optional(),
  payment_method: z.string(),
  payment_type: z.string(),
});


type Schema = z.infer<typeof schema>;

export const useCourseForm = (props: { project_name: string, htmlIdToScroll: string }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSingle, setIsSingle] = useState<boolean>(true);
  const [isEnterprise, setIsEnterprise] = useState<boolean>(false);

  const {
    handleSubmit,
    register,
    formState,
    control,
  } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      users: [{ name: "", email: "", phone: "" }]
    }
  })
  const { fields: users, append, remove } = useFieldArray({
    control,
    name: "users",
  });
  const handleAppendUser = append
  const handleRemoveUser = remove

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

  const handleIsSingle = (value: boolean) => setIsSingle(value)
  const handleIsEnterprise = (value: boolean) => setIsEnterprise(value)

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors: formState.errors,
    control,
    isLoading,
    isSuccess,
    isSingle,
    handleIsSingle,
    isEnterprise,
    handleIsEnterprise,
    usersOnForm: users,
    handleAppendUser,
    handleRemoveUser
  }
}