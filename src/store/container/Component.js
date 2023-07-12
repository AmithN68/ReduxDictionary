import React, { PureComponent } from "react";
import logo from "../../images/dictionary1Logo.jpg";
import "./style.scss";

export class Component extends PureComponent {
  render() {
    const { data, recent, word, handleChange, handleSubmit } = this.props;
    console.log(data, recent, handleChange, handleSubmit);
    console.log(Array.isArray(data));
    return (
      <section className="navBlock">
        <article className="nav">
          <aside>
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div>
              <input
                type="search"
                name="Type_word"
                id=""
                placeholder="search the word"
                onChange={handleChange}
              />
              <button onClick={handleSubmit}>Search</button>
            </div>
          </aside>
        </article>
        <article className="main">
          <aside className="aside1">
            <div>
              {data?.length > 0 &&
                data.map((val, ind) => {
                  return (
                    <div key={ind}>
                      <h1>
                        Word : {val.word} {data.title}
                      </h1>
                      <div className="div">
                        {val.meanings.map((val, ind) => {
                          return (
                            <div key={ind}>
                              <h3>PartOfSpeech : {val.partOfSpeech}</h3>
                              <h4>
                                Definition : {val.definitions[0].definition}
                              </h4>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              {typeof data !== Array() && <h1>{data.title}</h1>}
            </div>
          </aside>
          <aside className="aside2">
            <h1>Recent</h1>
            {recent.map(val => {
              return (
                <div key={val}>
                  <h4>{val}</h4>
                </div>
              );
            })}
          </aside>
        </article>
      </section>
    );
  }
}

export default Component;
