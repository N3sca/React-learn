import profilePic from './assets/img.jpg'

function Card(){

        return(
            <>
                <div className="card">
                    <img src={profilePic} alt="Profile picture" />
                    <h2>Gaspar Lopes</h2>
                    <p>This is very funny. Im learning all this</p>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/150" alt="Profile picture" />
                    <h2>Gaspar Lopes</h2>
                    <p>This is very funny. Im learning all this</p>
                </div>
            </>
        );

}

export default Card