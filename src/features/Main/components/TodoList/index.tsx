const TodoList = () => {
  return (
    <div className="flex flex-col mt-5 w-64 items-center gap-8">
      <div className="flex flex-col gap-1">
        <div className="flex items-start">
          <input
            id="default-checkbox1"
            type="checkbox"
            value=""
            className="w-6 h-6 text-black bg-white border-black border-2 rounded focus:ring-black dark:focus:ring-black"
          />
          <label
            htmlFor="default-checkbox1"
            className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            Default checkbox
          </label>
        </div>

        <div className="flex items-start">
          <input
            id="default-checkbox2"
            type="checkbox"
            value=""
            className="w-6 h-6 text-black bg-white border-black border-2 rounded focus:ring-black dark:focus:ring-black"
          />
          <label
            htmlFor="default-checkbox2"
            className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            Default checkbox Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Aperiam expedita id, illum impedit nobis autem nihil enim
            sapiente placeat debitis, cum accusamus, delectus porro explicabo
            doloremque corrupti eaque aliquid facere.{" "}
          </label>
        </div>

        <div className="flex items-start">
          <input
            id="default-checkbox3"
            type="checkbox"
            value=""
            className="w-6 h-6 text-black bg-white border-black border-2 rounded focus:ring-black dark:focus:ring-black"
          />
          <label
            htmlFor="default-checkbox3"
            className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
          >
            Default checkbox
          </label>
        </div>
      </div>

      <button className="border-black border-2 rounded px-10 py-1 w-fit text-lg hover:bg-black hover:text-white">
        +
      </button>
    </div>
  );
};

export default TodoList;
