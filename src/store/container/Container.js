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
    recent: [],
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
    return (
      <Component {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.props.data} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
