import React from 'react';

const Courses = (props) => {
    const courses = props.courses;
    return (
        <div className="courses col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
            <div className="row">
                {
                    courses.map(crs => 
                        <div className="card col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" style={{width: '18rem'}}>
                            <img src={crs.img} className="card-img-top" alt="..."/>
                            <h4 className="card-title">{crs.name}</h4>
                            <div className="card-body">
                                <p className="card-text">{crs.trainer}</p>
                            </div>
                            <h5 className="card-title">${crs.price}</h5>
                            <button onClick={() => props.handleEnrollNow(crs)} className="btn btn-primary">Enroll now</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;