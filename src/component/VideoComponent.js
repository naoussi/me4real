import React from 'react'

function VideoComponent(props) {
    return (
        <div>
            <section>
                <div className="site-primary-bg-color fix-height" ></div>

                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 50 }}>
                    <a href="/"><p className="large-text">Videos</p></a>
                </div>
            </section>

        <div className="container">
            <div className="row">
                {[1,2,3,4,5].map((item, key)=> 
                    <>
                        <div className='col'>
                            <iframe width="505" height="310" style={{padding: '10px'}}
                                    src="https://www.youtube.com/embed/LeuMS4q3v_U"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen></iframe>
                            <p className='font-weight-bold' style={{marginLeft: 8}}>
                                Demo name #{key+1}</p>
                            <hr/>
                        </div>
                    </>
                )}
            </div>
        </div>
        </div>
    )
}
export default VideoComponent


    // < div style = {{ position: 'relative', paddingBottom: '56.24%', paddingTop: 20, height: 0 }}>
    //     <iframe style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    //         src="https://www.youtube.com/embed/LeuMS4q3v_U"
    //         frameborder="0"
    //         allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //         allowfullscreen>

    //     </iframe>
    //             </div >