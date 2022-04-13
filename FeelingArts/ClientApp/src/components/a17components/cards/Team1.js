import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Carousel,
    CarouselItem,
} from "reactstrap";

// Core Components

const items = [
    {
        content: (
            <Container>
                <Row>
                    <div>
                        <img
                            alt="..."
                            className=" d-block w-100"
                                src={require("assets/NewImg/David2.jpg")}
                            ></img>
                        </div>
                </Row>
            </Container>
        ),
    },
    {
        content: (
            <Container>
                <Row>
                    <div>
                        <img
                            alt="..."
                            className=" d-block w-100"
                                src={require("assets/NewImg/David2.jpg")}
                            ></img>
                        </div>                
                </Row>
            </Container>
        ),
    },
    {
        content: (
            <Container>
                <Row>
                    <div>
                            <img
                                alt="..."
                            className=" d-block w-100"
                            src={require("assets/NewImg/MonaLisa.jpg")}
                            ></img>
                        </div>
                </Row>
            </Container>
        ),
    },
];

function Team1() {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Carousel
                            activeIndex={activeIndex}
                            next={next}
                            previous={previous}
                            className="carousel"
                            class="d-block w-100"
                            id="carouselExampleControls"
                        >
                            {items.map((item, key) => {
                                return (
                                    <CarouselItem
                                        onExiting={() => setAnimating(true)}
                                        onExited={() => setAnimating(false)}
                                        key={key}
                                    >
                                        {item.content}
                                    </CarouselItem>
                                );
                            })}
                            <a
                                className="carousel-control-prev"
                                data-slide="prev"
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    previous();
                                }}
                                role="button"
                            >
                                <i className="ni ni-bold-left"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                data-slide="next"
                                href="#pablo"
                                onClick={(e) => {
                                    e.preventDefault();
                                    next();
                                }}
                                role="button"
                            >
                                <i className="ni ni-bold-right"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </Carousel>
                    </Row>
                </Container>
            </section>
        </>
    );
}

export default Team1;
