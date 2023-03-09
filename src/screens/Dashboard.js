
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DateTimePicker from 'react-datetime-picker';
import  img from '../assets/images/trysolLogo.jpeg';
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import "primereact/resources/primereact.min.css";
import Row from 'react-bootstrap/Row';
import '../App.css'
import { SelectButton } from 'primereact/selectbutton';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primeicons/primeicons.css"; 
import Table from 'react-bootstrap/Table';





function Dashboard(){
  const imgsty ={
    "height":"39px",
    "width":"51px"
};

const texbx ={
 
  "width":"48%"
};



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [value, onChange] = useState(new Date());

    const options = ['Not Started','In Progress', 'Completed'];
    const [value1, setValue] = useState(options[0]);



   

    return (

       <div className="Dashboard">
       <div>

       </div>

       <div className="had">

       <Container>
      <Row>
      <Col className='im'>        <a className="navbar-brand" href="https://trysol.com/"><img  src={img} alt="Italian Trulli" style={imgsty} /></a>
  </Col>
        <Col>  
        
        <div class="hed">
        <div class=""> <Button variant="primary" onClick={handleShow}>
        Add task
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <div className='mode'>
          
          <Form.Control type="email" style={texbx} placeholder="Enter UserName" />

         
          <Form.Control type="email" style={texbx}  placeholder="Enter TaskName" />

          </div>
        
        </Form.Group>
  
        <div className='cen' >
      

        <SelectButton value={value1} onChange={(e) => setValue(e.value)} options={options} />

       
 
    </div>

    <div className='cen'>
     <DateTimePicker  onChange={onChange} value={value} />
    </div>
    
    
<div className='cen'>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </div>

      </Form>
  
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal></div>
        <div class=" "> <Button variant="primary" >
        All tasks
      </Button></div>
        </div>
        
        
        
        
        
        
        
      
     
      </Col>
      
      </Row>
      </Container>
       
       

       </div>
      
       <Table striped>
       <thead>
         <tr>
           <th>id</th>
           <th>userName Name</th>
           <th>Task Name</th>
           <th>Status</th>
           <th>Time</th>
           <th>Edit Task</th>
           <th>Delete Task</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>Mark</td>
           <td>Otto</td>
           <td>Pending</td>
           <td>7:45</td>
           <td><i className="pi pi-pencil"   onClick={handleShow}></i></td>
           <td><i className="pi pi-trash"></i></td>
           
         </tr>
         <tr>
           <td>2</td>
           <td>Jacob</td>
           <td>Jacob</td>
           <td>Completed</td>
           <td>7:45</td>
           <td><i className="pi pi-pencil"  onClick={handleShow}></i></td>
           <td><i className="pi pi-trash"></i></td>
         </tr>
         <tr>
           <td>3</td>
           <td >Larry the Bird</td>
           <td >Larry the Bird</td>
           <td>Pending</td>
           <td>7:45</td>
           <td><i className="pi pi-pencil"  onClick={handleShow}></i></td>
           <td><i className="pi pi-trash"></i></td>
         </tr>
         <tr>
           <td>4</td>
           <td >Larry the Bird</td>
           <td >Larry the Bird</td>
           <td>Pending</td>
           <td>7:45</td>
           <td><i className="pi pi-pencil"  onClick={handleShow}></i></td>
           <td><i className="pi pi-trash"></i></td>
         </tr>
       </tbody>
     </Table>
 
       </div>

    )
   
}
export default Dashboard;


