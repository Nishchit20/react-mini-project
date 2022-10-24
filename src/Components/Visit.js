import React from "react";

export default function Visit() {
    return (
        <div style={{ height: "200px", width: "100%", backgroundColor: "rgb(65,76,80)", float: "left" }}>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-6">
                            <form>
                                <div style={{ paddingTop: "50px", marginLeft: "100px" }}>
                                    <h3 style={{ color: "white" }}>HABER <span style={{ fontSize: "8px" }}>&copy; 2015 <a style={{ fontSize: "11px" }}> Privacy policy</a></span></h3>
                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fa-brands fa-facebook" ></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-google"></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <button type="button" class="btn btn-primary btn-floating mx-1">
                                        <i class="fab fa-github"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <div >
                                <img src="https://th.bing.com/th/id/OIP.x2-crTsrF6zieGbpwHhGyQHaE8?w=267&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" class="d-block w-100" alt="pic1" style={{ paddingLeft: "50px", paddingRight: "200px", paddingTop: "50px", paddingBottom: "20px", height: "170px" }} ></img>
                            </div>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    );
}