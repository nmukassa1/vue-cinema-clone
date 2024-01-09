import CinemaFinderVenueSelectorBox from './CinemaFinderVenueSelectorBox';

function CinemaFinder({placeholder, setPlaceholder}) {
    

    return ( 
        <div className='cinema-finder container'>
            <h2 className='section-title'>
                SEE WHAT'S ON AT
            </h2>

            <CinemaFinderVenueSelectorBox placeholder={placeholder} setPlaceholder={setPlaceholder} />
            
        </div>
    );
}

export default CinemaFinder;