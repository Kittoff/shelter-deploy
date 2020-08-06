import React from 'react';
import icons from './data/data'

function Help() {
    return (
        <section className="section-help" id="help">
            <div className="l-container">
                <div className="section-friends">
                    <div className="section-help-title">
                        <h1>Than you can help our shelter</h1>
                    </div>
                    <div className="section-help-icons">
                        {icons.map(({ name, url, id, description }) =>
                            <div className="section-help-icon"> <img key={id} src={url} title={name} /><br />
                                {description} </div>)}

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Help;
