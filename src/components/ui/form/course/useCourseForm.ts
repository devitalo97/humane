import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "O nome deve ter pelo menos 3 caracteres." })
    .max(100, { message: "O nome deve ter no máximo 100 caracteres." }),

  phone: z
    .string()
    .min(8, { message: "O telefone deve ter pelo menos 8 dígitos." })
    .regex(/^\+?\d{8,15}$/, { message: "Formato de telefone inválido." }),

  email: z
    .string()
    .email({ message: "E-mail inválido." })
    .max(100, { message: "O e-mail deve ter no máximo 100 caracteres." }),
});

const schema = z.object({
  users: z
    .array(userSchema)
    .min(1, { message: "É necessário ao menos um usuário." }),

  enterprise_name: z
    .string()
    .max(100, {
      message: "O nome da empresa deve ter no máximo 100 caracteres.",
    })
    .optional(),

  enterprise_document: z
    .string()
    .regex(/^\d{11,14}$/, {
      message:
        "O documento da empresa deve conter entre 11 e 14 dígitos numéricos.",
    })
    .optional(),

  payment_method: z
    .string()
    .min(1, { message: "O método de pagamento é obrigatório." }),

  payment_type: z
    .string()
    .min(1, { message: "O tipo de pagamento é obrigatório." }),
});

type Schema = z.infer<typeof schema>;

export const useCourseForm = (props: {
  project_name: string;
  htmlIdToScroll: string;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSingle, setIsSingle] = useState<boolean>(true);
  const [isEnterprise, setIsEnterprise] = useState<boolean>(false);

  const { handleSubmit, register, formState, control } = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      users: [{ name: "", email: "", phone: "" }],
    },
  });
  const {
    fields: users,
    append,
    remove,
  } = useFieldArray({
    control,
    name: "users",
  });
  const handleAppendUser = append;
  const handleRemoveUser = remove;

  const onSubmit = async (data: Schema) => {
    setIsLoading(true);
    const res = await fetch("/api/lead", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, project_name: props.project_name }),
    });
    setIsLoading(false);
    res.status === 200 && setIsSuccess(true);
    const element = document.getElementById(props.htmlIdToScroll);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleIsSingle = (value: boolean) => setIsSingle(value);
  const handleIsEnterprise = (value: boolean) => setIsEnterprise(value);

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
    handleRemoveUser,
  };
};
