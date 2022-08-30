import React, { useState, useEffect } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

import DashBoardText from "./DashBoardText";
import Input from "../Registration/Input";
import LoaderButton from "../LoaderButton";
import NetWorkErrors from "../NetWorkErrors";

import SuccessRequestModal from "./SuccessRequestModal";

const bankList = [
  {
    bankCode: "090292",
    bankName: "AFEKHAFE MICROFINANCE BANK",
  },
  {
    bankCode: "100028",
    bankName: "AG MORTGAGE BANK",
  },
  {
    bankCode: "090371",
    bankName: "AGOSASA MICROFINANCE BANK",
  },
  {
    bankCode: "090133",
    bankName: "AL-BARAKAH MICROFINANCE BANK",
  },
  {
    bankCode: "090259",
    bankName: "ALEKUN MICROFINANCE BANK",
  },
  {
    bankCode: "090297",
    bankName: "ALERT MICROFINANCE BANK",
  },
  {
    bankCode: "090277",
    bankName: "AL-HAYAT MICROFINANCE BANK",
  },
  {
    bankCode: "090131",
    bankName: "ALLWORKERS MICROFINANCE BANK",
  },
  {
    bankCode: "090169",
    bankName: "ALPHA KAPITAL MICROFINANCE BANK",
  },
  {
    bankCode: "090394",
    bankName: "AMAC MICROFINANCE BANK",
  },
  {
    bankCode: "090180",
    bankName: "AMJU UNIQUE MICROFINANCE BANK",
  },
  {
    bankCode: "090116",
    bankName: "AMML MICROFINANCE BANK",
  },
  {
    bankCode: "090143",
    bankName: "APEKS MICROFINANCE BANK",
  },
  {
    bankCode: "090376",
    bankName: "APPLE MICROFINANCE BANK",
  },
  {
    bankCode: "090282",
    bankName: "ARISE MICROFINANCE BANK",
  },
  {
    bankCode: "090001",
    bankName: "ASO SAVINGS",
  },
  {
    bankCode: "090287",
    bankName: "ASSETMATRIX MICROFINANCE BANK",
  },
  {
    bankCode: "090172",
    bankName: "ASTRAPOLARIS MICROFINANCE BANK",
  },
  {
    bankCode: "090264",
    bankName: "AUCHI MICROFINANCE BANK",
  },
  {
    bankCode: "090188",
    bankName: "BAINES CREDIT MICROFINANCE BANK",
  },
  {
    bankCode: "090326",
    bankName: "BALOGUN GAMBARI MICROFINANCE BANK",
  },
  {
    bankCode: "090316",
    bankName: "BAYERO UNIVERSITY MICROFINANCE BANK",
  },
  {
    bankCode: "090127",
    bankName: "BC KASH MICROFINANCE BANK",
  },
  {
    bankCode: "090336",
    bankName: "BIPC MICROFINANCE BANK",
  },
  {
    bankCode: "090117",
    bankName: "BOCTRUST MICROFINANCE BANK LIMITED",
  },
  {
    bankCode: "090395",
    bankName: "BORGU  MICROFINANCE BANK",
  },
  {
    bankCode: "090176",
    bankName: "BOSAK MICROFINANCE BANK",
  },
  {
    bankCode: "090148",
    bankName: "BOWEN MICROFINANCE BANK",
  },
  {
    bankCode: "070015",
    bankName: "BRENT MORTGAGE BANK",
  },
  {
    bankCode: "090293",
    bankName: "BRETHREN MICROFINANCE BANK",
  },
  {
    bankCode: "090393",
    bankName: "BRIDGEWAY MICROFINANACE BANK",
  },
  {
    bankCode: "090308",
    bankName: "BRIGHTWAY MICROFINANCE BANK",
  },
  {
    bankCode: "090406",
    bankName: "BUSINESS SUPPORT MICROFINANCE BANK",
  },
  {
    bankCode: "100026",
    bankName: "CARBON",
  },
  {
    bankCode: "090360",
    bankName: "CASHCONNECT MICROFINANCE BANK",
  },
  {
    bankCode: "100005",
    bankName: "CELLULANT",
  },
  {
    bankCode: "090154",
    bankName: "CEMCS MICROFINANCE BANK",
  },
  {
    bankCode: "100015",
    bankName: "CHAMS MOBILE",
  },
  {
    bankCode: "090141",
    bankName: "CHIKUM MICROFINANCE BANK",
  },
  {
    bankCode: "090144",
    bankName: "CIT MICROFINANCE BANK",
  },
  {
    bankCode: "000009",
    bankName: "CITI BANK",
  },
  {
    bankCode: "090374",
    bankName: "COASTLINE MICROFINANCE BANK",
  },
  {
    bankCode: "090130",
    bankName: "CONSUMER MICROFINANCE BANK",
  },
  {
    bankCode: "070021",
    bankName: "COOP MORTGAGE BANK",
  },
  {
    bankCode: "090365",
    bankName: "CORESTEP MICROFINANCE BANK",
  },
  {
    bankCode: "060001",
    bankName: "CORONATION MERCHANT BANK",
  },
  {
    bankCode: "070006",
    bankName: "COVENANT MFB",
  },
  {
    bankCode: "090159",
    bankName: "CREDIT AFRIQUE MICROFINANCE BANK",
  },
  {
    bankCode: "110014",
    bankName: "CYBERSPACE LIMITED",
  },
  {
    bankCode: "090391",
    bankName: "DAVODANI  MICROFINANCE BANK",
  },
  {
    bankCode: "090167",
    bankName: "DAYLIGHT MICROFINANCE BANK",
  },
  {
    bankCode: "090294",
    bankName: "EAGLE FLIGHT MICROFINANCE BANK",
  },
  {
    bankCode: "100021",
    bankName: "EARTHOLEUM",
  },
  {
    bankCode: "090156",
    bankName: "E-BARCS MICROFINANCE BANK",
  },
  {
    bankCode: "000010",
    bankName: "ECOBANK",
  },
  {
    bankCode: "100008",
    bankName: "ECOBANK XPRESS ACCOUNT",
  },
  {
    bankCode: "100030",
    bankName: "ECOMOBILE",
  },
  {
    bankCode: "090310",
    bankName: "EDFIN MICROFINANCE BANK",
  },
  {
    bankCode: "090097",
    bankName: "EKONDO MICROFINANCE BANK",
  },
  {
    bankCode: "090389",
    bankName: "EK-RELIABLE MICROFINANCE BANK",
  },
  {
    bankCode: "090273",
    bankName: "EMERALD MICROFINANCE BANK",
  },
  {
    bankCode: "090114",
    bankName: "EMPIRE TRUST MICROFINANCE BANK",
  },
  {
    bankCode: "000019",
    bankName: "ENTERPRISE BANK",
  },
  {
    bankCode: "090189",
    bankName: "ESAN MICROFINANCE BANK",
  },
  {
    bankCode: "090166",
    bankName: "ESO-E MICROFINANCE BANK",
  },
  {
    bankCode: "100006",
    bankName: "eTRANZACT",
  },
  {
    bankCode: "090304",
    bankName: "EVANGEL MICROFINANCE BANK",
  },
  {
    bankCode: "090332",
    bankName: "EVERGREEN MICROFINANCE BANK",
  },
  {
    bankCode: "090328",
    bankName: "EYOWO",
  },
  {
    bankCode: "090179",
    bankName: "FAST MICROFINANCE BANK",
  },
  {
    bankCode: "060002",
    bankName: "FBNQUEST MERCHANT BANK",
  },
  {
    bankCode: "100031",
    bankName: "FCMB MOBILE",
  },
  {
    bankCode: "090290",
    bankName: "FCT MICROFINANCE BANK",
  },
  {
    bankCode: "090398",
    bankName: "FEDERAL POLYTECHNIC NEKEDE MICROFINANCE BANK",
  },
  {
    bankCode: "090318",
    bankName: "FEDERAL UNIVERSITY DUTSE MICROFINANCE BANK",
  },
  {
    bankCode: "090298",
    bankName: "FEDPOLY NASARAWA MICROFINANCE BANK",
  },
  {
    bankCode: "100001",
    bankName: "FETS",
  },
  {
    bankCode: "090153",
    bankName: "FFS MICROFINANCE BANK",
  },
  {
    bankCode: "000007",
    bankName: "FIDELITY BANK",
  },
  {
    bankCode: "100019",
    bankName: "FIDELITY MOBILE",
  },
  {
    bankCode: "090126",
    bankName: "FIDFUND MICROFINANCE Bank",
  },
  {
    bankCode: "090111",
    bankName: "FINATRUST MICROFINANCE BANK",
  },
  {
    bankCode: "090400",
    bankName: "FINCA MICROFINANCE BANK",
  },
  {
    bankCode: "090366",
    bankName: "FIRMUS MICROFINANCE BANK",
  },
  {
    bankCode: "110004",
    bankName: "FIRST APPLE LIMITED",
  },
  {
    bankCode: "000016",
    bankName: "FIRST BANK OF NIGERIA",
  },
  {
    bankCode: "000003",
    bankName: "FIRST CITY MONUMENT BANK",
  },
  {
    bankCode: "070014",
    bankName: "FIRST GENERATION MORTGAGE BANK",
  },
  {
    bankCode: "090285",
    bankName: "FIRST OPTION MICROFINANCE BANK",
  },
  {
    bankCode: "090164",
    bankName: "FIRST ROYAL MICROFINANCE BANK",
  },
  {
    bankCode: "090107",
    bankName: "FIRST TRUST MORTGAGE BANK PLC",
  },
  {
    bankCode: "100014",
    bankName: "FIRSTMONIE WALLET",
  },
  {
    bankCode: "110002",
    bankName: "FLUTTERWAVE TECHNOLOGY SOLUTIONS LIMITED",
  },
  {
    bankCode: "070002",
    bankName: "FORTIS MICROFINANCE BANK",
  },
  {
    bankCode: "100016",
    bankName: "FORTIS MOBILE",
  },
  {
    bankCode: "400001",
    bankName: "FSDH",
  },
  {
    bankCode: "090145",
    bankName: "FULLRANGE MICROFINANCE BANK",
  },
  {
    bankCode: "090158",
    bankName: "FUTO MICROFINANCE BANK",
  },
  {
    bankCode: "090168",
    bankName: "GASHUA MICROFINANCE BANK",
  },
  {
    bankCode: "070009",
    bankName: "GATEWAY MORTGAGE BANK",
  },
  {
    bankCode: "090186",
    bankName: "GIREI MICROFINANACE BANK",
  },
  {
    bankCode: "000027",
    bankName: "GLOBUS BANK",
  },
  {
    bankCode: "090278",
    bankName: "GLORY MICROFINANCE BANK",
  },
  {
    bankCode: "090408",
    bankName: "GMB MICROFINANCE BANK",
  },
  {
    bankCode: "090122",
    bankName: "GOWANS MICROFINANCE BANK",
  },
  {
    bankCode: "090178",
    bankName: "GREENBANK MICROFINANCE BANK",
  },
  {
    bankCode: "090269",
    bankName: "GREENVILLE MICROFINANCE BANK",
  },
  {
    bankCode: "090195",
    bankName: "GROOMING MICROFINANCE BANK",
  },
  {
    bankCode: "100009",
    bankName: "GT MOBILE",
  },
  {
    bankCode: "000013",
    bankName: "GTBANK PLC",
  },
  {
    bankCode: "090385",
    bankName: "GTI MICROFINANCE BANK",
  },
  {
    bankCode: "090147",
    bankName: "HACKMAN MICROFINANCE BANK",
  },
  {
    bankCode: "070017",
    bankName: "HAGGAI MORTGAGE BANK LIMITED",
  },
  {
    bankCode: "090121",
    bankName: "HASAL MICROFINANCE BANK",
  },
  {
    bankCode: "090363",
    bankName: "HEADWAY MICROFINANCE BANK",
  },
  {
    bankCode: "100017",
    bankName: "HEDONMARK",
  },
  {
    bankCode: "000020",
    bankName: "HERITAGE BANK",
  },
  {
    bankCode: "120002",
    bankName: "HOPEPSB",
  },
  {
    bankCode: "090118",
    bankName: "IBILE MICROFINANCE BANK",
  },
  {
    bankCode: "090324",
    bankName: "IKENNE MICROFINANCE BANK",
  },
  {
    bankCode: "090275",
    bankName: "IKIRE MICROFINANCE BANK",
  },
  {
    bankCode: "090279",
    bankName: "IKIRE MICROFINANCE BANK",
  },
  {
    bankCode: "090370",
    bankName: "ILISAN MICROFINANCE BANK",
  },
  {
    bankCode: "090258",
    bankName: "IMO STATE MICROFINANCE BANK",
  },
  {
    bankCode: "100024",
    bankName: "IMPERIAL HOMES MORTGAGE BANK",
  },
  {
    bankCode: "090157",
    bankName: "INFINITY MICROFINANCE BANK",
  },
  {
    bankCode: "070016",
    bankName: "INFINITY TRUST MORTGAGE BANK",
  },
  {
    bankCode: "100029",
    bankName: "INNOVECTIVES KESH",
  },
  {
    bankCode: "100027",
    bankName: "INTELLIFIN",
  },
  {
    bankCode: "090386",
    bankName: "INTERLAND MICROFINANCE BANK",
  },
  {
    bankCode: "110003",
    bankName: "INTERSWITCH LIMITED",
  },
  {
    bankCode: "090149",
    bankName: "IRL MICROFINANCE BANK",
  },
  {
    bankCode: "090377",
    bankName: "ISALEOYO MICROFINANCE BANK",
  },
  {
    bankCode: "000006",
    bankName: "JAIZ BANK",
  },
  {
    bankCode: "090003",
    bankName: "JUBILEE LIFE",
  },
  {
    bankCode: "090320",
    bankName: "KADPOLY MICROFINANCE BANK",
  },
  {
    bankCode: "090191",
    bankName: "KCMB MICROFINANCE BANK",
  },
  {
    bankCode: "000002",
    bankName: "KEYSTONE BANK",
  },
  {
    bankCode: "090299",
    bankName: "KONTAGORA MICROFINANCE BANK",
  },
  {
    bankCode: "090380",
    bankName: "KREDI MONEY MICROFINANCE BANK",
  },
  {
    bankCode: "090267",
    bankName: "KUDA MICROFINANCE BANK",
  },
  {
    bankCode: "070012",
    bankName: "LAGOS BUILDING AND INVESTMENT COMPANY",
  },
  {
    bankCode: "090177",
    bankName: "LAPO MICROFINANCE BANK",
  },
  {
    bankCode: "090271",
    bankName: "LAVENDER MICROFINANCE BANK",
  },
  {
    bankCode: "090372",
    bankName: "LEGEND MICROFINANCE BANK",
  },
  {
    bankCode: "070007",
    bankName: "LIVINGTRUST MORTGAGE BANK PLC",
  },
  {
    bankCode: "090265",
    bankName: "LOVONUS MICROFINANCE BANK",
  },
  {
    bankCode: "100035",
    bankName: "M36",
  },
  {
    bankCode: "090323",
    bankName: "MAINLAND MICROFINANCE BANK",
  },
  {
    bankCode: "090171",
    bankName: "MAINSTREET MICROFINANCE BANK",
  },
  {
    bankCode: "090174",
    bankName: "MALACHY MICROFINANCE BANK",
  },
  {
    bankCode: "090383",
    bankName: "MANNY MICROFINANCE BANK",
  },
  {
    bankCode: "090410",
    bankName: "MARITIME MICROFINANCE BANK",
  },
  {
    bankCode: "090321",
    bankName: "MAYFAIR MICROFINANCE BANK",
  },
  {
    bankCode: "070019",
    bankName: "MAYFRESH MORTGAGE BANK",
  },
  {
    bankCode: "090280",
    bankName: "MEGAPRAISE MICROFINANCE BANK",
  },
  {
    bankCode: "090136",
    bankName: "MICROCRED MICROFINANCE BANK",
  },
  {
    bankCode: "090113",
    bankName: "MICROVIS MICROFINANCE BANK",
  },
  {
    bankCode: "090192",
    bankName: "MIDLAND MICROFINANCE BANK",
  },
  {
    bankCode: "090281",
    bankName: "MINT-FINEX MFB",
  },
  {
    bankCode: "100011",
    bankName: "MKUDI",
  },
  {
    bankCode: "090362",
    bankName: "MOLUSI MICROFINANCE BANK",
  },
  {
    bankCode: "100020",
    bankName: "MONEY BOX",
  },
  {
    bankCode: "090129",
    bankName: "MONEY TRUST MICROFINANCE BANK",
  },
  {
    bankCode: "090392",
    bankName: "MOZFIN MICROFINANCE BANK",
  },
  {
    bankCode: "090190",
    bankName: "MUTUAL BENEFITS MICROFINANCE BANK",
  },
  {
    bankCode: "090151",
    bankName: "MUTUAL TRUST MICROFINANCE BANK",
  },
  {
    bankCode: "090152",
    bankName: "NAGARTA MICROFINANCE BANK",
  },
  {
    bankCode: "090128",
    bankName: "NDIORAH MICROFINANCE BANK",
  },
  {
    bankCode: "090329",
    bankName: "NEPTUNE MICROFINANCE BANK",
  },
  {
    bankCode: "090205",
    bankName: "NEW DAWN MICROFINANCE BANK",
  },
  {
    bankCode: "090378",
    bankName: "NEW GOLDEN PASTURES MICROFINANCE BANK",
  },
  {
    bankCode: "090108",
    bankName: "NEW PRUDENTIAL BANK",
  },
  {
    bankCode: "090263",
    bankName: "NIGERIAN NAVY MICROFINANCE BANK",
  },
  {
    bankCode: "999999",
    bankName: "NIP VIRTUAL BANK",
  },
  {
    bankCode: "090194",
    bankName: "NIRSAL NATIONAL MICROFINANCE BANK",
  },
  {
    bankCode: "090283",
    bankName: "NNEW WOMEN MICROFINANCE BANK",
  },
  {
    bankCode: "060003",
    bankName: "NOVA MERCHANT BANK",
  },
  {
    bankCode: "100032",
    bankName: "NOWNOW DIGITAL SYSTEMS LIMITED",
  },
  {
    bankCode: "070001",
    bankName: "NPF MICROFINANCE BANK",
  },
  {
    bankCode: "090364",
    bankName: "NUTURE MICROFINANCE BANK",
  },
  {
    bankCode: "090399",
    bankName: "NWANNEGADI MICROFINANCE BANK",
  },
  {
    bankCode: "090333",
    bankName: "OCHE MICROFINANCE BANK",
  },
  {
    bankCode: "090119",
    bankName: "OHAFIA MICROFINANCE BANK",
  },
  {
    bankCode: "090161",
    bankName: "OKPOGA MICROFINANCE BANK",
  },
  {
    bankCode: "090272",
    bankName: "OLABISI ONABANJO UNIVERSITY MICROFINANCE",
  },
  {
    bankCode: "090404",
    bankName: "OLOWOLAGBA MICROFINANCE BANK",
  },
  {
    bankCode: "090295",
    bankName: "OMIYE MICROFINANCE BANK",
  },
  {
    bankCode: "100004",
    bankName: "OPAY",
  },
  {
    bankCode: "090396",
    bankName: "OSCOTECH MICROFINANCE BANK",
  },
  {
    bankCode: "100002",
    bankName: "PAGA",
  },
  {
    bankCode: "070008",
    bankName: "PAGE MFBank",
  },
  {
    bankCode: "100033",
    bankName: "PALMPAY",
  },
  {
    bankCode: "090004",
    bankName: "PARALLEX",
  },
  {
    bankCode: "100003",
    bankName: "PARKWAY-READYCASH",
  },
  {
    bankCode: "090317",
    bankName: "PATRICKGOLD MICROFINANCE BANK",
  },
  {
    bankCode: "110001",
    bankName: "PAYATTITUDE ONLINE",
  },
  {
    bankCode: "110006",
    bankName: "PAYSTACK PAYMENT LIMITED",
  },
  {
    bankCode: "090137",
    bankName: "PECANTRUST MICROFINANCE BANK",
  },
  {
    bankCode: "090196",
    bankName: "PENNYWISE MICROFINANCE BANK",
  },
  {
    bankCode: "090135",
    bankName: "PERSONAL TRUST MICROFINANCE BANK",
  },
  {
    bankCode: "90165",
    bankName: "PETRA MICROFINANCE BANK",
  },
  {
    bankCode: "090165",
    bankName: "PETRA MICROFINANCE BANK",
  },
  {
    bankCode: "090289",
    bankName: "PILLAR MICROFINANCE BANK",
  },
  {
    bankCode: "070013",
    bankName: "PLATINUM MORTGAGE BANK",
  },
  {
    bankCode: "000008",
    bankName: "POLARIS BANK",
  },
  {
    bankCode: "090296",
    bankName: "POLYUNWANA MICROFINANCE BANK",
  },
  {
    bankCode: "090274",
    bankName: "PRESTIGE MICROFINANCE BANK",
  },
  {
    bankCode: "000023",
    bankName: "PROVIDUS BANK",
  },
  {
    bankCode: "090303",
    bankName: "PURPLEMONEY MICROFINANCE BANK",
  },
  {
    bankCode: "090261",
    bankName: "QUICKFUND MICROFINANCE BANK",
  },
  {
    bankCode: "000024",
    bankName: "RAND MERCHANT BANK",
  },
  {
    bankCode: "070011",
    bankName: "REFUGE MORTGAGE BANK",
  },
  {
    bankCode: "090125",
    bankName: "REGENT MICROFINANCE BANK",
  },
];

