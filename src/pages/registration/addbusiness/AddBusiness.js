import { Link } from "react-router-dom"
import { NewBackground } from "../ui"
import Logo from '../../../assets/img/logo.svg';
import Library from '../../../assets/img/library.svg';
import Add from '../../../assets/img/add.svg';


export default function AddBusiness() {
    return <NewBackground>

    <main className="mt-2 mt-md-5 container-lg d-flex flex-column justify-content-center align-items-center">
    <article className="py-4 px-2 py-md-5 px-md-4 biz_cont">
      <div className="heading-cont">
        <div className="logo-cont">
          <img src={Logo} className="comp-logo" alt="Orio logo"/>
        </div>
        <h2 className="heading-text">
          Create A Business Account
        </h2>
        <p className="mt-3 mb-4 heading-subtext">You don’t have any business here yet buy you can open one now</p>
      </div>

      <Link to='/registration/business' className="pb-lg-5 d-block">
        <div className="d-flex flex-column m-auto text-center px-2 position-relative add_acct_cont">
          <div className="ml-auto mt-3 mr-3 lib_img">
            <img src={Library} alt=""/>
          </div>
          <div className="position-absolute add_img">
            <img src={Add} alt=""/>
          </div>
          <p className="mt-auto mb-3 text-center add_acct_text">Add Account</p>
        </div>
      </Link>

    </article>
  <aside className="sign-up forgot-footer">
                <Link to="/user-login">SIGN IN&emsp; </Link>
                <span>or</span>
                <Link to="/sign-up">&emsp;SIGN
      UP</Link>
  </aside>
  </main>

</NewBackground> 
}