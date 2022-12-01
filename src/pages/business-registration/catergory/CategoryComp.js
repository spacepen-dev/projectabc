import { Image } from "../../registration/ui";
import cate1 from '../../../assets/img/frame1.svg';
import cate2 from '../../../assets/img/frame2.svg';
import cate3 from '../../../assets/img/frame3.svg';
import cate4 from '../../../assets/img/frame4.svg';
import cate5 from '../../../assets/img/frame5.svg';
import { Check } from "../../registration/ui";
import { useState } from "react";



const DETAILS = [
    {
        id: 0,
        name: 'Sole Proprietor',
        image: cate1,
        icon: (id,index)=> <Check color={`${id !== index ? '#EEF1FB': '#4836C8'}`}/>,
    },
    {
        id: 1,
        name: 'Non Governmental Organization',
        image: cate2,
        icon: (id,index)=> <Check color={`${id !== index ? '#EEF1FB': '#4836C8'}`}/>,
    },
    {
        id: 2,
        name: 'Religious Organization',
        image: cate3,
        icon: (id,index)=> <Check color={`${id !== index ? '#EEF1FB': '#4836C8'}`}/>,
    },
    {
        id: 3,
        name: 'Limited Liability Company',
        image: cate4,
        icon: (id,index)=> <Check color={`${id !== index ? '#EEF1FB': '#4836C8'}`}/>,
    },
    
    {
        id: 4,
        name: 'Government Parastatal',
        image: cate5,
        icon: (id,index)=> <Check color={`${id !== index ? '#EEF1FB': '#4836C8'}`}/>,
    },
    {
        id: 5,
        name: 'Others(Specify)',
        image: cate5,
        icon: (id,index)=> <Check color={`${id !== index ? '#EEF1FB': '#4836C8'}`}/>,
    },
]

export function Category({getName}) {
    const [cateId, setId] = useState(null);

    function changeColor (idx){
        setId(idx);
    }

    function categoryName(id) {
        
       getName(DETAILS.find((det) => det.id === id))
    };

    return DETAILS.map(({ id, name, image, icon }, index) => {
        return  <div key={id} className="col-12 col-sm-6 col-md-4 col-xl-2 mb-4 mb-4-0">
            <div className="w-100 d-flex flex-column m-auto text-center px-2 position-relative category_businesses" onClick={() => {
                changeColor(id);
                categoryName(id);
                
            }}>
          <div className="ml-auto mb-1 mt-3 mr-3 lib_img">
        {icon(cateId, index)}
          </div>
          <div className="m-auto cat_biz_img">
        <Image url={image} styles='' alt={name} />
          </div>
                <p className="mt-2 text-center add_acct_text">{name}</p>
        </div>
      </div>
    })

}