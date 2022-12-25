import {useState} from "react";

export default function InputBlock({form, title}) {
    const [q, setQ] = useState("")
    const [ans, setAns] = useState("")

    function handleSubmit(evt) {
        evt.target.classList.toggle("submitting")
        setAns("")
        if (q) {

            let formdata = new FormData();
            formdata.append("id", form.id);
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

    return (
        <>
            <p className={"fw-bold"}>{title}</p>
            <div className={""}>
                <h1 className={"fw-bold header_text"}>{form?.title} <h5 className={"text-muted d-inline fw-light ms-3"}>by Nathanial Mahowald</h5></h1>

            </div>
            <p>{form?.description}</p>

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
        </>
    )
}
