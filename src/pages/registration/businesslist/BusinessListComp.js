import { useNavigate } from "react-router-dom";
import { SavedBusinessToken } from "../../../lib/sharedfuntions";
import { BusinessOffice } from "../ui";

export default function BusinessList({ business }) {

    const navigate = useNavigate();


    function onBusinessSelect(data) {
        SavedBusinessToken(data.business_token)
        // setSelected(!selected);
        navigate('/dashboard', {replace:true, state:business.business_token})
    };


    function List() {
        return business.map((biz, index) => {
            if (!biz) return null;
            const { businessName, companyLogo } = biz;

            return <div key={index} className="col-12 col-sm-6 col-md-4 col-xl-2 mb-4 mb-4-0" onClick={()=>onBusinessSelect(biz)}>
            <div className="w-100 d-flex flex-column m-auto text-center px-2 position-relative category_businesses">
                <div className="ml-auto mt-3 mr-3 lib_img">
                {/* <Check color={`${!selected? '#EEF1FB' :'#4836C8'}`} /> */}
                </div>
                    <div className="position-absolute add_img">
                        {companyLogo ?  <img src={companyLogo} alt="" />: <BusinessOffice/>}
                </div>
              <p className="mt-auto mb-3 text-center add_acct_text">{businessName}</p>
            </div>
        </div>
        })
    }

    return <List/>
}