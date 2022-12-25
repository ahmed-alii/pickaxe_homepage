import hbg from "../Assets/headerBG.png"
import {useEffect, useState} from "react";


export default function Header({mainForm}) {
    const [q, setQ] = useState("")
    const [ans, setAns] = useState("")
    const [form, setForm] = useState({})

    function handleSubmit(evt) {
        evt.target.classList.toggle("submitting")
        setAns("")
        if (q) {

            let formdata = new FormData();
            formdata.append("id", mainForm);
            formdata.append("chipquestion1", q);

            fetch("https://beta.pickaxeproject.com/api/formsubmission", {
                method: 'POST',
                body: formdata,
            })
                .then(response => response.json())
                .then(res => {
                    setAns(res.response)
                    evt.target.classList.toggle("submitting")
                })
                .catch(error => {
                    console.log('error', error)
                    evt.target.classList.toggle("submitting")
                });
        } else {
            alert("Please enter a question in the text field.")
            evt.target.classList.remove("submitting")
        }
    }

    useEffect(() => {
        if (mainForm) {
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://beta.pickaxeproject.com/api/getform?formid=" + mainForm, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log(result["form"])
                    setForm(result["form"])
                })
                .catch(error => console.log('error', error));
        }
    }, [mainForm])

    return (
        <>
            <div className="container-fluid header">
                <div className="row">
                    <div className="col-lg-6 col-hero bg-light-blue d-flex align-items-center justify-content-center">
                        <div className={"content p-lg-5"}>
                            <h1 className={"fw-bold header_text"}>
                                Pickaxe allows anyone to create tools &nbsp;
                                <span className={"text-highlight"}>powered by AI</span>,
                                in minutes, no code required.
                            </h1>

                            <a href="https://beta.pickaxeproject.com/build/templateselection"
                               className={"btn btn-dark rounded-0 py-3 px-5 fw-bold"}>Make a Pickaxe</a>

                        </div>
                    </div>
                    <div className="col-lg-6 col-hero d-flex align-items-center justify-content-center"
                         style={{backgroundImage: `url(${hbg})`}}>

                        <div className={"content p-lg-5"}>
                            <p className={"fw-bold"}>FEATURED PICKAXE</p>
                            <div className={"d-flex align-items-end"}>
                                <h1 className={"fw-bold header_text"}>{form?.title} <h6
                                    className={"text-muted d-inline fw-light ms-3"}>by Nathanial Mahowald</h6></h1>
                            </div>
                            <p>
                                {form?.description}
                            </p>

                            <div className="input-fields">
                                <input type="text" placeholder={"Type Anything!"}
                                       onChange={(evt) => {
                                           setQ(evt.target.value)
                                       }}/>
                                <button onClick={(evt) => {
                                    handleSubmit(evt)
                                }}>Submit
                                </button>
                            </div>

                            <div className="ai-output">
                                <textarea cols="30" rows="4" className={"form-control rounded-0"}
                                          placeholder={"AI Output"}
                                          value={ans}
                                          readOnly={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
