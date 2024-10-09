import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../components/Add'
import View from '../components/View'
import Category from '../components/Category'

const Home = () => {
    const [removeVideoResponseFromView,setVideoResponseFromView]=useState("")
const [removeVideoResponseFromCategory,setRemoveVideoResponseFromCategory]=useState("")

const [videoUploadResponse,setVideoUploadResponse]=useState("")


  return (
    <div style={{paddingTop:'100px'}}>
        <div className="container mt-3 d-flex justify-content-between">
            <Add setVideoUploadResponse={setVideoUploadResponse}/>
            <Link to={'/history'}>Watch History</Link>
        </div>
        <div className="container-fluid my-5 row">
            <div className="col-lg-6">
                <h3>All Videos</h3>
                <View setVideoResponseFromView={setVideoResponseFromView} removeVideoResponseFromCategory={removeVideoResponseFromCategory} videoUploadResponse={videoUploadResponse}/>
            </div>
            <div className="col-lg-6">
                
                <Category removeVideoResponseFromView={removeVideoResponseFromView}  setRemoveVideoResponseFromCategory={setRemoveVideoResponseFromCategory}/>
            </div>
        </div>
      
    </div>
  )
}

export default Home
