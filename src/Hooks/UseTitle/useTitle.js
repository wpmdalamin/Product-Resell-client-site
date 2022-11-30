import { useEffect } from "react";

function useTitle(title){
    useEffect(()=> {
        document.title = title + " - Used Mobile Resell";
    },[title])
}

export default useTitle;