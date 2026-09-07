/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'


const Partners = ['Shri Mahaveer Shikshan Sansthanam', 'Bihar Jharkhand Sabha Members Australia', 'Sukhi Parivar Foundation','University of Sydney']

const OurPartner = () => {
    return (
        <>

            <Container>
                <Col lg={12}>
                    <h4 className='text-center pb-4 text-[50px] font-semibold text-[#b27f4a] max-[1000px]:text-[3rem]'>Our Partners</h4>
                </Col>

                <div className='mx-auto flex justify-center items-center flex-wrap gap-4 flex-grow w-full'>
                    {
                        Partners.map((item,index) => (
                            <Button className='px-4 py-[12px] rounded-[10px] bg-transparent border-2 border-[#b27f4a] text-[#b17e4a] font-bold text-[25px] hover:bg-[#422a1d] hover:border-[#422a1d] hover:text-[#cf9b69] max-[1000px]:px-[9px] max-[1000px]:py-[9px] max-[1000px]:text-[15px]' key={index}>{item}</Button>
                        ))
                    }
                </div>

            </Container>



        </>
    )
}

export default OurPartner