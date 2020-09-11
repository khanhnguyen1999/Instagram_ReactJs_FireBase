import React,{useContext, useEffect} from 'react'
import {
    FaSistrix,
    FaTelegramPlane,
    FaRegCompass,
    FaRegHeart
} from 'react-icons/fa'
import {MdHome} from 'react-icons/md'
import {ContextProvider} from '../../Global/Context'

export default function Navbar(){
    const {model,openModel,user,logout,loader} = useContext(ContextProvider)
    console.log(user)
    const handleOpenForm = ()=>{
        openModel()
    }
    const logoutForm = ()=>{
        logout()
    }
    const checkUser = ()=>{
        return !loader?(
            !loader && user? <><li>{user.displayName}</li><li onClick={logoutForm}>LogOut</li></> :
                <li onClick={handleOpenForm}>Register/Login</li>   
        ):("...")
    }
    return (
        <div className="navbar">
            <div className="navbar__first">
                <div className="navbar__first-logo">
                    <img src="/images/ins.png"/>
                </div>
            </div>
            <div className="navbar__middle">
                <div className="navbar__middle-search">
                    <input type="text" className="navbar__search" placeholder="Search..."/>
                    <FaSistrix className="searchIcon"/>
                </div>
            </div>
            <div className="navbar__last">
                <li>
                    <MdHome className="navbar__icon"/>
                </li>
                <li>
                    <FaTelegramPlane className="navbar__icon"/>
                </li>
                <li>
                    <FaRegCompass className="navbar__icon"/>
                </li>
                <li>
                    <FaRegHeart className="navbar__icon"/>
                </li>
                {
                    checkUser()
                }
            </div>
        </div>
    )
}