/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from "@mui/material";

export default function CapsuleDatePicker() {
  const [startDate, setStartDate] = React.useState(new Date());

  return (
    <TextField
      id="date"
      label="Capsule Date"
      type="date"
      sx={{
        backgroundColor: "#293138",

        borderRadius: "20px",

        "& .MuiInputBase-input": {
          color: "white",
          borderRadius: "20px",
        },
        "& MuiInputBase-root MuiOutlinedInput-root MuiInputBase-colorPrimary MuiInputBase-formControl css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root":
          {
            borderRadius: "20px",
          },
        // make label color white
        "& .MuiInputLabel-root": {
          color: "white",
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
