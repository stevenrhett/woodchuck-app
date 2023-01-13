import React from 'react';

const TownMap = () => {
    return (
        <div>
            <div className="card lg:card-side bg-base-100 mt-2 shadow-lg">
                <figure>
                    <div dangerouslySetInnerHTML={{
                        __html: "" +
                            "<iframe src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d379628.9693665327!2d-71.0044182!3d41.9820018!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1673576391853!5m2!1sen!2sus' " +
                            "width=\"600\" " +
                            "height=\"450\" " +
                            "style=\"border:0;\" " +
                            "allowFullScreen=\"\" " +
                            "loading=\"lazy\" " +
                            "referrerPolicy=\"no-referrer-when-downgrade\" />"
                    }}/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">If your on this map you are in luck!</h2>
                    <p className="card-text"></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Call Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TownMap;