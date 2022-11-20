import React, { useEffect, useMemo } from "react";
import { connect } from 'react-redux';
import { CompanyDetails } from "../../../Actions";
import useBusinessToken from "../../../hooks/useBusinessToken";
import useHandleResponse from "../../../hooks/useHandleResponse";
import useHandleResponseObject from "../../../hooks/useHandleResponseObject";
import useToken from "../../../hooks/useToken";
import { BusinessOffice } from "../../../pages/registration/ui";

const Profile = ({ companyInfo, departments, CompanyDetails }) => {

  const { data } = useHandleResponseObject(companyInfo);
  const [dep] = useHandleResponse(departments);
  const { token } = useToken();
 const { bizToken } = useBusinessToken();

  const values = useMemo(() => {
    return { businessToken:bizToken, userToken:token, emailAddress: 'ejembithomas61@gmail.com' }
  }, [bizToken, token]);

// const FetchCompanyDetails = useCallback(() => {

//     CompanyDetails(values);
//   }, [CompanyDetails, values]);
  
//   const FetchDepartments = useCallback(() => {

//     FetchDepartment(values)
//   }, [FetchDepartment, values]);
  // FETCH 

  useEffect(() => {
    if (!data) {
      CompanyDetails(values);
    }
    return;
    
  },[values,data ,CompanyDetails]);

  const displayRoles = () => {
    return data?.map((cur, index) => {
      return (
        <React.Fragment key={index}>
          {/* <p class='profile-list'>{cur.employeeRole}</p> */}
        </React.Fragment>
      );
    });
  };
    
  const displayDepartment = () => {
    return dep?.map((cur, index) => {
      return (
        <React.Fragment key={index}>
          <p className='profile-list'>{cur.companyDepartment}</p>
        </React.Fragment>
      );
    });
  };
    
  return <div>
    <div>
      <h4 className='entire-page-headers'>COMPANY DETAILS </h4>
    </div>
    <div className='profile-info'>
      <div className='company-logo-div'>
        <div id='displayCompanyLogo'>
          {data?.companyLogo ? <img src={data.companyLogo} alt='company logo' width={100} height={100} className='company-logo' /> : <BusinessOffice />}
         
        </div>
        <div className='logo-svg-div'>
          <label for='pen-img-label'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='#23549e'
              className='bi bi-pencil'
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
      <h5>{data.tradingName}</h5>
      <div>
        <div className='profile-texts'>
          {data.emailAddress}
        </div>
        <div className='profile-texts'>
          {/* company Size: {this.state.companyData.companySize} */}
        </div>
        <div className='profile-texts'>{data.website}</div>
        <div className='profile-texts'>
          employees: {data?.totalEmployees}
        </div>
      </div>
      <p className='freewill-address'>{data.address}</p>
    </div>
    {/* <p className='freewill-address'></p> */}

    <div>
      <div className='profile-about-div'>
        <h6 className='profile-subHeads'>ABOUT</h6>
        <div className='about-svg-div'>
          <svg
            // onClick={() => ProfileEdit()}
            onClick={() => this.setState({ page: this.state.page + 1 })}
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='#23549e'
            className='bi bi-pencil'
            viewBox='0 0 16 16'
            id='profile-edit'>
            <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
          </svg>
        </div>
      </div>

      <p className='freewill-about company-about'>
        {data?.about}
      </p>
    </div>

    <div className='container-flex'>
      <div className='column left'>
        <div className='profile-about-div'>
          <h6 className='profile-subHeads'>DEPARTMENTS</h6>
          <div className='about-svg-div'>
            <svg
              // onClick={() => ProfileEdit()}
              onClick={() => this.setState({ page: this.state.page + 2 })}
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='#23549e'
              className='bi bi-pencil'
              viewBox='0 0 16 16'
              id='profile-edit'>
              <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
            </svg>
          </div>
        </div>
        <div>{displayDepartment()}</div>
      </div>

      <div className='column right'>
        <h6 className='profile-subHeads'>ROLES</h6>

        <div>
          {/* <div>{displayRoles()}</div> */}
        </div>
      </div>
    </div>

    <h6 className='profile-subHeads'>ACCOUNT INFORMATION</h6>
    <div className='container-flex'>
      <div className='freewill-acct'>
        <p className='freewill-acct-info fw-bolder'>Account Number</p>
        <p className='freewill-acct-details'>
          {data?.vAccount_number}
        </p>
      </div>

      <div className='freewill-acct'>
        <p className='freewill-acct-info fw-bolder'>Account Name</p>
        <p className='freewill-acct-details details-last'>
          {data?.vAccount_name}
        </p>
      </div>

      <div className='freewill-acct'>
        <p className='freewill-acct-info'>Bank Name</p>
        <p className='freewill-acct-details'>
          {data?.vBank_name}
        </p>
      </div>

      {/* {this.state.errMessage && (
        <VerificationModal
          message={`Sorry we can not fetch all your company details at this time.`}
          close={closeModal}
        />
      )} */}
    </div>
    {/* {this.state.request && <FullScreenLoader />} */}
  </div>
}

const mapStateTopProps = (state) => {
    return {
      companyInfo: state.CompanyDetailsReducers,
      departments: state.FetchBusinessDepartment
    }
}
export default connect(mapStateTopProps, { CompanyDetails })(Profile);