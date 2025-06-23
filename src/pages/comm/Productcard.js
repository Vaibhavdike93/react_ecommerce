import { Link } from "react-router-dom";

function Productcard(props) {
  return (
    <>
    <div className="col-md-3 mt-4 mb-4">
    <div className="card product-card h-100 border-0 shadow-sm overflow-hidden">
      <div className="position-relative">
        <img 
          src={props.data.product_img} 
          className="card-img-top object-fit-cover" 
          alt="Product" 
          style={{ height: '220px' }}
        />
        <div className="badge bg-danger position-absolute top-0 end-0 m-2">Sale</div>
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1">{props.data.product_name}</h5>
        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-bold text-dark fs-5">&#8377; {props.data.price}</span>
          </div>
          <Link to={"/product_det/"+props.data.product_tbl_id}>
            <button className="btn btn-outline-primary w-100">
              <i className="bi bi-cart-plus me-2"></i>Add to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
    </div>
    </>
    
  );
}

export default Productcard;