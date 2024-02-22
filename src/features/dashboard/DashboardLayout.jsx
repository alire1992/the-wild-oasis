import styled from "styled-components";

import { useRecentBookings } from "./useRecentBookings";

import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCains } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { isLoading, bookings } = useRecentBookings();
  const {
    isLoading: isCalculating,
    confirmedStays,
    numsDays,
  } = useRecentStays();
  const { isLoading: isLoading1, cabins } = useCains();

  if (isLoading || isLoading1 || isCalculating) return <Spinner />;

  return (
    <StyledDashboardLayout>
      <Stats
        confirmedStays={confirmedStays}
        bookings={bookings}
        numsDays={numsDays}
        cabinsCount={cabins?.length}
      />
      <TodayActivity />
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numsDays={numsDays} />
    </StyledDashboardLayout>
  );
}
