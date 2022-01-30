import {useEffect} from "react";

const Scribble = () => {
    useEffect(() => {
        document.title = "Scribbles"
    }, []);

    return(
        <div>

        </div>
    )
}

export default Scribble;