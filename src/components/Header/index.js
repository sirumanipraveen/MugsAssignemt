import './index.css'
const Header = () => (
  <div>
    <div className="arrage-header">
      <div className="first-container">
        <h1 className="mainHeadingMu">mu</h1>
        <h1 className="nextHeading">Mumair</h1>
      </div>
      <div className="left-side-heading">
        <h1 className="right-side">Home</h1>
        <h1 className="right-side">About me</h1>
        <h1 className="right-side">Service</h1>
        <h1 className="right-side">Project</h1>
        <h1 className="right-side">Testimonail</h1>
        <h1 className="right-side">Contact</h1>
      </div>
      <div className="button">
        <button className="Download-button">Download cv</button>
      </div>
    </div>

    <div className="center-fist-section">
      <div className="first-Section">
        <div className="sub-section">
          <h1 className="hi-am"> Hi i am </h1>
          <h1 className="Name">Muhammad Umair </h1>
          <h1 className="desiner-ux-ui">UX & UI designer</h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <button className="Hire-me-button">Hire me</button>
        </div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/8aeb/1fc9/979b379ab7f66745a5c557015bf995d5?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p7qnOOi7RvdBltV-bRZXFEf6epZoJy1pfpt5gM014F0-kpaMk4cGmKWVcZifKwBppE5EaS8XJ2AGxlwUlxUsbtL3v3w6MTRYghyThMp2Mi0DmDlZL3sM5eOIV~5vwCccy95Racy0K7t~TGse2bAp6RfB3BnWcB-hiBHktjozoqsn7gLlnQHIExdfwKtGjGDTnAyfeA45r2Gu--vBxllz4RohlqVZIL9YJbjzzd-etUxfB6kliMSqgVv827rN4psfe8i2XRKIozWP4Rd6a-e8juOH8now4DoiM-wrQoDw9qRz5eoY9IN~8Vn5pOdAbzXg-9BsLWgRPKeEhKzK4g0N0w__"
            className="img"
          />
        </div>
      </div>
    </div>
  </div>
)

export default Header