const EmployeeAccountDetails = ({
  bankListRes,
  accountName,
  accountNumber,
  index,
  err,
  onHandleChange,
  prevQuestion,
  registerEmployeeAction,
  editEmployeeAction,
  addEmployeeLink,
  editEmployeeLink,
  addEmployeeErr,
  addEmployeeSuccess,
  editEmployeeErr,
  editEmployeeSuccess,
  employeeData,
  token,
  close,
}) => {
  const [showDropDown, setDropDown] = useState(false);
  const [filterBank, setFilterBank] = useState("");
  const [bankcode, setBankCode] = useState("");
  const [validation, setValidation] = useState({});
  const [request, setRequest] = useState(false);
  const [errorMessage, setMessage] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShow] = useState(false);
  const [success, setSuccess] = useState("");
  const [receivedToken, setRecievedToken] = useState("");
  const [bankCodeList, setBankCodeList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!bankListRes) return null;
    if (bankListRes.error) return null;
    setBankCode(bankList);
    setBankCodeList(bankList);
  }, [bankListRes]);
  // FETCH THE TOKEN FROM THE LOCAL STORAGE

  useEffect(() => {
    if (!localStorage.getItem("aminien_token")) {
      setRecievedToken("");
    } else {
      setRecievedToken(localStorage.getItem("aminien_token"));
    }
  }, []);

  // USEEFFECT TO FETCH SUCCESS MESSAGE WHEN THE REQUEST IS SUCCESSFUL FOR ADD EMPLOYEE

  useEffect(() => {
    if (!addEmployeeSuccess) {
      return;
    } else {
      setRequest(false);
      const { error, success } = addEmployeeSuccess.data;

      if (error) {
        setShow(true);
        setError(error);
        const removeTimeOut = setTimeout(() => {
          setShow(false);
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      } else if (success) {
        setSuccess(success);
        const removeTimeOut = setTimeout(() => {
          setSuccess("");
          // window.location.reload();
          navigate("overview");
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      }
    }
  }, [addEmployeeSuccess]);

  // USEEFFECT TO FETCH SUCCESS MESSAGE WHEN THE REQUEST IS SUCCESSFUL FOR EDIT EMPLOYEE
  useEffect(() => {
    if (!editEmployeeSuccess) {
      return;
    } else {
      setRequest(false);
      const { error, success } = editEmployeeSuccess.data;
      if (error) {
        setShow(true);
        setError(error);
        const removeTimeOut = setTimeout(() => {
          setShow(false);
          // window.location.reload();
          // navigate("overview");
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      } else if (success) {
        setSuccess(success);
        const removeTimeOut = setTimeout(() => {
          setSuccess("");
          close();
          window.location.reload();
        }, 4000);
        return () => {
          clearTimeout(removeTimeOut);
        };
      }
    }
  }, [editEmployeeSuccess, close]);

  // USEEFFECT TO FETCH NETWORK ERROR FOR ADD EMPLOYEE
  useEffect(() => {
    if (!addEmployeeErr) {
      return;
    } else {
      setRequest(false);
      setShow(true);
      setMessage(addEmployeeErr.message);

      const removeTimeOut = setTimeout(() => {
        setShow(false);
        setMessage(null);
        window.location.reload();
      }, 4000);
      return () => {
        clearTimeout(removeTimeOut);
        window.location.reload();
      };
    }
  }, [addEmployeeErr]);

  // USEEFFECT TO FETCH NETWORK ERROR FOR EDIT EMPLOYEE
  useEffect(() => {
    if (!editEmployeeErr) {
      return;
    } else {
      setRequest(false);
      setShow(true);
      setMessage(editEmployeeErr.message);
      const removeTimeOut = setTimeout(() => {
        setShow(false);
        window.location.reload();
      }, 4000);
      return () => {
        clearTimeout(removeTimeOut);
      };
    }
  }, [editEmployeeErr]);

  const BankList = () => {
    const filterBankName = bankCodeList.filter((cur) =>
      cur.bankName.toLowerCase().includes(filterBank)
    );
    const displayList = filterBankName.map(({ bankCode, bankName }, index) => {
      return (
        <React.Fragment>
          <li
            key={bankCode}
            class='bankLinks'
            onClick={() => {
              setFilterBank(bankName);
              setDropDown(false);
              setBankCode(bankCode);
            }}>
            {bankName}
          </li>
        </React.Fragment>
      );
    });
    return displayList;
  };
  const Validation = () => {
    if (!accountName) {
      setValidation({
        accountName: "Employee's account name is required!",
      });
    } else if (
      !accountNumber ||
      accountNumber.length > 10 ||
      accountNumber.length < 10
    ) {
      setValidation({
        accountNumber: "Invalid Employee's account number!",
      });
    } else if (!filterBank) {
      setValidation({
        bankName: "Employee's bank name is required!",
      });
    } else {
      setRequest(true);
      if (editEmployeeLink) {
        // REGISTRATION EMPLOYEE ACTION CREATOR
        editEmployeeAction(
          { ...employeeData, filterBank, bankcode, accountName, accountNumber },
          receivedToken
        );
      } else if (addEmployeeLink) {
        // EDIT EMPLOYEE ACTIONs
        registerEmployeeAction(
          { ...employeeData, filterBank, bankcode },
          receivedToken
        );
      }
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    Validation();
  };

  if (index !== 3) {
    return null;
  }
  return (
    <Form className='d-flex flex-column' onSubmit={onSubmit}>
      <Row>
        <Form.Group as={Col}>
          <DashBoardText
            name='Account Name'
            label='Enter Employee Account Name '
          />
          <Input
            inputName='employeeAccountName'
            type='text'
            handleChange={onHandleChange}
            value={accountName}
            err={validation.accountName}
            onPress={() =>
              setValidation({
                accountName: "",
              })
            }
          />
        </Form.Group>
        <Form.Group as={Col}>
          <DashBoardText
            name='Account Number'
            label='Enter Employee Account Number'
          />
          <Input
            inputName='employeeAccountNumber'
            type='number'
            handleChange={onHandleChange}
            value={accountNumber}
            err={validation.accountNumber}
            onPress={() =>
              setValidation({
                accountNumber: "",
              })
            }
          />
        </Form.Group>{" "}
      </Row>
      <Row>
        <Form.Group as={Col}>
          <DashBoardText name='Bank Name' label='Enter Employee Bank Name' />
          <Input
            inputName='employee_bankname'
            type='text'
            handleChange={(e) => {
              setFilterBank(e.target.value);
            }}
            value={filterBank}
            err={validation.bankName}
            onPress={() => {
              setDropDown(true);
              setValidation({
                bankName: "",
              });
            }}
          />

          {showDropDown && (
            <div id='dropdownList' className='dropdown-content shadow'>
              {BankList()}
            </div>
          )}
        </Form.Group>{" "}
      </Row>
      <div className='ms-auto mt-4 double-btns'>
        <Button
          type='button'
          className='button ms-auto '
          disabled={request ? true : false}
          onClick={prevQuestion}>
          Back
        </Button>

        <LoaderButton btnName='Finish' btnStyle='ms-4' request={request} />
      </div>
      {showModal && (
        <NetWorkErrors
          errMessage={errorMessage}
          serverErr={error}
          removeLoader={() => setRequest(false)}
        />
      )}
      {success && <SuccessRequestModal message={success} />}
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    bankListRes: state.DashboardReducer.bankList.data,
  };
};

export default connect(mapStateToProps)(EmployeeAccountDetails);
