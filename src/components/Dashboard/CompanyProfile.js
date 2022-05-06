import React from "react";
import { connect } from "react-redux";
import FullScreenLoader from "./FullScreenLoader";
import { CompanyDetails } from "../../Actions";
import EditCompanyInfo from "./EditCompanyInfo";

class CompanyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: true,
      companyEmail: localStorage.getItem("email"),
      companyData: {},
      page: 1,
    };
  }

  componentDidMount() {
    const { CompanyDetails } = this.props;
    if (!CompanyDetails) {
      return null;
    } else {
      if (CompanyDetails.error) {
        return null;
      }
      CompanyDetails(this.state.companyEmail);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.companyRegistrationDetails !==
      prevProps.companyRegistrationDetails
    ) {
      this.setState({ request: false });
      this.setState({
        companyData: this.props.companyRegistrationDetails.data.success,
      });
    }
    return null;
  }

  render() {
    if (this.state.page === 2) {
      return (
        <EditCompanyInfo
          data={{ ...this.state.companyData }}
          goBack={(value) => this.setState({ page: value })}
        />
      );
    }

    return (
      <div>
        <div className='profile-info'>
          <div className='company-logo-div'>
            <div id='displayCompanyLogo'>
              <img
                // src={EditableLogo}
                alt='company logo'
                width={100}
                height={100}
                className='company-logo'
              />
            </div>
            <div className='logo-svg-div'>
              <label for='pen-img-label'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='16'
                  height='16'
                  fill='#23549e'
                  class='bi bi-pencil'
                  viewBox='0 0 16 16'
                  id='image-edit'>
                  <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
                </svg>
              </label>
            </div>
          </div>
          <input
            type='file'
            accept='image/*'
            id='pen-img-label'
            style={{ display: "none" }}
            // onChange={() => GetImage()}
          />
          <h5>{this.state.companyData.CompanyName}</h5>
          <div>
            <div class='profile-texts'>
              {this.state.companyData.emailAddress}
            </div>
            <div class='profile-texts'></div>
            <div class='profile-texts'>{this.state.companyData.website}</div>
            <div class='profile-texts'></div>
          </div>
          <p class='freewill-address'>{this.state.companyData.address}</p>
        </div>

        <div>
          <div className='profile-about-div'>
            <h6 class='profile-subHeads'>ABOUT</h6>
            <div className='about-svg-div'>
              <svg
                // onClick={() => ProfileEdit()}
                onClick={() => this.setState({ page: this.state.page + 1 })}
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                fill='#23549e'
                class='bi bi-pencil'
                viewBox='0 0 16 16'
                id='profile-edit'>
                <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
              </svg>
            </div>
          </div>

          <p class='freewill-about company-about'>
            {this.state.companyData.about}
          </p>
        </div>

        <div class='container-flex'>
          <div class='column left'>
            <h6 class='profile-subHeads deps'>DEPARTMENTS</h6>
            <div>
              <p class='profile-list'></p>
              <p class='profile-list'></p>
              <p class='profile-list'></p>
              <p class='profile-list'></p>
              <p class='profile-list'></p>
            </div>
          </div>

          <div class='column right'>
            <h6 class='profile-subHeads'>ROLES</h6>
            <div>
              <div>
                <p class='profile-list'></p>
                <p class='profile-list'></p>
                <p class='profile-list'></p>
              </div>
            </div>
          </div>
        </div>

        <h6 class='profile-subHeads'>ACCOUNT INFORMATION</h6>
        <div class='container-flex'>
          <div class='freewill-acct'>
            <p class='freewill-acct-info'></p>
            <p class='freewill-acct-details'></p>
          </div>

          <div class='freewill-acct'>
            <p class='freewill-acct-info'></p>
            <p class='freewill-acct-details'></p>
          </div>

          <div class='freewill-acct'>
            <p class='freewill-acct-info'>Account Name</p>
            <p class='freewill-acct-details details-last'></p>
          </div>
        </div>
        {this.state.request && <FullScreenLoader />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companyRegistrationDetails: state.DashboardReducer.companyDetails,
    // companyDetailsErr: state.DashboardReducers.CompanyDetailsErr,
  };
};

export default connect(mapStateToProps, { CompanyDetails })(CompanyProfile);
