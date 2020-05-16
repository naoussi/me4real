import React, { Fragment, useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images'
import './gallery.css'
const gutter = 2;

const images = [
    { 
        src: '/galery/galery3.jpg', thumbnail: '/galery/galery3.jpg', caption: "Slider 1",
    },
    {
        src: '/galery/galery10.jpg', thumbnail: '/galery/galery10.jpg', caption: "not working",
    },
    {
        src: '/galery/galery12.jpg', thumbnail: '/galery/galery12.jpg', caption: "not working",
    },
    {
        src: '/galery/galery13.jpg', thumbnail: '/galery/galery13.jpg', caption: "not working",
    },
    {
        src: '/galery/galery14.JPG', thumbnail: '/galery/galery14.JPG', caption: "not working",
    },
    {
        src: '/galery/galery15.JPG', thumbnail: '/galery/galery15.JPG', caption: "not working",
    },
    {
        src: '/galery/galery1.jpg', thumbnail: '/galery/galery1.jpg', caption: "not working",
    },
    { 
        src: '/galery/galery2.jpg', thumbnail: '/galery/galery2.jpg', caption: "second",
    },
    {
        src: '/galery/galery4.jpg', thumbnail: '/galery/galery4.jpg', caption: "Slider 2",
    },
    { 
        src: '/galery/galery5.jpg', thumbnail: '/galery/galery5.jpg', caption: "Slider 3",
    },
    { 
        src: '/galery/galery6.jpg', thumbnail: '/galery/galery6.jpg', caption: "Slider 4",
    },
    { 
        src: '/galery/galery7.jpg', thumbnail: '/galery/galery7.jpg', caption: "Slider 4",
    },
    { 
        src: '/galery/galery8.jpg', thumbnail: '/galery/galery8.jpg', caption: "Slider 4",
    },
    { 
        src: '/galery/galery9.jpg', thumbnail: '/galery/galery9.jpg', caption: "Slider 4",
    },
    { 
        src: '/galery/galery11.jpg', thumbnail: '/galery/galery11.jpg', caption: "Slider 4",
    },
    { 
        src: '/galery/galery16.JPG', thumbnail: '/galery/galery16.JPG', caption: "Slider 4",
    },
    { 
        src: '/galery/galery17.JPG', thumbnail: '/galery/galery17.JPG', caption: "Slider 4",
    },
    { 
        src: '/galery/galery18.JPG', thumbnail: '/galery/galery18.JPG', caption: "Slider 4",
    },
    { 
        src: '/galery/galery19.JPG', thumbnail: '/galery/galery19.JPG', caption: "Slider 4",
    },
    { 
        src: '/galery/galery20.JPG', thumbnail: '/galery/galery20.JPG', caption: "Slider 4",
    },
    { 
        src: '/galery/galery21.JPG', thumbnail: '/galery/galery21.JPG', caption: "Slider 4",
    },
    { 
        src: '/galery/galery22.JPG', thumbnail: '/galery/galery22.JPG', caption: "Slider 4",
    },
    { 
        src: '/galery/galery23.JPG', thumbnail: '/galery/galery23.JPG', caption: "Slider 4",
    },
    { 
        src: '/galery/galery24.JPG', thumbnail: '/galery/galery24.JPG', caption: "Slider 4",
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