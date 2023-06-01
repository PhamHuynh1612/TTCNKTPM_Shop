import "../styles/userinfor.css"
import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import { useState, useEffect, useRef } from "react";
import { getSession } from "../authentication/Login";

export default function UserInfor() {
    const [user, setUser] = useState()
    const nameRef = useRef("")
    const emailRef = useRef("")
    const addressRef = useRef("")
    const phoneNumberRef = useRef("")
    const passwordRef = useRef("")

    useEffect(() => {
        let user = getSession()
        setUser(user)
    }, [])

    async function changeUserInfo() {
        let id = user.id;
        let name = nameRef.current.value;
        let email = emailRef.current.value;
        let address = addressRef.current.value;
        let phoneNumber = phoneNumberRef.current.value;
        let password = passwordRef.current.value;

        console.log( {
            "id" : id,
            "name" : String(name),
            "email" : String(email),
            "password" : String(password),
            "address" : String(address),
            "phoneNumber" : String(phoneNumber),
            "active" : 1
        });

        const response = await fetch("http://localhost:8080/user/edit", {
            method: "POST",
            headers : {'Content-Type': 'text/plain'},
            body : JSON.stringify({
                "id" : id,
                "name" : String(name),
                "email" : String(email),
                "password" : String(password),
                "address" : String(address),
                "phoneNumber" : String(phoneNumber),
                "active" : 1
            })
             },)
        
        try {
            let data = await response.json()
            console.log(data);
        } catch(e) {
            console.log(e);
        }



    }

    return <>

        <div className="set-container">
            <div className="container">
                {user && <><p className="edit-profile-title" >Edit profile</p>
                    <InputRow title={"Name"} defaultValue={user?.name} innerRef={nameRef} ></InputRow>
                    <InputRow title={"Email"} defaultValue={user?.email} innerRef={emailRef} ></InputRow>
                    <InputRow title={"Address"} defaultValue={user?.address} innerRef={addressRef} ></InputRow>
                    <InputRow title={"Phone Number"} defaultValue={user?.phone_number} innerRef={phoneNumberRef} ></InputRow>
                    <InputRow title={"Password"} isPassword={true} innerRef={passwordRef} ></InputRow>
                    <div className="button-row">
                        <button className="cancel-button" onClick={changeUserInfo}>Cancel</button>
                        <button className="save-button" onClick={changeUserInfo}>Save</button>

                    </div></>}
            </div>
        </div>
    </>
}

export function InputRow(props) {
    return (
        <div className="input">
            <FormControl  >
                <FormLabel style={{ fontSize: 26, fontWeight: 600 }}>{props.title}</FormLabel>
                <div style={{ width: 720 }}><Input slotProps={{ input: { ref: props.innerRef } }} type={props.isPassword != undefined ? "password" : "text"} defaultValue={props.defaultValue} fullWidth={true} size={'lg'} /></div>
            </FormControl>
        </div>
    );
}

