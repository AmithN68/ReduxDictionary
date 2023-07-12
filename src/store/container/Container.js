import React, { PureComponent } from "react";
import "./style.scss";
import { connect } from "react-redux";
import { fetchFailure, fetchRequest, fetchSuccess } from "../fetchData";
import Component from "./Component";

const mapStateToProps = state => {
  return {
    loading: state.data.loading,
    data: state.data.data,
    error: state.data.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRequest: () => dispatch(fetchRequest()),
    fetchSuccess: data => dispatch(fetchSuccess(data)),
    fetchFailure: error => dispatch(fetchFailure(error)),
  };
};

class Container extends PureComponent {
  state = {
    word: "",
    // data:this.props.data,
    recent: [],
  };
  componentDidMount = () => {
    // this.fetchData();
  };
  fetchData = () => {
    const { fetchFailure, fetchRequest, fetchSuccess } = this.props;
    fetchRequest();
    const Type_word = this.state.word;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${Type_word}`)
      .then(res => res.json())
      .then(res => {
        fetchSuccess(res);
        this.setState({ recent: [...this.state.recent, Type_word] });
        localStorage.setItem("data", Type_word);
        const arr = [...window.localStorage.getItem("data")];
      })
      .catch(err => fetchFailure(err.message));
  };

  handleChange = e => {
    this.setState({ word: e.target.value });
  };
  handleSubmit = () => {
    this.fetchData();
  };
  render() {
    const { data } = this.props;
    const { recent } = this.state;
    return (
      // <section className="navBlock">
      //   <article className="nav">
      //     <aside>
      //       <div>
      //         <img src={logo} alt="logo" />
      //       </div>
      //       <div>
      //         <input
      //           type="search"
      //           name="Type_word"
      //           id=""
      //           placeholder="search the word"
      //           onChange={this.handleChange}
      //         />
      //         <button onClick={this.handleSubmit}>Search</button>
      //       </div>
      //     </aside>
      //   </article>
      //   <article className="main">
      //     <aside className="aside1">
      //       <div>
      //         {data.map((val, ind) => {
      //           return (
      //             <div key={ind}>
      //               <h1>Word : {val.word}</h1>
      //               <div className="div">
      //                 {val.meanings.map((val, ind) => {
      //                   return (
      //                     <div key={ind}>
      //                       <h3>PartOfSpeech : {val.partOfSpeech}</h3>
      //                       <h4>
      //                         Definition : {val.definitions[0].definition}
      //                       </h4>
      //                     </div>
      //                   );
      //                 })}
      //               </div>
      //             </div>
      //           );
      //         })}
      //       </div>
      //     </aside>
      //     <aside className="aside2">
      //       <h1>Recent</h1>
      //       {recent.map(val => {
      //         return (
      //           <div key={val}>
      //             <h4>{val}</h4>
      //           </div>
      //         );
      //       })}
      //     </aside>
      //   </article>
      // </section>
      <Component {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.props.data} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
