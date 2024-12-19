"use client";
import React, { useEffect, useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { useLocationStore } from "@/zustandStore/location";
import { indianStatesAndUTs } from "@/data/global";

export default function LocationTypeHead() {
  const [isLoading, setIsLoading] = useState(false);
  const [allOptions, setAllOptions] = useState<{ name: string; id: string }[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<{ name: string; id: string }[]>([]);
  const location = useLocationStore((state) => state?.location);
  const setLocation = useLocationStore((state) => state?.setLocation);

  // Fetch all options on component mount
  const fetchAllOptions = async () => {
    setIsLoading(true);
    const options = await indianStatesAndUTs.map((opt) => ({ name: opt, id: opt }));
    setAllOptions(options);
    setFilteredOptions(options); // Show all initially
    setIsLoading(false);
  };

  // Handle search input
  const handleSearch = (query: string) => {
    setIsLoading(true);
    const filtered = allOptions.filter((opt) =>
      opt.name.toLowerCase().includes(query),
    );
    setFilteredOptions(filtered);
    setIsLoading(false);
  };

  // Update location when an option is selected
  const handleChange = (selected: any) => {
    if (selected.length > 0) {
      setLocation(selected[0]?.name);
    }
  };

  // useEffect(() => {
  //   fetchAllOptions();
  // }, []);

  return (
    <AsyncTypeahead
      id="location-typeahead"
      onFocus={fetchAllOptions}
      onSearch={handleSearch}
      onChange={handleChange}
      options={filteredOptions}
      labelKey="name"
      isLoading={isLoading}
      minLength={0}
      defaultInputValue={location}
      placeholder="Location"
      inputProps={{ className: "border-none rounded-lg p-1 pl-3 !w-full" }}
      useCache={true}
      renderMenuItemChildren={(option: any) => (
        <div className="z-[99999999] flex flex-col gap-3 bg-white px-2 py-1 capitalize hover:bg-gray-100">
          <p className="cursor-pointer capitalize text-sm">{option.name}</p>
        </div>
      )}
    />
  );
}
