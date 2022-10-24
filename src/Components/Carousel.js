import React from "react";
import pic1 from "../PIC1.webp"
import pic2 from "../PIC2.jpg"
import pic3 from "../PIC3.jpg"

export default function Carousel() {
    return (
        <div>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={pic3}  class="d-block w-100" alt="pic1" style={{ height: 400  }} ></img>
                            <div class="carousel-caption d-none d-md-block bg-dark">
                                <h5>Fincial crisis</h5>
                                <p>We meet our financial investment needs</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={pic1}  class="d-block w-100" alt="pic2" style={{ height: 400  }}></img>
                            <div class="carousel-caption d-none d-md-block bg-dark" >
                                <h5>Fincial crisis</h5>
                                <p>We meet our financial investment needs</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src={pic2}  class="d-block w-100" alt="pic3" style={{ height: 400  }}></img>
                            <div class="carousel-caption d-none d-md-block bg-dark">
                                <h5>Fincial crisis</h5>
                                <p>We meet our financial investment needs</p>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}