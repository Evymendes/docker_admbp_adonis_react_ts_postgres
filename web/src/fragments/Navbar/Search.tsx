
import React from "react"

export const Search = () => {
    return (
        <div className="search-form-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <div className="searchForm">
                            <form action="#" method="post">
                                <input type="search" name="search" id="search" placeholder="Enter keywords &amp; hit enter..." />
                                <button type="submit" className="d-none"></button>
                            </form>
                            <div className="close-icon" id="searchCloseIcon"><i className="fa fa-close" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}