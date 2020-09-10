import React,{useContext,useState,useEffect} from 'react'
import {ContextProvider} from '../../Global/Context'
import { auth } from '../../config'

export default function Model(){
    const {model,closeModel,register,login} = useContext(ContextProvider)
    const [state,setState]=useState({
        register:true,
        login:false
    })
    const [input,setInput]=useState({
        username:'',
        email:'',
        password:''
    })
    const handleInput = (e)=>{
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }
    const formsToggle = ()=>{
        setState({
            ...state,
            register:!state.register,
            login:!state.login
        })
    }
    const closeForm = (e)=>{
        // e.preventDefault()
        const className = e.target.getAttribute("class")
        if(className==="model"){
            closeModel()
        }
    }
    const registerForm = e =>{
        e.preventDefault()
        console.log("value ",input)
        register(input)
    }
    const userLogin = e =>{
        e.preventDefault();
        login(input)
    }

    return (
        <>
            {model?
                <div className="model" onClick={closeForm}>
                    <div className="model__container">
                    {state.register?
                        <div className="model__form">
                        <form  onSubmit={registerForm}>
                            <div className="model__group">
                            <img src="/images/instagramLogo.png" alt="" />
                            </div>
                            <div className="model__group">
                            <input
                                type="text"
                                name="username"
                                className="model__input"
                                placeholder="Username..."
                                onChange={handleInput}
                                value={input.username}
                                required
                            />
                            </div>
                            <div className="model__group">
                            <input
                                type="email"
                                name="email"
                                className="model__input"
                                placeholder="Email..."
                                onChange={handleInput}
                                value={input.email}
                                required
                            />
                            </div>
                            <div className="model__group">
                            <input
                                type="password"
                                name="password"
                                className="model__input"
                                placeholder="Create password..."
                                onChange={handleInput}
                                value={input.password}
                                required
                            />
                            </div>
                            <div className="model__group">
                            <input
                                type="submit"
                                value="Register"
                                className="btn btn-smart"
                            />
                            </div>
                            <div className="model__group">
                            <span onClick={formsToggle}>
                                Already have an account ?{" "}
                            </span>
                            </div>
                        </form>
                        </div>
                        :
                        <div className="model__form">
                        <form onSubmit={userLogin}>
                            <div className="model__group">
                            <img src="/images/instagramLogo.png" alt="" />
                            </div>
                            <div className="model__group">
                            <input
                                type="email"
                                name="email"
                                className="model__input"
                                placeholder="Email..."
                                onChange={handleInput}
                                value={input.email}
                                required
                            />
                            </div>
                            <div className="model__group">
                            <input
                                type="password"
                                name="password"
                                className="model__input"
                                placeholder="Create password..."
                                onChange={handleInput}
                                value={input.password}
                                required
                            />
                            </div>
                            <div className="model__group">
                            <input
                                type="submit"
                                value="Login"
                                className="btn btn-smart"
                            />
                            </div>
                            <div className="model__group">
                            <span onClick={formsToggle}>Create a new account ? </span>
                            </div>
                        </form>
                        </div>
                        }
                    </div>
                </div>
                :
                ''
            }
        </>
    )
}