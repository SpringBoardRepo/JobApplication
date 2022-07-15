import { useState } from "react";
import { Button, Form, FormGroup } from "reactstrap";
import "./SearchInput.css";

function Search({ search }) {
  const [searchCompany, setSearchCompany] = useState({
    search: "",
  });
  function handleChange(evt) {
    const { name, value } = evt.target;
    setSearchCompany((data) => ({
      ...data,
      [name]: value,
    }));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    let data = searchCompany.search;
    search(data);
  }
  return (
    <Form inline onSubmit={handleSubmit}>
      <FormGroup className="Searchinput">
        <input
          type="text"
          name="search"
          value={searchCompany.search}
          id="search"
          placeholder="Search Term..."
          onChange={handleChange}
        />
      </FormGroup>
      <Button className="SearchButton" color="primary">
        Search
      </Button>
    </Form>
  );
}

export default Search;
