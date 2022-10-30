import { NewBackground } from "../ui";
import Logo from '../../../assets/img/logo.svg';

export default function TermsAndConditions() {
    return <NewBackground>

        <main class="container terms_page">
            <article>
            <div className="logo-cont">
                <img src={Logo} class="comp-logo" alt="Aimienpay logo" />
            </div>
                <small class="heading-subtext mb-5">AGREEMENT</small>
                <h1 class="mt-2 mb-4 heading-text">Terms Of Service</h1>
                <p class="mb-4 ">
                    We know it’s tempting to skip Terms of Service, but it’s important to
                    establish what you can expect from us as you use Amienpay Services,
                    and what we expect from you.
                </p>

                <p class="mb-4 terms_page-para">
                    These Terms of Service reflect then way Amienpay service works, thye
                    laws that apply to our company, and certain things we’ve always
                    believed to be true.
                    <br />
                    <br />
                    As a result, these Terms od Service help define
                    Aimienpay’s Relationship with you interact with our sevices. For
                    example, these terms include the following topic headings:
                </p>

                <div class="mb-4">
                    <p class=" d-flex align-items-center">
                        <span class="mr-2 terms_list_cont"><img src="img/list.svg" alt="" /></span> What you expect from
                        us, which describes how we provide and develop our services
                    </p>
                    <p class=" d-flex align-items-center">
                        <span class="mr-2 terms_list_cont"><img src="img/list.svg" alt="" /></span>What we expect from
                        you, which estabpshes certain rules for using our services
                    </p>
                    <p class=" d-flex align-items-center">
                        <span class="mr-2 terms_list_cont"><img src="img/list.svg" alt="" /></span>Content in Aimienpay
                        services, which describes the intellectual property rights to the
                        content you find in our services - whether that content belongs to
                        you, Aimienpay, or others
                    </p>
                    <p class="d-flex align-items-center">
                        <span class="mr-2 terms_list_cont"><img src="img/list.svg" alt="" /></span>In case of problems or
                        disagreements, which describes other legal rights you have, and what
                        to expect in case someone violates these terms
                    </p>
                </div>

                <p class="mb-4">
                    Understanding these terms is important because, to use our services,
                    you must accept these terms.
                </p>

                <p class="mb-4">
                    Besides these terms, we also publish a privacy Policy. Although it’s
                    not part of these terms, we encourage you to read it to better
                    understand how you can update, manage, export, export, and delete your
                    information.
                </p>

                <button class="mb-4 ml-auto w-25 login-btn">I AGREE</button>
            </article>
        </main>
    </NewBackground>
}