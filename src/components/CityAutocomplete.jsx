import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  MapPin,
  Search,
} from "lucide-react";

import cities from "../data/cities";

function CityAutocomplete({
  label,
  placeholder,
  value,
  onChange,
}) {

  const [
    showDropdown,
    setShowDropdown,
  ] = useState(false);

  const wrapperRef =
    useRef(null);

  // Close Outside
  useEffect(() => {

    const handleClickOutside =
      (event) => {

        if (
          wrapperRef.current &&
          !wrapperRef.current.contains(
            event.target
          )
        ) {

          setShowDropdown(
            false
          );
        }
      };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  // Filter Cities
  const filteredCities =
    useMemo(() => {

      if (
        !value?.trim()
      ) {

        return cities.slice(
          0,
          8
        );
      }

      return cities
        .filter((city) =>
          city
            .toLowerCase()
            .includes(
              value.toLowerCase()
            )
        )
        .slice(0, 8);

    }, [value]);

  // Input Change
  const handleSearch = (
    event
  ) => {

    const input =
      event.target.value;

    onChange(input);

    setShowDropdown(
      true
    );
  };

  // Select City
  const selectCity = (
    city
  ) => {

    onChange(city);

    setShowDropdown(
      false
    );
  };

  return (

    <div
      ref={wrapperRef}
      className="relative"
    >

      {/* Label */}
      <label className="mb-3 block text-sm font-medium text-zinc-400">

        {label}

      </label>

      {/* Input */}
      <div className="group relative">

        {/* Left Icon */}
        <div className="absolute left-5 top-1/2 z-10 -translate-y-1/2 text-yellow-400 transition-all duration-300 group-focus-within:scale-110">

          <MapPin
            size={18}
          />

        </div>

        {/* Search Icon */}
        <div className="absolute right-5 top-1/2 z-10 -translate-y-1/2 text-zinc-500">

          <Search
            size={17}
          />

        </div>

        <input
          type="text"
          value={value}
          onChange={
            handleSearch
          }
          onFocus={() =>
            setShowDropdown(
              true
            )
          }
          placeholder={
            placeholder
          }
          autoComplete="off"
          className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-14 pr-14 text-white outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-yellow-400/40 focus:bg-white/[0.06] focus:shadow-[0_0_25px_rgba(250,204,21,0.08)]"
        />

      </div>

      {/* Dropdown */}
      {showDropdown && (

        <div className="absolute z-50 mt-3 w-full overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]/95 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.45)]">

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">

            <p className="text-xs font-medium uppercase tracking-[0.22em] text-yellow-400">

              Suggested Cities

            </p>

            <span className="text-xs text-zinc-500">

              {
                filteredCities.length
              } Results

            </span>

          </div>

          {/* Results */}
          <div className="max-h-[320px] overflow-y-auto">

            {filteredCities.length >
            0 ? (

              filteredCities.map(
                (
                  city,
                  index
                ) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() =>
                      selectCity(
                        city
                      )
                    }
                    className="flex w-full items-center gap-4 border-b border-white/[0.03] px-5 py-4 text-left transition-all duration-200 hover:bg-yellow-500/10 last:border-none"
                  >

                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-400">

                      <MapPin
                        size={16}
                      />

                    </div>

                    <div>

                      <p className="font-medium text-white">

                        {city}

                      </p>

                      <p className="mt-1 text-xs text-zinc-500">

                        Available operational route

                      </p>

                    </div>

                  </button>
                )
              )

            ) : (

              <div className="flex flex-col items-center justify-center px-6 py-12 text-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.04] text-zinc-500">

                  <Search
                    size={22}
                  />

                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">

                  No Cities Found

                </h3>

                <p className="mt-2 max-w-xs text-sm leading-relaxed text-zinc-500">

                  Try searching with another city name or add a custom destination manually.

                </p>

              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default CityAutocomplete;