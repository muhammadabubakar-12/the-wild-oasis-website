"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();
  const pathName = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="border border-primary-800 flex">
      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter={"all"}
      >
        All Cabins
      </Button>
      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter={"small"}
      >
        1&mdash;3 guests
      </Button>
      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter={"medium"}
      >
        4&mdash;7 guests
      </Button>
      <Button
        handleFilter={handleFilter}
        activeFilter={activeFilter}
        filter={"large"}
      >
        8&mdash;12 guests
      </Button>
    </div>
  );
}

function Button({ handleFilter, children, activeFilter, filter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700 text-primary-50" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}
export default Filter;
