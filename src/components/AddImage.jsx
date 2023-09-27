import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { commonRequest } from "../services/commonRequest"


function AddImage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };
  const [preview, setPreview] = useState("")

  const [image, setImage] = useState("")

  // to update image
  const setProfile = (e) => {
    setImage(e.target.files[0]);
  }

  const handleUpdate = async (e) => {
    if (!image) {
      alert('please select image')
    } else {
      const data = new FormData()
      data.append("user_image", image)
            data.append("lname", "ghghj")

      // Header
      if (image) {
        var headerConfig = {
          "Content-Type": "multipart/form-data"
        }
      } else {
        var headerConfig = ""
      }

      var useremail = localStorage.getItem("user-email");
      console.log(useremail);
      const response =  async(useremail,data,headerConfig)=>{
        return await commonRequest("PUT", `http://localhost:4000/addimage/${useremail}`, data, headerConfig)
    
    }
      console.log(response);
    }
  }
  useEffect(() => {

    if (image) {
      // setExistingImg("")
      setPreview(URL.createObjectURL(image))
    }

  }, [image])



  return (
    <>
    <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicimage">
                        <Form.Label>Choose Profile Image</Form.Label>
                        <Form.Control onChange={setProfile} type="file" name='userProfile' />
                      </Form.Group>
  
        <div>
        <div><img width={'200px'} height={'200px'} src={preview} alt="img" /></div>
          <div>
          <Button onClick={handleUpdate} variant="primary">upload</Button>{' '}
          </div>
        </div>
    </Form>
    </>
  );
}

export default AddImage;