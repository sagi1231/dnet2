import styled from "styled-components";

const FormStyle = styled.form`
  input {
    width: 100%;
    border-radius: 12px;
    height: 50px;
    border: 1px solid #e6e6e6;
    margin-top: 10px;
    padding: 20px;
    color: #0a2540;
    font-size: 12px;
    letter-spacing: -0.36px;
  }

  .p-dropdown.p-component.p-inputwrapper {
    width: 100%;
    border-radius: 13px !important;
    height: 60px;
    border-color: #e6e6e6 !important;
    margin-top: 5px;

    span {
      margin-top: 8px;
      font-size: 14px;
    }
  }

  input::placeholder {
    font-size: 12px;
    color: #c0c8d0;
    letter-spacing: -0.36px;
  }

  fieldset {
    border-color: #e6e6e6 !important;
    border-width: 1px !important;
  }

  input:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: none;
    border-color: #d6d6d6;
  }

  input:hover {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: none;
    border-color: #d6d6d6 !important;
  }

  input[readonly] {
    background: rgb(248 248 248);
    border-radius: 13px;
  }

  label {
    color: #425466;
    font-family: Inter;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.36px;
    text-transform: capitalize;
  }

  label.MuiFormLabel-root.Mui-focused {
    color: #140a18 !important;
    font-weight: 400;
  }

  .MuiInputBase-formControl {
    border-radius: 13px !important;
  }

  .card-subtitle {
    margin-left: 0.5rem;
  }
`;

export default FormStyle;
