import React from "react";
import EditableLogo from "./EditableLogo.png";

const CompanyProfile = () => {
  const GetImage = () => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const uploadedImage = reader.result;
      document.querySelector(
        "#displayCompanyLogo"
      ).style.backgroundImage = `url(${uploadedImage})`;
    });
    reader.readAsDataURL(this.files[0]);
  };

  const ProfileEdit = () => {
    let profilePen = document.querySelector("#profile-edit");
    let companyAbout = document.querySelector(".company-about");

    profilePen.addEventListener("click", function () {
      companyAbout.contentEditable = true;
    });
  };

  return (
    <div>
      <div className="profile-info">
        <div className="company-logo-div">
          <div id="displayCompanyLogo">
            <img
              src={EditableLogo}
              alt="company logo"
              width={100}
              height={100}
              className="company-logo"
            />
          </div>
          <div className="logo-svg-div">
            <label for="pen-img-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#23549e"
                class="bi bi-pencil"
                viewBox="0 0 16 16"
                id="image-edit"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </label>
          </div>
        </div>
        <input
          type="file"
          accept="image/*"
          id="pen-img-label"
          style={{ display: "none" }}
          onChange={() => GetImage()}
        />
        <h5>FREEWILL INDUSTRIES LIMITED</h5>
        <div>
          <div class="profile-texts">freewillindustries@gmail.com</div>
          <div class="profile-texts">+2349064543993</div>
          <div class="profile-texts">freewill.com</div>
          <div class="profile-texts">50 employees</div>
        </div>
        <p class="freewill-address">
          No, 16. Ijoba Road, ise, Ibadan, Oyo State
        </p>
      </div>

      <div>
        <div className="profile-about-div">
          <h6 class="profile-subHeads">ABOUT</h6>
          <div className="about-svg-div">
            <svg
              onClick={() => ProfileEdit()}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#23549e"
              class="bi bi-pencil"
              viewBox="0 0 16 16"
              id="profile-edit"
            >
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
            </svg>
          </div>
        </div>

        <p class="freewill-about company-about">
          Freewill is a versatile technology, and while it may not be a
          one-size-fits-all solution, the vast majority of supposed drawbacks
          stem from misunderstanding how it works. The most common mistake is
          that people tend to oversimplify issues that some blockchain solutions
          face and then apply that to every blockchain. In a similar vein, the
          best way to see through these myths is through self-education. Here,
          we will list the seven most common myths plaguing the nascent
          technology, as well as explain why they are not true.
        </p>
      </div>

      <div class="container-flex">
        <div class="column left">
          <h6 class="profile-subHeads deps">DEPARTMENTS</h6>
          <div>
            <p class="profile-list">Design</p>
            <p class="profile-list">Marketing</p>
            <p class="profile-list">Business</p>
            <p class="profile-list">Product</p>
            <p class="profile-list">Engineering</p>
          </div>
        </div>

        <div class="column right">
          <h6 class="profile-subHeads">ROLES</h6>
          <div>
            <div>
              <p class="profile-list">Product Lead</p>
              <p class="profile-list">Content Writer</p>
              <p class="profile-list">Software Engineering</p>
            </div>
          </div>
        </div>
      </div>

      <h6 class="profile-subHeads">ACCOUNT INFORMATION</h6>
      <div class="container-flex">
        <div class="freewill-acct">
          <p class="freewill-acct-info">Account Number</p>
          <p class="freewill-acct-details">27390048811</p>
        </div>

        <div class="freewill-acct">
          <p class="freewill-acct-info">BVN</p>
          <p class="freewill-acct-details">239900YHU77F;K</p>
        </div>

        <div class="freewill-acct">
          <p class="freewill-acct-info">Account Name</p>
          <p class="freewill-acct-details details-last">
            FREEWILL INDUSTRIES LIMITED
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
