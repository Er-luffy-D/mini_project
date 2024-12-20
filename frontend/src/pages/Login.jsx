import { useContext, useEffect } from 'react';
import { Card, Input, Button, Typography, } from "@material-tailwind/react";
import { useFirebase } from '../context/FirebaseContext';
import { useNavigate } from 'react-router-dom';
   
const Login = () => {

    const firebase = useContext(useFirebase);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        firebase.signInUser(firebase.email, firebase.password);
    }

    useEffect(() => {
        if( firebase.isLoggedIn ) { 
            navigate('/fluentify/dashboard');
        }
    }, [firebase, navigate])

    return (
      <div className=" w-full h-[100vh] flex justify-center items-center">
  
     
       <Card color="transparent" shadow={false}>
        <Typography className=" flex justify-center underline"  variant="h4" color="blue-gray">
          Login Up
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value={firebase.email}
              onChange={(e) => firebase.setEmail(e.target.value)}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              value = { firebase.password }
              onChange = {(e) => firebase.setPassword(e.target.value)}
            />
          </div>
          <Button onClick={handleLogin} className="mt-6" fullWidth>
            sign in
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Don&apos;t have an account?{" "}
            <a href="/fluentify/signup" className="font-medium text-gray-900">
              Sign Up
            </a>
          </Typography>
        </form>
      </Card>
      </div>
    );
  }



export default Login;