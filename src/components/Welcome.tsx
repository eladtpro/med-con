import React from "react";
import { Grid, Typography } from "@mui/material";

const Welcome: React.FC<{ name: string, visit: string }> = ({ name, visit }) => {
    return (
        <Grid container justifyContent="flex-start">
            <Typography display="block" variant="body1" component="div" align="right">
                <div>שלום <strong>{name}</strong>,</div>
                <div>ברוכה הבאה לחדר ההמתנה הוירטואלי.</div>
                <div>התור ל<strong>{visit}</strong> יתקיים בקרוב.</div>
            </Typography>
        </Grid>
    )
}

export default Welcome;