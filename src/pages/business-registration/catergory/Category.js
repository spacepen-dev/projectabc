import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/logo.svg';

import { Button, Image } from '../../registration/ui';
import { NewBackground } from '../../registration/ui';
import { RegistrationContext } from '../main/RegistrationForm';
import { Category } from './CategoryComp';


const BusinessCategory = ({getValue, name}) => {
    const { page, ChangePage } = useContext(RegistrationContext);
   

    if (page !== 2) {
        return null;
    }
    return (
			<NewBackground>
				<main className="mt-2 mt-md-5 container d-flex flex-column ">
					<article className="py-4 px-2 py-md-5 px-md-1">
						<div className="heading-cont">
							<div className="logo-cont">
								<Image url={Logo} styles="comp-logo" alt="Orio logo" />
							</div>
							<h2 className="heading-text">
								Choose a Category Under Which Your Business Is Registered
							</h2>
							<p className="mt-3 mb-4 heading-subtext">
								Choose the business you want to transact now.
							</p>
						</div>

						<div className="row pb-lg-5 category_biz_cont">
							<Category getName={(name) => getValue(name.name)} />
						</div>

						<div className="mt-5 mb-3 d-flex justify-content-center">
							<Button
								onClick={ChangePage}
								disabled={!name ? true : false}
								name="CONTINUE"
								styles="btn login-btn text-white p-3 category_btn"
								type="button"
							/>
						</div>
					</article>
				</main>
			</NewBackground>
		);
};

export default BusinessCategory;