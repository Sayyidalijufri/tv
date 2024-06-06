"use client";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useSidebar } from "@/hooks/useSidebar";
import { useRouter, useSearchParams } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

type Props = {};

function PageHeader({}: Props) {
  const autocompleteListsRef = useRef<HTMLUListElement>(null);
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q");
  const [searchInputVal, setSearchInputVal] = useState(query || "");
  const [autocompleteLists, setAutocompleteLists] = useState<string[]>([]);
  const [showAutocompleteLists, setShowAutocompleteLists] = useState(false);

  const handleSearchInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchInputVal(query);
    if (query.trim() === "") {
      setAutocompleteLists([]);
      setShowAutocompleteLists(false);
      return;
    }
    setShowAutocompleteLists(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/searchAutocomplete/${query}`
    );
    const data = await res.json();
    if (data.autocompleteLists.length > 0) {
      setAutocompleteLists(data.autocompleteLists);
      setShowAutocompleteLists(true);
    } else {
      setAutocompleteLists([]);
      setShowAutocompleteLists(false);
    }
    return;
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInputVal.trim() === "0") return;
    setShowAutocompleteLists(false);
    router.push(`/search?q=${searchInputVal}`);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!autocompleteListsRef.current?.contains(e.target as Node)) {
        setShowAutocompleteLists(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.addEventListener("mousedown", handleClickOutside);
    };
  }, [autocompleteListsRef]);
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`items-center gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
        onSubmit={handleSearch}
      >
        {showFullWidthSearch && (
          <Button
            size="icon"
            className="flex-shrink-0 md:hidden"
            variant="secondVariant"
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px] relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-l-full border border-secondary-border shadow-secondary py-1 px-4 text-md w-full focus:border-blue-500 outline-none"
            value={searchInputVal}
            onChange={(e) => handleSearchInput(e)}
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0">
            <Search />
          </Button>
          <ul
            className={`absolute top-14 w-full left-0 ${
              showAutocompleteLists ? "flex" : "hidden"
            } flex-col bg-white z-20 divide-y-2 divide-slate-100 shadow-md rounded-md ${
              autocompleteLists.length > 0
                ? "border border-secondary"
                : undefined
            }`}
            ref={autocompleteListsRef}
          >
            {autocompleteLists.map((list) => (
              <Link
                href={`/search?q=${list}`}
                onClick={() => {
                  setSearchInputVal(list);
                  setShowAutocompleteLists(false);
                }}
                className="px-2.5 py-2 hover:bg-slate-100 transition-[background]"
                key={list}
              >
                {list}
              </Link>
            ))}
          </ul>
        </div>
        <Button size="icon" className="flex-shrink-0" type="button">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden md:flex" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="secondVariant"
          className="md:hidden"
        >
          <Search />
        </Button>
        <div className="flex items-center">
          <Button size="icon" variant="secondVariant" className="max-md:hidden">
            <Upload />
          </Button>
          <Button size="icon" variant="secondVariant" className="max-md:hidden">
            <Bell />
          </Button>
          <Button variant="secondVariant">
            {/* <Button size="icon" variant="secondVariant"> */}
            {/* <User /> */}
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
              {/* <SignOutButton /> */}
            </SignedIn>
          </Button>
        </div>
      </div>
    </div>
  );
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean;
};

export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { isLargeOpen, isSmallOpen, toggle } = useSidebar();

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden md:flex" : "flex"
      }`}
    >
      <Button
        variant={"secondVariant"}
        size="icon"
        onClick={() => toggle(isLargeOpen, isSmallOpen)}
      >
        <Menu />
      </Button>
      <Link href="/">
        <h1 className="text-2xl font-bold">JTV</h1>
      </Link>
    </div>
  );
}

export default PageHeader;
