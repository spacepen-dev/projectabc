import React, { Component } from "react";
import { Button, Col, Form, Row, FormControl } from "react-bootstrap";
import { connect } from "react-redux";
import { UpdateCompanyDetails } from "../../Actions";

import Input from "../Registration/Input";
import DashBoardText from "./DashBoardText";
import LoaderButton from "../LoaderButton";
import NetWorkErrors from "../NetWorkErrors";
import SuccessRequestModal from "../Dashboard/SuccessRequestModal";

class EditCompanyInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state: this.props.data.state,
      regNo: this.props.data.registration_number,
      CompanyName: this.props.data.CompanyName,
      address: this.props.data.address,
      website: this.props.data.website,
      about: this.props.data.about,
      companySize: this.props.data.companySize,
      tin: "",
      phoneNumber: "",
      maximumEmployeeSalary: this.props.data.maximumEmployeeSalary,
      request: false,
      networkErr: "",
      errorMessage: "",
      successMessage: "",
      showNetworkErrModal: false,
      companyToken: localStorage.getItem("aminien_token"),
      companyEmail: localStorage.getItem("aminien_email"),
      validation: {},
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // UPDATE FOR THE SUCCESS MESSAGE OR ERROR MESSAGE FROM THE SERVER
  componentDidUpdate = (prevProps) => {
    // if (!this.props.updateCompany) {
    //   return null;
    // }
    if (this.props.updateCompanyRes !== prevProps.updateCompanyRes) {
      this.setState({ request: false });
      if (this.props.updateCompanyRes.data.error) {
        // GET THE ERROR MODAL ON THE SCREEN

        this.setState({
          showNetworkErrModal: true,
          errorMessage: this.props.updateCompanyRes.data.error,
        });
      }

      // GET SUCCESS MODAL ON THE SCREEN
      this.setState({
        successMessage: this.props.updateCompanyRes.data.success,
      });
    } else if (this.props.updateCompanyErr !== prevProps.updateCompanyErr) {
      // GET ERROR MODAL ON THE SCREEN
      this.setState({
        request: false,
        showNetworkErrModal: true,
        networkErr: this.props.updateCompanyErr.message,
      });
    }
    this.serverTimeOut = setTimeout(() => {
      this.setState({
        showNetworkErrModal: false,
        errorMessage: "",
        successMessage: "",
        networkErr: "",
      });
    }, 3000);
  };

  componentWillUnmount = () => {
    clearTimeout(this.serverTimeOut);
  };

  Validation = () => {
    if (!this.state.CompanyName) {
      this.setState({
        validation: { companyNameErr: "Company name is required!" },
      });
      // } else if (!this.state.tin) {
      //   this.setState({
      //     validation: {
      //       tinErr: "Tax identification number is required!",
      //     },
      //   });
    } else if (
      !this.state.regNo ||
      this.state.regNo.length < 10 ||
      this.state.regNo.length > 10
    ) {
      this.setState({
        validation: { registrationNumberErr: "Invalid registration number!" },
      });
    } else if (!this.state.address) {
      this.setState({
        validation: { addressErr: "Company address is required!" },
      });
    } else if (!this.state.website) {
      this.setState({
        validation: { websiteErr: "Company website is required!" },
      });
    } else if (!this.state.maximumEmployeeSalary) {
      this.setState({
        validation: {
          maximumEmployeeSalaryErr: "Max salary is required!",
        },
      });
    } else if (!this.state.state) {
      this.setState({
        validation: {
          stateErr: "State is required!",
        },
      });
    } else if (!this.state.about) {
      this.setState({
        validation: { aboutErr: "Company description is required!" },
      });
    } else {
      this.setState({ request: true });
    }
  };

  onSubmit = (e) => {
    this.setState({ request: true });
    this.props.UpdateCompanyDetails(this.state);
    // console.log(this.state);
    e.preventDefault();
    this.Validation();
  };

  render() {
    return (
      <Form
        className='d-flex flex-column pt-3 justify-content-center w-100 mx-auto employee-form'
        onSubmit={this.onSubmit}>
        <Row>
          <Form.Group as={Col} controlId='formGrid'>
            <DashBoardText name='Company Name' label='Enter Company Name' />
            <Input
              inputName='CompanyName'
              type='text'
              handleChange={this.handleChange}
              value={this.state.CompanyName}
              err={this.state.validation["companyNameErr"]}
              onFocus={() =>
                this.setState({ validation: { companyNameErr: "" } })
              }
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formGrid'>
            <DashBoardText
              name='Company website'
              label='Enter company website '
            />
            <Input
              inputName='website'
              type='text'
              handleChange={this.handleChange}
              value={this.state.website}
              err={this.state.validation["websiteErr"]}
              onPress={() =>
                this.setState({
                  validation: { websiteErr: "" },
                })
              }
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId='formGrid'>
            <DashBoardText
              name='Tax Identification number'
              label='Enter Tax Identification number'
            />
            <Input
              inputName='tin'
              type='text'
              handleChange={this.handleChange}
              value={this.state.tin}
              err={this.state.validation["tin"]}
              onPress={() =>
                this.setState({
                  validation: { tinErr: "" },
                })
              }
            />
          </Form.Group>
          <Form.Group as={Col} controlId='formGrid'>
            <DashBoardText
              name='Registration number'
              label='Enter company registration number'
            />
            <Input
              inputName='regNo'
              type='text'
              handleChange={this.handleChange}
              value={this.state.regNo}
              err={this.state.validation["regNoErr"]}
              onPress={() =>
                this.setState({
                  validation: { regNoErr: "" },
                })
              }
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId='formGrid'>
            <DashBoardText
              name='Company address'
              label='Enter company Address'
            />
            <Input
              inputName='address'
              type='text'
              handleChange={this.handleChange}
              value={this.state.address}
              err={this.state.validation["addressErr"]}
              onPress={() =>
                this.setState({
                  validation: { addressErr: "" },
                })
              }
            />
          </Form.Group>

          <Form.Group as={Col} controlId='formGrid'>
            <DashBoardText name='Enter state' label='Enter state' />
            <Input
              inputName='state'
              type='text'
              handleChange={this.handleChange}
              value={this.state.state}
              err={this.state.validation.stateErr}
              onFocus={() => this.setState({ validation: { stateErr: "" } })}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId='formGrid'>
            <DashBoardText name='Phone Number' label='Enter Phone Number' />
            <Input
              inputName='phoneNumber'
              type='tel'
              handleChange={this.handleChange}
              value={this.state.phoneNumber}
              err={this.state.validation["phoneNumber"]}
              onPress={() =>
                this.setState({
                  validation: { phoneNumber: "" },
                })
              }
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col}>
            <DashBoardText
              name='Company description'
              label='Write company description. '
            />
            <FormControl
              as='textarea'
              column={10}
              aria-label='With textarea'
              className='registration-input w-100 border-1'
              name='about'
              onChange={this.handleChange}
              value={this.state.about}
              style={{ height: "10rem" }}
            />
          </Form.Group>
        </Row>

        <div className='ms-auto mt-4 double-btns'>
          <Button
            type='button'
            className='button me-3'
            disabled={this.state.request ? true : false}
            onClick={() => this.props.goBack(1)}>
            Back
          </Button>
          <LoaderButton
            btnName='SUBMIT'
            btnStyle=''
            request={this.state.request}
          />
        </div>
        {this.state.successMessage && (
          <SuccessRequestModal message={this.state.successMessage} />
        )}
        {this.state.showNetworkErrModal && (
          <NetWorkErrors
            serverErr={this.state.errorMessage}
            errMessage={this.state.networkErr}
          />
        )}
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    updateCompanyRes: state.DashboardReducer.updateCompany,
    updateCompanyErr: state.DashboardReducer.updateCompanyErr,
  };
};

export default connect(mapStateToProps, { UpdateCompanyDetails })(
  EditCompanyInfo
);
