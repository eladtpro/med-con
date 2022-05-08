import React from "react"
import { Alert, Snackbar } from "@mui/material";


const Notifications = () => {
    const [open, setOpen] = React.useState(true);

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right', }}>
            <Alert dir="ltr" onClose={handleClose} severity="info">&nbsp;מיקומך בתור הוא <strong>4</strong></Alert>
        </Snackbar>

    )
}

export default Notifications;