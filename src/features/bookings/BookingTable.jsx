import { useBookings } from "./useBookings";
// import { useSearchParams } from "react-router-dom";

import BookingRow from "./BookingRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();
  // const [searchParams] = useSearchParams();

  // // filter
  // const filterValue = searchParams.get("status") || "all";

  // let filteredBookings;

  // if (filterValue === "all") filteredBookings = bookings;

  // if (filterValue === "checked-in")
  //   filteredBookings = bookings?.filter((book) => book.status === "checked-in");

  // if (filterValue === "checked-out")
  //   filteredBookings = bookings?.filter(
  //     (book) => book.status === "checked-out"
  //   );

  // if (filterValue === "unconfirmed")
  //   filteredBookings = bookings?.filter(
  //     (book) => book.status === "unconfirmed"
  //   );

  // const sortBy = searchParams.get("sortBy") || "startDate-asc";

  // const [field, direction] = sortBy.split("-");

  // let sortedBookings;

  // if (field === "startDate")
  //   sortedBookings = filteredBookings?.sort((a, b) => a[field] - b[field]);

  // if (field === "totalPrice")
  //   sortedBookings = filteredBookings?.sort((a, b) => a[field] - b[field]);

  // if (direction === "desc") sortedBookings?.reverse();

  if (isLoading) return <Spinner />;

  if (!bookings?.length) return <Empty resourceName="bookings" />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          // data={sortedBookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;
