import Navbar from "./Navbar";
import InputBlock from "./Components/InputBlock";
import bg from "../Assets/bg_signout.png"
export default function SignedOut() {
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundPosition: "center", backgroundSize: "cover"}}>
            <Navbar signedIn={false}/>

            <div className="container signedout">
                <div className="d-flex justify-content-center align-items-center min-vh-100">
                    <div className="row w-100">
                        <div className="col-xl-8 offset-xl-2">
                            <div className={"w-100"}>
                                <InputBlock/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
