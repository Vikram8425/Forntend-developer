import {
    Card,CardBody,CardText,CardTitle,
    CardSubtitle,Button, Modal, ModalHeader,
     ModalBody, ModalFooter, Container,Row,Col, 
     CardHeader,Form, Label,Input, Toast,Table
    } 
     from 'reactstrap';
   

import React,{ useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { json } from 'react-router-dom';

function Home(){

    const [modal, setModal] = useState(false);
    const [modal1,setModal1] = useState(false);
    
    const[user,setUser]=useState({
        name:'',
        gender:'',
        age:'',
        designation:'',
        derpartment:''
    })
   let users=new Array();
    
    const toggle = () => setModal(!modal);
    const toggle1 = () => setModal(!modal1);
    const onFieldChange=(event,fieldName)=>{
        setUser({...user,[fieldName]:event.target.value})
      
    }
    const closeModol=()=>{
        setModal(false)
      }
      const closeModol1=()=>{
        setModal1(false)
      }
      const newuser=(event)=>{
        
        if(user.name===""){
            alert("Plz Write Your Name")
            return
        }
        if(user.gender===''){
            alert("plz Select Your gender");
            return
        }
        if(isNaN(user.age)){
            alert("age must should be integer")
            return
        }
        if(user.designation===""){
           alert("Designation cannot be empty");
           return
        }
        if(user.derpartment===''){

            alert("derpartment Cannot be empty")
            return
        }
        if(user.joiningDate===''){
            alert("Fill Date of Joining");
            return
        }

        users=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
        users.push({
            "name":user.name,
            "age":user.age,
            "gender":user.gender,
            "derpartment":user.derpartment,
            "designation":user.designation
        })
       
        localStorage.setItem("user",JSON.stringify(users))
        alert("Your Record saved")
        setUser("")
       toggle()
      }
      
    const styleobj={
        width:"96%",
        height:"170px",
        marginTop:"100px",
        marginLeft:"20px"
       
        
    }
    const styleobj1={
        width:"100%",
        height:"80px",
        marginTop:"30px",
        marginLeft:"0px"
       
        
    }


    const htmlModel1=()=>{
        return( <div>
                       
            <Modal isOpen={modal1} toggle1={closeModol1} >
           
              <ModalHeader toggle1={closeModol1}>Edit Employee</ModalHeader>
              <ModalBody>
                 
                <Form onSubmit={edit}>
                    {JSON.stringify(user)}
                <Container> 
                    <Row >
                   <Col md={{size:6,offset:0}}> 
                    <Label>Name</Label>
                    <Input onChange={(event)=>onFieldChange(event,'name')} value={user.name} placeholder='Enter' style={{width:200,marginBlockEnd:15}}></Input>
                    </Col>

                    <Col md={{size:6,offset:0}} >
                    <Label >Gender</Label>
                    <Input onChange={(event)=>onFieldChange(event,'gender')} value={user.gender} placeholder='Enter' type='select' style={{width:200,marginBlockEnd:15}}>
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    </Input>
                    </Col>

                    <Col md={{size:6,offset:0}}> 
                    <Label >Age</Label>
                    <Input type='number'  onChange={(event)=>onFieldChange(event,'age')} value={user.age} placeholder='Enter' style={{width:200}}></Input>
                    </Col>

                    <Col md={{size:6,offset:0}}> 
                    <Label >Designation</Label>
                    <Input onChange={(event)=>onFieldChange(event,'designation')} value={user.designation} placeholder='Enter' style={{width:200}}></Input>
                    </Col>

                    <Col md={{size:6,offset:0}} style={{marginTop:14}}> 
                    <Label >Department</Label>
                    <Input onChange={(event)=>onFieldChange(event,'derpartment')} value={user.derpartment} placeholder='Enter'  style={{width:200}}></Input>
                    </Col>
                    <Col md={{size:6,offset:0}} style={{marginTop:14}}> 
                    <Label >Joining Date</Label>
                    <Input  onChange={(event)=>onFieldChange(event,'joiningDate')} value={user.joiningDate} placeholder='Enter' style={{width:200}} type= 'date'></Input>
                    </Col>
                    </Row>
                </Container>
                <ModalFooter>
                <Button  className="square border border-danger square border border-1 "  size='sm' color="Light"  onClick={()=>setModal1(false)}>
                 Cancel 
                </Button>{' '}
                <Button size='sm' color="success"  >
                  Save
                </Button>
              </ModalFooter>
                </Form>
                
              </ModalBody>
             
            </Modal>
          </div>
          )
    }


    const htmlModel=()=>{
        return( <div>
                       
            <Modal isOpen={modal} toggle={closeModol} >
           
              <ModalHeader toggle={closeModol}>Add Employee</ModalHeader>
              <ModalBody>
                 
                <Form onSubmit={newuser}>
                    {JSON.stringify(user)}
                <Container> 
                    <Row >
                   <Col md={{size:6,offset:0}}> 
                    <Label>Name</Label>
                    <Input onChange={(event)=>onFieldChange(event,'name')} value={user.name} placeholder='Enter' style={{width:200,marginBlockEnd:15}}></Input>
                    </Col>

                    <Col md={{size:6,offset:0}} >
                    <Label >Gender</Label>
                    <Input onChange={(event)=>onFieldChange(event,'gender')} value={user.gender} placeholder='Enter' type='select' style={{width:200,marginBlockEnd:15}}>
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    </Input>
                    </Col>

                    <Col md={{size:6,offset:0}}> 
                    <Label >Age</Label>
                    <Input type='number'  onChange={(event)=>onFieldChange(event,'age')} value={user.age} placeholder='Enter' style={{width:200}}></Input>
                    </Col>

                    <Col md={{size:6,offset:0}}> 
                    <Label >Designation</Label>
                    <Input onChange={(event)=>onFieldChange(event,'designation')} value={user.designation} placeholder='Enter' style={{width:200}}></Input>
                    </Col>

                    <Col md={{size:6,offset:0}} style={{marginTop:14}}> 
                    <Label >Department</Label>
                    <Input onChange={(event)=>onFieldChange(event,'derpartment')} value={user.derpartment} placeholder='Enter'  style={{width:200}}></Input>
                    </Col>
                    <Col md={{size:6,offset:0}} style={{marginTop:14}}> 
                    <Label >Joining Date</Label>
                    <Input  onChange={(event)=>onFieldChange(event,'joiningDate')} value={user.joiningDate} placeholder='Enter' style={{width:200}} type= 'date'></Input>
                    </Col>
                    </Row>
                </Container>
                <ModalFooter>
                <Button  className="square border border-danger square border border-1 "  size='sm' color="Light"  onClick={toggle}>
                 Cancel 
                </Button>{' '}
                <Button size='sm' color="success"  >
                  Save
                </Button>
              </ModalFooter>
                </Form>
                
              </ModalBody>
             
            </Modal>
          </div>
          )
    }
    const add=()=>{
        setModal(true)
        
    }
    const add1=()=>{
        setModal1(true)
    }
       
  let localData=new Array()
  localData=JSON.parse(localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):[]
 
  const edit=(l)=>{ 
    
    add1()
   
    l.push({
        "name":user.name,
        "age":user.age,
        "gender":user.gender,
        "derpartment":user.derpartment,
        "designation":user.designation
    })
   console.log(l)
    localStorage.setItem("user",JSON.stringify(l))
    alert("Your Record saved")

         
  }

  const Delete=(l)=>{
    localStorage.clear()

  }

  

    const cart=()=>{
        return(
                
            <div> 
                <Card body style={styleobj1} color="light" className="shadow-4 " >

                    <Container >
                        <Input className='text-center square border border-primary square border border-1' placeholder='Enter Id here '  style={{width:500,marginLeft:300}}></Input>
                    </Container>
                </Card>

                       
            <Card body style={styleobj} color="white" className="shadow-4 " >
              
            <CardBody>
             
                <p style={{fontSize:20,fontWeight:'bold',color:'grey',fontFamily:'Calibri (Body)',margin:-15 }}>Available :{}</p>
                <p  style={{fontSize:20,fontWeight:'bold',fontFamily:'Calibri (Body)',margin:10,marginLeft:-16,marginTop:20}}> Total :{localData.length}</p>
                <Button style={{marginTop:15, marginLeft:-23 ,fontSize:18}} onClick={add} color="primary"  > ╋ Add Employee</Button>
           
            </CardBody>
          
        </Card> 
            <Container> 
             <Table
             bordered 
             responsive 
             className='mt-3'
             borderless
             hover 
             >
                <thead> 
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Available</th>
                    <th>View Details</th>
                  
                </tr>
                </thead>
                
                <tbody>  
                    { 
                           
                       localData.map((l,index)=>{
                        return(
                            <tr key={index}>
                                <td>{l.name}</td>
                                <td>{l.derpartment}</td>
                                <td><Input type='checkbox'></Input></td>
                              
                                <td  >
                                    <Button className='text-center square border border-primary' onClick={()=>edit(l)} color='white' style={{marginLeft:20}}>
                                        Edit
                                    </Button>

                                    <Button 
                                       onClick={()=>Delete(l)} className='text-center square border border-danger' 
                                     color='white'  style={{marginLeft:4,color:'red'}}>Delete</Button>
                                </td>
                            </tr>
                        )
                       }) 
                       
                    }                     
                     </tbody>
                
             </Table>
             </Container>
        </div>
       
       
       
       
        )
        
    }
    return(
            <div> 
            {localData ? cart():<h1></h1> }
           
            {htmlModel()}
            {htmlModel1()}
             </div>
                
                    
                    
                    
               
        

      
    )
    }
export default Home;