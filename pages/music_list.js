import { useState } from "react";

function Music_List() {
    const [songs] = useState([
        {
            title: "",
            artist: "Alcest",
            album: "",
            track: "",
            year: "",
            img_src: "",
            src: "",
        }
    ]);
}

export default Music_List;