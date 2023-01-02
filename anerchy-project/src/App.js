import './App.css';
import data from "./data.json";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="menuTarget">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/budget-shoppy/fetch.html"
                  >Home</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
{/* {product} baij bolno */}
function ProductCard(product) {
  return (
            <div className="card">
            <div className="ratio ratio-4x3">
              <img src={product.thumbnail} className="card-img-top" alt={product.title} />
            </div>
              <div className="card-body">
                <p className="card-name">{product.title}</p>
                <p className="card-category">{product.category}</p>
                <p className="card-name card-price">{product.price}</p>
              </div>
            </div>
          );
}

function App() {
  return (
    <>
      <Header />
      <main className='mt-3'>
        <div className='container-sm'>
          <div className='row g-3'>
            {data.products.map((product, index)=>( 
            <div className='col-sm-3' key={index}>
              {/* <ProductCard product={product} /> */}
              {ProductCard(product)}
            </div> 
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
