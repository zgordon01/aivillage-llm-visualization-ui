import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

const NextWordTable = ({ data }) => {
  const [nextWordData, setNextWordData] = useState([]);

  useEffect(() => {
    if (!data) return;

    const mappedData = data?.["top_k"]?.map((item, index) => ({
      topK: data?.["top_k"][index],
      id: data?.["top_k_ids"][index],
      logits: data?.["top_k_logits"][index],
    }));

    setNextWordData(mappedData);
  }, [data]);

  return !!nextWordData.length ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Prediction #</TableCell>
            <TableCell>Token</TableCell>
            <TableCell>top_k_id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nextWordData.map((row, index) => (
            <TableRow>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{row.topK}</TableCell>
              <TableCell>{row.logits}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : null;
};

export default NextWordTable;
