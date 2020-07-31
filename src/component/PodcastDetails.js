import React from 'react'
function PodcastDetails(props) {
    return (
        <div style={{ paddingTop: '16px' }} > 
        <div className=" topSpacing">
            <section >
                <div className=" mission-height site-primary-bg-color" style={{ textAlign: 'center', padding: 20, marginTop:20 }}>
                    <a href="/"><p className="large-text">Podcast</p></a>
                        <p className="small-text"> Me4real & Madison Hosting Inspiring talks</p>

                </div>
            </section>
            <section className="site-secondary-bg-color" >
                <div className="container center" style={{ justifyContent: 'center' }} >
                <div className="row" style={{textAlign: 'left', paddingBottom: '20px', color: 'white'}}> All episodes</div>
                <div className="row off-set-4">

                    <div className="col-md-4">
                        <div style={{ boxShadow: '0 20px 40px 2px rgba(0, 0, 0, .15)', transform: 'translateY(-100 %)'}}>
                                    <h2 className="podcast-title">Our Me4real Podcast</h2>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div style={{textAlign: 'left', color: 'white'}} >
                            Our Me4real Podcast
                        </div>
                        <p className="podcast-episode">
                            Episode 04: with guest Leean Bond
                        </p>
                    </div>

                </div>
                <div className="row">
                    <audio controls style={{width: '100%'}}>
                        <source src="horse.mp3" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

                </div>
            </section>
            <section>
                <div className="container center" style={{ justifyContent: 'center', }} >
                    <div ><p style={{ textAlign: 'center' }} >Brianna & Madison Hosting Inspiring Women|9/29/2023</p></div>
                    <br />
                    <div ><p style={{ textAlign: 'center' }}>Do you have video episodes in your podcast? Any podcast episodes will get a video player.</p></div>
                </div>
            </section>
        </div>
        </div>
    )
}
export default PodcastDetails;