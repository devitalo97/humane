import { EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Radio from "../../radio";
import React from "react";
import { useCourseForm } from "./useCourseForm";
import { Controller } from "react-hook-form";
import { cn } from "@/util/cn";
import { Alert } from "../../alert";
import { Toggle } from "../../toggle";

export function BoaEsperancaCourseForm(props: {
  project_name: string;
  htmlIdToScroll: string;
}) {
  const {
    register,
    handleSubmit,
    control,
    isLoading,
    isSuccess,
    isSingle,
    isEnterprise,
    usersOnForm,
    errors,
    handleAppendUser,
    handleRemoveUser,
    handleIsEnterprise,
    handleIsSingle,
  } = useCourseForm({
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
          <div className="sm:col-span-full">
            <Toggle
              label="É um cadastro para apenas uma pessoa?"
              value={isSingle}
              onChange={handleIsSingle}
            />
          </div>
          <div className="sm:col-span-full">
            <Toggle
              label="É um cadastro empresarial?"
              value={isEnterprise}
              onChange={handleIsEnterprise}
            />
          </div>
          {isSingle ? (
            <>
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Nome
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="name"
                    {...register("users.0.name")}
                    autoComplete="given-name"
                    placeholder="João"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors?.users?.[0]?.name ? (
                    <p className="text-sm text-red-500">
                      {errors?.users?.[0]?.name?.message}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
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
                    type="text"
                    id="phone"
                    {...register("users.0.phone")}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="(27) 99458 9874"
                  />
                  {errors?.users?.[0]?.phone ? (
                    <p className="text-sm text-red-500">
                      {errors?.users?.[0]?.phone?.message}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-gray-900"
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
                    {...register("users.0.email")}
                    className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    placeholder="you@example.com"
                  />
                  {errors?.users?.[0]?.email ? (
                    <p className="text-sm text-red-500">
                      {errors?.users?.[0]?.email?.message}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="col-span-full">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Pessoas
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Registre as pessoas que participarão do evento.
              </p>
              {usersOnForm.map((user, index) => (
                <div key={index} className="flex space-x-4 mt-5">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium leading-6 text-gray-900 "
                    >
                      Nome
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        id="name"
                        {...register(`users.${index}.name`)}
                        autoComplete="given-name"
                        placeholder="João"
                        className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                      />
                      {errors?.users?.[index]?.name?.message ? (
                        <p className="text-sm text-red-500">
                          {errors?.users?.[index]?.name?.message}
                        </p>
                      ) : (
                        <></>
                      )}
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
                      {/* <div className="absolute inset-y-0 left-0 flex items-center">
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
                      </div> */}
                      <input
                        type="text"
                        id="phone"
                        {...register(`users.${index}.phone`)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        placeholder="(27) 99458 9874"
                      />
                      {errors?.users?.[index]?.phone ? (
                        <p className="text-sm text-red-500">
                          {errors?.users?.[index]?.phone?.message}
                        </p>
                      ) : (
                        <></>
                      )}
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
                        {...register(`users.${index}.email`)}
                        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                      />
                      {errors?.users?.[index]?.email ? (
                        <p className="text-sm text-red-500">
                          {errors?.users?.[index]?.email?.message}
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveUser(index)}
                    className="rounded-full bg-red-600 shadow-sm hover:bg-red-500 p-1 h-fit text-white"
                  >
                    <XMarkIcon width={16} height={16} />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  handleAppendUser({
                    name: "",
                    phone: "",
                    email: "",
                  })
                }
                className="mt-5 border border-gray-300 bg-white shadow-sm hover:bg-gray-200 inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2"
              >
                Adicionar Contato
              </button>
            </div>
          )}

          {isEnterprise && (
            <>
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
                  {errors.enterprise_name ? (
                    <p className="text-sm text-red-500">
                      {errors.enterprise_name?.message}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="enterprise_document"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Cnpj da empresa
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    id="enterprise_document"
                    {...register("enterprise_document")}
                    autoComplete="enterprise_document"
                    placeholder="Empresa XPTO"
                    className="block w-full rounded-md border-0 py-1.5 pl-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  />
                  {errors.enterprise_document ? (
                    <p className="text-sm text-red-500">
                      {errors.enterprise_document?.message}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </>
          )}

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
                        "Integrante de empresa associada à CDL. R$ 250,00.",
                    },
                    {
                      label: "Não associados. R$ 350,00.",
                    },
                  ]}
                />
              )}
            />
            {errors.payment_method ? (
              <p className="text-sm text-red-500">
                Escolhe um método de pagamento
              </p>
            ) : (
              <></>
            )}
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
                      label: "Pessoa Jurídica: Boleto para o dia 30/05.",
                    },
                  ]}
                />
              )}
            />
            {errors.payment_method ? (
              <p className="text-sm text-red-500">
                Escolhe uma forma de pagamento.
              </p>
            ) : (
              <></>
            )}
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
