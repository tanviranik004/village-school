import React from 'react';

const Courses = (props) => {
    const courses = props.courses;
    return (
        <div className="courses col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
            <div className="row">
                {
                    courses.map(course =>
                     
                        <div className="card col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" style={{width: '18rem'}}>
                           <h6 className="card-id">#{course.id}</h6>
                            <img src={course.img} className="card-img-top" alt="..."/>
                            <h4 className="card-title">{course.name}</h4>
                            <div className="card-body">
                                <p className="card-text">{course.author}</p>
                            </div>
                            <h5 className="card-title">${course.price}</h5>
          
                            <button onClick={() => props.handleEnrollNow(course)} className="btn btn-primary">Enroll-now</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Courses;