import {} from "react"

export const Breadcrumb = (props: any) => {
    return (
        <div className="breadcrumb-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">{props.tobe}</a></li>
                                <li className="breadcrumb-item active" aria-current="page">{props.togo}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}