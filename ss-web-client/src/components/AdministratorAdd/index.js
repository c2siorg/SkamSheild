import { Button } from "@mui/material";
import React, { useContext, useState } from "react";

import { AdministratorContext } from "../../context/AdministratorContext/AdministratorContext";

import CustomDialog from "../../ui/CustomDialog/CustomDialog";

import AdministratorForm from "../AdministratorForm";

export default function AdministratorAdd() {

    const [showModal, setShowModal] = useState(false);

    const { loading } = useContext(AdministratorContext)

    const handleAddAction = () => {
        setShowModal(true);
    };

    return (
        <>
            <Button disabled={loading} variant="contained" color='primary' onClick={handleAddAction}>Add New</Button>

            <CustomDialog
                maxWidth={"md"}
                title={"Add Administrator"}
                buttonCaption="Add"
                open={showModal}
                setOpen={setShowModal}
            >
                <AdministratorForm setOpen={setShowModal} action={0} />
            </CustomDialog>
        </>
    );
}
