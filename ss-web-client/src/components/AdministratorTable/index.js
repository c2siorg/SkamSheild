import { Grid } from "@mui/material";
import React, { useContext, useState } from "react";

import DataTable from "../../ui/DataTable/DataTable";

import CustomDialog from "../../ui/CustomDialog/CustomDialog";

import AdministratorForm from "../AdministratorForm";

import { AdministratorContext } from "../../context/AdministratorContext/AdministratorContext";
import { AuthContext } from "../../context/AuthContext/AuthContext";

export default function AdministratorTable() {
  const { administrators, loading, setSelectedAdministrator, getAdministratorDataAll } = useContext(AdministratorContext)
  const { updateUserAuthByAdmin, deleteUserAuthByAdmin } = useContext(AuthContext)

  const [showModal, setShowModal] = useState(false);

  const handleEditAction = (rowData) => {
    setSelectedAdministrator(rowData)
    setShowModal(true);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12} lg={12}>
        <DataTable
          search={false}
          isLoading={loading}
          grouping={true}
          exportButton={true}
          paging={true}
          title={'Administrators'}
          columns={[
            { title: "Name", field: "name" },
            { title: "Email", field: "email" },
            { title: "Address", field: "address" },
            { title: "Phone Number", field: "phoneNumber" },
            { title: "Created By", field: "createdBy.name" },
            { title: "Modified By", field: "modifiedBy.name" },
          ]}
          data={administrators ? administrators : []}
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                resolve();
                deleteUserAuthByAdmin(oldData.id);
                getAdministratorDataAll()
              }),
          }}
          actions={[
            {
              icon: "edit",
              tooltip: "Edit Administrator",

              onClick: (event, rowData) => handleEditAction(rowData),
            },
            {
              icon: "block",
              tooltip: "Disable User",
              onClick: (event, rowData) => {
                updateUserAuthByAdmin(rowData.id, { disabled: true });
              },
            },
            {
              icon: "vpn_key",
              tooltip: "Enable User",
              onClick: (event, rowData) => {
                updateUserAuthByAdmin(rowData.id, { disabled: false });
              },
            },
            {
              icon: "lock_open",
              tooltip: "Reset password",
              onClick: (event, rowData) => {
                updateUserAuthByAdmin(rowData.id, {
                  password: rowData.phoneNumber,
                });
              },
            },
          ]}
        />
      </Grid>

      {/* showModal */}
      <CustomDialog
        maxWidth={"md"}
        title={"Edit Administrator"}
        buttonCaption="Edit"
        open={showModal}
        setOpen={setShowModal}
      >
        <AdministratorForm
          setOpen={setShowModal}
          action={1}
        />
      </CustomDialog>
    </Grid>
  );
}
