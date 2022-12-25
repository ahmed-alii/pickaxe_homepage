import './App.css';
import Navbar from "./HOMEPAGE/Navbar";
import Header from "./HOMEPAGE/Header";
import Page from "./HOMEPAGE/Page";
import SignedOut from "./HOMEPAGE/SignedOut";
import {useEffect, useState} from "react";

function App() {
    const [isUser, setUser] = useState(null)
    const [mainForm, setMainForm] = useState(null)
    const [mainList, setMainList] = useState(null)
    const [result, setResult] = useState(null)

    useEffect(() => {
        fetch("https://beta.pickaxeproject.com/api/checklogin", {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.useremail && result.useremail !== "LOGGED OUT") {
                    setUser(result.useremail)
                }

            })
            .catch(error => console.log('error', error));
    },[])
    useEffect(() => {
        fetch("https://beta.pickaxeproject.com/api/landingpage", {
            method: 'GET',
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setMainForm(result.mainform)
                setMainList(result.mainlist)
                setResult(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className="App">
            {!isUser ?
                <>
                    <Navbar signedIn={isUser}/>
                    <Header mainForm={mainForm}/>
                    <Page mainList={mainList} result={result}/>

                    <footer className={"text-muted small"}>
                        <div className="p-3 text-center">
                            <span>Questions? Suggestions? Want to get involved?</span>
                            &nbsp;
                            <a href="#" className={"fw-bold text-primary text-decoration-none"}>
                                Contact Us
                            </a>
                        </div>
                    </footer>
                </>
                :
                <>
                    <SignedOut/>
                </>
            }
        </div>
    );
}

export default App;
