// import { useRef } from "react"
import React from 'react'
import autoAnimate from "@formkit/auto-animate"
import { useState, useEffect, useRef } from "react";

const ChatBody = ({ chat }) => {
    const aiStyle = "bg-white bg-opacity-40 backdrop-blur-lg dropshadow-md mr-auto"

    const parent = useRef(null);
    const bottomRef = useRef(null);
    

    useEffect(()=>{
        parent.current &&  autoAnimate (parent.current);
    }, [parent])
    

    // only for aut animations
    useEffect(()=>{
        parent.current && autoAnimate(parent.current);
    }, [parent])

    //for scrolling bottom
    useEffect(()=>{
        bottomRef.current?.scrollIntoView({behavior: "smooth"})
    }, [chat])

    return (

        <div className="flex flex-col gap-4"ref={parent}>
            {/* client message */}
            {chat.map((message, i) => {
                    return (
                        <div
                        key={i}
                        className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%] ${
                          message.sender === "ai" && aiStyle
                        }`}
                      >
                        <pre className="whitespace-pre-wrap">
                          <span>{message.message}</span>
                        </pre>
                      </div>
                    );
                })
            }



          <div ref={bottomRef} className="h-3"></div> 
        </div>

    )
}

export default ChatBody


 {/* <div className='border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'>
                <pre className='whitespaces-pre-wrap ${aiStyle}'>
                    <span>
                        Hi chat gpt,Can you help me
                    </span>
                </pre>
            </div> */}

            {/* AI message */}

            {/* <div className={`border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'>
                <pre className='whitespaces-pre-wrap ${aiStyle}`}>
                <pre>
                    <span>
                        Yeah I can do everthing for you
                    </span>
                </pre>
            </div> */}