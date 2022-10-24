import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';


function BasicExample() {
  return (
    <div className="text-center" style={{marginLeft:'150px'}}>
        <h4  style={{marginTop:'50px',marginBottom:'20px'}}>OUR FOCUS IS OUR CLIENT'S SUCCESS</h4>
        <Card className="text-center" style={{ width: '15rem', border:'none', float:"left" }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.QHvJeyn_ZcI6bd436XPDDgHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" style={{height:'50px',width:'50px',marginLeft:'100px'}} />
      <Card.Body>
        <Card.Title>Private Banking</Card.Title>
        <Card.Text style={{fontSize:"12px"}}>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Ut enim ad minim veniam,exercitation ulamloclaboris nisi aliquimex,ea commodo consequat.
        </Card.Text>
        <Button style={{backgroundColor:'white', borderRadius:'0px', border:"1px solid black",color:'black'}}>Read More</Button>
      </Card.Body>
    </Card>

    <Card className="text-center" style={{ width: '15rem', border:'none', float:"left" }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-UdBRGuInZGDdXytcs_Fh2VgPZf0ku5x_w&usqp=CAU" style={{height:'50px',width:'50px',marginLeft:'100px'}} />
      <Card.Body>
        <Card.Title>Time Saving Tips</Card.Title>
        <Card.Text style={{fontSize:"12px"}}>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Ut enim ad minim veniam,exercitation ulamloclaboris nisi aliquimex,ea commodo consequat.
        </Card.Text>
        <Button style={{backgroundColor:'white', borderRadius:'0px', border:"1px solid black",color:'black'}}>Read More</Button>
      </Card.Body>
    </Card>

    <Card className="text-center" style={{ width: '15rem', border:'none',float:"left" }}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdUFiQlDiP6dzT1GRBnR35hXABhbSyh1df7g&usqp=CAU" style={{height:'50px',width:'50px',marginLeft:'100px'}} />
      <Card.Body>
        <Card.Title>Budgeting Tips</Card.Title>
        <Card.Text style={{fontSize:"12px"}}>
            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Ut enim ad minim veniam,exercitation ulamloclaboris nisi aliquimex,ea commodo consequat.
        </Card.Text>
        <Button style={{backgroundColor:'white', borderRadius:'0px', border:"1px solid black",color:'black'}}>Read More</Button>
      </Card.Body>
    </Card>

    <Card className="text-center" style={{ width: '15rem', border:'none', marginRight:'150px'}}>
    <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmnpjMC-8I93aZro3yD45weWnVHcyzGWCpMg&usqp=CAU" style={{height:'50px',width:'50px',marginLeft:'100px'}} />
      <Card.Body>
        <Card.Title>Money Saving ideas</Card.Title>
        <Card.Text style={{fontSize:"12px"}}>
          Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore magna aliqua. Ut enim ad minim veniam,exercitation ulamloclaboris nisi aliquimex,ea commodo consequat.
        </Card.Text>
        <Button style={{backgroundColor:'white', borderRadius:'0px', border:"1px solid black",color:'black'}}>Read More</Button>
      </Card.Body>
    </Card>
    </div>
  );
}



export default BasicExample;