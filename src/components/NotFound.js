import { Link } from "react-router-dom";
function NotFound(){
  return(
    <>
    <div className="container text-center mt-5">
      <h1 className="display-4 text-danger">404</h1>
      <p className="lead">This Page Not Found !</p>
      <Link to="/" className="btn btn-primary">back to home</Link>
    </div>
    </>
  )
}
export default NotFound;