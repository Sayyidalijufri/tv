import { SearchResults } from "@/types/SearchResults";
import CategoryHeader from "@/components/CategoryHeader";
import SearchResultLists from "@/components/SearchResults";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function Page({ searchParams }: Props) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/searchResults/${searchParams.q}`
  );
  const data: SearchResults = await res.json();
  return (
    <div className="px-8 pb-4 w-full overflow-x-hidden">
      <div className="flex flex-col gap-4 w-full max-w-7xl mx-auto">
        <CategoryHeader />
        <SearchResultLists searchData={data} />
      </div>
    </div>
  );
}

export default Page;
