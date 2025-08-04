import { useRouteError } from "react-router";

const ErrorPage = ()=>{
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h2>Something Went Wrong..</h2>
            <p>error.message</p>
        </div>
    )
}

export default ErrorPage;