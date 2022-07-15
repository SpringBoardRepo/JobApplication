import { Button, Form, FormGroup } from "reactstrap";
import "./SearchInput.css";

function Search() {
  return (
    <Form inline>
      <FormGroup className="Searchinput">
        <input
          type="text"
          name="searchTerm"
          id="search"
          placeholder="Search Term..."
        />
      </FormGroup>
      <Button className="SearchButton" color="primary">
        Search
      </Button>
    </Form>
  );
}

export default Search;
