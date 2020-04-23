import React, { Fragment, useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import './gallery.css'
const gutter = 2;

const images = [
    { src: '/cardbg.png', thumbnail: '/cardbg.png', caption: "not working",
        style:{
            boxSizing: 'border-box',
            float: 'center',
            flex: 1,
            width:'50%',
            overflow: 'hidden',
            ':hover': {
                opacity: 0.9,
            },
        }
    },
    { src: 'carousel.jpg', thumbnail: 'carousel.jpg', caption: "second",
        style: {
            boxSizing: 'border-box',
            float: 'center',
            flex: 1,
            width: '50%',

            overflow: 'hidden',
            ':hover': {
                opacity: 0.9,
            },
        }
    },
    { src: 'slider1.jpg', thumbnail: 'slider1.jpg', caption: "Slider 1",
        style: {
            backgroundColor: '#eee',
            boxSizing: 'border-box',
            float: 'left',
            margin: gutter,
            overflow: 'hidden',
            paddingBottom: '16%',
            position: 'relative',
            width: `calc(25% - ${gutter * 2}px)`,
            ':hover': {
                opacity: 0.9,
            },
        }
    },
    { src: 'slider2.jpg', thumbnail: 'slider2.jpg', caption: "Slider 2",
            style: {
            backgroundColor: '#eee',
            boxSizing: 'border-box',
            float: 'left',
            margin: gutter,
            overflow: 'hidden',
            paddingBottom: '16%',
            position: 'relative',
            width: `calc(43% + ${gutter * 2}px)`,
            ':hover': {
                opacity: 0.9,
            },
        }
    },
    { src: 'slider3.jpg', thumbnail: 'slider3.jpg', caption: "Slider 3",
        style: {
            backgroundColor: '#eee',
            boxSizing: 'border-box',
            float: 'left',
            margin: gutter,
            overflow: 'hidden',
            paddingBottom: '16%',
            position: 'relative',
            width: `calc(31% + ${gutter * 0.5}px)`,
            ':hover': {
                opacity: 0.9,
            },
        }
    },
    { src: 'slider4.jpg', thumbnail: 'slider4.jpg', caption: "Slider 4",
        style: {
            boxSizing: 'border-box',
            float: 'left',
            margin: gutter,
            overflow: 'hidden',
            paddingBottom: '16%',
            position: 'relative',
            width: `calc(25% - ${gutter * 2}px)`,
            
            ':hover': {
                opacity: 0.9,
            },
        }
    },
];

export default class Gallery extends React.Component {
    state = {
        selectedIndex: 0,
        lightboxIsOpen: false,
        hover: false,
    };
    toggleLightbox = (selectedIndex) => {
        this.setState(state => ({
            lightboxIsOpen: !state.lightboxIsOpen,
            selectedIndex,
        }));
    };
    mouseenter=() => {
        console.log("hovering both mouse leave and mouse enter")
        this.setState(state => ({
            hover: !state.hover
        }))
    }
    render() {
        // const { images, isLoading } = this.props;
        const isLoading = false;
        const { selectedIndex, lightboxIsOpen, hover } = this.state;
        
        return (                
            <>
                {!isLoading ? (


                            <section style={{display: 'flex'}}>
                                <article>
                                    <div class="row">
                                        <div class="inner-container">
                                                <img
                                            onMouseEnter={() => this.mouseenter()}
                                            onMouseLeave={() => this.mouseenter()} onClick={() => this.toggleLightbox(0)} key={0}
                                                    alt={images[0].caption}
                                                    src={images[0].thumbnail}
                                                    style={{
                                                        display: 'flex',
                                                        width: '100%',
                                                        height: '100%',
                                                        cursor: 'pointer',
                                                        opacity: 0.6,
                                                        ':hover': {
                                                            opacity: 0.9,
                                                            backgroundColor: 'red'
                                                        },
                                                    }}
                                                />
                                        </div>
                                        <div class="inner-container">
                                        <img
                                            onMouseEnter={() => this.mouseenter()}
                                            onMouseLeave={() => this.mouseenter()} onClick={() => this.toggleLightbox(1)} key={1}
                                            alt={images[1].caption}
                                            src={images[1].thumbnail}
                                            style={{
                                                display: 'flex',
                                                height: '100%',
                                                ':hover': {
                                                    opacity: 0.9,
                                                    backgroundColor: 'red'

                                                },
                                                width: '100%',
                                                cursor: 'pointer',
                                            }}
                                        />

                                        </div>
                                    </div>
                                    <div class="row">

                                    <img
                                        onMouseEnter={() => this.mouseenter()}
                                        onMouseLeave={() => this.mouseenter()} onClick={() => this.toggleLightbox(4)} key={4}
                                        alt={images[4].caption}
                                        src={images[4].thumbnail}
                                        style={{
                                            display: 'flex',
                                            width: '100%',
                                            height: '100%',

                                            cursor: 'pointer',
                                        }}
                                    />
                                    </div>
                                </article>

                                <article>
                                    <div className="row">

                                        <img
                                        onMouseEnter={() => this.mouseenter()}
                                        onMouseLeave={() => this.mouseenter()} onClick={() => this.toggleLightbox(2)} key={2}
                                        alt={images[2].caption}
                                        src={images[2].thumbnail}
                                        style={{
                                            display: 'flex',
                                            width: '100%',
                                            height: '100%',

                                            cursor: 'pointer',
                                        }}
                                        />
                                    </div>
                                    <div className="row">
                                <img
                                    onMouseEnter={() => this.mouseenter()}
                                    onMouseLeave={() => this.mouseenter()} onClick={() => this.toggleLightbox(5)} key={5}
                                    alt={images[5].caption}
                                    src={images[5].thumbnail}
                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        height: '100%',

                                        cursor: 'pointer',
                                    }}
                                />
                                    </div>
                                </article>

                                <article>
                            <img
                                onMouseEnter={() => this.mouseenter()}
                                onMouseLeave={() => this.mouseenter()} onClick={() => this.toggleLightbox(3)} key={3}
                                alt={images[3].caption}
                                src={images[3].thumbnail}
                                style={{
                                    display: 'flex',
                                    width: '100%',
                                    height: '100%',
                                    cursor: 'pointer',
                                    padding: '14px 0px 14px 0px',
                                }} />
                                </article>
                            </section>
                ) : null}

                <ModalGateway>
                    {lightboxIsOpen && !isLoading ? (
                        <Modal onClose={this.toggleLightbox}>
                            <Carousel
                                currentIndex={selectedIndex}
                                frameProps={{ autoSize: 'height' }}
                                views={images}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </>

        );
    }
}


const ImageGallery = (props) => (
    <div
        style={{
            overflow: 'hidden',
            marginLeft: -gutter,
            marginRight: -gutter,
        }}
        {...props}
    />
);

const Image = (props) => (
    <div   
        {...props}
    />
);