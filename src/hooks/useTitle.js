import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Lichit Photography`;
    }, [title])
};

export default useTitle;