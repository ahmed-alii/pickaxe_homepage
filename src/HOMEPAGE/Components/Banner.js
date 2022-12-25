import bannerImg from "../../Assets/bannerBG.png";
import e2 from "../../Assets/e2.png";
import InputBlock from "./InputBlock";
import {useEffect, useState} from "react";

export default function Banner({category, title}){

    const [form, setForm] = useState({})
    useEffect(()=>{

        if (category){
            let requestOptions = {
                method: 'GET',
                redirect: 'follow'
            };

            fetch("https://beta.pickaxeproject.com/api/getform?formid="+category, requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log("form result ==> ", result["form"])
                    setForm(result["form"])
                })
                .catch(error => console.log('error', error));
        }

    },[category])


    return(
        <>
            {form &&
                <div className="container-fluid banner py-5 px-5" style={{backgroundImage: `url(${bannerImg})`}}>
                    <div className="row">
                        <div className="col-lg-4 mb-5 text-center">
                            <img src={`https://beta.pickaxeproject.com/static/coverphotos/${category}.png`} alt="" className={"banner-img"}/>
                        </div>
                        <div className="col-lg-6 mb-5">
                            <InputBlock form={form} title={title}/>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}
