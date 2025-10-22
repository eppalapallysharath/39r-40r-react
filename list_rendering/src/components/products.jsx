import "./products.css"
const Products = () => {
  const productData = [
    {
      title: "Fujifilm X100T 16 MP Digital Camera (Silver)",
      price: 520,
      imageUrl: "https://coloshop-template.vercel.app/images/product_1.png",
    },
    {
      title: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
      price: 610,
      imageUrl: "https://coloshop-template.vercel.app/images/product_2.png",
    },
    {
      title: "Blue Yeti USB Microphone Blackout Edition",
      price: 120,
      imageUrl: "https://coloshop-template.vercel.app/images/product_3.png",
    },
    {
      title: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
      price: 410,
      imageUrl: "https://coloshop-template.vercel.app/images/product_4.png",
    },
    {
      title: "Pryma Headphones, Rose Gold & Grey",
      price: 180,
      imageUrl: "https://coloshop-template.vercel.app/images/product_5.png",
    },
  ];
  return (
    <div  className="main-container-products">
      {productData.map((element, index) => (
        <div key={index} className="child-container">
          <img src={element.imageUrl} alt={element.imageUrl}  width="100px"/>
          <p>{element.title}</p>
          <p id="product-price">$ {element.price}</p>
        </div>
      ))}
    </div>
  );
};
export default Products;
