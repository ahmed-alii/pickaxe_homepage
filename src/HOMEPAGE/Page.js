import e1 from "../Assets/e1.png"
import e2 from "../Assets/e2.png"
import e3 from "../Assets/e3.png"
import TableSection from "./Components/TableSection";
import Banner from "./Components/Banner";

export default function Page({mainList, result}) {

    return (
        <>
            <div className="container-fluid">
                <div className="row text-center my-5">
                    <div className="col-lg-4 feature-column">
                        <div>
                            <img src={e1} alt=""/>
                            <p className={"fw-bold"}>Discover AI Tools</p>
                            <p>The Pickaxe community is always making tools. Find the best ones.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 feature-column">
                        <div>
                            <img src={e3} alt=""/>
                            <p className={"fw-bold"}>Make your own Pickaxe</p>
                            <p>Build a tool powered by AI.
                                The only limit is your imagination</p>
                        </div>
                    </div>

                    <div className="col-lg-4 feature-column">
                        <div>
                            <img src={e2} alt=""/>
                            <p className={"fw-bold"}>Share and collaborate with the Pickaxe community</p>
                            <p>Clone, edit, share</p>
                        </div>
                    </div>
                </div>
            </div>
            <TableSection tableData={mainList}/>

            <Banner category={result && result.categoryoneform} title={result?.categoryone}/>
            <TableSection title={"Top 5 most popular in "+ result?.categoryone} tableData={result?.categoryonelist}/>

            <Banner category={result && result.categorytwoform} title={result?.categorytwo}/>
            <TableSection title={"Top 5 most popular in "+ result?.categorytwo} tableData={result?.categorytwolist}/>

        </>
    )
}
