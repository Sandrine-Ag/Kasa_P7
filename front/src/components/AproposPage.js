import Dropdrown from "./Dropdown";
import { InfoApropos } from "../JSON/InfoApropos";

function AproposPage() {
    return (
        <div className='aproposPage'>{InfoApropos.map(({titre, texte}) => (
            <Dropdrown 
            type="apropos"
            titre={titre}
            texte={texte}
            key={titre}
            />
        ))}
        </div>
      );
    
}

export default AproposPage;