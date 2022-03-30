import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import './style.css'
import TextField from '@mui/material/TextField';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';


import { useHistory } from "react-router-dom";
import axios from 'axios';



export default function Login(props) {

    
    const history = useHistory() // create variable for keep the history
    const [email, setemail] = useState('') // initally useState set to none by "useState('')"  email is empty
    const [password, setpassword] = useState('') // initally useState set to none by "useState('')" password is empty
    const [isLogged, setLogged] = useState(false)// initally useState set to false by "useState('')"  not login


    useEffect(() => {
        getData()
    }, [isLogged])



    const getData = () => {
        const user = localStorage.getItem('user')
        if (user) {
            setLogged(true)
        } else {
            setLogged(false)
        }
        //    console.log(JSON.parse(user))
    }


    

        
   

    const HandleLogin = () => {
        const data = {
            UserName: email,
            Password: password
        } // get the value from line 11 and 12

           /* 

        axios({
            url:'https://localhost:44353/api/ResourceManager/authenticate?',
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            },
            data:data
        }).then(res=>{
                if (res.data.metadata.success) {
                    // alert('loged in')
                    localStorage.setItem('user', JSON.stringify(res.data.payload))
                    setLogged(true)
                    history.push('/Home')
                }
        })
        .catch(err=>console.log(err))

            */

            

        console.log(JSON.stringify(data))
        fetch('https://localhost:44353/api/ResourceManager/authenticate?UserName='+email+'&Password='+password+'', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(data => {
                 if (data.status == 200) { // if succesfully loging 
                      //alert(data.status)
                      localStorage.setItem('user', JSON.stringify(data.accessToke)) // store the  taken
                      

                      
                      history.push('/Home')
                      setLogged(true)

                 }
                console.log(data)
            })
            .catch(err => { // if not catch the error 
                console.log(err)
            })

            

    }

    


    const HandleLogout = () => {
        localStorage.clear()
        setLogged(false)

    }




    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 400,
                    height: 400,
                },
            }}
        >



            <Paper

                square={true}
                elevation={0}>

                {
                    isLogged == true ?
                   
                    
                        <>

                            
                         
                            
                            <Button
                                onClick={HandleLogout}
                                type="button" color="primary" className="form__custom-button">
                                Log out
                            </Button>
                        </>
                        :
                        <form className='form'>
                            <TextField
                                onChange={(e) => setemail(e.target.value)} //set the email line number 11
                                style={{ margin: 10 }} id="standard-basic" label="Email" type={'email'} variant="standard" />
                            <TextField

                                onChange={(e) => setpassword(e.target.value)}  // set the password line number 12
                                style={{ margin: 10 }} id="standard-basic" label="Password" type={'password'} variant="standard" />
                            <Button
                                onClick={HandleLogin} // call HandleLogin function line 35
                                type="button" color="primary" className="form__custom-button">
                                Log in
                            </Button>
                        </form>


                }

            </Paper>


        </Box>
    )
}
