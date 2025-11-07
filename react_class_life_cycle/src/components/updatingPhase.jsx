import { Component } from "react";
import axios from "axios";

export class ExampleUpdate extends Component {
  constructor() {
    super();
    this.state = {
      count: 7,
      numberCheck: "",
      productsData: [],
      filterData: [],
      category: "all",
    };
  }

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };

  fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.setState({ productsData: res.data, filterData: res.data });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    this.setState({
      numberCheck: this.state.count % 2 === 0 ? "even number" : "odd number",
    });
    // console.log("component did mount")
    this.fetchProducts();
  }

  componentDidUpdate(previousProps, previousState) {
    console.log("component did update")
    console.log("previous state", previousState)
    if (previousState.count !== this.state.count) {
      this.setState({
        numberCheck: this.state.count % 2 === 0 ? "even number" : "odd number",
      });
    }
    // if(previousState.category !== this.state.category){
    //     // console.log(this.state.category)
    //     const newProducts = this.state.productsData.filter((item) => {
    //     if (this.state.category === "all") {
    //       return item;
    //     } else {
    //       return item.category === this.state.category;
    //     }
    //   });
    //   console.log(newProducts)
    //   this.setState({filterData:newProducts})
    // }
  }

  category(value) {
    this.setState({ category: value });
  }

  handleSelectCategory(event){
        // console.log("change", event.target.value)
        this.setState({ category: event.target.value });
  }

  render() {
    // console.log(this.state.filterData)
    return (
      <div>
        <h1>updating phase</h1>
        <p>Count {this.state.count}</p>
            <p>{this.state.numberCheck}</p>
            <button onClick={this.inc} >+</button>
            <button onClick={this.dec}>-</button> 
        {/* <select onChange={(event)=>this.handleSelectCategory(event)}>
            <option value="all">All</option>
            <option value="men's clothing">mens</option>
            <option value="women's clothing">womens</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
        </select> */}


        {/* <button onClick={() => this.category("all")}>All</button>
        <button onClick={() => this.category("men's clothing")}>
          men's clothing
        </button>
        <button onClick={() => this.category("jewelery")}>jewelery</button>
        <button onClick={() => this.category("electronics")}>
          electronics
        </button>
        <button onClick={() => this.category("women's clothing")}>
          women's clothing
        </button> */}
        {/* <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {this.state.filterData.map((item) => (
            <div key={item.id} style={{ width: "15rem" }}>
              <img src={item.image} width="120px" height="100px" />
              <p>category {item.category}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div> */}
      </div>
    );
  }
}
