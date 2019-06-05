// import React, {Component} from 'react';
// import {Link} from "react-router-dom";
//
// class LocationView extends Component{
//
//     render() {
//         return(
//             <div>
//                 <Link to ={"/login"}> <p>Login</p></Link>
//                 <Link to ={"/post"}><p>Post</p></Link>
//                 <h1>Job index</h1>
//                 <h3>List of jobs</h3>
//                 {this.props.jobs.map(el => {
//                     return <Link key={el._id} to={"/job/" + el._id}><p>Title: {el.title},<br></br>
//                         Description: {el.description},<br></br>
//                     </p></Link>
//                 })}
//                 <h3>List of locations</h3>
//                 {this.props.locations.map(el => {
//                     return <Link key={el._id} to={"/job/" + el._id}><p>Location: {el.name},<br></br>
//                     </p></Link>
//                 })}
//             </div>
//         )
//     }
// }
// export default LocationView;