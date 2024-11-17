import { EnvelopeIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  maskPhone,
  useEntenderParaAtenderForm,
} from "./use-entender-para-atender";
import { Alert } from "../../alert";
import { cn } from "@/util/cn";

export function EntenderParaAtenderForm() {
  const {
    register,
    handleSubmit,
    isLoading,
    isSuccess,
    errors,
    setValue,
    watch,
  } = useEntenderParaAtenderForm();

  if (isSuccess) {
    return (
      <div className="mx-auto max-w-2xl lg:text-center">
        <Alert label="Sua solicitação foi enviado com sucesso. Em breve alguém da nossa equipe entrará em contato você." />
      </div>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-2xl lg:text-center">
        <h2 className="text-base font-semibold text-blue-600">
          Equipe Humaning
        </h2>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Faça contanto
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Preencha o formulário abaixo, e retornaremos o mais rápido possível.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
        autoComplete="off"
      >
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="enterprise_name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Nome
            </label>
            <div className="mt-2">
              <input
                type="text"
                id="enterprise_name"
                {...register("name")}
                placeholder="Insira o nome da empresa"
                className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
            <p id="name-error" className="mt-2 text-sm text-red-600">
              {errors.name?.message ?? ""}
            </p>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Celular
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="tel"
                id="phone"
                {...register("phone")}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="+55 (27) 99458-9874"
                value={watch("phone")}
                onChange={(e) => setValue("phone", maskPhone(e.target.value))}
              />
            </div>
            <p id="phone-error" className="mt-2 text-sm text-red-600">
              {errors.phone?.message ?? ""}
            </p>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="quant"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Quantidade de participantes
            </label>
            <div className="mt-2">
              <input
                type="number"
                id="quant"
                {...register("amount")}
                placeholder="25"
                className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
              />
            </div>
            <p id="amount-error" className="mt-2 text-sm text-red-600">
              {errors.amount?.message ?? ""}
            </p>
          </div>

          <div className="sm:col-span-full">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Mensagem de contato
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <div className="pointer-events-none absolute left-0 top-2 flex items-center pl-3">
                <EnvelopeIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <textarea
                rows={5}
                id="message"
                {...register("message")}
                className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                placeholder="Escreva sua mensagem"
              />
            </div>
            <p id="message-error" className="mt-2 text-sm text-red-600">
              {errors.message?.message ?? ""}
            </p>
          </div>

          <div className="sm:col-span-7">
            <button
              type="submit"
              disabled={isLoading}
              className={cn(
                "rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600",
                isLoading && "bg-blue-500"
              )}
            >
              Quero Contratar
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
