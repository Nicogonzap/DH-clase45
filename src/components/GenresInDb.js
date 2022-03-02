import React,{Component} from 'react';
import Genre  from './Genre';

let genres = [
    {genre: 'Acción'},
    {genre: 'Animación'},
    {genre: 'Aventura'},
    {genre: 'Ciencia Ficción'},
    {genre: 'Comedia'},
    {genre: 'Documental'},
    {genre: 'Drama'},
    {genre: 'Fantasia'},
    {genre: 'Infantiles'},
    {genre: 'Musical'}
]

class GenresInDb extends Component{
    constructor() {
        super();
        this.state = {
            genresList: []
        };
    };
    componentDidMount(){
        fetch('http://localhost:3001/api/genres')
        .then(rtaDB => rtaDB.json())
        .then(genres => {
            //actualizamos el state QUE YA DEFINIMOS con los valores de la lista de genres
            this.setState( {genresList:genres.data} );
        })
        .catch(e => console.log(e))
    }
    changeBG() {

        const bkToApply = "bg-secondary"
        let divToChange = document.querySelector('#cardBody')
        if(divToChange.classList.contains(bkToApply)) {
            divToChange.classList.remove(bkToApply)
        }else {
            divToChange.classList.add(bkToApply)
        }
    }

    render () {
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800" onMouseOver={this.changeBG}>Genres in Data Base</h6>
                            </div>
                            <div className="card-body" id='cardBody'>
                                <div className="row">
                                    {
                                        this.state.genresList.map((genre,index)=>{
                                            //siempre el primer atributo van a ser las props
                                            return  <Genre  genre={genre.name}  key={index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
            </React.Fragment>
        );      
    };
           
        

}
export default GenresInDb;