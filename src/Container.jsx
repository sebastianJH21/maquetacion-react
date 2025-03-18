import FigureTwo from './FigureTwo.jsx'
import FigureOne from './FigureOne.jsx'

function Container({ rotate }) {
    return (
        <div className={rotate ? 'container rotate' : 'container'}>
            <div>
                <FigureOne />
                <FigureTwo />
            </div>
            <div>
                <FigureTwo />
                <FigureOne />
            </div>
            <div>
                <FigureOne />
                <FigureTwo />
            </div>
        </div>
    )
}

export default Container