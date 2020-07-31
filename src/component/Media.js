import React from 'react'
import {Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import PodcastDetails from './PodcastDetails'
import '../App.css'
function Media(params) {
    return (
        <div >
            <section>
                <div className="site-primary-bg-color fix-height" ></div>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
                    <a href="/"><p className="large-text">Podcast</p></a>
                    <p className="small-text"> Me4real & Madison Hosting Inspiring Women</p>
                </div>
            </section>
                <section>
                    <div className="container center" style={{ justifyContent: 'center' }} >

                    {[1, 2, 3, 4, 5, 6].map((item, key) => <><div className="row" >
                        <div className="col-md-4">
                            <img src="/logo.jpg" height="110px" width= '140px' /> 
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                <Link to={`/podcast/${key}`}> <h3 style={{ color: '#A4A4A4'}}> Episode 0{key}: with guest Leean Bond</h3></Link>
                            </div>
                            <div className="row">
                                <span> 9/29/2019  | 10min  </span> <label variant="warning" outlined >Latest Episode</label>
                            </div>
                            <div className="row">
                                <p> Do you have video episodes in your podcast? Any podcast episodes will get a video player.</p>
                            </div>
                        </div>
                    </div>
                    <hr />

                    </>
                    )}
                    </div>
                </section>
            </div>
    )
}

export default Media

   




    