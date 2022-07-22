import React from 'react';
import './App.css';

let productList = [
{name:"Sputnik", price: 8000, info: "Lançado em 1957"},
{name:"Explorer1", price: 2000, info: "O primeiro satélite americano "},
{name:"Explorer 6", price: 5000, info: "pesquisas terrestras e espaciais"},
{name:"Tiros-1", price: 3000, info: "satélite meteorológico"},
{name:"Vostok 1", price: 4500, info: "Primeiro Sovietico e tripulado"},
]

class Product extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      qty: 0
    };

    //Eventos
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }
    add(){
      this.setState({
        qty: this.state.qty +1
      
      });
    }

    remove(){
      this.setState({
        qty: this.state.qty -1
      
      });
    }

    showInfo(){
      alert(this.props.info)
    }

    render(){
      return(
     <div>
      <div className='row form-group'></div>
      <div className='col-sm-10'>
        <h4>{this.props.name}: R$ {this.props.price}</h4>
      </div>
      <div className='col-sm-2 text-right'>
        Quantidade: {this.state.qty}
      </div>
      <div className='row btn-toolbar'>
       <div className='col-6'>
        <button className='btn btn-outline-primary'onClick={this.showInfo}>Informações</button>
       </div>
       <div className='col-6 text-right'>
       <button className='btn btn-outline-primary' onClick={this.add}>+</button>
       <button className='btn btn-outline-primary' onClick={this.remove} disabled={this.state.qty <1}>-</button>
       </div>
     


      </div>
      <hr/>
     </div>
      );
    }
    
  }
  class ProductList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        productList: "" 
      };
    }

   componentDidMount(){
    setTimeout(() => {
      this.setState({productList: productList})
    }, 1000);
  }
    render(){
      if(!this.state.productList) return <p>Carregando...</p>

      
      const products = this.state.productList.map(
        function(product){
          return (
            <Product name = {product.name}
            price = {product.price} info = {product.info}/>
          )
        }
      );
      return(
        <div>
      {products}
      </div>
      );
       
    }
  
   } 
  






function App() {
  return (
    <div>
      <ProductList/>
     
    </div>
  );
}

export default App;
