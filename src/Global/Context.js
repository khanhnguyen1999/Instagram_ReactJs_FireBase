import React,{createContext,useState,useEffect} from 'react'
import {auth} from '../config'
export const ContextProvider = createContext();


export default function Context(props){
    const [model,setModel] = useState(false)
    const [user,setUser]=useState(null)
    const [loader,setLoader]=useState(true)
    const openModel = ()=>{
        setModel(true)
    }
    const closeModel = ()=>{
        setModel(false)
    }
    const register = async (user)=>{
        const {username,email,password}=user;
        try{
            const res = await auth.createUserWithEmailAndPassword(email,password)
            res.user.updateProfile({displayName:username})
            setModel(false)
        }
        catch(e){
            console.log("error",e.message)
        }

    }
    useEffect(()=>{
        auth.onAuthStateChanged(user=>{
            setUser(user)
            setLoader(false)
        })
    },[user])
    const login = async (user)=>{
        try{
            const {email,password}=user;
            const res = await auth.signInWithEmailAndPassword(email,password)
            console.log("done")
            setModel(false)
        }
        catch(e){
            console.log("error ",e.messgage)
        }
    }
    const logout = ()=>{
        auth.signOut().then(()=>{
            setUser(null)
        })
    }
    return (
        <ContextProvider.Provider value={{model,openModel,closeModel,register,login,user,loader,logout}}>
            {props.children}
        </ContextProvider.Provider>
    )
}