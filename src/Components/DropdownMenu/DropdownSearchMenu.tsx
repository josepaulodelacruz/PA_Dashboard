import { SubSpan } from "@/Components/Labels/Spans";
import {
  Box,
  FormControl,
  Select,
  MenuItem,
  ListSubheader,
  TextField,
  InputAdornment,
  InputLabel,
  SelectChangeEvent
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";

interface DropdownSearchMenuProps {
  label: string;
  placeholder: string;
  isLoading?: boolean;
  items?: Array<{ name: string }> | undefined;
  isDisabled?: boolean;
  selectedValue?: string;
  onChange?: (e: SelectChangeEvent) => void;
}

const DropdownSearchMenu: React.FC<DropdownSearchMenuProps> = ({
  label,
  placeholder,
  isLoading,
  items,
  onChange,
  selectedValue
}) => {
  const [value, setValue] = useState(selectedValue || ""); // Initialize with selectedValue or empty string

  useEffect(() => {
    if (selectedValue !== undefined) {
      setValue(selectedValue);
    }
  }, [selectedValue]);

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="flex flex-row px-5 items-center py-1">
      <SubSpan className="text-black font-normal text-sm pr-4 w-[150px]">
        {label}
      </SubSpan>

      <Box className="bg-white flex w-[400px]">
        <FormControl className="flex-1">
          <InputLabel>{placeholder}</InputLabel>
          <Select
            fullWidth
            sx={{ height: "50px", fontSize: 18 }}
            MenuProps={{ autoFocus: false }}
            labelId="search-select-label"
            id="search-select"
            label={placeholder}
            value={value} // Controlled value
            onChange={(e) => {
              setValue(e.target.value as string);
              if (onChange) onChange(e); // Ensure onChange is called
            }}
            renderValue={() => value || placeholder}
          >
            <ListSubheader>
              <TextField
                size="small"
                autoFocus
                placeholder="Type to search..."
                value={value} // Use value state
                onChange={handleTextFieldChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  )
                }}
                sx={{ backgroundColor: "white", width: "100%", padding: "0.4rem" }}
                onKeyDown={(e) => {
                  if (e.key !== "Escape") {
                    e.stopPropagation();
                  }
                }}
              />
            </ListSubheader>
            {items?.map((item, i) => (
              <MenuItem key={i} value={item.name} sx={{ fontSize: 12, fontWeight: 500 }}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {isLoading ? (
        <div className="pl-2">
          <CircularProgress size={22} />
        </div>
      ) : null}
    </div>
  );
};

export default DropdownSearchMenu;
