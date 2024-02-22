import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function CabinTableOpreations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { label: "All", value: "all" },
          { label: "No discount", value: "no-discount" },
          { label: "With discount", value: "with-discount" },
        ]}
      />
      <SortBy
        options={[
          { label: "Sort by Name (A to Z)", value: "name-asc" },
          { label: "Sort by Name (Z to A)", value: "name-desc" },
          { label: "Sort by Price (Low first)", value: "regularPrice-asc" },
          { label: "Sort by Price (High first)", value: "regularPrice-desc" },
          { label: "Sort by Capacity (Low first)", value: "maxCapacity-asc" },
          { label: "Sort by Capacity (High first)", value: "maxCapacity-desc" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOpreations;
