// @ts-check

export const BreedsSelect = (/** @type {{ breeds: {}; images: any[]; onChange: import("react").ChangeEventHandler<HTMLSelectElement> | undefined; }} */ props) => {
  console.log(props.breeds)

  // @ts-ignore
  const listItem = Object.keys(props.breeds).map((list, index) => (
    <option key={index} value={list}>
      {list}
    </option>
    // @ts-ignore
  ));

  const listImage = props.images.map((image,index)=>(
    <li key={index}>
      <img src={image} alt={`Dog ${index}`}/>
    </li>
  ));

  return( 
  <div>
    <select onChange={props.onChange}>
      {listItem}
    </select>
    <ul>{listImage}</ul>
  </div>

  )
}

export default BreedsSelect
