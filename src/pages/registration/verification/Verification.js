import { useCallback, useEffect, useReducer, useState } from "react";
import { NewBackground } from "../ui";
import LoaderModal from "../../../components/Dashboard/LoaderModal";
import { connect } from "react-redux";
import { SignupVerification, ResendLoginOtp, ResendSignupOtp } from "../../../Actions";
import { useLocation, useNavigate } from "react-router-dom";
import SmallLoader from "../../../components/Dashboard/SmallLoader";
import Header from "../../../components/Header";

const init = {
    request: false,
    response: false,
    networkError: false,
    resendOTP: false,
    message:'',

}

const reducer = (state, action) => {
    switch (action.type) {
      case "REQUEST_OTP":
        return { ...state, request: true };
      case "RESPONSE":
        return { ...state,request: false, response: true, message:action.message };
      case "ERROR":
            return {...state, request: false, networkError: true, message: action.message };
        case "RESEND_OTP":
        return { ...state, resendOTP: true};
      case 'RESEND_OTP_RES':
        return {...state, resendOTP: false, message: action.message}
      default:
        return state;
    }
};
  


function Verification({ SignupVerification }) {
  const path = useLocation();
  const navigate = useNavigate();
     
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [state, dispatch] = useReducer(reducer, init);
    
    function handleOtp(elem,index) {
        // check if the value is a number or text
        if (isNaN(elem.target.value)) return false;
        setOtp([...otp.map((input, indx) => index === indx ? elem.target.value : input)
        ]);
        if (
            elem.target.nextSibling &&
            elem.nativeEvent.inputType === "insertText"
          ) {
            elem.target.nextSibling.focus();
          }
    }

    function movingBack(e) {
        if (e.target.previousSibling && e.key === 'Backspace') {
          e.target.previousSibling.focus();
        }
    }
  
  useEffect(() => {
    if (!path.state) {
      navigate('/sign-up');
    }
  }, [path.state, navigate]);


  const ApiResponse = useCallback((value) => {
    SignupVerification(value, (res) => {
      if (res) {
          setOtp(otp.fill(''))

          if (res.status !== 200) {
              return;
          }
          const { error, success } = res.data;
          
          if (error) {
              dispatch({ type: "RESPONSE", response:true, request: false, message: error });

          }
          else if (success) {
            navigate('/register-business', {replace: true})
           
          }
      }
  })
  },[SignupVerification,otp,navigate])


    useEffect(() => {
        const otpNumber = parseInt(otp.join(""));

        if (otp.join("").length < 6) {
          return;
        }

        dispatch({ type: "REQUEST_OTP", request: false });
      const Id = setTimeout(() => {
           
            const value = { otpNumber, email:path.state }
                ApiResponse(value)
        
        }, 1000);

        return () => {
        clearTimeout(Id);
        };
    }, [otp,path,ApiResponse]);
  

  return <NewBackground>
    <Header>

      <main className=" container">
        <div className="h-75 w-100 d-flex align-items-center flex-column   px-5">

          <div className='w-100 otp-header'>

            <h2 className='mb-3 py-2 text-center text-black fw-bold'>Register Email Confirmation</h2>
          </div>
          <div className='otp-sub-header fw-bold'>
            <p>Enter the 6-digit pin that was sent to {path.state}</p>
          </div>
          <div className='d-flex justify-content-between align-items-center otp-input-container w-100 py-3'>
            {otp.map((data, index) => {
              return <input key={index} type='text' maxLength='1' className='text-center otp-input rounded' style={{ height: '4rem', width: '4rem', border: '1px solid rgba(98, 70, 213, 1)' }}
                value={data}
                onChange={(e) => handleOtp(e, index)}
                onFocus={(e) => e.target.select()}
                onKeyUp={(e) => movingBack(e)}
              />
            })}
          </div>
          <div className='py-4 mt-3 w-75 ml-auto fs-6 text-center'>
            Didn't get it in your email?
            <span className="text-primary"
              style={{ cursor: "pointer" }}
              onClick={() => {
                dispatch({ type: "RESEND_OTP", resendOTP: true });
              
                ResendSignupOtp(path.state, (res) => {
                  if (res) {
                    dispatch({ type: "RESEND_OTP_RES" });
                    const { error, success } = res.data;
                    if (error) {
                      dispatch({ type: "RESEND_OTP_RES", message: error });
                    
                    }
                    dispatch({ type: "RESEND_OTP_RES", message: success });
                
                  }
                
                })
              }}
            >
              Resend the code
              {state.resendOTP && < SmallLoader />}
            </span>
            {state.message && !state.resendOTP && <p className='text-success mt-3'>{state.message}</p>}
          </div>
        </div>
        {state.request && <LoaderModal />}
      </main>
    </Header>
  </NewBackground>
 }


 export default connect(null, {SignupVerification})(Verification)




