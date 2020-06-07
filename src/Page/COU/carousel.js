// // import React from 'react'
// // import * as action from "../../redux/action/action"
// // import Slider from "react-slick";


// // function Carou() {

// //     // useEffect(() => {
// //     //     props.getMovie();
// //     // }, [])
// //     const renderHtml = () => {
// //         return props.carou.map((item,index))
// //     }
// //     const settings = {
// //         dots: true,
// //         infinite: true,
// //         speed: 500,
// //         slidesToShow: 1,
// //         slidesToScroll: 1
// //     };
// //     return (
// //         <div>
// //             <h2> Single Item</h2>
// //             <Slider {...settings}>
// //                 <div>
// //                     <h3>1</h3>
// //                 </div>
// //                 <div>
// //                     <h3>2</h3>
// //                 </div>
// //                 <div>
// //                     <h3>3</h3>
// //                 </div>
// //                 <div>
// //                     <h3>4</h3>
// //                 </div>
// //                 <div>
// //                     <h3>5</h3>
// //                 </div>
// //                 <div>
// //                     <h3>6</h3>
// //                 </div>
// //             </Slider>
// //         </div>
// //     )
// // }
// // const mapStateToProps = (state) => ({
// //     carou: state.movieReducer.carou
// // })

// // const mapDispatchToProps = dispatch => {
// //     return {
// //         getMovie: () => {
// //             dispatch(action.apiCarousel())
// //         }
// //     }
// // }
// // export default { connect }(mapStateToProps, mapDispatchToProps)(Carou)


// import React, { useState, useEffect } from 'react'
// import Axios from "axios"
// export default function Test() {
//     const [movie, setmovie] = useState()
//     const [keyword, setkeyword] = useState("")
//     useEffect(() => {
//         Axios({
//             method: "GET",
//             url: 'https://api.themoviedb.org/3/movie/top_rated?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US&page=1'
//         })
//             .then(res => {
//                 setmovie(res.data)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//     }, [])
//     console.log(movie)

//     const renderTable = () => {
//         // if (movie.results) {
//             return movie.results = movie.results.filter(item => item.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
//         // }
//         if (movie.results) {
//             return movie.results.map((item, index) => {
//                 return <tr key={index}>
//                     <td>{item.title}</td>



//                 </tr>
//             })
//         }
//     }



//     const handleChange = keyword => {
//         setkeyword(keyword)
//     }


//     return (
//         <div>
//             <form className="form-inline my-2 my-lg-0">
//                 <input onChange={event => {
//                     handleChange(event.target.value)
//                 }} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                 <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//             </form>
//             {renderTable()}
//         </div>
//     )
// }
