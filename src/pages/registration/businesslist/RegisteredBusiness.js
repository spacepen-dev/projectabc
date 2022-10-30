import { NewBackground } from "../ui";
import Library from '../../../assets/img/library.svg';
import Spacepen from '../../../assets/img/spacepen.svg';
import Add from '../../../assets/img/add.svg';

import Logo from '../../../assets/img/logo.svg';




export default function RegisteredBusiness() {
    
    return <NewBackground>

        <main class="mt-2 mt-md-5 container-lg d-flex flex-column justify-content-center align-items-center">
            <article class="py-4 px-2 py-md-5 px-md-4 biz_cont">
                <div class="heading-cont">
                    <div class="logo-cont">
                        <img src={Logo} class="comp-logo" alt="Orio logo" />
                    </div>
                    <h2 class="heading-text">
                        Create A Business Account
                    </h2>
                    <p class="mt-3 mb-4 heading-subtext">You don’t have any business here yet buy you can open one now
                    </p>
                </div>

                <div class="row pb-lg-5">

                    <div class="col-12 col-md-4">
                        <div class="w-100 d-flex flex-column m-auto text-center px-2 position-relative add_acct_cont">
                            <div class="ml-auto mt-3 mr-3 lib_img">
                                <img src={Library} alt="" />
                            </div>
                            <div class="position-absolute add_img">
                                <img src={Spacepen} alt="" />
                            </div>
                            <p class="mt-auto mb-3 text-center add_acct_text">Spacepen Technologies</p>
                        </div>
                    </div>

                    <div class="col-12 col-md-4 my-4 my-md-0">
                        <div class="w-100 d-flex flex-column m-auto text-center px-2 position-relative add_acct_cont">
                            <div class="ml-auto mt-3 mr-3 lib_img">
                                <img src={Library} alt="" />
                            </div>
                            <div class="position-absolute add_img">
                                <img src={Spacepen} alt="" />
                            </div>
                            <p class="mt-auto mb-3 text-center add_acct_text">Ogood Business</p>
                        </div>
                    </div>

                    <div class="col-12 col-md-4">
                        <div class="w-100 d-flex flex-column m-auto text-center px-2 position-relative add_acct_cont">
                            <div class="ml-auto mt-3 mr-3 lib_img">
                                <img src={Library} alt="" />
                            </div>
                            <div class="position-absolute add_img">
                                <img src={Add} alt="" />
                            </div>
                            <p class="mt-auto mb-3 text-center add_acct_text">Add Account</p>
                        </div>
                    </div>
                </div>

            </article>
            <aside class="sign-up forgot-footer">
                <a href="index.html">SIGN IN&emsp; </a> <span>or</span> <a href="signUp.html" target="_blank">&emsp;SIGN
                    UP</a>
            </aside>
        </main>

    </NewBackground>

}