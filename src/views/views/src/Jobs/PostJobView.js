// import React, {Component} from 'react';
//
// class PostJobView extends Component{
//     constructor(){
//         super();
//         this.state = {
//             title: null,
//             company: null,
//             description: null,
//             location: null,
//             category: null
//         }
//     }
//     componentDidMount() {
//         fetch('https://localhost:5000/api/jobs/')
//             .then(res => res.text())
//             .then(res=> this.setState({message: res}))
//     }
//
//
//     render() {
//         return(
//             <div>
//                 <h1>Post job add</h1>
//                 <p>{this.state.message}</p>
//                 <input
//                     type="text"
//                     onChange={e => this.setState({ title: e.target.value })}
//                     placeholder="Title of the job"
//                     style={{ width: "200px" }}
//                 />
//                 <input
//                     type="text"
//                     onChange={e => this.setState({ company: e.target.value })}
//                     placeholder="Name of your company"
//                     style={{ width: "200px" }}
//                 />
//                 <input
//                     type="text"
//                     onChange={e => this.setState({ description: e.target.value })}
//                     placeholder="Description of the job"
//                     style={{ width: "200px" }}
//                 />
//                 <input
//                     type="text"
//                     onChange={e => this.setState({ location: e.target.value })}
//                     placeholder="Location of the job"
//                     style={{ width: "200px" }}
//                 />
//                 <input
//                     type="text"
//                     onChange={e => this.setState({ category: e.target.value })}
//                     placeholder="Job category"
//                     style={{ width: "200px" }}
//                 />
//                 <button onClick={() => this.props.postDataToDB(this.state.title,this.state.company, this.state.description, this.state.location, this.state.category )}>
//                     Submit
//                 </button>
//             </div>
//         )
//     }
// }
// export default PostJobView;
//
