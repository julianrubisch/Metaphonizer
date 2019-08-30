import React from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { useDropzone } from "react-dropzone";

import { addUnprocessedFiles } from "../actions";

const App = ({ addFiles, files }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: files => addFiles(files)
  });

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <p>Drag n drop some files here, or click to select files</p>
      </div>
      <aside>
        <h4>Files</h4>
        {/* <ul>{files}</ul> */}
        {files.map(file => (
          <li key={file.path}>
            {file.path} - {file.size} bytes
          </li>
        ))}
      </aside>
    </section>
  );
};

App.propTypes = {
  addFiles: PropTypes.func,
  files: PropTypes.array
};

export default connect(
  state => ({ files: state.files }),
  dispatch => {
    return {
      addFiles: files => dispatch(addUnprocessedFiles(files))
    };
  }
)(App);
