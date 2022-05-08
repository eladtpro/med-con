import React, { useState } from "react";
import {
    Grid,
    Typography,
    ToggleButton,
    Button
} from "@mui/material";
import { BookmarkAdd, BookmarkAdded, Send } from '@mui/icons-material';
const ContentPreview = () => {
    const [buttons, setButtons] = useState<Map<string, boolean>>(new Map<string, boolean>([
        ['סדנה לאורח חיים בריא', false],
        ['סדנה לגמילה מעישון', true],
        ['סדנת יוגה', false],
        ['מימוש הטבה ברכישת משקפיים', false],
    ]));
    return (
        <Grid
            container
            direction="row"
            rowSpacing={2}
            justifyContent="center"
            alignItems="stretch"
            padding={2}>
            <Grid item xs={12}>
                <Typography variant="h6" gutterBottom component="div">
                    תכנים מותאמים אישית
                </Typography>
            </Grid>
            {
                [...buttons].map(entry =>
                    <Grid item xs={12} key={entry[0]}>
                        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
                            <Grid item xs={8}>
                                <Typography display="block" variant="body1" component="div" align="right">
                                    {entry[0]}
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <ToggleButton
                                    value="check"
                                    size="small"
                                    selected={entry[1]}
                                    onChange={() => {
                                        const copy = new Map<string, boolean>(buttons);
                                        copy.set(entry[0], !entry[1]);
                                        setButtons(copy);
                                    }}
                                >
                                    {entry[1] ? <BookmarkAdded /> : <BookmarkAdd />}
                                </ToggleButton>
                                <Grid />
                            </Grid>
                        </Grid>
                    </Grid>)
            }
            <Grid item xs={12} textAlign="left">
                <Button dir="ltr" variant="contained" endIcon={<Send />}>
                    שלח לסניף
                </Button>
            </Grid>
        </Grid>);
}
export default ContentPreview;