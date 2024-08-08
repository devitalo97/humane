import { Disclosure as HDisclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

export default function Disclosure(props: {
  options: { title: React.ReactNode; content: React.ReactNode }[];
  containerClassnae?: string;
}) {
  return (
    <div className={"w-full pt-8 " + props?.containerClassnae}>
      <div className="rounded-2xl bg-white p-2">
        {props.options.map((option, index) => (
          <HDisclosure key={index}>
            {({ open }) => (
              <>
                <HDisclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-4 mb-4 text-left text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500/75">
                  {option.title}
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-blue-500`}
                  />
                </HDisclosure.Button>
                <HDisclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                  {option.content}
                </HDisclosure.Panel>
              </>
            )}
          </HDisclosure>
        ))}
      </div>
    </div>
  );
}
