
import './App.css';
import React from "react";
import useFetch from "react-fetch-hook";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button,Card} from 'react-bootstrap';
import Stars from "./components/Stars"




function App() {
  const { isLoading, error, data } = useFetch("https://asm-dev-api.herokuapp.com/api/v1/food");

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  const truncateString= (string, limit) =>{
    if (string.length > limit) {
      return string.substring(0, limit) + " and more..."
    } else {
      return string
    }
  }
   
  
  const display = data.data.meals.map( meal =>
  
    <Col sm xs={12} md= {4} style ={{position:'relative'}} >
      <Card style = {{borderBottomLeftRadius:'20px',marginBottom:'30px',borderTopRightRadius:'20px'}}>
        < Card.Img key ={meal} src= {meal.strMealThumb} alt="random user" style = {{height:'18rem' , borderBottomLeftRadius:'20px', borderTopRightRadius:'20px'}} />
        <Card.Body>
          <Card.Title key = {meal}>
            <div style = {{display: 'flex', justifyContent:'space-between'}}>
              <div>
              {meal.title}
              </div>
              <div >
              {meal.price}
              </div>
             
            </div>
         
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted" key = {meal}>
          {meal.strMeal}

          </Card.Subtitle>
          <Card.Text key = {meal} >
             {truncateString(meal.description ,120)}
          </Card.Text>
          

          
        </Card.Body>
        <Card.Body>
         <div style = {{display: 'flex', justifyContent:'space-between'}}>
              <div style={{paddingLeft:'15px'}}>
                < Stars key = {meal} rating = {meal.ratings}/>
              </div>
              <div  style={{position:'absolute', right:'0px',bottom:'0px'}}>
                <Button  style={{ backgroundColor:"#fa9e0d", border :'none', borderTopLeftRadius:'20px', fontSize:'3rem',  fontWeight:'100',width:'100px', padding:'0px' }}> +</Button>
              </div>
             
          </div>
         
        
        

        </Card.Body>
  
      </Card>
 
    </Col>

  
  
    )
  return (
    <>
      <Container>
        <Row >
          {display}
        </Row>
        <div style ={{textAlign:'center', marginBottom:'20px' }}>
          <Button style={{backgroundColor:"#fa9e0d", border:'none', borderRadius:'20px', padding:'5px 2rem' }}>Learn More</Button>
        </div>
      </Container>
    </>
  );
}

export default App;
