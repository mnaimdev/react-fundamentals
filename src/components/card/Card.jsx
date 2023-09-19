
import './Card.css';

const Card = ({title, desc}) => {
    return (
        <div className='container'>
            <div className="card">
                <div className="card-header">
                    <h3>User Login</h3>
                </div>
                <div className="card-body">
                    <input type="text" className="form-control" placeholder="Your Name" value={title}/>

                    <input type="text" className="form-control" placeholder="Your Profession" value={desc}/>

                    <button className="btn-custom">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Card;