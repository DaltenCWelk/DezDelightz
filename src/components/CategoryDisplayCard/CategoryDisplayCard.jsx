import { useSelector } from "react-redux";

function CategoryDisplayCard({ category, title }) {
  const products = useSelector((state) => state.products.items);

  const categoryProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <section className="category-display-card justify-content-center">

    
      <button className="category-button">
        {title}
      </button>

    
      <div className="product-slider">

        {categoryProducts.map((product) => (
          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>${product.price}</p>

            <button>More Info</button>
            <button>Add to Cart</button>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CategoryDisplayCard;