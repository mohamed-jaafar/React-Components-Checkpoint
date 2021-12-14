import React from 'react';
import {Image,Container,Row,Col} from 'react-bootstrap'

const ProfilePhoto = () => {
    return (
    <div>
        <Container>
        <Row>
        
                <Col xs={6} md={4}>
                <Image style={{height:'300px'}} className="img" src="https://th.bing.com/th/id/R.69e0467ae3ce95c804007c80ed2fac33?rik=VLFADFNmYAQmMg&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f3%2fHacker-PNG-Download-Image.png&ehk=dLi2iYc2KeE7MnOWy8GZI%2fXX0zFPgsGMALm%2bJgw8vzk%3d&risl=&pid=ImgRaw&r=0"/>
                </Col>
                
        </Row>
        </Container>
        <br/>



    </div>
    )
}

export default ProfilePhoto