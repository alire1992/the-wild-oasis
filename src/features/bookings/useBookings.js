import { useEffect, useMemo } from "react";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getBookings } from "../../services/apiBookings";
import { PAGE_SIZE } from "../../utils/constants";

export function useBookings() {
  const queryClient = useQueryClient();
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter
  const filterValue = searchParams.get("status");

  const filter = useMemo(
    () =>
      !filterValue || filterValue === "all"
        ? null
        : { field: "status", value: filterValue },
    [filterValue],
  );

  // Sort
  const sortByRaw = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction = "asc"] = sortByRaw.split("-");
  const sortBy = useMemo(
    () => ({
      field,
      direction,
    }),
    [field, direction],
  );

  // Pagination
  const page = Number(searchParams.get("page")) || 1;

  const {
    data: { data: bookings = [], count = 0 } = {},
    isPending,
    isPlaceholderData,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
    placeholderData: keepPreviousData,
  });

  const pageCount = Math.ceil(count / PAGE_SIZE);

  useEffect(() => {
    if (!isPending && !isPlaceholderData && pageCount > 0 && page > pageCount) {
      searchParams.set("page", pageCount);
      setSearchParams(searchParams);
    }
  }, [
    isPending,
    page,
    pageCount,
    searchParams,
    isPlaceholderData,
    setSearchParams,
  ]);

  // Prefething

  useEffect(() => {
    if (page < pageCount)
      queryClient.prefetchQuery({
        queryKey: ["bookings", filter, sortBy, page + 1],
        queryFn: () => getBookings({ filter, sortBy, page: page + 1 }),
        staleTime: 60 * 1000,
      });

    if (page > 1)
      queryClient.prefetchQuery({
        queryKey: ["bookings", filter, sortBy, page - 1],
        queryFn: () => getBookings({ filter, sortBy, page: page - 1 }),
        staleTime: 60 * 1000,
      });
  }, [filter, sortBy, page, pageCount, queryClient]);

  return { bookings, isLoading: isPending, error, count };
}
