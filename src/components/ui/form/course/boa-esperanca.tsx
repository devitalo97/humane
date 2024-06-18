import { EnvelopeIcon } from "@heroicons/react/24/outline";
import Radio from "../../radio";
import React from "react";
import { useCourseForm } from "./useCourseForm";
import { Controller } from "react-hook-form";
import { cn } from "@/util/cn";
import { Alert } from "../../alert";

export function BoaEsperancaCourseForm(props: {
  project_name: string;
  htmlIdToScroll: string;
}) {
  const { register, handleSubmit, control, isLoading, isSuccess } =
    useCourseForm({
      project_name: props.project_name,
      htmlIdToScroll: props.htmlIdToScroll,
    });

  if (isSuccess) {
    return (
      <Alert label="Sua solicitação de inscrição foi concluida com sucesso. Em breve alguém da nossa equipe entrará em contato pelo e-mail fornecido." />
    );
  }
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Informações pessoais
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Preencha o formulário abaixo com o seus dados. Entraremos em contato.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nome
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="name"
                {...register("name")}
                autoComplete="given-name"
                placeholder="João"
                className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Celular
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-3  text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm"
                >
                  <option selected={true}>BR</option>
                </select>
              </div>
              <input
                type="text"
                id="phone"
                {...register("phone")}
                className="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="(27) 99458 9874"
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <EnvelopeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="enterprise_name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Nome da empresa
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="enterprise_name"
                {...register("enterprise_name")}
                autoComplete="enterprise_name"
                placeholder="Empresa XPTO"
                className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-5">
            <Controller
              control={control}
              name="payment_method"
              render={({ field }) => (
                <Radio
                  name="payment_method"
                  label="Método de pagamento"
                  onChange={(op) => field.onChange(op.label)}
                  options={[
                    {
                      label:
                        "Integrante de empresa associada à CDL de Boa Esperança R$ 250,00.",
                    },
                    {
                      label: "Não associados. R$ 350,00.",
                    },
                  ]}
                />
              )}
            />
          </div>

          <div className="sm:col-span-6">
            <Controller
              control={control}
              name="payment_type"
              render={({ field }) => (
                <Radio
                  name="payment_type"
                  onChange={(op) => field.onChange(op.label)}
                  label="Forma de pagamento"
                  options={[
                    {
                      label:
                        "Pessoa Física: Cartão de Crédito (30 dias) ou à vista pelo Pix (027) 9 9958-0841",
                    },
                    {
                      label: "Pessoa Jurídica: Boleto (30 dias).",
                    },
                  ]}
                />
              )}
            />
          </div>

          <div className="sm:col-span-7">
            <button
              type="submit"
              className={cn(
                "rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                isLoading && "!bg-gray-600"
              )}
              disabled={isLoading}
            >
              Solicitar Inscrição
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
