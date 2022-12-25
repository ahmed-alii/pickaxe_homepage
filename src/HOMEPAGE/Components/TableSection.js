import gradient from 'random-gradient'

export default function TableSection({tableData, title}) {
    return (
        <>
            <div className="table-desktop container-fluid my-5">
                <div className={"row mb-4"}>
                    <div className="col px-lg-5 d-flex align-items-end">
                        <h2 className={"fw-bold m-0"}>{title ? title : "Top 10 Pickaxes"}</h2>
                        <a href="#" className={"text-decoration-none h6 mb-1 ps-3"}>See All</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col px-lg-5">

                        <div className={"table-wrapper"}>
                            <table className={"table table-borderless"}>
                                <thead className={"border-bottom border-top border-2 py-2"}>
                                <tr>
                                    <th>Rank</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th className={"text-center"}>Type</th>
                                    <th className={"text-center"}>Runs</th>
                                </tr>
                                </thead>

                                <tbody>

                                {tableData && tableData.map((el, key) => (
                                    <tr key={key}>
                                        <td className={"py-3"}>{key + 1}</td>
                                        <td className={"d-flex align-items-center h-100"}>
                                            <div
                                                style={{
                                                    minHeight: "50px",
                                                    minWidth: "50px",
                                                    height: "50px",
                                                    width: "50px",
                                                    maxHeight: "50px",
                                                    maxWidth: "50px",
                                                    objectFit: "cover",
                                                    position: "relative"
                                                }}
                                            >
                                                <img
                                                    src={`https://beta.pickaxeproject.com/static/coverphotos/${el.formid}.png`}
                                                    alt=""
                                                    style={{
                                                        height: "100%",
                                                        width: "100%",
                                                        objectFit: "cover",
                                                    }}
                                                    onError={(evt) => {
                                                        evt.target.style.visibility = "hidden"
                                                        evt.target.parentElement.style.background = gradient(el.formid)

                                                    }}
                                                />
                                            </div>
                                            <span className={"ps-3 fw-bold"}>{el.formtitle}</span>
                                        </td>
                                        <td className={"py-3"}>{el.formdescription}
                                        </td>
                                        <td className={"text-center"}>
                                            {el.imageortext === "text" ? "🔤" : "🖼️"}
                                        </td>
                                        <td className={"text-center"}>{el.unique_visitors}</td>
                                    </tr>
                                ))}


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="table-mobile container-fluid my-5">
                <div className={"row mb-4"}>
                    <div className="col px-lg-5 d-flex align-items-end">
                        <h3 className={"m-0"}>{title ? title : "Top 5 Pickaxes"}</h3>
                        <a href="#" className={"text-decoration-none h6 mb-1 ps-3"}>See All</a>
                    </div>
                </div>

                <div className="row">
                    <div className="col px-lg-5">
                        <div className={"table-wrapper"}>

                            {tableData && tableData.map((el, key) => (
                                <div className="row align-items-center mb-4" key={key}>
                                    <div className="col-1 d-flex align-items-center justify-content-center">
                                        <span>{key+1}</span>
                                    </div>
                                    <div className="col-2 text-center">
                                        <div
                                            style={{
                                                minHeight: "50px",
                                                minWidth: "50px",
                                                height: "50px",
                                                width: "50px",
                                                maxHeight: "50px",
                                                maxWidth: "50px",
                                                objectFit: "cover",
                                                position: "relative"
                                            }}
                                        >
                                            <img
                                                src={`https://beta.pickaxeproject.com/static/coverphotos/${el.formid}.png`}
                                                alt=""
                                                style={{
                                                    height: "100%",
                                                    width: "100%",
                                                    objectFit: "cover",
                                                }}
                                                onError={(evt) => {
                                                    evt.target.style.visibility = "hidden"
                                                    evt.target.parentElement.style.background = gradient(el.formid)

                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-9">
                                        <h6 className={"fw-bold"}>{el.formtitle}</h6>
                                        <p className={"m-0 small"}>{el.formdescription}</p>
                                    </div>
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
