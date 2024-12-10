import Container from "../components/Container"
import { LockOutlined, UserOutlined,InboxOutlined } from '@ant-design/icons';
import { Button,Form, Input } from 'antd';
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDatabase, push, ref, set } from "firebase/database";

const Registration = () => {
  const db = getDatabase();
  const auth = getAuth();
  let navigate = useNavigate()
    let [fullName, setFullName] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")
    let [nameerr, setNameErr] = useState('')
    let [emailerr, setEmailErr] = useState('')
    let [passerr, setPassErr] = useState('')
    let ami = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    let handleFullname = (e)=>{
        setFullName(e.target.value);
    }

    let handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    let handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    useEffect(()=>{
        if(fullName){
          setNameErr("")
        }
        if(email){
          setEmailErr("")
        }
        if(password){
          setPassErr("")
        }
    },[fullName, email, password])

    let handleSubmit = () =>{
        if(!fullName){
            setNameErr("fullname is missing");
        }else if(!email){
          setEmailErr("Email is missing");
        }else if(!ami.test(email)){
          setEmailErr("Please Enter valid Email");
        }else if(!password){
          setPassErr("password is missing");
        }else{
          createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
              set(push(ref(db, 'user')), {
                username: fullName,
                email: email,
              })
              .then(()=>{
                updateProfile(auth.currentUser, {
                  displayName: fullName
                })
                navigate("/shop")
              })
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode);
              
            });
        }
    }

  
  return (
    <Container>
       <div className="w-[30%] mx-auto my-10">
        <h2 className="text-center mb-3">Sign up</h2>
       <Form>
      <div className="relative">
      <Form.Item
        name="username"
      >
        <Input prefix={<UserOutlined />} onChange={handleFullname} placeholder="Username" />
       <p className="text-red-500 absolute left-0 bottom-[-18px]"> {nameerr}</p>
      </Form.Item>
      </div>
      <Form.Item
        name="Email"
      >
        <Input prefix={<InboxOutlined />} onChange={handleEmail} placeholder="Email" />
      </Form.Item>
    
      <p className="text-red-500"> {emailerr}</p>
      <Form.Item
        name="password"
      >
        <Input prefix={<LockOutlined />} type="password" onChange={handlePassword} placeholder="Password" />
      </Form.Item>
    
      <p className="text-red-500"> {passerr}</p>
      <Form.Item>
        <Button onClick={handleSubmit} block type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
       </div>
    </Container>
  )
}
export default Registration