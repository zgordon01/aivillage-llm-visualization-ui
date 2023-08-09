import {
  Button,
  FormLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";

const NextWordTable = ({ data, onTokenPress }) => {
  const [nextWordData, setNextWordData] = useState([]);

  useEffect(() => {
    if (!data) {
      setNextWordData([]);
      return;
    }

    const mappedData = data?.["top_k"]?.map((item, index) => ({
      topK: data?.["top_k"][index],
      id: data?.["top_k_ids"][index],
      logits: data?.["top_k_logits"][index],
    }));

    setNextWordData(mappedData);
  }, [data]);

  return !!nextWordData.length ? (
    <div>
      <FormLabel>Predictions</FormLabel>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Token</TableCell>
              <TableCell>top_k_id</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {nextWordData.map((row, index) => (
              <TableRow
                onClick={() => {
                  onTokenPress(row.topK);
                }}
              >
                <TableCell>
                  {index + 1}:&nbsp;&nbsp;
                  <Button variant="contained">{row.topK}</Button>
                </TableCell>
                <TableCell>{row.logits}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ) : null;
};

export default NextWordTable;
