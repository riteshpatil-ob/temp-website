import Image from "next/image";

import Product1 from "@/assets/images/product-1.webp";
import Product2 from "@/assets/images/product-2.webp";
import Product3 from "@/assets/images/product-3.webp";

const PRODUCTS = [
  {
    title: "Magnus",
    description: "Fraud detection and prevention",
    image: Product1,
  },
  {
    title: "Prism",
    description: "Faster payments and lower risk",
    image: Product2,
  },
  {
    title: "Prime",
    description: "Income and employment verification",
    image: Product3,
  },
];

const Products = () => {
  return (
    <section className="w-full py-28 px-8 md:py-20 md:px-32">
      <div className="md:w-1/2 md:mx-auto">
        <h3 className="text-center text-2xl font-semibold mb-8 lg:text-4xl">
          We are here to build together
        </h3>
        <p className="text-center font-extralight text-sm w-full mb-8 lg:text-md">
          Our products are designed to enhance all facets of your financial
          services. We ensure that our advanced and smart network will foster
          growth and enable the delivery of a broad range of services and
          products that complement your primary offerings. We are committed to
          shaping the future of authentication, verification and intelligent
          data processing.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:gap-5 md:mt-8 justify-start items-center ">
        {PRODUCTS.map((product) => (
          <div
            key={product.title}
            className="border rounded-lg border-[rgb(220, 220, 220)] p-5 w-full mb-3"
          >
            <Image
              src={product.image}
              alt={product.title}
              className="w-10 h-10 mb-4"
            />

            <h6 className="text-md font-semibold">{product.title}</h6>
            <p className="text-xs mt-2 font-extralight">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
