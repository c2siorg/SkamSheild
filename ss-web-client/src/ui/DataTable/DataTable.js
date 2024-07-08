import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";

function EditToolbar(props) {
  const { editables } = props;
  return (
    <GridToolbarContainer>
      {editables &&
        editables.map((toolbarAction, index) => (
          <Button
            key={index}
            color="primary"
            startIcon={React.createElement(toolbarAction.icon)}
            onClick={toolbarAction.onClick}
          >
            {toolbarAction.label}
          </Button>
        ))}
    </GridToolbarContainer>
  );
}

export default function DataTable(props) {
  const {
    columns,
    rows,
    actions,
    editables,
    checkboxSelection = false,
    isInEditMode = false,
  } = props;
  const extendedColumns = [
    ...columns,
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={console.log(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={console.log(id)}
              color="inherit"
            />,
          ];
        }

        return (
          actions &&
          actions.map((action, index) => (
            <GridActionsCellItem
              key={index}
              icon={React.createElement(action.icon)}
              label={action.label}
              className="textPrimary"
              onClick={action.onClick}
              color="inherit"
            />
          ))
        );
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 500,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={extendedColumns}
        slots={{
          toolbar: EditToolbar,
        }}
        slotProps={{
          toolbar: { editables },
        }}
        checkboxSelection={checkboxSelection}
      />
    </Box>
  );
}
