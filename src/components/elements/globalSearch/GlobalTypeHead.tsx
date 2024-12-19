"use client";
import React, { useEffect, useState } from "react";
import { AsyncTypeahead, Menu, MenuItem } from "react-bootstrap-typeahead";
import { useGlobalSearchStore } from "@/zustandStore/globalSearch";
import { user } from "@/assets";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useFetchAllCategories, useSearchAutoSuggestion } from "@/app/_queryCall/csr";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcSearch } from "react-icons/fc";

export default function GlobalTypeHead() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { searchTerms, addSearchTerm, removeSearchTerm, removeAllSearchTerm } =
    useGlobalSearchStore();
  const fetchSuggestions = useSearchAutoSuggestion();
  const { categories, loading, error, refetch } = useFetchAllCategories();
  const [options, setOptions] = useState<any>([
    {
      id: 13334,
      name: "cybosssss",
      slug: "/cybosssss",
      avatar: user,
      location: "Delhi",
      type: "business",
    },
  ]);

  useEffect(() => {
    fetchAllOptions();
  }, []);

  // Fetch all options on component mount
  const fetchAllOptions = async () => {
    setIsLoading(true);
    if (!error && categories) {
      const newOptions = categories.map((opt: any) => ({
        id: opt.id,
        name: opt.name,
        slug: opt.slug || "",
        avatar: opt.categoryImage || "",
        location: "",
        type: "category",
      }));
      setOptions(newOptions);
    }
    setIsLoading(false);
  };

  const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };
  // Handle search input
  const handleSearch = async (query: string) => {
    // console.log("Query:", query);
    setOptions([]);
    setIsLoading(true);
    if (query !== "" && query.length > 2) {
      const { searchResults, error, refetch, loading } = await fetchSuggestions({ search: query });
      // console.log(searchResults, "searchResults");
      if (error) {
        console.error("Failed to fetch suggestions:", error);
        setIsLoading(false);
        return;
      }

      let newOptions = [];
      if (searchResults?.businesses?.length) {
        newOptions = searchResults.businesses.map((business: any) => {
          const location =
            business?.businessDetails?.addresses[0] &&
            ` ${business?.businessDetails?.addresses[0]?.city}, ${business?.businessDetails?.addresses[0]?.state}, ${business?.businessDetails?.addresses[0]?.country}`;
          return {
            id: business.id,
            name: business.name,
            slug: business.slug,
            avatar: business.businessDetails.logo || "",
            location: location || "",
            type: "business",
          };
        });
      }

      if (searchResults?.categories?.length) {
        newOptions = [
          ...newOptions,
          ...searchResults.categories.map((category: any) => ({
            id: category.id,
            name: category.name,
            slug: category.slug,
            avatar: category.categoryImage || "",
            location: "",
            type: "category",
          })),
        ];
      }

      // Update the state once with all new options
      setOptions((prevOptions: any) => [...prevOptions, ...newOptions]);
    }
    setIsLoading(false);
  };

  const debouncedHandleSearch = React.useMemo(() => debounce(handleSearch, 500), []);
  // Update the search terms when an option is selected
  const handleChange = (selected: any) => {
    if (selected.length > 0) {
      addSearchTerm({
        id: selected[0].id,
        name: selected[0].name,
        slug: selected[0].slug,
        avatar: selected[0].avatar,
        location: selected[0].location,
        type: selected[0].type,
      });
    }
  };

  // Handle clearing a previous search term
  const handleClearSearchTerm = (term: any) => {
    removeSearchTerm(term);
  };

  const handleMenuItemClick = (result: any) => {
    const url = result?.type === "business" ? `${result?.slug}` : `services/${result?.slug}`;
    router.push(url);
  };

  return (
    <div>
      <AsyncTypeahead
        id="global-typeahead"
        onFocus={() => {
          setOptions([]);
          fetchAllOptions();
        }}
        onSearch={debouncedHandleSearch}
        onChange={handleChange}
        options={options}
        labelKey="name"
        isLoading={isLoading}
        minLength={0}
        placeholder="Search anything..."
        inputProps={{ className: "border-none rounded-lg p-1 pl-3 !w-full" }}
        // useCache={true}
        renderMenu={(results, menuProps) => (
          <Menu {...menuProps}>
            <div className="max-h-60 overflow-y-auto">
              {isLoading && <p className="p-0.5 text-sm">Loading...</p>}
              {!!searchTerms.length && (
                <p className="flex justify-between p-1 pb-0 text-xs text-gray-500">
                  <span>Recent Searches</span>
                  <span
                    className="cursor-pointer text-bg1 hover:text-red-500"
                    onClick={removeAllSearchTerm}
                  >
                    Clear all
                  </span>
                </p>
              )}
              {searchTerms.map((term, index) => (
                <div key={index} className="relative">
                  <div onClick={() => handleMenuItemClick(term)}>
                    <Card
                      avatar={term.avatar}
                      name={term.name}
                      location={term.location}
                      type={term.type}
                    />
                  </div>
                  <button
                    onClick={() => handleClearSearchTerm(term)}
                    className="absolute right-1 top-1 cursor-pointer text-bg1 hover:text-red-500"
                  >
                    <AiOutlineCloseCircle />
                  </button>
                </div>
              ))}
              <hr className="border-t border-gray-300" />
              <p className="p-1 pb-0 text-xs text-gray-500">Results</p>
              {results.map((result: any, index) => (
                <MenuItem
                  key={index}
                  option={result}
                  position={index}
                  onClick={() => handleMenuItemClick(result)}
                >
                  <Card
                    avatar={result.avatar}
                    name={result.name}
                    location={result.location}
                    type={result.type}
                  />
                </MenuItem>
              ))}
            </div>
          </Menu>
        )}
      />
    </div>
  );
}

function Card({
  avatar,
  name,
  location,
  type,
}: {
  avatar: string;
  name: string;
  location?: string;
  type: string;
}) {
  return (
    <div className="grid cursor-pointer grid-cols-12 items-center gap-2 px-1 py-1 hover:bg-gray-100">
      {avatar ? (
        <Image
          src={avatar}
          alt="avatar"
          width={40}
          height={40}
          className="col-span-2 h-10 w-full cursor-pointer rounded-md object-cover"
        />
      ) : (
        <FcSearch className="col-span-2 w-full cursor-pointer text-2xl" />
      )}
      <div className="col-span-10 cursor-pointer capitalize">
        <p className="cursor-pointer truncate">{name}</p>
        <p className="cursor-pointer text-sm text-gray-400">
          {type === "category" ? "Category" : location ? location : "Location"}
        </p>
      </div>
    </div>
  );
}
