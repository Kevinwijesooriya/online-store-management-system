import React from 'react'
import './assets/css/bootstrap.min.css';
import './assets/css/templatemo.css';
import './assets/css/custom.css';
import './assets/css/fontawesome.min.css';


function Footer() {
    return (
        <div>
            <hr></hr>
            {/* <a href="/Addinquiry">inquiry</a> */}
            {/* ========= F O O T R E ====== */}
            <footer class="bg-dark" id="tempaltemo_footer">
                <div class="container">
                    <div class="row">

                        <div class="col-md-4 pt-5">
                            <h2 class="h2 text-success border-bottom pb-3 border-light logo">V-tech</h2>
                            <ul class="list-unstyled text-light footer-link-list">
                                <li>
                                    <i class="fas fa-map-marker-alt fa-fw"></i>
                                    123 Consectetur at ligula 10660
                                </li>
                                <li>
                                    <i class="fa fa-phone fa-fw"></i>
                                    <a class="text-decoration-none" href="tel:010-020-0340">011-020-0340</a>
                                </li>
                                <li>
                                    <i class="fa fa-envelope fa-fw"></i>
                                    <a class="text-decoration-none" href="mailto:info@company.com">infovtech@company.com</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-md-4 pt-5">
                            <h2 class="h2 text-light border-bottom pb-3 border-light">Products</h2>
                            <ul class="list-unstyled text-light footer-link-list">
                                <li><a class="text-decoration-none" href="#">Mobile Phone</a></li>
                                <li><a class="text-decoration-none" href="#">Mobile Accessories</a></li>
                                <li><a class="text-decoration-none" href="#">Smart Watchers & Wearables</a></li>
                                <li><a class="text-decoration-none" href="#">Ipad & Tablets</a></li>
                                <li><a class="text-decoration-none" href="#">Laptops</a></li>
                                <li><a class="text-decoration-none" href="#">Headphones & Earphones</a></li>
                                <li><a class="text-decoration-none" href="#">Other Accessories</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4 pt-5">
                            <h2 class="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
                            <ul class="list-unstyled text-light footer-link-list">
                                <li><a class="text-decoration-none" href="/cart">Home</a></li>
                                <li><a class="text-decoration-none" href="#">About Us</a></li>
                                <li><a class="text-decoration-none" href="#">Shop Locations</a></li>
                                <li><a class="text-decoration-none" href="/Addinquiry">FAQs</a></li>
                                <li><a class="text-decoration-none" href="#">Contact</a></li>
                            </ul>
                        </div>

                    </div>

                    <div class="row text-light mb-4">
                        <div class="col-12 mb-3">
                            <div class="w-100 my-3 border-top border-light"></div>
                        </div>
                        <div class="col-auto me-auto">
                            <ul class="list-inline text-left footer-icons">
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a rel="nofollow" class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-facebook-f fa-lg fa-fw"></i></a>
                                </li>
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-instagram fa-lg fa-fw"></i></a>
                                </li>
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-twitter fa-lg fa-fw"></i></a>
                                </li>
                                <li class="list-inline-item border border-light rounded-circle text-center">
                                    <a class="text-light text-decoration-none" target="_blank" href="#"><i class="fab fa-linkedin fa-lg fa-fw"></i></a>
                                </li>
                            </ul>
                        </div>
                        {/* <div class="col-auto">
              <label class="sr-only" for="subscribeEmail">Email address</label>
              <div class="input-group mb-2">
                <input type="text" class="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
                <div class="input-group-text btn-success text-light">Subscribe</div>
              </div>
            </div> */}
                    </div>
                </div>

                <div class="w-100 bg-black py-3">
                    <div class="container">
                        <div class="row pt-2">
                            <div class="col-12">
                                <p class="text-left text-light">
                                    Copyright &copy; 2021 V-TECH
                                    | Designed by <a rel="sponsored" href="#" target="_blank">V-TECH</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>



        </div>
    )
}

export default Footer
