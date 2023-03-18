import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import DateTimePicker from 'react-datetime-picker';
import  img from '../assets/images/trysolLogo.jpeg';
import { toast } from "react-toastify";

import Modal from 'react-bootstrap/Modal';
import "primereact/resources/primereact.min.css";
import Row from 'react-bootstrap/Row';
import '../App.css'
import { SelectButton } from 'primereact/selectbutton';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primeicons/primeicons.css"; 
import Table from 'react-bootstrap/Table';
import { InputText } from "primereact/inputtext";

import axios from "axios";






function Dashboard(){
  const imgsty ={
    "height":"39px",
    "width":"51px"
};

const texbx ={
 
  "width":"22%"
};



    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const[updateObject, setUpdateObject] = useState({});

    const [updateShow, setUpdateShow] = useState(false);
    const updateHandleClose = () => setUpdateShow(false);
    const updateHandleShow = () => setUpdateShow(true);

    const [value, onChange] = useState(new Date());

    const options = ['Not Started','In Progress', 'Completed'];
    const [value1, setValue1] = useState(options[0]);

    const [users, setUsers] = useState([]);


    

    const [results, setResults] = useState(null)
  const [error, setError] = useState(null)

  const[varma,setVarma]=useState("");

  const [data , setData]=useState([]);

  const[name, setName]=useState("");
  const[task,setTask]=useState("");

  
  const[result,setResult]=useState("")

  const[add, setAdd]=useState()

  const varma1=(e)=>{
    const gurrala=e.target.value;
    setVarma(gurrala )

  }

  const onNameChange = (e )=>{ 

    const name= e.target.value
    setName(name);
  }

  const onTaskChange = (e )=>{
    const task =e.target.value
    setTask(task);
  }
    
    const loadData = async () => {
      try {
        const response = await axios.get("http://localhost:8082/TodoList/todousers")
        setData(response.data)
        console.log(response);
        setError(null)
      } catch (err) {
        setError(err)
      }
    }
    useEffect(()=>{
      loadData();      
    },[])

const updateDta=async(data)=>{
  console.log(data);
  setUpdateObject(data);
  updateHandleShow();
  setName(data.userName); 
  setTask(data.description);
  setValue1(data.status);
  onChange(new Date(data.dueDate));


}

const addTask=async(data)=>{
  console.log(data);
  handleShow();
  setName(""); 
  setTask("");
  setValue1("");
  onChange(new Date());


}
const deleteRow = async(data)=>{
  try{

        
    const request= await axios.delete("http://localhost:8082/TodoList/del-todo/"+data.id).then((res)=>{
      loadData();
    })
    // setName(request.name);
    // setTask(request.task);
    console.log(request);
    setError(null)
  }
  catch(err){
    setError(err)
  }
}


const updateData = async (e)=>{
  try{

        
    const request= await axios.put("http://localhost:8082/TodoList/update-todo/"+updateObject.id,
      {

        "userName":name,
        "description":task,
        "dueDate":value,
        "status":value1   
       
    })
    // setName(request.name);
    // setTask(request.task);
    console.log(request);
    setError(null)
  }
  catch(err){
    setError(err)
  }
  }
    const postData = async (e)=>{
      try{

        
        const request= await axios.post("http://localhost:8082/TodoList/user",
          {

           
            "userName":name,
            "description":task,
            "dueDate":value,
            "status":value1   
           
        })
        // setName(request.name);
        // setTask(request.task);
        console.log(request);
        setError(null)
      }
      catch(err){
        setError(err)
      }
      }
    
      const submitForm = (e) => {
console.log("Name"+name);
console.log("Task"+task)
axios.post("http://localhost:8082/TodoList/user",{
  "Name":name,
  "Task":task
}).then(res=>{

  toast.success("Anatomy added successfully", {
    position: toast.POSITION.TOP_CENTER,
});}
).catch(err => {

  toast.warn("Something went wrong! try again.", {
    position: toast.POSITION.TOP_CENTER,
});
})

      }
  



   

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
        <div class=""> <Button variant="primary" onClick={addTask}>
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
        

        <div  className='cen'>
        
       <InputText value={name} name ="name" onChange={onNameChange} />

        
       <InputText value={task} name ="task" onChange={onTaskChange} />

        
        
        </div>

      
  
        <div className='cen' >
      

        <SelectButton value={value1} onChange={(e) => setValue1(e.value)} options={options} />

       
 
    </div>

    <div className='cen'>
     <DateTimePicker  onChange={onChange} value={value} />
    </div>
    
    
<div className='cen'>
        <Button variant="primary" type="submit"onClick={postData}>
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
      <div class="">

    <Modal
      show={updateShow}
      onHide={updateHandleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>update Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <div  className='cen'>
        
       <InputText value={name} name ="name" onChange={onNameChange} />

        
       <InputText value={task} name ="task" onChange={onTaskChange} />

        
        
        </div>
      <div className='cen' >
    

      <SelectButton value={value1} onChange={(e) => setValue1(e.value)} options={options} />

     

  </div>

  <div className='cen'>
   <DateTimePicker  onChange={onChange} value={value} />
  </div>
  
  
<div className='cen'>
      <Button variant="primary" type="submit"onClick={updateData}>
        Update Data
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
           <th>Time</th>
           <th>Status</th>
           <th>Edit Task</th>
           <th>Delete Task</th>
         </tr>
         {
          data.length > 0 &&

          data.map((item)=>{
            return(
              <tr>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.description}</td>
              <td>{item.dueDate}</td>
              <td>{item.status}</td>
              <td><i className="pi pi-pencil"   onClick={() => updateDta(item)}></i></td>
           <td><i className="pi pi-trash"  onClick={() => deleteRow(item)}></i></td>
              
              
              </tr>
            )
          })
  
}

       </thead>
       <tbody>
              </tbody>
     </Table>

       </div>

    )
   
}
export default Dashboard;


