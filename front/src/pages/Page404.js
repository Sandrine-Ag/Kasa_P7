import React from "react";
import { Link } from "react-router-dom";
function Page404 () {
    return (
        <div className="404">
            <div className="page404">
                <h1>404</h1>
                    <p>
                        <span>Oups! La page que</span>vous demandez n'existe pas.
                    </p>
            </div>
            <Link to ="/" className="linkt">
                Retournez sur la page d'accueil
            </Link>
        </div>
    )
}

export default Page404;