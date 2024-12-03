import React from 'react'
import Container from "./Container"
import Flex from "./Flex"
import One from "../assets/pone.png"
import Two from "../assets/ptwo.png"
import Three from "../assets/pthree.png"

const ImageNew = () => {
  return (
    <section className='py-10'>
        <Container>
        <Flex className="justify-between">
            <div className="w-[49%]">
                <div className="">
                    <img src={One} alt="" />
                </div>
            </div>
            <div className="w-[49%]">
                <div className="">
                    <img src={Two} alt="" />
                </div>
                <div className="mt-[35px]">
                    <img src={Three} alt="" />
                </div>
            </div>
        </Flex>
    </Container>
    </section>
  )
}

export default ImageNew