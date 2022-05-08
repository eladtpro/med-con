import React from "react";
import { Paper } from "@mui/material";


// function gameFrameLoad(event: any) {
//     console.dir(event);
//     // var frame_top = $('#siteframe').contents().find('body').scrollTop();
//     // alert(frame_top);
// }

const Game = () => {
    // useEffect(() => {
    //     const iframe = document.getElementById('gameIFrame');

    //     // @ts-ignore
    //     iframe.onload = function () {
    //         // @ts-ignore
    //         iframe.contentWindow.scrollTo(0, iframe.contentDocument.body.scrollHeight);
    //     }
    //     // @ts-ignore
    //     iframe.contentWindow.scrollTo(0, iframe.contentDocument.body.scrollHeight);
    //     // @ts-ignore
    //     console.log(iframe.contentDocument.body.scrollHeight);

    // }, [])
    // const game = 'https://reactle.vercel.app/';
    // const game = 'https://tttbybajra.surge.sh';
    // const game = 'https://dots-game.vercel.app';
    // const game = 'https://cdn.htmlgames.com/PushPuzzle/';
    const game = 'https://play2048.co/';

    return (
        <Paper className="stretch" elevation={3}>
            <div
                className="stretch"
                dangerouslySetInnerHTML={{ __html: `<iframe id="gameIFrame" src="${game}" scrolling="yes" width="100%" height="100%" frameBorder="0"></iframe>` }}
            />
        </Paper>
    )
}

export default Game;