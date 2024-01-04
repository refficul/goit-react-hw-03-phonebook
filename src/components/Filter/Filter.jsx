import { Wrapper } from "./Filter.styled"

export const Filter = ({filter, filterchange}) => {
    return (
        <Wrapper>
      <label htmlFor="Filter">Find contacts by name</label>
      <input type="text" name="Filter" value={filter} onChange={filterchange} />
      </Wrapper>
    )
}