"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useState, useEffect, useRef  } from 'react'
import NewsSection from "../components/news-section"
export default function Kampagner() {
 
    return (
        <div className="flex flex-col items-center justify-between min-h-screen w-full pt-[120px]">
       

            <div className="flex flex-col items-center w-full">
                <NewsSection />
            </div>
    </div>
    )
}
