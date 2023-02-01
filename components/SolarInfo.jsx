import axios from "axios";
import { useEffect } from "react";

function SolarInfo() {

    useEffect(() =>{
        axios.get('')
        .then(res => console.log(res.data.bodies))
        .catch(err => console.log(err))
    }, [])
    return ( 
        <div id='info'>
            <h1>Solar System</h1>
            <h3>Sun</h3>
            <p>The Sun is a yellow dwarf star – a hot glowing ball of hydrogen and helium – at the center of our solar system. 
                It's about 93 million miles (150 million kilometers) from Earth and it's our solar system's only star.</p>
            <h3>Mercury</h3>
            <p>
            Mercury is the smallest planet in the Solar System and the closest to the Sun.
             Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets.
            </p>
            <h3>Venus</h3>
            <p>
            Venus is the second planet from the Sun. It is sometimes called Earth's "sister" or "twin" planet as it is almost as large and has a similar composition. 
            As an interior planet to Earth, Venus appears in Earth's sky never far from the Sun, either as morning star or evening star. 
            </p>
            <h3>Earth</h3>
            <p>
            Earth is the third planet from the Sun and home to all known life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. Approximately 70.8% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. 
            The remaining 29.2% of Earth's surface is land, consisting of continents and islands.
            </p>
            <h3>Mars</h3>
            <p>
            Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System,
             only being larger than Mercury. In the English language, Mars is named for the Roman god of war.
            </p>
            <h3>Jupiter</h3>
            <p>
            Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined,
             while being slightly less than one-thousandth the mass of the Sun.
            </p>
            <h3>Saturn</h3>
            <p>
            Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth.
             It has only one-eighth the average density of Earth, but is over 95 times more massive.
            </p>
            <h3>Uranus</h3>
            <p>
            Uranus is the seventh planet from the Sun. It is named after Greek sky deity Uranus, who in Greek mythology is the father of Cronus, a grandfather of Zeus and great-grandfather of Ares. 
            Uranus has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.
            </p>
            <h3>Neptune</h3>
            <p>
            Neptune is the eighth planet from the Sun and the farthest known planet in the Solar System. It is the fourth-largest planet in the Solar System by diameter, the third-most-massive planet, and the densest giant planet.
             It is 17 times the mass of Earth, and slightly more massive than its near-twin Uranus.
            </p>
            <h3>Pluto</h3>
            <p>
            Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is the ninth-largest and tenth-most-massive known object to directly orbit the Sun. 
            It is the largest known trans-Neptunian object by volume, by a small margin, but is slightly less massive than Eris.
            </p>

            
        </div>
     );
}

export default SolarInfo;