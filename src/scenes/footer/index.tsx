import Logo from "@/assets/Logo.png"

const Footer = () => {
  return <footer className="bg-primary-100 py-16">
    <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className="mt-16 basis-1/2 md:mt-0">
        <img src={Logo} alt="logo" />
        <p className="my-5">
          Ready to transform your fitness journey? Join us for expert coaching, modern equipment, and a supportive community. Sign up today and take the first step toward a healthier you!
        </p>
        <p>© Evogym All Rights Reserved</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Links</h4>
        <p className="my-5">Privacy policy</p>
        <p className="my-5">Terms and onditions</p>
        <p>Data Protection Policy</p>
      </div>
      <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">Contact Us</h4>
        <p className="my-5">Locations</p>
        <p>(488)347-7842</p>
      </div>
    </div>
  </footer>
}

export default Footer