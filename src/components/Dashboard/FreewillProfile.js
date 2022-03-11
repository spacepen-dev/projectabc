import React from "react";
// import LogoProfile from "./svg/LogoProfile";

const FreewillProfile = () => {
  return (
    <div>
      {/* <LogoProfile /> */}
      <div class="profile-info">
        <h3>FREEWILL INDUSTRIES LIMITED</h3>
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
        <h4 class="profile-subHeads">ABOUT</h4>
        <p class="freewill-about">
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
          <h4 class="profile-subHeads">DEPARTMENTS</h4>
          <div>
            <p class="profile-list">Design</p>
            <p class="profile-list">Marketing</p>
            <p class="profile-list">Business</p>
            <p class="profile-list">Product</p>
            <p class="profile-list">Engineering</p>
          </div>
        </div>

        <div class="column right">
          <h4 class="profile-subHeads">ROLES</h4>
          <div>
            <div class="profile-list">
              <p class="profile-list">Product Lead</p>
              <p class="profile-list">Content Writer</p>
              <p class="profile-list">Software Engineering</p>
            </div>
          </div>
        </div>
      </div>

      <h4 class="profile-subHeads">ACCOUNT INFORMATION</h4>
      <div class="container-flex">
        <div class="freewill-acct">
          <p class="freewill-acct-info">Account Number</p>
          <p class="freewill-acct-details">27390048811</p>
        </div>

        <div class="freewill-acct">
          <p></p>
          <p class="freewill-acct-info">BVN</p>
          <p class="freewill-acct-details">239900YHU77F;K</p>
        </div>

        <div class="freewill-acct">
          <p class="freewill-acct-info">Account Name</p>
          <p class="freewill-acct-details">FREEWILL INDUSTRIES LIMITED</p>
        </div>
      </div>
    </div>
  );
};

export default FreewillProfile;
