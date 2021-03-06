import React from 'react';

const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Academy Info</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Courses</a>
                    <a className="nav-link" href="#">Cart</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;