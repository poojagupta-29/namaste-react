import { useRouteError } from "react-router";

const ErrorBoundary = () => {
    const error = useRouteError();
    console.log(error)

    return (
        <div>{error ? error : "Page Not Found"}</div>
    )
}

export default ErrorBoundary;