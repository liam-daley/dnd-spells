import { useAppDispatch } from "../../app/hooks";
import { updateSpellAsync } from "../spell/spellSlice";
import {
  APIReference as Spell,
  useFetchSpellsQuery,
} from "../../api/dnd-api-slice";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso, TableComponents } from "react-virtuoso";
import React from "react";

interface ColumnData {
  dataKey: keyof Spell;
  label: string;
  numeric?: boolean;
  width: number;
}

const columns: ColumnData[] = [
  {
    width: 200,
    label: "Index",
    dataKey: "index",
  },
  {
    width: 120,
    label: "Name",
    dataKey: "name",
  },
  {
    width: 120,
    label: "URL",
    dataKey: "url",
  },
];

const VirtuosoTableComponents: TableComponents<Spell> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => <Table {...props} style={{ borderCollapse: "separate" }} />,
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow
      hover
      onClick={(event) => {
        console.log(event);
      }}
    >
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          align={column.numeric || false ? "right" : "left"}
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index: number, row: Spell) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          align={column.numeric || false ? "right" : "left"}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function ReactVirtualizedTable() {
  const { data = { count: 0, results: [] }, isFetching } =
    useFetchSpellsQuery();
  const dispatch = useAppDispatch();
  if (data?.results?.length) dispatch(updateSpellAsync(data.results[0]));
  const rows: Spell[] = data.results;
  return (
    <Paper style={{ height: 400, width: "100%" }}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
