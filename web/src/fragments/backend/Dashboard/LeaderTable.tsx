
import React from "react"

export const LeaderTable = () => {
    return (
        <section>
            <React.Fragment>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex align-items-center mb-4">
                                    <h4 className="card-title">Top Leaders</h4>
                                    <div className="ml-auto">
                                        <div className="dropdown sub-dropdown">
                                            <button className="btn btn-link text-muted dropdown-toggle" type="button"
                                                id="dd1" data-toggle="dropdown" aria-haspopup="true"
                                                aria-expanded="false">
                                                <i data-feather="more-vertical"></i>
                                            </button>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dd1">
                                                <a className="dropdown-item" href="#">Insert</a>
                                                <a className="dropdown-item" href="#">Update</a>
                                                <a className="dropdown-item" href="#">Delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table no-wrap v-middle mb-0">
                                        <thead>
                                            <tr className="border-0">
                                                <th className="border-0 font-14 font-weight-medium text-muted">Team Lead
                                                </th>
                                                <th className="border-0 font-14 font-weight-medium text-muted px-2">Project
                                                </th>
                                                <th className="border-0 font-14 font-weight-medium text-muted">Team</th>
                                                <th className="border-0 font-14 font-weight-medium text-muted text-center">
                                                    Status
                                                </th>
                                                <th className="border-0 font-14 font-weight-medium text-muted text-center">
                                                    Weeks
                                                </th>
                                                <th className="border-0 font-14 font-weight-medium text-muted">Budget</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border-top-0 px-2 py-4">
                                                    <div className="d-flex no-block align-items-center">
                                                        <div className="mr-3"><img
                                                                src="/src/content/backend/assets/images/users/widget-table-pic1.jpg"
                                                                alt="user" className="rounded-circle" width="45"
                                                                height="45" /></div>
                                                        <div className="">
                                                            <h5 className="text-dark mb-0 font-16 font-weight-medium">Hanna
                                                                Gover</h5>
                                                            <span className="text-muted font-14">hgover@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="border-top-0 text-muted px-2 py-4 font-14">Elite Admin</td>
                                                <td className="border-top-0 px-2 py-4">
                                                    <div className="popover-icon">
                                                        <a className="btn btn-primary rounded-circle btn-circle font-12"
                                                            href="javascript:void(0)">DS</a>
                                                        <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item"
                                                            href="javascript:void(0)">SS</a>
                                                        <a className="btn btn-cyan rounded-circle btn-circle font-12 popover-item"
                                                            href="javascript:void(0)">RP</a>
                                                        <a className="btn btn-success text-white rounded-circle btn-circle font-20"
                                                            href="javascript:void(0)">+</a>
                                                    </div>
                                                </td>
                                                <td className="border-top-0 text-center px-2 py-4"><i
                                                        className="fa fa-circle text-primary font-12" data-toggle="tooltip"
                                                        data-placement="top" title="In Testing"></i></td>
                                                <td
                                                    className="border-top-0 text-center font-weight-medium text-muted px-2 py-4">
                                                    35
                                                </td>
                                                <td className="font-weight-medium text-dark border-top-0 px-2 py-4">$96K
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-4">
                                                    <div className="d-flex no-block align-items-center">
                                                        <div className="mr-3"><img
                                                                src="/src/content/backend/assets/images/users/widget-table-pic2.jpg"
                                                                alt="user" className="rounded-circle" width="45"
                                                                height="45" /></div>
                                                        <div className="">
                                                            <h5 className="text-dark mb-0 font-16 font-weight-medium">Daniel
                                                                Kristeen
                                                            </h5>
                                                            <span className="text-muted font-14">Kristeen@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-muted px-2 py-4 font-14">Real Homes WP Theme</td>
                                                <td className="px-2 py-4">
                                                    <div className="popover-icon">
                                                        <a className="btn btn-primary rounded-circle btn-circle font-12"
                                                            href="javascript:void(0)">DS</a>
                                                        <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item"
                                                            href="javascript:void(0)">SS</a>
                                                        <a className="btn btn-success text-white rounded-circle btn-circle font-20"
                                                            href="javascript:void(0)">+</a>
                                                    </div>
                                                </td>
                                                <td className="text-center px-2 py-4"><i
                                                        className="fa fa-circle text-success font-12" data-toggle="tooltip"
                                                        data-placement="top" title="Done"></i>
                                                </td>
                                                <td className="text-center text-muted font-weight-medium px-2 py-4">32</td>
                                                <td className="font-weight-medium text-dark px-2 py-4">$85K</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-4">
                                                    <div className="d-flex no-block align-items-center">
                                                        <div className="mr-3"><img
                                                                src="/src/content/backend/assets/images/users/widget-table-pic3.jpg"
                                                                alt="user" className="rounded-circle" width="45"
                                                                height="45" /></div>
                                                        <div className="">
                                                            <h5 className="text-dark mb-0 font-16 font-weight-medium">Julian
                                                                Josephs
                                                            </h5>
                                                            <span className="text-muted font-14">Josephs@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-muted px-2 py-4 font-14">MedicalPro WP Theme</td>
                                                <td className="px-2 py-4">
                                                    <div className="popover-icon">
                                                        <a className="btn btn-primary rounded-circle btn-circle font-12"
                                                            href="javascript:void(0)">DS</a>
                                                        <a className="btn btn-danger rounded-circle btn-circle font-12 popover-item"
                                                            href="javascript:void(0)">SS</a>
                                                        <a className="btn btn-cyan rounded-circle btn-circle font-12 popover-item"
                                                            href="javascript:void(0)">RP</a>
                                                        <a className="btn btn-success text-white rounded-circle btn-circle font-20"
                                                            href="javascript:void(0)">+</a>
                                                    </div>
                                                </td>
                                                <td className="text-center px-2 py-4"><i
                                                        className="fa fa-circle text-primary font-12" data-toggle="tooltip"
                                                        data-placement="top" title="Done"></i>
                                                </td>
                                                <td className="text-center text-muted font-weight-medium px-2 py-4">29</td>
                                                <td className="font-weight-medium text-dark px-2 py-4">$81K</td>
                                            </tr>
                                            <tr>
                                                <td className="px-2 py-4">
                                                    <div className="d-flex no-block align-items-center">
                                                        <div className="mr-3"><img
                                                                src="/src/content/backend/assets/images/users/widget-table-pic4.jpg"
                                                                alt="user" className="rounded-circle" width="45"
                                                                height="45" /></div>
                                                        <div className="">
                                                            <h5 className="text-dark mb-0 font-16 font-weight-medium">Jan
                                                                Petrovic
                                                            </h5>
                                                            <span className="text-muted font-14">hgover@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-muted px-2 py-4 font-14">Hosting Press HTML</td>
                                                <td className="px-2 py-4">
                                                    <div className="popover-icon">
                                                        <a className="btn btn-primary rounded-circle btn-circle font-12"
                                                            href="javascript:void(0)">DS</a>
                                                        <a className="btn btn-success text-white font-20 rounded-circle btn-circle"
                                                            href="javascript:void(0)">+</a>
                                                    </div>
                                                </td>
                                                <td className="text-center px-2 py-4"><i
                                                        className="fa fa-circle text-danger font-12" data-toggle="tooltip"
                                                        data-placement="top" title="In Progress"></i></td>
                                                <td className="text-center text-muted font-weight-medium px-2 py-4">23</td>
                                                <td className="font-weight-medium text-dark px-2 py-4">$80K</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </section>
    )
}