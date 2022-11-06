import React, { useContext, useState } from "react";
import { Button, Input, Label } from "../../registration/ui";
import { RegistrationContext } from "../main/RegistrationForm";
import { FormContainer } from "../main/RegistrationFormComp";






export default function BankDetails({ businessAccountNumber, handleChange }) {
    
    function getBankList() {
        return JSON.parse(localStorage.getItem('BankList'));
    }
    
    const { page, ChangePage } = useContext(RegistrationContext);

    const [banklist] = useState(getBankList);
    const [data, setData] = useState({value:'', code:'', name:'',show:false});

    const BankList = () => {
        const filterBankName = banklist.filter((cur) => cur.bankName.toLowerCase().includes(data.value))
          .map(({ bankCode, bankName }, index) => {
            return (
              <React.Fragment>
                <li
                  key={index}
                  class='bankLinks py-3 border-bottom'
                  onClick={() => {
                    // setFilterBank(bankName);
                    // setDropDown(false);
                    // setBankCode(bankCode);
                    setData((state) => {
                        return { ...state, name:bankName,code:bankCode }
                    });
                      
                    setData((state) => {
                        return { ...state,value:bankName, show:false }
                    });
                  }}>
                  {bankName}
                </li>
              </React.Fragment>
            );
          });
        return filterBankName;
      };

    const accountNumberprops = {
        type: "text",
        styles: 'form-control py-2',
        placeholder: "Input account number",
        id: "businessAccountNumber",
        name: 'businessAccountNumber',
        value: businessAccountNumber,
        handleChange,
        
    };

    if (page !== 10) {
        return null;
    }
    return <FormContainer name='Business Bank Account' desc='We will create a bank account for your business to make salary payment transactions.'>
        {/* <!-- Heading --> */}
<p className="text-center  heading-subtext text-black">We will only accept bank transfers from this bank account to the wallet account we will create for your business.</p>
        {/* <!-- Form --> */}
        <form class="px-3 mt-5 pp_form">
            <div class="form-group mb-4">
                <Label name='Business Account Number' styles='mb-3' />
                <Input {...accountNumberprops} />
                {/* <Error error={businessError} touched={businessTouched} /> */}
            </div>
            <div class="form-group mb-4">
                <Label name='Choose Bank Name' styles='mb-3' />
          <input 
            type='text'
            onChange={(e) => {
                setData((state) => {
                    return { ...state, value: e.target.value, show:true }
                });
            }}
            value={data.value}
            className='form-control py-2 '
        
          />
          
          {data.show && (
            <div id='dropdownList' className='dropdown-content shadow mt-2 h-100 rounded'>
              {BankList()}
            </div>
          )}
            </div>
            <div class="form-group mb-4">
                      
            <Label name='Business Account Name' styles='mb-3' />

                {/* <Input {...registrationNumber} /> 
                    {/* <Button name='CONTINUE' onClick={()=>} type='button' styles='btn text-white p-3 category_btn' /> */}
            </div>
            <div class="mb-3 d-flex justify-content-end">
                <Button name='FINISH' onClick={ChangePage} type='button' disabled={!data.value ? true : false} styles='btn text-white p-3 category_btn' />
                            
            </div>
        </form>
          
    </FormContainer>
}