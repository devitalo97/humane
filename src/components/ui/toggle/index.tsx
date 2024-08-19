import { useState } from "react";
import { Switch } from "@headlessui/react";
import { cn } from "@/util/cn";

interface Props {
  label?: string;
  description?: string;
  onChange?: (value: boolean) => void;
  value?: boolean;
}

export function Toggle(props: Props) {
  const { label, description, onChange, value } = props;
  const [enabled, setEnabled] = useState(value);

  const handleOnChange = (value: boolean) => {
    setEnabled(value);
    onChange?.(value);
  };

  return (
    <div className="flex items-center justify-between">
      <span className="flex flex-grow flex-col">
        {label && (
          <p className="text-sm font-medium leading-6 text-gray-900">{label}</p>
        )}
        {description && <p className="text-sm text-gray-500">{description}</p>}
      </span>
      <Switch
        checked={enabled}
        onChange={handleOnChange}
        className={cn(
          "group relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-gray-200 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2",
          enabled && "bg-indigo-600"
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
            enabled && "translate-x-5"
          )}
        />
      </Switch>
    </div>
  );
}
