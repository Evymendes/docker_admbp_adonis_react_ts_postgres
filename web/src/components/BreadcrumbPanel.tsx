import {} from "react"

export const BreadcrumbPanel = (props: any) => {
    return (
        <div className="page-breadcrumb">
            <div className="row">
                <div className="col-7 align-self-center">
                    <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">Good Morning Jason!</h3>
                    <div className="d-flex align-items-center">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb m-0 p-0">
                                <li className="breadcrumb-item"><a href="index.html">Dashboard</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="col-5 align-self-center">
                    <div className="customize-input float-right">
                        <select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
                            <option selected>Aug 19</option>
                            <option value="1">July 19</option>
                            <option value="2">Jun 19</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}