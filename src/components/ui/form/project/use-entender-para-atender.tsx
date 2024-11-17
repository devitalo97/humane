import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const schema = z.object({
  name: z.string(),
  phone: z
    .string()
    .refine(
      (value) => /^\+?(55)?\s?\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(value),
      {
        message: "Número de telefone inválido",
      }
    ),
  amount: z.coerce.number().nonnegative("O valor deve ser maior que 0"),
  message: z.string().optional(),
});

export const maskPhone = (value: string) => {
  // Remove caracteres não numéricos
  const numericValue = value.replace(/\D/g, "").slice(0, 13); // Limita ao máximo esperado

  // Regex para validação e formatação
  const match = numericValue.match(/^(?:\+?(\d{2}))?(\d{2})(\d{4,5})(\d{4})$/);

  if (match) {
    const [, countryCode, ddd, prefix, suffix] = match;

    // Formata de acordo com os grupos identificados
    return [
      countryCode ? `+${countryCode} ` : "", // Se tiver código do país
      `(${ddd}) `, // Formata o DDD (sempre necessário no Brasil)
      prefix,
      `-${suffix}`, // Formata o sufixo do número
    ].join("");
  }

  // Retorna a entrada original para valores não correspondentes
  return value;
};

type Schema = z.infer<typeof schema>;

export const useEntenderParaAtenderForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const { handleSubmit, register, formState, control, setValue, watch } =
    useForm<Schema>({
      resolver: zodResolver(schema),
    });

  const onSubmit = async (data: Schema) => {
    setIsLoading(true);
    const res = await fetch("/api/entender-para-atender", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });
    setIsLoading(false);
    res.status === 200 && setIsSuccess(true);
    window.scrollBy({
      top: -200, // Posição vertical em pixels
      behavior: "smooth", // Rolagem suave
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors: formState.errors,
    control,
    isSuccess,
    isLoading,
    setValue,
    watch,
  };
};
