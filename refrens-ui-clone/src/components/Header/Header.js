import "./Header.css";

const Header = () => {

    return (
        <>
        <div className="h-contain">

                <div class="header-container">

                    <div class="header-wrapper">
                    
                        <div class="heading-section">
                            <h1 class="head">
                                The New Way To Run Your Business
                            </h1>
                            <p class="description">
                                Create invoices, manage accounting books, capture leads and maintain your online business profile with Refrens.
                            </p>

                            <div className="h-btn">
                                <button class="join-btn"> 
                                    <span class="h-btn-text">
                                        Join Refrens 
                                    </span>
                                </button>
                            </div>
                            
                            <p class="motto">
                            Made for freelancers, agencies & small businesses.
                            </p>
                        </div>

                        <div class="img-section">
                            <img src="https://assets.refrens.com/843_Invoicing_tool_software_for_freelancers_and_agencies_4a5cda5547.webp" alt="compnay" />
                        </div>
                    
                    </div>
                </div>
        </div>
        </>
    )
}

export default Header;