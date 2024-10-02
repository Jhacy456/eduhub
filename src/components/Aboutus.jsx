import pic from '../assets/images/pexels4.jpg'

const Aboutus = () => {
    return (
        <div className='about-us'>
            <div className='about-text'>
                <h1>About Us</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            </div>

            <div className='about-img-container'>
                <div className='about-img'>
                    <img src={pic} alt="" />
                </div>
            </div>



        </div>
    )



}

export default Aboutus;