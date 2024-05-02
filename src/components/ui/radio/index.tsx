/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
export default function Radio(props: {
  label: string;
  name: string;
  options: { label: string }[];
  onChange: (params: { label: string }) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        {props.label}
      </label>
      <fieldset className="mt-4">
        <legend className="sr-only">Notification method</legend>
        <div className="space-y-4">
          {props.options.map((option, index) => (
            <div
              key={option.label + index.toString()}
              className="flex items-center"
            >
              <input
                id={option.label + index.toString()}
                name={props.name}
                type="radio"
                onChange={() => props.onChange(option)}
                className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-600"
              />
              <label
                htmlFor={option.label + index.toString()}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
