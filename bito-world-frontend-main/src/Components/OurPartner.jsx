/* eslint-disable no-unused-vars */
import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'


const Partners = ['Shri Mahaveer Shikshan Sansthanam', 'Bihar Jharkhand Sabha Members Australia', 'Sukhi Parivar Foundation','University of Sydney']

const OurPartner = () => {
    return (
        <>

            <Container>
                <Col lg={12}>
                    <h4 className='text-center pb-4 our-partner-head'>Our Partners</h4>
                </Col>

                <div className='mx-auto partner-div'>
                    {
                        Partners.map((item,index) => (
                            <Button className='partner-btn' key={index}>{item}</Button>
                        ))
                    }
                </div>

            </Container>



        </>
    )
}

export default OurPartner