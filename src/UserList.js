import React, { useState } from "react";

export default function UserList() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const [menuOpen, setMenuOpen] = useState(true);

  const names = [
    "John Smith",
    "Emily Johnson",
    "Michael Williams",
    "Ava Jones",
    "Daniel Brown",
    "Sophia Davis",
    "Christopher Miller",
    "Olivia Wilson",
    "Matthew Moore",
    "Emma Taylor",
    "Ethan Anderson",
    "Isabella Martinez",
    "William Jackson",
    "Amelia Harris",
    "Alexander Carter",
  ];

  const filteredTags = names.filter(
    (item) =>
      item?.toLocaleLowerCase()?.includes(query.toLocaleLowerCase()?.trim()) &&
      !selected.includes(item)
  );
  return (
    <div className="w-1/3 mx-auto">
      <h1 className="text-3xl font-semibold text-center my-12">Pick User</h1>
      <div>
        <div className="flex flex-auto flex-wrap border-b-2 border-b-indigo-900">
          {selected?.length > 0 &&
            selected.map((name) => {
              return (
                <div className="flex justify-center items-center m-1 font-medium py-1 px-2 bg-blue-200 rounded-full text-teal-700 bg-teal-100 border border-teal-300 ">
                  <div className="text-xs font-normal leading-none max-w-full flex-initial">
                    {name}
                  </div>
                  <div className="flex flex-auto flex-row-reverse">
                    <div>
                      <svg
                        onClick={() =>
                          setSelected(selected.filter((i) => i !== name))
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        width="100%"
                        height="100%"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
                      >
                        <line x1={18} y1={6} x2={6} y2={18} />
                        <line x1={6} y1={6} x2={18} y2={18} />
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          <div className="flex-1">
            <input
              value={query}
              type="text"
              onFocus={() => setMenuOpen(true)}
              onBlur={() => setMenuOpen(false)}
              onChange={(e) => setQuery(e.target.value.trimStart())}
              className="bg-transparent p-1 px-2 outline-none h-full w-full text-gray-800 "
            />
          </div>
        </div>
        {menuOpen && (
          <div className="h-64 overflow-auto">
            <div className="flex flex-col w-full bg-gray-200 ">
              {filteredTags?.length > 0 &&
                filteredTags.map((name, i) => {
                  return (
                    <div
                      key={i}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={(e) => {
                        setMenuOpen(true);
                        setSelected((prev) => [...prev, name]);
                        setQuery("");
                      }}
                      className="cursor-pointer w-full border-gray-100 rounded-t border-b hover:bg-teal-100"
                    >
                      <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                        <div className="w-full items-center flex">
                          <div className="mx-2 leading-6">{name}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
