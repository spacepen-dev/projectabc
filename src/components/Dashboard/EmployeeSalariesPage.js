import React from "react";
import { heading, Data } from "./utils/data";
import { Container, Form, Button } from "react-bootstrap";
import EsalariesTable from "./EsalariesTable";
import ModalPayEmployee from "./ModalPayEmployee";
const EmployeeSalariesPage = () => {
  const [state, setState] = React.useState([]);
  const [modalState, setmodalState] = React.useState(false);
  function closeModal() {
    setmodalState(false);
  }
  return (
    <div>
      <div className="paySelect">
        <Form className="form">
          <Form.Group className="mb-3 " controlId="formSelect">
            <Form.Label>Month</Form.Label>
            <Form.Select size="sm">
              <option value="Jan">January</option>
              <option value="Feb">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="Sept">September</option>
              <option value="Oct">October</option>
              <option value="Nov">November</option>
              <option value="Dec">December</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSelect">
            <Form.Label>Year</Form.Label>
            <Form.Select size="sm">
              <option value="21">2021</option>
              <option value="22">2022</option>
              <option value="23">2023</option>
              <option value="24">2024</option>
              <option value="25">2025</option>
              <option value="26">2026</option>
              <option value="27">2027</option>
              <option value="28">2028</option>
              <option value="29">2029</option>
              <option value="30">2030</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mt-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Select all"
              checked={Data.filter((value) => value.select !== true).length < 1}
              onChange={(e) => {
                let checked = e.target.checked;
                setState(
                  Data.map((value) => {
                    value.select = checked;
                    return value;
                  })
                );
              }}
            />
          </Form.Group>
        </Form>
        <div className="pBtn">
          <Button
            variant="primary"
            type="submit"
            className="payBtn"
            onClick={function (e) {
              setmodalState(true);
            }}
          >
            Pay employees
          </Button>
        </div>
      </div>
      <div className=" mt-5">
        <EsalariesTable items={Data} setItems={setState} tableHead={heading} />
      </div>
      {modalState && <ModalPayEmployee close={closeModal} />}
    </div>
  );
};

export default EmployeeSalariesPage;
