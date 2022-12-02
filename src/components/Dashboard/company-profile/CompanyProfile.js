import React from "react";
import { connect } from "react-redux";
import FullScreenLoader from "../FullScreenLoader";

import {
  CompanyDetails,
  FetchCompanyEmployee,
  FetchDepartment,
} from "../../../Actions";
import EditCompanyInfo from "../EditCompanyInfo";
import EditCompanyDepartment from "../EditCompanyDepartment";
import VerificationModal from "../VerificationModal";
// import NetWorkErrors from "../NetWorkErrors";

// const navigate = useNavigate();

class CompanyProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      request: true,
      companyEmail: localStorage.getItem("aminien_email"),
      companyToken: localStorage.getItem("aminien_token"),
      companyData: {},
      departments: [],
      errMessage: "",
      roles: [],
      page: 1,
    };
  }

  componentDidMount() {
    const { CompanyDetails, FetchCompanyEmployee, FetchDepartment } =
      this.props;
    if (!CompanyDetails) {
      return null;
    } else {
      if (CompanyDetails.error) {
        this.setState({
          request: false,
          // errMessage: this.props.companyInfo.data,
        });
      }
      // console.log(this.state.companyEmail + "and" + this.state.companyToken);
      CompanyDetails(this.state.companyEmail, this.state.companyToken);
      FetchDepartment(this.state.companyEmail, this.state.companyToken);
      FetchCompanyEmployee(this.state.companyToken, this.state.companyEmail);
    }
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.companyInfo);
    if (this.props.companyDetailsErr !== prevProps.companyDetailsErr) {
      this.setState({
        errMessage: this.props.companyDetailsErr.messge,
        request: false,
      });
    }
    if (
      this.props.companyInfo !==
        prevProps.companyInfo ||
      this.props.companyDepartment !== prevProps.companyDepartment
    ) {
      this.setState({
        request: false,
        // errMessage: this.props.companyInfo.data,
      });

      // COMPANY DETAILS
      if (!this.props.companyInfo) {
        return null;
      } else if (this.props.companyInfo.error) {
        this.setState({
          // request: false,
          errMessage: this.props.companyInfo.error,
        });
      } else {
        this.setState({
          companyData: this.props.companyInfo.Data,
          // roles: this.props.employeeRoles.data.success,
        });
      }

      // DEPARTMENTS

      if (!this.props.companyDepartment) {
        // console.log(this.props.companyDepartment);
        return null;
      } else if (this.props.companyDepartment.error) {
        // console.log(this.props.companyDepartment.error);
        this.setState({ errMessage: this.props.companyDepartment.error });
        // this.setState({
        //   departments: this.props.companyDepartment.error,
        // });
      } else {
        this.setState({
          departments: this.props.companyDepartment.success,
        });
      }

      // ROLE

      // if (!this.props.employeeRoles) {
      //   return null;
      // } else if (this.props.employeeRoles.error) {
      //   this.setState({ errMessage: this.props.employeeRoles.error });
      // } else {
      //   this.setState({ roles: this.props.employeeRoles.success });
      // }
    } else if (
      !this.props.companyDepartment ||
      !this.companyInfo
    ) {
      return null;
    } else {
      console.log(this.props.companyDetailsErr);
    }
    // if (!this.props.companyDetailsErr !== this.prevProps.companyDetailsErr) {
    //   console.log(this.prevProps.companyDetailsErr);
    //   return null;
    // } else if (this.props.companyDetailsErr) {
    //   this.setState({
    //     errMessage: this.props.companyDetailsErr.messge,
    //     request: false,
    //   });
    // }

    return null;
  }

  displayDepartment = () => {
    return this.state.departments.map((cur, index) => {
      return (
        <React.Fragment key={index}>
          <p class='profile-list'>{cur.companyDepartment}</p>
        </React.Fragment>
      );
    });
  };

  displayRoles = () => {
    return this.state.roles.map((cur, index) => {
      return (
        <React.Fragment key={index}>
          <p class='profile-list'>{cur.employeeRole}</p>
        </React.Fragment>
      );
    });
  };
  render() {
    if (this.state.page === 2) {
      return (
        <EditCompanyInfo
          data={{ ...this.state.companyData }}
          goBack={(value) => this.setState({ page: value })}
        />
      );
    } else if (this.state.page === 3) {
      return (
        <EditCompanyDepartment
          data={this.state.departments}
          goBack={(value) => this.setState({ page: value })}
        />
      );
    }

    const closeModal = () => {
      this.setState({ errMessage: "" });
      // navigate("otp/email-confirmation");
    };

    return (
      <div>
        <div>
          <h4 className='entire-page-headers'>COMPANY DETAILS </h4>
        </div>
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
          {/* {console.log(this.props.)} */}
          <h5>{this.state.companyData.CompanyName}</h5>
          <div>
            <div class='profile-texts'>
              {this.state.companyData.emailAddress}
            </div>
            <div class='profile-texts'>
              company Size: {this.state.companyData.companySize}
            </div>
            <div class='profile-texts'>{this.state.companyData.website}</div>
            <div class='profile-texts'>
              employees: {this.state.companyData.totalEmployees}{" "}
            </div>
          </div>
          <p class='freewill-address'>{this.state.companyData.address}</p>
        </div>
        {/* <p class='freewill-address'></p> */}

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
            <div className='profile-about-div'>
              <h6 class='profile-subHeads'>DEPARTMENTS</h6>
              <div className='about-svg-div'>
                <svg
                  // onClick={() => ProfileEdit()}
                  onClick={() => this.setState({ page: this.state.page + 2 })}
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
            <div>{this.displayDepartment()}</div>
          </div>

          <div class='column right'>
            <h6 class='profile-subHeads'>ROLES</h6>

            <div>
              <div>{this.displayRoles()}</div>
            </div>
          </div>
        </div>

        <h6 class='profile-subHeads'>ACCOUNT INFORMATION</h6>
        <div class='container-flex'>
          <div class='freewill-acct'>
            <p class='freewill-acct-info fw-bolder'>Account Number</p>
            <p class='freewill-acct-details'>
              {this.state.companyData.accountNumber}
            </p>
          </div>

          <div class='freewill-acct'>
            <p class='freewill-acct-info fw-bolder'>Account Name</p>
            <p class='freewill-acct-details details-last'>
              {this.state.companyData.CompanyName}
            </p>
          </div>

          {/* <div class='freewill-acct'>
            <p class='freewill-acct-info'>Bank Name</p>
            <p class='freewill-acct-details'>
              {this.state.companyData.bankName}
            </p>
          </div> */}

          {this.state.errMessage && (
            
          )}
        </div>
        {this.state.request && <FullScreenLoader />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    companyInfo: state.CompanyDetails,
    // companyDetailsErr: state.RegistrationReducer.detailsErr,
    companyDepartment: state.FetchBusinessDepartment,
    // employeeRoles: state.DashboardReducer.companyEmployee.data,
  };
};

export default connect(mapStateToProps, {
  CompanyDetails,
  FetchCompanyEmployee,
  FetchDepartment,
})(CompanyProfile);
