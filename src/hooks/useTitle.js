import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Service-Provider`;
    }, [title])
}

export default useTitle;