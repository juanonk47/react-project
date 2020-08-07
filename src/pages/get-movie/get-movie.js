import React from "react";
import "./get-movie.scss";
import { TextBox, Button as TextBoxButton } from "devextreme-react/text-box";
import { Box, Item } from "devextreme-react/box";
import swal from "sweetalert";

class GetMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      width: 370,
      height: 260,
      color: "#f05b41",
      border: false,
      API_KEY: "7756876",
      movie: {},
    };

    this.searchButton = {
      icon: "https://img.icons8.com/pastel-glyph/2x/search--v2.png",
      type: "default",
      onClick: () => {
        this.getMovie();
      },
    };

    this.handleTextChange = this.handleTextChange.bind(this);
  }
  render() {
    return (
      <React.Fragment>
        <div className={"content-block"}>
          <div className={"dx-card responsive-paddings"}>
            <div className="field">
              <div className="value">
                <TextBox
                  value={this.state.text}
                  onValueChanged={this.handleTextChange}
                  maxLength={40}
                  placeholder="Buscar pelicula por nombre"
                >
                  <TextBoxButton
                    name="search"
                    location="after"
                    options={this.searchButton}
                  />
                </TextBox>
              </div>
            </div>
          </div>
        </div>
        {this.state.movie.Poster && (
          <div className={"content-block"}>
            <div className={"dx-card responsive-paddings"}>
              <Box direction="row" width="100%" height="100%">
                <Item ratio={1}>
                  {this.state.movie.Poster !== "N/A" ? (
                    <img
                      className={"img-poster"}
                      src={this.state.movie.Poster}
                    />
                  ) : (
                    <img
                      className={"img-poster"}
                      src={"https://www.tryngo.ch/img/no-img.jpg"}
                    />
                  )}
                </Item>
                <Item ratio={2}>
                  <div className="form">
                    <div className="dx-fieldset">
                      <div className="dx-fieldset-header">
                        Datos de la pelicula
                      </div>
                      <div className="dx-field">
                        <div className="dx-field-label">Titulo</div>
                        <div className="dx-field-value-static">
                          {this.state.movie.Title}
                        </div>
                      </div>
                      <div className="dx-field">
                        <div className="dx-field-label">Descripcion</div>
                        <div className="dx-field-value-static">
                          {this.state.movie.Plot}
                        </div>
                      </div>
                      <div className="dx-field">
                        <div className="dx-field-label">Actores</div>
                        <div className="dx-field-value-static">
                          {this.state.movie.Actors}
                        </div>
                      </div>
                      <div className="dx-field">
                        <div className="dx-field-label">Director</div>
                        <div className="dx-field-value-static">
                          {this.state.movie.Director}
                        </div>
                      </div>
                      <div className="dx-field">
                        <div className="dx-field-label">Producida</div>
                        <div className="dx-field-value-static">
                          {this.state.movie.Production}
                        </div>
                      </div>
                    </div>
                  </div>
                </Item>
              </Box>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
  handleTextChange(e) {
    this.setState({
      text: e.value,
    });
    console.log(e);
  }
  getMovie() {
    fetch(
      `https://www.omdbapi.com/?apikey=${this.state.API_KEY}&t=${this.state.text}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Error) {
          swal("Pelicula no encontrada!", "Continua con otro nombre!", "error");
        }
        this.setState({
          movie: data,
          text: "",
        });
      });
  }
}

export default GetMovie;
